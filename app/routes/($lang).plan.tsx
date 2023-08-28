import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";

import logo from "~/images/logo.png";
import stylesheet from "~/styles/plan.css";
import { getTitle } from "~/utils";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = (x) => {
  const { menu, greeting } = getTitle(x.params?.lang || "en");
  return [
    { title: menu.plan },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: menu.plan,
    },
    {
      name: "description",
      content: greeting,
    },
    {
      name: "og:image",
      content: logo,
    },
  ];
};

export default function () {
  let { t } = useTranslation("plan");
  return (
    <div>
      <div className="hero">
        <div className="text container mx-auto text-center">{t("hero.0")}</div>
        <div className="text container mx-auto text-center">{t("hero.1")}</div>
      </div>
      <div className="section">
        <div className="title">{t("step1.title")}</div>
        <div className="desc my-6 text-xl">{t("step1.text")}</div>
        <h1 className="title-block">
          <div className="title">{t("objectives.0.title")}</div>
          <div className="sub-title">
            {t("objectives.0.text.0")}
            <span>|</span>
            {t("objectives.0.text.1")}
            <span>|</span>
            {t("objectives.0.text.2")}
          </div>
        </h1>
        <div
          className="flex items-start whitespace-nowrap rounded-lg border border-red-200"
          id="table1"
        >
          <table cellPadding={4} className="text-right">
            <thead>
              <tr>
                <th className="bg-red-50">　</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4">{t("table.medicine")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.timeliness")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.potency")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.sideEffects")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.administration")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.cost")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.preference")}</td>
              </tr>
            </tbody>
          </table>
          <div className="overflow-x-auto overflow-y-hidden">
            <table cellPadding={4} className="w-full text-center">
              <thead>
                <tr className="bg-red-50">
                  <th>{t("table.symptomControllingDrugs")}</th>
                  <th>{t("table.4thGenerationProgesterone")}</th>
                  <th>{t("table.birthControlPills")}</th>
                  <th>{t("table.IUD")}</th>
                  <th>{t("table.gnRHAgonists")}</th>
                  <th>{t("table.androgen")}</th>
                  <th>{t("table.conservativeSurgery")}</th>
                  <th>{t("table.radicalSurgery")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("table.naproxen")}</td>
                  <td>{t("table.dienogest")}</td>
                  <td>{t("table.diane")}</td>
                  <td>{t("table.mirena")}</td>
                  <td>{t("table.leuprolide")}</td>
                  <td>{t("table.gestrinone")}</td>
                  <td>{t("table.adenomyomectomyNerveBlockEtc")}</td>
                  <td>{t("table.hysterectomy")}</td>
                </tr>
                <tr>
                  <td>{t("table.fastActing")}</td>
                  <td>{t("table.fastActing")}</td>
                  <td>{t("table.severalDays")}</td>
                  <td>{t("table.severalDays")}</td>
                  <td>{t("table.3weeks")}</td>
                  <td>{t("table.2weeks")}</td>
                  <td>{t("table.fastActing")}</td>
                  <td>{t("table.fastActing")}</td>
                </tr>
                <tr>
                  <td>{t("table.potent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.potent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                </tr>
                <tr>
                  <td>{t("table.minor")}</td>
                  <td>{t("table.moderate")}</td>
                  <td>{t("table.moderate")}</td>
                  <td>{t("table.moderate")}</td>
                  <td>{t("table.moderate")}</td>
                  <td>{t("table.moderateToSevere")}</td>
                  <td>{t("table.moderateToSevere")}</td>
                  <td>{t("table.moderateToSevere")}</td>
                </tr>
                <tr>
                  <td>{t("table.oralIntakeDailyDuringPeriod")}</td>
                  <td>{t("table.oralIntakeDaily")}</td>
                  <td>{t("table.oralIntakeDaily")}</td>
                  <td>{t("table.oneDeviceFor5Years")}</td>
                  <td>{t("table.injectionMonthTotalOf3-6Injections")}</td>
                  <td>{t("table.oralIntakeDaily")}</td>
                  <td>{t("table.microsurgeryOrConventionalSurgery")}</td>
                  <td>{t("table.microsurgeryOrConventionalSurgery")}</td>
                </tr>
                <tr>
                  <td>{t("table.coveredByHealthInsurance")}</td>
                  <td>{t("table.coveredByHealthInsurance")}</td>
                  <td>{t("table.coveredByHealthInsurance")}</td>
                  <td>{t("table.NT6000AndMorePerInjection")}</td>
                  <td>{t("table.NT6000AndMorePerInjection")}</td>
                  <td>{t("table.coveredByHealthInsurance")}</td>
                  <td>{t("table.usuallyNT10KandMore")}</td>
                  <td>{t("table.usuallyNT10KandMore")}</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h1 className="title-block">
          <div className="title">{t("objectives.1.title")}</div>
          <div className="sub-title">
            {t("objectives.1.text.0")}
            <span>|</span>
            {t("objectives.1.text.1")}
            <span>|</span>
            {t("objectives.1.text.2")}
          </div>
        </h1>
        <div
          className="flex items-start whitespace-nowrap rounded-lg border border-red-200"
          id="table2"
        >
          <table cellPadding={4} className="text-right">
            <thead>
              <tr>
                <th className="bg-red-50">　</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4">{t("table.medicine")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.timeliness")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.potency")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.sideEffects")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.administration")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.cost")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.preference")}</td>
              </tr>
            </tbody>
          </table>
          <div className="overflow-x-auto overflow-y-hidden">
            <table cellPadding={4} className="w-full text-center">
              <thead>
                <tr className="bg-red-50">
                  <th>{t("table.symptomControllingDrugs")}</th>
                  <th>{t("table.4thGenerationProgesterone")}</th>
                  <th>{t("table.birthControlPills")}</th>
                  <th>{t("table.IUD")}</th>
                  <th>{t("table.gnRHAgonists")}</th>
                  <th>{t("table.androgen")}</th>
                  <th>{t("table.conservativeSurgery")}</th>
                  <th>{t("table.radicalSurgery")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t("table.transamine")}</td>
                  <td>{t("table.dienogest")}</td>
                  <td>{t("table.diane")}</td>
                  <td>{t("table.mirena")}</td>
                  <td>{t("table.leuprolide")}</td>
                  <td>{t("table.gestrinone")}</td>
                  <td>{t("table.adenomyomectomy")}</td>
                  <td>{t("table.hysterectomy")}</td>
                </tr>
                <tr>
                  <td>{t("table.fastActing")}</td>
                  <td>{t("table.6-9MonthsAndLonger")}</td>
                  <td>{t("table.severalDays")}</td>
                  <td>{t("table.6-9MonthsAndLonger")}</td>
                  <td>{t("table.3weeks")}</td>
                  <td>{t("table.2weeks")}</td>
                  <td>{t("table.fastActing")}</td>
                  <td>{t("table.fastActing")}</td>
                </tr>
                <tr>
                  <td>{t("table.potent")}</td>
                  <td>{t("table.potent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.potent")}</td>
                  <td>{t("table.potent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                </tr>
                <tr>
                  <td>{t("table.minor")}</td>
                  <td>{t("table.moderate")}</td>
                  <td>{t("table.moderate")}</td>
                  <td>{t("table.moderate")}</td>
                  <td>{t("table.moderate")}</td>
                  <td>{t("table.moderateToSevere")}</td>
                  <td>{t("table.moderateToSevere")}</td>
                  <td>{t("table.moderateToSevere")}</td>
                </tr>
                <tr>
                  <td>{t("table.oralIntakeDailyDuringPeriod")}</td>
                  <td>{t("table.oralIntakeDaily")}</td>
                  <td>{t("table.oralIntakeDaily")}</td>
                  <td>{t("table.oneDeviceFor5Years")}</td>
                  <td>{t("table.injectionMonthTotalOf3-6Injections")}</td>
                  <td>{t("table.oralIntakeDaily")}</td>
                  <td>{t("table.microsurgeryOrConventionalSurgery")}</td>
                  <td>{t("table.microsurgeryOrConventionalSurgery")}</td>
                </tr>
                <tr>
                  <td>{t("table.coveredByHealthInsurance")}</td>
                  <td>{t("table.coveredByHealthInsurance")}</td>
                  <td>{t("table.coveredByHealthInsurance")}</td>
                  <td>{t("table.coveredByHealthInsuranceIfHbLess10")}</td>
                  <td>{t("table.NT6000AndMorePerInjection")}</td>
                  <td>{t("table.coveredByHealthInsurance")}</td>
                  <td>{t("table.usuallyNT10KandMore")}</td>
                  <td>{t("table.usuallyNT10KandMore")}</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h1 className="title-block">
          <div className="title">{t("objectives.2.title")}</div>
          <div className="sub-title">
            {t("objectives.2.text.0")}
            <span>|</span>
            {t("objectives.2.text.1")}
            <span>|</span>
            {t("objectives.2.text.2")}
          </div>
        </h1>
        <div
          className="flex items-start whitespace-nowrap rounded-lg border border-red-200"
          id="table3"
        >
          <table cellPadding={4} className="text-right">
            <thead>
              <tr>
                <th className="bg-red-50">　</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4">{t("table.medicine")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.timeliness")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.potency")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.sideEffects")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.administration")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.cost")}</td>
              </tr>
              <tr>
                <td className="px-4">{t("table.preference")}</td>
              </tr>
            </tbody>
          </table>
          <div className="overflow-x-auto overflow-y-hidden">
            <table cellPadding={4} className="w-full text-center">
              <thead>
                <tr className="bg-red-50">
                  <th>{t("table.symptomControllingDrugs")}</th>
                  <th>{t("table.4thGenerationProgesterone")}</th>
                  <th>{t("table.birthControlPills")}</th>
                  <th>{t("table.IUD")}</th>
                  <th>{t("table.gnRHAgonists")}</th>
                  <th>{t("table.androgen")}</th>
                  <th>{t("table.conservativeSurgery")}</th>
                  <th>{t("table.radicalSurgery")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>-</td>
                  <td>{t("table.dienogest")}</td>
                  <td>{t("table.diane")}</td>
                  <td>-</td>
                  <td>{t("table.leuprolide")}</td>
                  <td>{t("table.gestrinone")}</td>
                  <td>{t("table.adenomyomectomyNerveBlockEtc")}</td>
                  <td>{t("table.hysterectomy")}</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>{t("table.fastActing")}</td>
                  <td>{t("table.fastActing")}</td>
                  <td>-</td>
                  <td>{t("table.3weeks")}</td>
                  <td>{t("table.2weeks")}</td>
                  <td>{t("table.fastActing")}</td>
                  <td>{t("table.fastActing")}</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.potent")}</td>
                  <td>-</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                  <td>{t("table.extremelyPotent")}</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>{t("table.moderate")}</td>
                  <td>{t("table.moderate")}</td>
                  <td>-</td>
                  <td>{t("table.moderate")}</td>
                  <td>{t("table.moderateToSevere")}</td>
                  <td>{t("table.moderateToSevere")}</td>
                  <td>{t("table.moderateToSevere")}</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>{t("table.oralIntakeDaily")}</td>
                  <td>{t("table.oralIntakeDaily")}</td>
                  <td>-</td>
                  <td>{t("table.injectionMonthTotalOf3-6Injections")}</td>
                  <td>{t("table.oralIntakeDaily")}</td>
                  <td>{t("table.microsurgeryOrConventionalSurgery")}</td>
                  <td>{t("table.microsurgeryOrConventionalSurgery")}</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>{t("table.coveredByHealthInsurance")}</td>
                  <td>{t("table.coveredByHealthInsurance")}</td>
                  <td>-</td>
                  <td>{t("table.NT6000AndMorePerInjection")}</td>
                  <td>{t("table.coveredByHealthInsurance")}</td>
                  <td>{t("table.usuallyNT10KandMore")}</td>
                  <td>{t("table.usuallyNT10KandMore")}</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>1</td>
                  <td>1</td>
                  <td>-</td>
                  <td>1</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h1 className="title-block">
          <div className="title">{t("objectives.3.title")}</div>
          <div className="sub-title">
            {t("objectives.3.text.0")}
            <span>|</span>
            {t("objectives.3.text.1")}
            <span>|</span>
            {t("objectives.3.text.2")}
          </div>
        </h1>
        <div className="title">{t("pregnant.title")}</div>
        <div className="desc my-6 text-xl">{t("pregnant.text")}</div>
        <ul className="text-xl [&>*+*]:mt-4 [&>*]:list-disc">
          <li>
            <span className="border-b-2 border-solid border-green-400">
              {t("pregnant.items.0")}
            </span>
          </li>
          <li>
            <span className="border-b-2 border-solid border-yellow-400">
              {t("pregnant.items.1")}
            </span>
          </li>
          <li>
            <span className="border-b-2 border-solid border-red-400">
              {t("pregnant.items.2")}
            </span>
          </li>
        </ul>
        <div className="title">{t("pregnant.b2w")}</div>
        <div className="desc my-6 text-xl">{t("pregnant.b2w-text")}</div>
      </div>
    </div>
  );
}
