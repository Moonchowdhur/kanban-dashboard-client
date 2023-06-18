import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
const Profile = () => {
  return (
    <div className="flex mx-7 mt-6  md:mt-0 md:mx-0 items-center gap-4">
      <div>
        <h2 className="text-sm">Anima Agrawal</h2>
        <p className="text-sm">U.P , India</p>
      </div>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=444&q=80"
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div>
        <IoIosArrowDropdown className="text-2xl" />
      </div>
    </div>
  );
};

export default Profile;
