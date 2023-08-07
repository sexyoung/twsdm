import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";

import stylesheet from "~/styles/plan.css";

import todo1 from "~/images/1.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "計畫自由選" }];

export default function () {
  return (
    <div>
      <div className="hero">
        <div className="text">超簡單三步驟</div>
        <div className="text">自我打造專屬治療方案</div>
      </div>
      <div className="section">
        <div className="title">步驟一：告訴我們您的主要困擾吧！</div>
        <div className="desc my-6 text-xl">
          在決定任何的治療前，我們須先了解您在3-6個月內是否有懷孕計畫，再考慮針對不同目的將治療分成3大類：
        </div>
        <h1 className="title-block">
          <div className="title">經痛</div>
          <div className="sub-title">
            睡得開心
            <span>|</span>
            快樂上班
            <span>|</span>
            家庭和諧
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
                <td className="px-4">代表藥物</td>
              </tr>
              <tr>
                <td className="px-4">奏效速度</td>
              </tr>
              <tr>
                <td className="px-4">效力</td>
              </tr>
              <tr>
                <td className="px-4">副作用</td>
              </tr>
              <tr>
                <td className="px-4">使用方式</td>
              </tr>
              <tr>
                <td className="px-4">價錢</td>
              </tr>
              <tr>
                <td className="px-4">推薦順序</td>
              </tr>
            </tbody>
          </table>
          <div className="overflow-x-auto overflow-y-hidden">
            <table cellPadding={4} className="w-full text-center">
              <thead>
                <tr className="bg-red-50">
                  <th>症狀控制藥</th>
                  <th>第四代黃體素</th>
                  <th>避孕藥</th>
                  <th>子宮內投藥避孕器</th>
                  <th>性腺激素釋放素促進劑</th>
                  <th>(類)雄性素</th>
                  <th>保守性手術</th>
                  <th>根除性手術</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Naproxen (能百鎮)</td>
                  <td>Dienogest (異位寧)</td>
                  <td>Diane (黛麗安)</td>
                  <td>Mirena (蜜蕊娜)</td>
                  <td>Leuprolide (柳培林)</td>
                  <td>Gestrinone (佑汝)</td>
                  <td>肌腺瘤切除、神經阻斷等</td>
                  <td>子宮切除</td>
                </tr>
                <tr>
                  <td>快</td>
                  <td>快</td>
                  <td>數天</td>
                  <td>數天</td>
                  <td>3週</td>
                  <td>2週</td>
                  <td>快</td>
                  <td>快</td>
                </tr>
                <tr>
                  <td>有效</td>
                  <td>極有效</td>
                  <td>極有效</td>
                  <td>極有效</td>
                  <td>極有效</td>
                  <td>極有效</td>
                  <td>有效</td>
                  <td>極有效</td>
                </tr>
                <tr>
                  <td>輕微</td>
                  <td>一般</td>
                  <td>一般</td>
                  <td>一般</td>
                  <td>一般</td>
                  <td>稍強</td>
                  <td>稍強</td>
                  <td>稍強</td>
                </tr>
                <tr>
                  <td>經期每天口服</td>
                  <td>每天口服</td>
                  <td>每天口服</td>
                  <td>放置一支持續5年</td>
                  <td>每月一針共3-6針</td>
                  <td>每天口服</td>
                  <td>微創或傳統手術</td>
                  <td>微創或傳統手術</td>
                </tr>
                <tr>
                  <td>健保</td>
                  <td>健保</td>
                  <td>健保</td>
                  <td>每支6000元以上</td>
                  <td>每針6000元以上</td>
                  <td>健保</td>
                  <td>通常萬元起跳</td>
                  <td>通常萬元起跳</td>
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
          <div className="title">異常出血</div>
          <div className="sub-title">
            兼顧生活
            <span>|</span>
            增加舒適
            <span>|</span>
            活動自如
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
                <td className="px-4">代表藥物</td>
              </tr>
              <tr>
                <td className="px-4">奏效速度</td>
              </tr>
              <tr>
                <td className="px-4">效力</td>
              </tr>
              <tr>
                <td className="px-4">副作用</td>
              </tr>
              <tr>
                <td className="px-4">使用方式</td>
              </tr>
              <tr>
                <td className="px-4">價錢</td>
              </tr>
              <tr>
                <td className="px-4">推薦順序</td>
              </tr>
            </tbody>
          </table>
          <div className="overflow-x-auto overflow-y-hidden">
            <table cellPadding={4} className="w-full text-center">
              <thead>
                <tr className="bg-red-50">
                  <th>症狀控制藥</th>
                  <th>第四代黃體素</th>
                  <th>避孕藥</th>
                  <th>子宮內投藥避孕器</th>
                  <th>性腺激素釋放素促進劑</th>
                  <th>(類)雄性素</th>
                  <th>保守性手術</th>
                  <th>根除性手術</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Transamine (斷血炎)</td>
                  <td>Dienogest (異位寧)</td>
                  <td>Diane (黛麗安)</td>
                  <td>Mirena (蜜蕊娜)</td>
                  <td>Leuprolide (柳培林)</td>
                  <td>Gestrinone (佑汝)</td>
                  <td>肌腺瘤切除</td>
                  <td>子宮切除</td>
                </tr>
                <tr>
                  <td>快</td>
                  <td>6-9個月以上</td>
                  <td>數天</td>
                  <td>6-9個月以上</td>
                  <td>3週</td>
                  <td>2週</td>
                  <td>快</td>
                  <td>快</td>
                </tr>
                <tr>
                  <td>有效</td>
                  <td>有效</td>
                  <td>極有效</td>
                  <td>極有效</td>
                  <td>極有效</td>
                  <td>有效</td>
                  <td>有效</td>
                  <td>極有效</td>
                </tr>
                <tr>
                  <td>輕微</td>
                  <td>一般</td>
                  <td>一般</td>
                  <td>一般</td>
                  <td>一般</td>
                  <td>稍強</td>
                  <td>稍強</td>
                  <td>稍強</td>
                </tr>
                <tr>
                  <td>經期每天口服</td>
                  <td>每天口服</td>
                  <td>每天口服</td>
                  <td>放置一支持續5年</td>
                  <td>每月一針共3-6針</td>
                  <td>每天口服</td>
                  <td>微創或傳統手術</td>
                  <td>微創或傳統手術</td>
                </tr>
                <tr>
                  <td>健保</td>
                  <td>健保</td>
                  <td>健保</td>
                  <td>血紅素&lt;10可健保</td>
                  <td>每針6000元以上</td>
                  <td>健保</td>
                  <td>通常萬元起跳</td>
                  <td>通常萬元起跳</td>
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
          <div className="title">巧克力囊腫</div>
          <div className="sub-title">
            預防復發
            <span>|</span>
            減少手術
            <span>|</span>
            降低癌症
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
                <td className="px-4">代表藥物</td>
              </tr>
              <tr>
                <td className="px-4">奏效速度</td>
              </tr>
              <tr>
                <td className="px-4">效力</td>
              </tr>
              <tr>
                <td className="px-4">副作用</td>
              </tr>
              <tr>
                <td className="px-4">使用方式</td>
              </tr>
              <tr>
                <td className="px-4">價錢</td>
              </tr>
              <tr>
                <td className="px-4">推薦順序</td>
              </tr>
            </tbody>
          </table>
          <div className="overflow-x-auto overflow-y-hidden">
            <table cellPadding={4} className="w-full text-center">
              <thead>
                <tr className="bg-red-50">
                  <th>症狀控制藥</th>
                  <th>第四代黃體素</th>
                  <th>避孕藥</th>
                  <th>子宮內投藥避孕器</th>
                  <th>性腺激素釋放素促進劑</th>
                  <th>(類)雄性素</th>
                  <th>保守性手術</th>
                  <th>根除性手術</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>-</td>
                  <td>Dienogest (異位寧)</td>
                  <td>Diane (黛麗安)</td>
                  <td>-</td>
                  <td>Leuprolide (柳培林)</td>
                  <td>Gestrinone (佑汝)</td>
                  <td>肌腺瘤切除、神經阻斷等</td>
                  <td>子宮切除</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>快</td>
                  <td>快</td>
                  <td>-</td>
                  <td>3週</td>
                  <td>2週</td>
                  <td>快</td>
                  <td>快</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>極有效</td>
                  <td>有效</td>
                  <td>-</td>
                  <td>極有效</td>
                  <td>極有效</td>
                  <td>極有效</td>
                  <td>極有效</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>一般</td>
                  <td>一般</td>
                  <td>-</td>
                  <td>一般</td>
                  <td>稍強</td>
                  <td>稍強</td>
                  <td>稍強</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>每天口服</td>
                  <td>每天口服</td>
                  <td>-</td>
                  <td>每月一針共3-6針</td>
                  <td>每天口服</td>
                  <td>微創或傳統手術</td>
                  <td>微創或傳統手術</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>健保</td>
                  <td>健保</td>
                  <td>-</td>
                  <td>每針6000元以上</td>
                  <td>健保</td>
                  <td>通常萬元起跳</td>
                  <td>通常萬元起跳</td>
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
          <div className="title">計畫懷孕</div>
          <div className="sub-title">
            卵巢功能
            <span>|</span>
            受孕能力
            <span>|</span>
            備孕計畫
          </div>
        </h1>
        <div className="my-10 text-center text-4xl font-bold text-red-500">
          @todo ↓ 這邊要用字取代圖
        </div>
        <img src={todo1} alt="todo" />
      </div>
    </div>
  );
}
