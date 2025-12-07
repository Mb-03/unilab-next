import { useState } from "react";
import { FaStar, FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const Review = () => {
  const [likeCount, setLikeCount] = useState(1);
  const [disLikeCount, setDislikeCount] = useState(2);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  return (
    <div className="max-w-[1440px] px-[90px] border-t border-[#D9D9D9] pt-[52px] pb-8 font-[latoRegular] max-md:px-5">
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex gap-1">
              <FaStar className="text-[#FFC000]" />
              <FaStar className="text-[#FFC000]" />
              <FaStar className="text-[#FFC000]" />
              <FaStar className="text-[#FFC000]" />
              <FaStar className="text-[#FFC000]" />
            </div>
            <div className="flex flex-col gap-1 ml-6">
              <span className="text-[#262626] text-sm font-[latoBold]">
                Its really amazin
              </span>
              <p className="text-[12px] text-[#9D9D9D]">By Sara mackanil</p>
            </div>
          </div>
          <div className="flex">
            <button
              className="px-3 py-1 flex items-center border border-[#D9D9D9] rounded-sm gap-1"
              onClick={() => {
                liked
                  ? setLikeCount((prev) => prev - 1)
                  : setLikeCount((prev) => prev + 1);
                setLiked((prev) => !prev);
              }}
            >
              <FaThumbsUp
                className={`${liked ? "text-green-400" : "text-gray-300"} `}
              />{" "}
              <p>{likeCount}</p>
            </button>
            <button
              className="px-3 py-1 flex items-center border border-[#D9D9D9] rounded-sm gap-1"
              onClick={() => {
                disliked
                  ? setDislikeCount((prev) => prev - 1)
                  : setDislikeCount((prev) => prev + 1);
                setDisliked((prev) => !prev);
              }}
            >
              <FaThumbsDown
                className={`${disliked ? "text-red-400" : "text-gray-300"} `}
              />{" "}
              <p>{disLikeCount}</p>
            </button>
          </div>
        </div>
        <div className="ml-[120px] flex flex-col mt-[33px] gap-4 max-md:ml-0">
          <div className="flex gap-[61px]">
            <p className="text-[#9D9D9D]">Advantages</p>
            <p className="text-[#262626]">Color Size</p>
          </div>
          <div className="flex gap-[42px]">
            <p className="text-[#9D9D9D]">Disadvantages</p>
            <p className="text-[#262626]">-</p>
          </div>
          <div className="flex gap-[91px]">
            <p className="text-[#9D9D9D]">Review</p>
            <p className="text-[#262626]">
              What sets 5 Star Cloth apart from other brands is their ability to
              create timeless pieces that never go out of style. Their designs
              are sophisticated and elegant, catering to individuals who
              appreciate refined fashion. Whether it's a formal event or a
              casual outing, their clothing effortlessly elevates any ensemble.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-[34px]">
        <img
          src="/top100Img.svg"
          alt="shopping dress"
          className="max-w-[75px] object-contain"
        />
        <img
          src="/top100Img.svg"
          alt="shopping dress"
          className="max-w-[75px] object-contain"
        />
      </div>
    </div>
  );
};

export default Review;
