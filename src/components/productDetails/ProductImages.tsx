"use client";

import { useState } from "react";

const ProductImages = ({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <img
          src={images[selectedImage]}
          alt={productName}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square overflow-hidden rounded-md ${
              selectedImage === index ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={image}
              alt={`${productName} ${index + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
