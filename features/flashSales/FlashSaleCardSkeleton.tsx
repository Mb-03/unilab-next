export const FlashSaleCardSkeleton = () => {
  return (
    <div className="w-[260px] border border-dashed rounded-xl p-4 flex flex-col items-center bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.1)] animate-pulse">
      <div className="h-5 w-28 bg-gray-200 rounded"></div>

      <div className="flex items-center gap-4 mt-3">
        <div className="flex flex-col items-center gap-1">
          <div className="h-6 w-6 bg-gray-200 rounded"></div>
          <div className="h-3 w-6 bg-gray-200 rounded"></div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="h-6 w-6 bg-gray-200 rounded"></div>
          <div className="h-3 w-6 bg-gray-200 rounded"></div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="h-6 w-6 bg-gray-200 rounded"></div>
          <div className="h-3 w-6 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="w-40 h-28 bg-gray-200 rounded mt-4"></div>

      <div className="h-5 w-32 bg-gray-200 rounded mt-4"></div>

      <div className="h-3 w-40 bg-gray-200 rounded mt-2"></div>

      <div className="flex items-center gap-2 mt-4">
        <div className="h-4 w-20 bg-gray-200 rounded"></div>
        <div className="h-4 w-8 bg-gray-200 rounded"></div>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <div className="h-5 w-16 bg-gray-200 rounded"></div>
        <div className="h-5 w-14 bg-gray-200 rounded"></div>
        <div className="h-5 w-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};
