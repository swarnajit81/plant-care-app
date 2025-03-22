"use client";

import PlantCard from "@/components/PlantCard";
import { useEffect } from "react";

export default function Home() {
  const showNotification = () => {
    new Notification("Test Notification", {
      body: "This is a test notification",
    });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     showNotification();
  //   } , 500)

  //   return () => clearInterval(interval)
  // } , [])

  return (
    <div className="w-full h-screen py-[4rem]  min-h-[400px]  relative">
      <div className="w-full h-full grid place-items-center">
        <PlantCard />
      </div>
    </div>
  );
}
