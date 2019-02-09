import React from "react";
import styles from "./Nutrients.css";

function Nutrients({ nutrients, ours }) {
  let protein = Math.round((nutrients[0] + 1.5) / (nutrients[2] / 10000));
  let fat = Math.round((nutrients[1] + 1) / (nutrients[2] / 10000));
  let carbs = Math.round((1000 - protein * 3.5 - fat * 8.5) / 3.5);

  return (
    <div>
      <ul>
        <li>
          Protein
          <div className={styles.numbers} id={ours ? styles.protein : ""}>
            {protein === Infinity ? 0 : protein}
          </div>
        </li>
        <li>
          Fat
          <div className={styles.numbers} id={ours ? styles.fat : ""}>
            {fat === Infinity ? 0 : fat}
          </div>
        </li>
        <li>
          Carbohydrate
          <div className={styles.numbers} id={ours ? styles.carb : ""}>
            {carbs < 0 ? 0 : carbs}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Nutrients;
