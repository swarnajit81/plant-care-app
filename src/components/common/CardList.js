import { MdOutlineWbSunny } from "react-icons/md";

export const CardList = ({ plant, setCurrentView }) => {
  return (
    <div
      onClick={() => setCurrentView("details")}
      className="cursor-pointer relative mt-[1rem] w-full h-full  flex flex-grow flex-col p-[1rem] text-white"
    >
      <div className="w-full z-0 h-[65%] rounded-2xl bg-gradient-to-r from-[#307a46] to-[#307a46]/90 absolute bottom-0 left-0"></div>
      <div className="w-full relative flex-grow mx-auto h-full">
        <img src={plant.img} className="w-full h-auto" alt="Peace Lily" />
      </div>
      <div className="relative">
        <div className="flex gap-[10px] items-center">
          <p className="text-md text-white">{plant.location}</p>
          <div className="w-[100px] h-[1px] bg-white"></div>
        </div>

        <h2 className="text-2xl">Snake Plant</h2>
        <div className="flex gap-[10px] items-center">
          <MdOutlineWbSunny size={14} className="text-amber-300" />
          <p className="text-md text-white">{plant.light}</p>
        </div>
      </div>
    </div>
  );
};