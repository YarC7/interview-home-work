import user from "../assets/user.png";
import bell from "../assets/bell.png";
import setting from "../assets/setting.png";
import menu from "../assets/menu.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7 border-2 border-black rounded-md ">
      {/* LEFT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <button className="px-3 py-3">
          <img src={menu} alt="avatar" className="mb-2 w-6 h-6" />
        </button>
      </div>
      <div className=" flex text-center text-3xl relative left-28 bg-slate-400 leading-loose p-4 border-2 border-gray-500">
        Blogs
      </div>
      {/* RIGHT SIDE */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={user}
              alt="avatar"
              className="mb-2 rounded-3xl w-10 h-10"
            />
            <span className="font-semibold">Cankkun</span>
          </div>
        </div>
        <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
        <div className="relative">
          <img src={bell} alt="avatar" className="mb-2 rounded-3xl w-10 h-10" />
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
            3
          </span>
        </div>
        <button className="px-3 py-3 ">
          <img
            src={setting}
            alt="avatar"
            className="mb-2 rounded-3xl w-8 h-8"
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
