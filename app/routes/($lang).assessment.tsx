import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import stylesheet from "~/styles/assessment.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: V2_MetaFunction = () => [{ title: "專業評估" }];

export default function () {
  return (
    <div>
      <div className="hero">
        <div>專業評估</div>
      </div>
      <div className="container mx-auto max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero
        obcaecati, omnis consectetur, autem placeat rerum inventore repudiandae
        veritatis optio ratione. Corrupti mollitia provident alias dolore
        facilis consequuntur asperiores blanditiis! Distinctio fugiat modi
        expedita ex consectetur delectus rem! Dicta quisquam odio et quae
        commodi, doloribus nesciunt autem totam eos iusto, numquam sit sed?
        Eveniet assumenda quibusdam cumque, consectetur labore minima? Ipsum
        facilis dignissimos libero accusantium tempora commodi vel omnis sed,
        quibusdam atque magni impedit ex saepe, amet voluptatum quasi!
        Aspernatur sunt quaerat debitis repellendus dolore laboriosam fugiat
        vero veritatis eligendi? Dicta laborum quasi excepturi facilis optio
        recusandae minus asperiores quo molestias, cumque repellat reiciendis
        dolorum dolores necessitatibus, est vitae neque nobis dolor voluptatibus
        ducimus officia quaerat a amet? Expedita, suscipit. Nostrum quis
        voluptates praesentium sapiente incidunt sunt officia magnam distinctio
        nemo animi repudiandae rem dicta sint modi, unde laboriosam? Ullam
        corrupti atque dolores quibusdam repellendus, provident adipisci
        doloremque a accusantium.
      </div>
    </div>
  );
}
