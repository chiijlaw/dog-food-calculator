import React from "react";

function Brand({ options, title, name, handleChange }) {
  const listOptions = options.map((opt, key) => {
    return (
      <option value={opt[0]} key={key}>
        {opt[1]}
      </option>
    );
  });

  return (
    <div>
      <h1>{title}</h1>
      <form>
        <label>
          {/* {title === "Our Brand" ? "Our recipes:" : "Other dog food brand:"} */}
          <select value={name} onChange={e => handleChange(e.target.value)}>
            <option defaultValue hidden>
              Choose Here
            </option>
            {listOptions}
          </select>
        </label>
      </form>
    </div>
  );
}

export default Brand;
