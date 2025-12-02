const SideBar = () => {
  return (
    <div className="font-[latoRegular]  items-center py-[18px] ">
      <div className="flex gap-4 mb-5 px-[26px]">
        <img src="/sideBarCategories.svg" alt="categories icon" />
        <h4 className="font-[latoBold]">All Categories</h4>
      </div>
      <div className="flex flex-col gap-3 relative  px-[26px]">
        <h3>BRAND</h3>
        <form>
          <input
            placeholder="Search"
            type="text"
            className="border border-[#D9D9D9] rounded-sm px-4 py-2 w-full"
          />
          <button className="flex items-center cursor-pointer" type="submit">
            <img
              src="/Search.svg"
              alt="Search icon "
              className=" absolute right-[30px] px-3 transform translate-y-[-100%]"
            />
          </button>
        </form>
      </div>
      <div className="flex flex-col mt-[28px] border-t border-[#D9D9D9] pt-[28px] px-[26px]">
        <h3 className="mb-6">MODEL</h3>
        <div className="flex flex-col gap-5">
          <div>
            <p>Model 2</p>
            <p></p>
          </div>
          <div>
            <p>Model 20</p>
            <p></p>
          </div>
          <div>
            <p>Model 4</p>
            <p></p>
          </div>
          <div>
            <p>Model 40</p>
            <p></p>
          </div>
          <div>
            <p>Model 10</p>
            <p></p>
          </div>
          <div>
            <p>Model 45</p>
            <p></p>
          </div>
          <div>
            <p>Model 26</p>
            <p></p>
          </div>
          <div>
            <p>Model 32</p>
            <p></p>
          </div>
          <div>
            <p>Model 28</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
