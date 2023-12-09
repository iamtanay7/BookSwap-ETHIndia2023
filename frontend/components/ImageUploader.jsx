import React, { useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";
import Header from "./Header";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");

  const uploadFile = async (file) => {
    // Push file to lighthouse node
    // Both file and folder are supported by upload function
    // Third parameter is for multiple files, if multiple files are to be uploaded at once make it true
    // Fourth parameter is the deal parameters, default null
    const output = await lighthouse.upload(
      file,
      "b27b1750.90d6a9e590a1433a829c86ac3e8dc860",
      false,
      null
    );
    console.log("File Status:", output);
    /*
      output:
        data: {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

    console.log(
      "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
    );

    const text = authorName;
    const apiKey = "b27b1750.90d6a9e590a1433a829c86ac3e8dc860";
    const name = title; //Optional

    const response = await lighthouse.uploadText(text, apiKey, name);

    console.log(response, "response");
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
      <Header />
      <div className="flex -mt-12 flex-col items-center justify-center h-screen">
        <input
          type="file"
          accept="image/*"
          // onChange={}
          onChange={(e) => uploadFile(e.target.files)}
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
          className="w-64 h-10 border text-gray-500 border-gray-300 rounded-md px-2 mb-4"
        />
        <input
          type="text"
          placeholder="Book Title Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-64 h-10 border text-gray-500 border-gray-300 rounded-md px-2"
        />
      </div>
    </>
  );
};

export default ImageUploader;

// return (
//   <div className="App">
//     <input onChange={(e) => uploadFile(e.target.files)} type="file" />
//   </div>
// );
