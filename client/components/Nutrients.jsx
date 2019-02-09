import React, { useState, useEffect } from "react";

function Nutrients({ nutrients }) {
  let protein = Math.round((nutrients[0] + 1.5) / (nutrients[2] / 10000));
  let fat = Math.round((nutrients[1] + 1) / (nutrients[2] / 10000));
  let carbs = Math.round((1000 - protein * 3.5 - fat * 8.5) / 3.5);

  return (
    <div>
      <ul>
        <li>
          Protein<div>{protein === Infinity ? 0 : protein}</div>
        </li>
        <li>
          Fat<div>{fat === Infinity ? 0 : fat}</div>
        </li>
        <li>
          Carbohydrate<div>{carbs < 0 ? 0 : carbs}</div>
        </li>
      </ul>
    </div>
  );
}

export default Nutrients;
