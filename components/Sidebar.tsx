import Image from "next/image";
import React from "react";

import Banner from "@/public/images/banner.jpg";
import ProfilePic from "./shared/ProfilePic";

const Sidebar = ({ user }: { user: any }) => {
  return (
    <div className="hidden md:block w-[20%] h-fit border border-gray-300 bg-white rounded-lg">
      <div className="flex relative flex-col items-center ">
        <div className="w-full h-16 overflow-hidden">
          {user && (
            <Image
              src={Banner}
              alt="user_pic"
              className="max-w-full rounded-md"
            />
          )}
        </div>
        <div className="absolute my-1 top-2 cursor-pointer">
          <ProfilePic src={user ? user?.imageUrl : Banner} />
        </div>

        <div className="border-b border-b-gray-300">
          <div className=" p-2 m-5 text-center  ">
            <h1 className="cursor-pointer underline text-lg font-semibold">
              {user ? `${user?.firstName} ${user.lastName}` : "John Doe"}
            </h1>
            <p className="text-xs">{user ? `${user.username}` : "john_doe"}</p>
          </div>
        </div>
        <div className="text-xs w-full">
          <div className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer">
            <p>Profile viewers : </p> <p className="ml-2 text-blue-500">234</p>
          </div>
          <div className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer">
            <p>Post impressions : </p> <p className="ml-2 text-blue-500">88</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
