
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

const ProfilePic = ({ src }: { src: string }) => {
  return (
    <div>
      <Avatar className=" w-20 h-18">
        <AvatarImage src={src} className="w-20" />
      </Avatar>
    </div>
  );
};

export default ProfilePic;
