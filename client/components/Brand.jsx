import React, { useState, useEffect } from "react";

// 'Purina ONE Beef & Brown Rice Entrée Classic Ground Wet Dog Food' 8,7,1155 > 82,69,35
// 'BLUE Chicken and Brown Rice Recipe Dry Dog Food' 24,14,3613 > 71,42,114
// Royal Canin Medium Digestive Care Dry Dog Food  23,16,3833 > 64,44,114
function Brand({ options, title }) {
  const [brand, setBrand] = useState("");

  const listOptions = options.map(option => {
    return <option value={option[0]}>{option[1]}</option>;
  });

  useEffect(() => {});

  return (
    <div>
      <h1>{title}</h1>
      <form>
        <label>
          {title === "Our Brand" ? "Our recipes:" : "Other dog food brand:"}
          <select value={brand} onChange={e => setBrand(e.target.value)}>
            {listOptions}
          </select>
        </label>
      </form>
    </div>
  );
}

export default Brand;
