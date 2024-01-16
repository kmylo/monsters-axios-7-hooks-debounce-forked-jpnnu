import React from "react";
import "./Card.styles.scss";
import { imgURL01, QSTR01 } from "../../utils/endpoint";

//functional component
export const Card = ({ monster, hidden = true, ...props }) => {
  const IMG_URL = `${imgURL01}${monster.id}?${QSTR01}`;
  return (
    <div className="card-container">
      <pre style={{ textAlign: "left" }} hidden={hidden}>
        <code>{JSON.stringify(monster, null, 2)}</code>
      </pre>
      {/* <p>{IMG_URL}</p> */}
      <img src={IMG_URL} alt="monster" loading="lazy" />
      <h2>{monster.name}</h2>
      {/* <p>{monster.email}</p> */}
    </div>
  );
};
