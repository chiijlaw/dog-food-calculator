import React, { useState } from "react";
import Brand from "./Brand.jsx";
import styles from "./Calculator.css";

function Calculator() {
  // [brand, description, nutrients]
  const otherBrands = [
    [
      "PurinaOne",
      "Purina ONE Beef & Brown Rice Entrée Classic Ground Wet Dog Food"
    ],
    ["BLUE", "BLUE Chicken and Brown Rice Recipe Dry Dog Food"],
    ["RoyalCanin", "Royal Canin Medium Digestive Care Dry Dog Food"]
  ];

  const ourRecipes = [
    ["Porkalicious Potluck", "Porkalicious Potluck"],
    ["Heartland Beef Mash", "Heartland Beef Mash"],
    ["Chicken Chow-Wow", "Chicken Chow-Wow"],
    ["Tasty Turkey Fare", "Tasty Turkey Fare"]
  ];

  return (
    <div>
      <Brand options={otherBrands} title="Other Brands" />
      <Brand options={ourRecipes} title="Our Brand" />
    </div>
  );
}

export default Calculator;
