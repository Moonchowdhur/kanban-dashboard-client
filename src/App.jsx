import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineMessage,
  AiFillSetting,
  AiOutlinePlusSquare,
  AiFillBulb,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { SiDocsdotrs } from "react-icons/si";
import { FaTasks, FaBowlingBall, FaLightbulb } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import Message from "./components/Message/Message";

const App = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn bg-orange-700 text-white drawer-button mt-5 lg:hidden"
          >
            Open Sidebar
          </label>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="overflow-y-scroll h-full">
            <ul className="menu p-4 w-80   bg-white shadow-lg shadow-fuchsia-200 border-violet-500 border-2 text-base-content">
              <h2 className="text-3xl flex gap-3 items-center font-bold">
                <SiDocsdotrs className="text-violet-400" /> Project M.{" "}
              </h2>
              {/* Sidebar content here */}
              <li className="mt-5">
                <Link className="text-xl font-medium">
                  <AiFillHome /> Home
                </Link>
              </li>
              <li className="">
                <Link className="text-xl font-medium">
                  <AiOutlineMessage /> Message
                </Link>
              </li>
              <li className="">
                <Link className="text-xl font-medium">
                  <FaTasks /> Tasks
                </Link>
              </li>
              <li className="">
                <Link className="text-xl font-medium">
                  <FiUsers /> Members
                </Link>
              </li>
              <li className="">
                <Link className="text-xl font-medium">
                  <AiFillSetting /> Settings
                </Link>
              </li>
              <div className="divider"></div>
              <h2 className="text-xl flex justify-between items-center ">
                My Projects{" "}
                <AiOutlinePlusSquare className="text-black text-xl rounded" />
              </h2>
              <li className="mt-5">
                <Link className="text-xl font-medium">
                  <FaBowlingBall className="text-green-300 text-xs" /> Mobile
                  App
                  <BsThreeDots />
                </Link>
              </li>
              <li className="">
                <Link className="text-xl font-medium">
                  <FaBowlingBall className="text-orange-300 text-xs" /> Website
                  Redesign
                </Link>
              </li>
              <li className="">
                <Link className="text-xl font-medium">
                  <FaBowlingBall className="text-violet-300 text-xs" /> Design
                  System
                </Link>
              </li>
              <li className="">
                <Link className="text-xl font-medium">
                  <FaBowlingBall className="text-blue-300 text-xs" /> Wireframes
                </Link>
              </li>
              <FaLightbulb className="text-4xl text-yellow-300 font-bold z-10 relative top-7 bg-orange-100   mx-auto" />
              <li className="bg-orange-100 rounded-lg text-center  mt-4 w-11/12 mx-auto">
                <h2 className="text-2xl  font-bold mx-auto ">Thoughts Time</h2>
                <p className="text-center mx-auto">
                  We don't have any notice for <br />
                  you, till then you can share <br />
                  your thoughts with your peers
                </p>

                <input
                  type="text"
                  name="message"
                  placeholder="Write a message"
                  id=""
                  className=" w-10/12 text-lg text-black  font-bold text-center m-3"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
