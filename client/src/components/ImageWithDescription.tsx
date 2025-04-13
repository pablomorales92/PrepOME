import React from "react";

interface ImageWithDescriptionProps {
  imageUrl: string;
  altText: string;
  description: string;
  quote?: string;
}

const ImageWithDescription: React.FC<ImageWithDescriptionProps> = ({
  imageUrl,
  altText,
  description,
  quote
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full md:w-1/3 rounded-2xl shadow-md object-cover"
      />
      <div className="text-base md:w-2/3">
        <p className="text-muted-foreground mb-4">{description}</p>
        {quote && <p className="text-muted-foreground mb-4">{quote}</p>}
      </div>
    </div>
  );
};

export default ImageWithDescription;
