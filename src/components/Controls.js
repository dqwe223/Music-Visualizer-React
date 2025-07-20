import React from "react";

export default function Controls({ onColorChange, onPatternChange }) {
  return (
    <div>
      <label>
        Color Scheme:
        <select onChange={e => onColorChange(e.target.value)}>
          <option value="rainbow">Rainbow</option>
          <option value="blue">Blue</option>
          <option value="custom">Custom</option>
        </select>
      </label>
      {/* Add more controls for patterns, styles, etc. */}
    </div>
  );
} 