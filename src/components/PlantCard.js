"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { CardList } from "./common/CardList";
import { CardDetails } from "./common/CardDetails";

const plant = {
  name: "Peace Lily",
  description:
    "This lily is known for its peaceful appearance and thrives in bright, indirect sunlight. Water it regularly and enjoy its elegant white blooms.",
  img: "/peace-lily-plant.png",
  light: "Bright indirect light",
  location: "Indoor",
};

const PlantCard = () => {
  const [currentView, setCurrentView] = useState("list");
  return (
    <div className="w-[400px]  shadow-outer flex flex-col text-black aspect-[3/4] bg-white rounded-2xl p-[2rem]">
      <h1 className="text-4xl font-semibold capitalize">My Plants</h1>
      {currentView === "list" ? (
        <CardList {...{ plant, setCurrentView }} />
      ) : (
        <CardDetails {...{ plant, setCurrentView }} />
      )}
    </div>
  );
};

export default PlantCard;
