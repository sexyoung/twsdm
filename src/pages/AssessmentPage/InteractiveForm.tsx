import { useTranslation } from "react-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import cx from "classnames";

import { calcProb, SickType, TimeType } from "@/utils/model.calc";
import woman from "@/images/woman.png";

// calcProb({
//   Adenomyosis: 0,
//   ChocolateCyst: 0,
//   Endometriosis: 1,
//   Age: 28,
//   BMI: 21.76,
//   Visanne: 1,
//   Danol: 0,
//   Diane35: 0,
//   Mirena: 0,
//   Lupron: 0,
//   Hemoglobin: 8.2,
//   CA125: 99,
// });

type FormData = {
  age: number;
  height: number;
  weight: number;
  hb?: number;
  ca125?: number;
  specialDisease: string;
  smoking: boolean;
  // 臨床診斷
  clinicalDiagnosis: 1 | 2 | 3;

  isVisanne: boolean;
  isDanol: boolean;
  isDiane35: boolean;
  isMirena: boolean;
  isLupron: boolean;
};

const SickNameMap: Record<SickType, string> = {
  RadicalSurgeryAcceptanceRate: "接受根除性手術率",
  BreastCancer: "乳癌",
  OvarianCancer: "卵巢癌",
  EndometrialCancer: "子宮內膜癌",
  CerebrovascularDisease: "腦血管疾病",
  ImprovementOfAnemia: "貧血改善率",
  ImprovementOfCA125: "腫瘤指數CA-125改善率",
} as const;

const ImprovementSick = ["ImprovementOfCA125", "ImprovementOfAnemia"];

const TimeNameMap: Record<TimeType, string> = {
  HalfYear: "半年",
  OneYear: "一年",
  FiveYear: "五年",
} as const;

type Result = {
  [key in SickType]?: {
    [time in TimeType]?: number;
  };
};

export const InteractiveForm = () => {
  const { t } = useTranslation("assessment");
  const [result, setResult] = useState<Result>({});
  const formMethod = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      // age: 28,
      // height: 160,
      // weight: 50,
      // ca125: 99,
      // hb: 8.2,
      // isVisanne: true,
      // clinicalDiagnosis: 3,
    },
  });

  const { register, watch, setValue } = formMethod;
  const formData = watch();

  const [
    clinicalDiagnosis,
    age,
    weight,
    height,
    isVisanne,
    isDanol,
    isDiane35,
    isMirena,
    isLupron,
    hb,
    ca125,
  ] = watch([
    "clinicalDiagnosis",
    "age",
    "weight",
    "height",
    "isVisanne",
    "isDanol",
    "isDiane35",
    "isMirena",
    "isLupron",
    "hb",
    "ca125",
  ]);

  useEffect(() => {
    setResult({});

    // 檢查必填欄位是否都有值
    const requiredFields = ["age", "height", "weight"];
    if (requiredFields.some((field) => !formData[field as keyof FormData]))
      return;

    // 檢查選填欄位的值是否合規（如果有填寫的話）
    if (hb && (isNaN(+hb) || +hb < 2.7 || +hb > 16.9)) return;
    if (ca125 && (isNaN(+ca125) || +ca125 < 1 || +ca125 > 9999)) return;

    const result: Result = {};

    // 計算邏輯保持不變
    Object.entries(
      calcProb({
        Adenomyosis: +clinicalDiagnosis === 1 ? 1 : 0,
        ChocolateCyst: +clinicalDiagnosis === 2 ? 1 : 0,
        Endometriosis: +clinicalDiagnosis === 3 ? 1 : 0,
        Age: +age,
        BMI: weight / (height / 100) ** 2,
        Visanne: isVisanne ? 1 : 0,
        Danol: isDanol ? 1 : 0,
        Diane35: isDiane35 ? 1 : 0,
        Mirena: isMirena ? 1 : 0,
        Lupron: isLupron ? 1 : 0,
        ...(hb ? { Hemoglobin: hb } : {}),
        ...(ca125 ? { CA125: ca125 } : {}),
      })
    ).forEach(([key, value]) => {
      const [sick, time] = key.split(".");
      result[sick as SickType] = {
        ...(result[sick as SickType] ?? {}),
        [time as TimeType]: value,
      };
    });

    setResult(result);
  }, [
    clinicalDiagnosis,
    age,
    weight,
    height,
    isVisanne,
    isDanol,
    isDiane35,
    isMirena,
    isLupron,
    hb,
    ca125,
  ]);

  const chartResult: {
    Chest: number[];
    Brain: number[];
    Uterus: number[];
  } = {
    Chest: [0, 0], // [good, bad]
    Brain: [0, 0], // [good, bad]
    Uterus: [0, 0], // [good, bad]
  };

  if (Object.keys(result).length !== 0) {
    const {
      BreastCancer: Chest,
      CerebrovascularDisease: Brain,
      ...Uterus
    } = JSON.parse(JSON.stringify(result));
    Object.entries(Chest).forEach(([time, value]) => {
      value = Math.min(value as number, 20);
      value = Math.max(value as number, -20);
      Chest[time] = ~~((((value as number) / 2) * 3) / 5) * 5;

      if (Chest[time] >= 0) {
        chartResult.Chest[1] += Math.abs(Chest[time]);
      } else {
        chartResult.Chest[0] += Math.abs(Chest[time]);
      }
    });

    Object.entries(Brain).forEach(([time, value]) => {
      value = Math.min(value as number, 20);
      value = Math.max(value as number, -20);
      Brain[time] = ~~((((value as number) / 2) * 3) / 5) * 5;

      if (Brain[time] >= 0) {
        chartResult.Brain[1] += Math.abs(Brain[time]);
      } else {
        chartResult.Brain[0] += Math.abs(Brain[time]);
      }
    });

    Object.entries(Uterus).forEach(([sick, value]) => {
      Object.entries(value ?? {}).forEach(([time, value]) => {
        value = Math.min(value, 20);
        value = Math.max(value, -20);
        Uterus[sick][time] = ~~(value / 4 / 5) * 5;
        if (ImprovementSick.includes(sick)) {
          Uterus[sick][time] = -Uterus[sick][time];
        }

        if (Uterus[sick][time] >= 0) {
          chartResult.Uterus[1] += Math.abs(Uterus[sick][time]);
        } else {
          chartResult.Uterus[0] += Math.abs(Uterus[sick][time]);
        }
      });
    });
  }

  console.log(chartResult);

  return (
    <FormProvider {...formMethod}>
      <form className="text-center mt-10 interactive-form max-w-5xl mx-auto">
        <h3 className="font-semibold text-2xl">{t("interactiveForm")}</h3>
        <div className="mx-auto block sm:flex">
          <div className="text-left [&>dl>dd]:w-full [&>dl+dl]:mt-2 w-full sm:w-max gap-2 p-2">
            <dl className="flex items-center gap-4">
              <dt className="question-text">您的年齡</dt>
              <dd>
                <input
                  type="tel"
                  placeholder="18 - 60"
                  className={`text-left text-field ${
                    formMethod.formState.errors.age ? "!border-red-500" : ""
                  }`}
                  {...register("age", {
                    required: "年齡為必填",
                    pattern: {
                      value: /^(1[8-9]|[2-5][0-9]|60)$/,
                      message: "請輸入18-60",
                    },
                  })}
                />
              </dd>
            </dl>
            <dl className="flex items-center gap-4">
              <dt className="question-text">您的身高</dt>
              <dd>
                <input
                  type="tel"
                  placeholder="100 - 200 (cm)"
                  className={`text-left text-field ${
                    formMethod.formState.errors.height ? "!border-red-500" : ""
                  }`}
                  {...register("height", {
                    required: "身高為必填",
                    pattern: {
                      value: /^(100|1[0-9]{2}|200)$/,
                      message: "請輸入100-200",
                    },
                  })}
                />
              </dd>
            </dl>
            <dl className="flex items-center gap-4">
              <dt className="question-text">您的體重</dt>
              <dd>
                <input
                  type="tel"
                  placeholder="20 - 160 (kg)"
                  className={`text-left text-field ${
                    formMethod.formState.errors.weight ? "!border-red-500" : ""
                  }`}
                  {...register("weight", {
                    required: "體重為必填",
                    pattern: {
                      value: /^(20|[2-9][0-9]|1[0-5][0-9]|160)$/,
                      message: "請輸入20-160",
                    },
                  })}
                />
              </dd>
            </dl>
            <dl className="flex items-center gap-4">
              <dt className="question-text">腫瘤指數</dt>
              <dd>
                <input
                  type="tel"
                  placeholder="(選填) 1 - 9999 CA-125(U/mL)"
                  className={`text-left text-field ${
                    formMethod.formState.errors.ca125 ? "!border-red-500" : ""
                  }`}
                  {...register("ca125", {
                    validate: {
                      range: (value) => {
                        if (!value) return true; // 允许空值
                        return (value >= 1 && value <= 9999) || "請輸入1-9999";
                      },
                    },
                  })}
                />
              </dd>
            </dl>
            <dl className="flex items-center gap-4">
              <dt className="question-text pl-4">血紅素</dt>
              <dd>
                <input
                  type="number"
                  placeholder="(選填) 2.7 - 16.9 (Hb, g/dL)"
                  className={`text-left text-field ${
                    formMethod.formState.errors.hb ? "!border-red-500" : ""
                  }`}
                  {...register("hb", {
                    validate: {
                      range: (value) => {
                        if (!value) return true; // 允许空值
                        return (
                          (value >= 2.7 && value <= 16.9) || "請輸入2.7-16.9"
                        );
                      },
                    },
                  })}
                />
              </dd>
            </dl>
            <dl className="flex items-center gap-4">
              <dt className="question-text">特殊疾病</dt>
              <dd>
                <input
                  type="text"
                  className="text-left text-field"
                  placeholder="(選填) 請填寫"
                  {...register("specialDisease")}
                />
              </dd>
            </dl>
            <dl className="flex items-center gap-4 col-span-12">
              <dt className="question-text">是否抽菸</dt>
              <dd>
                <div className="inline-flex gap-4 text-left">
                  <label className="whitespace-nowrap">
                    <input
                      className="mr-1"
                      type="radio"
                      value="1"
                      {...register("smoking")}
                    />
                    是
                  </label>
                  <label className="whitespace-nowrap">
                    <input
                      className="mr-1"
                      type="radio"
                      value="0"
                      {...register("smoking")}
                    />
                    否
                  </label>
                </div>
              </dd>
            </dl>
            <dl className="flex items-start gap-4 col-span-12">
              <dt className="question-text">診斷結果</dt>
              <dd>
                <ul className="gap-2 sm:gap-1 flex flex-row sm:flex-col">
                  {[
                    { value: 1, label: "巧克力囊腫" },
                    { value: 2, label: "子宮肌腺症" },
                    { value: 3, label: "都有/不確定" },
                  ].map((option) => (
                    <li key={option.value}>
                      <label className="flex items-center gap-1 cursor-pointer text-sm sm:text-base">
                        <input
                          type="checkbox"
                          checked={watch("clinicalDiagnosis") === +option.value}
                          onChange={(e) => {
                            const newValue = e.target.checked
                              ? option.value
                              : undefined;
                            setValue(
                              "clinicalDiagnosis",
                              +(newValue || 0) as 1 | 2 | 3
                            );
                          }}
                        />
                        <span>{option.label}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <dl className="flex items-start gap-4">
              <dt className="question-text">治療方式</dt>
              <dd>
                <ul className="sm:gap-0 gap-1 flex flex-col">
                  <li>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="checkbox" {...register("isVisanne")} />
                      異位寧
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="checkbox" {...register("isDanol")} />
                      達爾諾
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="checkbox" {...register("isDiane35")} />
                      黛麗安
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="checkbox" {...register("isMirena")} />
                      蜜蕊娜
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="checkbox" {...register("isLupron")} />
                      柳菩林
                    </label>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div className="hidden sm:block relative">
            <img src={woman} alt="woman" className="w-[200px] max-w-none" />
            <div
              className={`absolute translate-y-[-50%] translate-x-[-50%] left-[122px] top-[40px] w-12 aspect-square rounded-full transition-colors duration-300 bg-white/${chartResult.Brain[0]}`}
            />
            <div
              className={`absolute translate-y-[-50%] translate-x-[-50%] left-[122px] top-[40px] w-12 aspect-square rounded-full transition-colors duration-300 bg-orange-600/${chartResult.Brain[1]}`}
            />

            <div
              className={`absolute translate-y-[-50%] translate-x-[-50%] left-[122px] top-[140px] w-12 aspect-square rounded-full transition-colors duration-300 bg-white/${chartResult.Chest[0]}`}
            />
            <div
              className={`absolute translate-y-[-50%] translate-x-[-50%] left-[122px] top-[140px] w-12 aspect-square rounded-full transition-colors duration-300 bg-orange-600/${chartResult.Chest[1]}`}
            />
            <div
              className={`absolute translate-y-[-50%] translate-x-[-50%] left-[122px] top-[250px] w-12 aspect-square rounded-full transition-colors duration-300 bg-white/${chartResult.Uterus[0]}`}
            />
            <div
              className={`absolute translate-y-[-50%] translate-x-[-50%] left-[122px] top-[250px] w-12 aspect-square rounded-full transition-colors duration-300 bg-orange-600/${chartResult.Uterus[1]}`}
            />
          </div>
          <div className="text-left w-full sm:w-auto inline-flex flex-col sm:[&>*+*]:mt-4">
            {(isVisanne || isDanol || isDiane35 || isMirena || isLupron) &&
              Object.entries(result).map(([sick, value]) => (
                <div
                  key={sick}
                  className="flex-1 flex items-center sm:flex-row flex-col"
                >
                  <div className="bg-orange-100 py-1 sm:text-right text-center w-full sm:w-48 sm:mr-3 sm:rounded-md sm:pr-2 sm:relative sm:top-2">
                    {SickNameMap[sick as SickType]}
                  </div>
                  <div className="text-xs flex flex-col w-full sm:w-auto">
                    <div className="flex bg-white">
                      <div className="w-7 sm:w-5 h-4" />
                      <div className="relative flex-1 text-xs text-gray-400">
                        <div className="absolute left-[0%] scale-75 top-0 translate-x-[-0%]">
                          -20%
                        </div>
                        <div className="absolute left-[25%] scale-75 top-0 translate-x-[-25%]">
                          -10%
                        </div>
                        <div className="absolute left-[50%] scale-75 top-0 translate-x-[-50%]">
                          0%
                        </div>
                        <div className="absolute left-[75%] scale-75 top-0 translate-x-[-75%]">
                          10%
                        </div>
                        <div className="absolute left-[100%] scale-75 top-0 translate-x-[-100%]">
                          20%
                        </div>
                      </div>
                    </div>
                    {Object.entries(value ?? {}).map(([time, value]) => (
                      <div key={time} className="flex bg-white">
                        <div className="text-gray-500 pr-2 whitespace-nowrap">
                          {TimeNameMap[time as TimeType]}
                        </div>
                        <div className="w-full sm:min-w-52 relative overflow-hidden">
                          <div className="absolute left-[50%] top-0 w-px translate-x-[-50%] h-full bg-gray-200" />
                          {
                            <div
                              className={cx(
                                "absolute right-[50%] block top-[50%] translate-y-[-50%] h-[30%] transition-[width] duration-300",
                                ImprovementSick.includes(sick)
                                  ? "bg-orange-600"
                                  : "bg-orange-200"
                              )}
                              style={{
                                width: `${
                                  value < 0 ? Math.abs(value * 2.5) : 0
                                }%`,
                              }}
                            />
                          }
                          {
                            <div
                              className={cx(
                                "absolute left-[50%] block top-[50%] translate-y-[-50%] h-[30%] transition-[width] duration-300",
                                ImprovementSick.includes(sick)
                                  ? "bg-orange-200"
                                  : "bg-orange-600"
                              )}
                              style={{
                                width: `${value > 0 ? value * 2.5 : 0}%`,
                              }}
                            />
                          }
                          <div className="absolute left-[50%] translate-x-[-50%]">
                            {value}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
