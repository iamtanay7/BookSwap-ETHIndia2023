import React, { useState } from "react";
import Header from "./Header";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header></Header>
      <div className="flex -mt-12 flex-col items-center justify-center h-screen">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="hidden"
          id="fileInput"
        />
        <label htmlFor="fileInput" className="cursor-pointer">
          <div
            className="w-64 h-64 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center mb-4"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            ) : (
              <p className="text-gray-500">
                Click to upload or drag image here
              </p>
            )}
          </div>
        </label>
        <input
          type="text"
          placeholder="Book Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-64 h-10 border border-gray-300 rounded-md px-2 mb-4"
        />
        <input
          type="text"
          placeholder="Book Title Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-64 h-10 border border-gray-300 rounded-md px-2"
        />
      </div>
    </>
  );
};

export default ImageUploader;
