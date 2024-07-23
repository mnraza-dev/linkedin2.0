import {
  Bell,
  BriefcaseBusiness,
  HomeIcon,
  MessageCircleMore,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface NAVITEMS {
  src: string;
  icon: JSX.Element;
  text: string;
}
const navItems: NAVITEMS[] = [
  {
    src: "/",
    icon: <HomeIcon />,
    text: "Home",
  },
  {
    src: "/networks",
    icon: <Users />,
    text: "My Network",
  },
  {
    src: "/jobs",
    icon: <BriefcaseBusiness />,
    text: "Jobs",
  },
  {
    src: "/message",
    icon: <MessageCircleMore />,
    text: "Messaging",
  },
  {
    src: "/notification",
    icon: <Bell />,
    text: "Notifications",
  },
];

const NavItems = () => {
  return (
    <div className="flex gap-8">
      {navItems.map((navItem, index) => {
        return (
          <div
            key={index}
            className="flex flex-col  items-center cursor-pointer text-[#666]"
          >
            <span>{navItem.icon}</span>
            <Link href={navItem.src} >{navItem.text}</Link>
       
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
