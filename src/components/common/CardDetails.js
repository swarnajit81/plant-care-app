import { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";

export const CardDetails = ({ plant, setCurrentView }) => {
  const [frequency, setFrequency] = useState("1000"); // frequency in days
  const [notificationId, setNotificationId] = useState(null);

  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  const showNotification = () => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(`Time to water your ${plant.name}!`, {
        body: "Keep your plant happy and hydrated 🌱💧",
        icon: plant.img,
      });
    }
  };

  function formatMs(ms) {
    const totalSeconds = Math.floor(ms / 1000);

    if (totalSeconds < 60) {
      return `${totalSeconds}s`;
    } else {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return seconds > 0 ? `${minutes}m` : `${minutes}m`;
    }
  }

  const scheduleNotification = () => {
    if (notificationId) {
      clearInterval(notificationId);
    }

    const interval = frequency;

    const id = setInterval(() => {
      showNotification();
    }, interval);

    setNotificationId(id);
    alert(`Reminder set every ${formatMs(frequency)} to water ${plant.name}.`);
  };

  const frequencies = ["1000", "5000", "10000", "30000", "60000"];

  return (
    <div className="mt-[1rem]  w-full  flex flex-col flex-grow items-start gap-[1rem] text-black">
      <button
        onClick={() => {
          setCurrentView("list");
          if (notificationId) clearInterval(notificationId);
        }}
        className="flex items-center text-sm text-gray-500 hover:text-black transition-colors"
      >
        <IoMdArrowBack size={18} className="mr-1" />
        Back to list
      </button>

      <div className="w-full rounded-2xl overflow-hidden">
        <img
          src={plant.img}
          alt={plant.name}
          className="w-full h-auto object-cover"
        />
      </div>

      <h2 className="text-2xl font-semibold">{plant.name}</h2>

      <div className="flex items-center gap-[8px] text-gray-600">
        <MdOutlineWbSunny size={18} className="text-amber-400" />
        <span>{plant.light}</span>
      </div>

      <p className="text-sm text-gray-700">{plant.description}</p>

      <div className="mt-4 w-full flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">
          Set Watering Reminder (per day frequency):
        </label>
        <div className="flex gap-[5px] items-center">
          {frequencies.map((f , i) => (
            <div
            onClick={() => setFrequency(f)}
              key={i + "s"}
              className={`bg-amber ${
                f === frequency
                  ? "bg-amber-300 hover:bg-amber-400 "
                  : "bg-gray-100 hover:bg-gray-300"
              }  grid place-items-center  w-[40px] h-[40px] text-black rounded-full cursor-pointer`}
            >
              <p className="text-md">{formatMs(f)}</p>
            </div>
          ))}
        </div>
        <button
          onClick={scheduleNotification}
          className="mt-2 px-4 cursor-pointer py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Set Reminder
        </button>
      </div>

      <div className="mt-auto text-sm text-gray-500">
        Location: {plant.location}
      </div>
    </div>
  );
};