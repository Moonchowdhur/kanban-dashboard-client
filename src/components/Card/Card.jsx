import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiCommentDots } from "react-icons/bi";
import { ImFilesEmpty, ImGift } from "react-icons/im";

import ShortAvatar from "../ShortAvatar/ShortAvatar";
const Card = ({ eachcard, aboutp, title }) => {
  const { name, state, about, comments, files, id, img, option, color } =
    eachcard;
  return (
    <div className="gap-4 md:w-[270px] border shadow-lg rounded-lg m-6 bg-white p-4">
      <div className="flex items-center justify-between">
        <h2
          className={` rounded-lg p-2 ${
            color
              ? "bg-green-200 text-green-600"
              : "bg-orange-100 text-orange-400"
          }`}
        >
          {state}
        </h2>
        <BsThreeDots />
      </div>
      <div>
        <h2 className="font-bold text-xl my-3">{name}</h2>

        {option ? (
          <img
            src={img}
            className="w-[300px] p-2 rounded-2xl h-[150px]"
            alt=""
            srcset=""
          />
        ) : (
          <p className="text-xs ">{about}</p>
        )}
      </div>
      <div className="flex my-3 items-center justify-between ">
        <ShortAvatar></ShortAvatar>
        <p className="text-xs flex items-center  gap-2 ">
          <BiCommentDots /> {comments} comments{" "}
        </p>
        <p className="text-xs  flex items-center  gap-2 ">
          {" "}
          <ImFilesEmpty /> {files} files
        </p>
      </div>
    </div>
  );
};

export default Card;
