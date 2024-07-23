import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.svg";
import SearchInput from "./SearchInput";
import NavItems from "./NavItems";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
const Navbar = () => {
  return (
    <div className="fixe w-full bg-white z-50">
      <div className="h-14 mx-auto px-3 flex items-center justify-between max-w-5xl ">
        {/* Searchbar */}
        <div className="flex items-center gap-3">
          <Image src={logo} alt="linkedin" height={48} width={48} />
        <div className="md:block hidden">  <SearchInput /></div>
        </div>
        {/* Icons */}
        <div className="flex items-center gap-5 ">
          <div className="md:block hidden">
  
            <NavItems />
          </div>
          <div>
            <SignedOut>
              <Button variant={"secondary"} className="rounded-full">
                <SignInButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
