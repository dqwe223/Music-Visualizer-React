import React from "react";

export default function AudioUploader({ onAudioLoad }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onAudioLoad(url);
    }
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      {/* Add streaming/mic input options here */}
    </div>
  );
} 