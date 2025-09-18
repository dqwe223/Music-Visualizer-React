import React from "react";

export default function Controls({ onColorChange, onPatternChange, onMicToggle, micEnabled }) {
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
      <div style={{ marginTop: '1em' }}>
        <label>
          <input
            type="checkbox"
            checked={micEnabled}
            onChange={e => onMicToggle(e.target.checked)}
          />
          Use Microphone Input
        </label>
      </div>
    </div>
  );
}
