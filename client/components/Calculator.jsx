import React, { useState } from "react";
import Brand from "./Brand.jsx";
import Nutrients from "./Nutrients.jsx";
import styles from "./Calculator.css";

// nutrients: % protein (min.), % fat (min.), Caloric Density (kcal/kg)

function Calculator() {
  const [otherBrand, setOtherBrand] = useState("");
  const [ourBrand, setOurBrand] = useState("");

  const otherBrands = {
    PurinaOne: {
      desc: "Purina ONE Beef & Brown Rice Entrée Classic Ground Wet Dog Food",
      nutrients: [8, 7, 1155]
    },
    BLUE: {
      desc: "BLUE Chicken and Brown Rice Recipe Dry Dog Food",
      nutrients: [24, 14, 3613]
    },
    RoyalCanin: {
      desc: "Royal Canin Medium Digestive Care Dry Dog Food",
      nutrients: [23, 16, 3833]
    }
  };

  const ourRecipes = {
    "Porkalicious Potluck": {
      desc: "Porkalicious Potluck",
      nutrients: [8, 6, 1275]
    },
    "Heartland Beef Mash": {
      desc: "Heartland Beef Mash",
      nutrients: [10, 4.5, 1155]
    },
    "Chicken Chow-Wow": {
      desc: "Chicken Chow-Wow",
      nutrients: [8.5, 6, 1189]
    },
    "Tasty Turkey Fare": {
      desc: "Tasty Turkey Fare",
      nutrients: [10, 5, 1372]
    }
  };

  const createOptions = brands => {
    const options = [];
    for (let prop in brands) {
      options.push([prop, brands[prop].desc]);
    }
    return options;
  };

  const otherOptions = createOptions(otherBrands);
  const ourOptions = createOptions(ourRecipes);

  const otherNutrients = otherBrand
    ? otherBrands[otherBrand].nutrients
    : [0, 0, 0];

  const ourNutrients = ourBrand ? ourRecipes[ourBrand].nutrients : [0, 0, 0];

  return (
    <div className={styles.container}>
      <h1>Dog food comparison calculator</h1>
      <div className={styles.compare}>
        <div className={styles.side} id={styles.otherSide}>
          <Brand
            options={otherOptions}
            title="Other Brands"
            name={otherBrand}
            handleChange={setOtherBrand}
          />
          <Nutrients nutrients={otherNutrients} ours={false} />
        </div>
        <div className={styles.side} id={styles.ourSide}>
          <Brand
            options={ourOptions}
            title="Our Brand"
            name={ourBrand}
            handleChange={setOurBrand}
          />
          <Nutrients nutrients={ourNutrients} ours={true} />
        </div>
      </div>
      <div className={styles.fine}>
        Learn about <a href="#">the role of protein, fat, and carbs</a> in a
        dog's diet.
      </div>
      <p className={styles.fine}>
        * All units above are given in grams per 1000 calories (g/kcal).
      </p>
    </div>
  );
}

export default Calculator;
