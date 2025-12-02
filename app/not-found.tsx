"use client";

import { useParams } from "next/navigation";

export default function NotFound() {
  const params = useParams();

  return (
    <div className="w-full font-[latoRegular]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-around">
        <img src="/notFound.svg" alt="page not found" />
        <div className="rounded-lg border border-[#D9D9D9] p-5 flex flex-col gap-3 items-start">
          <h2 className="font-[latoBold] text-[16px] text-[#262626]">
            No results were found for searching "{params.search}".
          </h2>
          <div className="flex gap-1 text-[#555555]">
            <img src="/notFoundWarningIcon.svg" alt="warning icon" />
            <p>
              We recommend you to search different clear key words to get the
              best result.
            </p>
          </div>
          <div className="flex gap-1 text-[#555555]">
            <img src="/notFoundWarningIcon.svg" alt="warning icon" />
            <p>You can see the most related purchased products bellow.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
