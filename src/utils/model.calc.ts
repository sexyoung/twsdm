import { ModelTable1 } from "./model1.table";
import { ModelTable2 } from "./model2.table";

interface CalcProbParams {
  Adenomyosis: 0 | 1;
  ChocolateCyst: 0 | 1;
  Endometriosis: 0 | 1;
  Age: number;
  BMI: number; // 100 - 200cm, 20 - 160kg
  Visanne: 0 | 1;
  Danol: 0 | 1;
  Diane35: 0 | 1;
  Mirena: 0 | 1;
  Lupron: 0 | 1;
  Hemoglobin?: number; // 2.7 - 16.9
  CA125?: number; // 1 - 9999
}

export type SickType =
  | "RadicalSurgeryAcceptanceRate"
  | "BreastCancer"
  | "OvarianCancer"
  | "EndometrialCancer"
  | "CerebrovascularDisease"
  | "ImprovementOfAnemia"
  | "ImprovementOfCA125";

export type TimeType = "HalfYear" | "OneYear" | "FiveYear";

export interface CalcProbResult {
  "RadicalSurgeryAcceptanceRate.HalfYear"?: number;
  "BreastCancer.HalfYear"?: number;
  "OvarianCancer.HalfYear"?: number;
  "EndometrialCancer.HalfYear"?: number;
  "CerebrovascularDisease.HalfYear"?: number;
  "ImprovementOfAnemia.HalfYear"?: number;
  "ImprovementOfCA125.HalfYear"?: number;

  "RadicalSurgeryAcceptanceRate.OneYear"?: number;
  "BreastCancer.OneYear"?: number;
  "OvarianCancer.OneYear"?: number;
  "EndometrialCancer.OneYear"?: number;
  "CerebrovascularDisease.OneYear"?: number;
  "ImprovementOfAnemia.OneYear"?: number;
  "ImprovementOfCA125.OneYear"?: number;

  "RadicalSurgeryAcceptanceRate.FiveYear"?: number;
  "BreastCancer.FiveYear"?: number;
  "OvarianCancer.FiveYear"?: number;
  "EndometrialCancer.FiveYear"?: number;
  "CerebrovascularDisease.FiveYear"?: number;
  "ImprovementOfAnemia.FiveYear"?: number;
  "ImprovementOfCA125.FiveYear"?: number;
}

const H0Keys = ["Visanne", "Danol", "Diane35", "Mirena", "Lupron"];

export const calcProb = (data: CalcProbParams): CalcProbResult => {
  const probObject: CalcProbResult = {};
  const Model = data.Hemoglobin && data.CA125 ? ModelTable2 : ModelTable1;

  let H1 = 0;
  let H0 = 0;
  Object.entries(Model).forEach(([key, value]) => {
    const SickKey = key.split(".")[0] as SickType;
    const DataKey = key.split(".")[1] as keyof CalcProbParams | "Cons";
    const TimeKey = key.split(".")[2] as TimeType;
    if (DataKey !== "Cons") {
      H1 += value * (data[DataKey] || 0);
      H0 += value * (H0Keys.includes(DataKey) ? 0 : data[DataKey] || 0);
    } else {
      // console.log(key, value);
      H1 += value;
      H0 += value;
      const P1 = Math.exp(H1) / (1 + Math.exp(H1));
      const P0 = Math.exp(H0) / (1 + Math.exp(H0));

      // console.log(`${SickKey}.${TimeKey} H1`, H1);
      // console.log(`${SickKey}.${TimeKey} P1`, P1);
      // console.log(`${SickKey}.${TimeKey} H0`, H0);
      // console.log(`${SickKey}.${TimeKey} P0`, P0);
      // console.log(`${SickKey}.${TimeKey} P1 / P0`, +(P1 / P0).toFixed(2));
      probObject[`${SickKey}.${TimeKey}`] = +(
        (+(P1 / P0).toFixed(2) - 1) *
        100
      ).toFixed(2);
      H1 = 0;
      H0 = 0;
    }
  });

  return probObject;
};
