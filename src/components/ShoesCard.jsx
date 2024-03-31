import React from "react";

const ShoesCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2
    rounded-xl
        ${
          bigShoeImage === imgURL ? "border-coral-red" : "border-tramsparent"
        } cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick}
    >
      shoe card
    </div>
  );
};

export default ShoesCard;
