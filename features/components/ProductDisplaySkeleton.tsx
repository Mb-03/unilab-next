const ProductSkeletonGrid = () => {
  const skeletons = Array.from({ length: 9 });

  return (
    <div className="grid grid-cols-3 gap-x-[20px] gap-y-[32px] ">
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="bg-white shadow p-4 rounded animate-pulse min-w-[280px]"
        >
          <div className="bg-gray-200 h-40 w-full rounded mb-4" />
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-2">
              <div className="bg-gray-200 h-4 w-24 rounded" />
              <div className="bg-gray-200 h-3 w-32 rounded" />
            </div>
            <div className="bg-gray-200 h-5 w-5 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeletonGrid;
