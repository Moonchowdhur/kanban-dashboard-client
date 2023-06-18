import React, { useEffect, useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineCalendar,
  AiOutlineFilter,
} from "react-icons/ai";
import { FaBowlingBall } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsQuestionSquare, BsPencil } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { HiOutlineBars2 } from "react-icons/hi2";
import { TbGridDots } from "react-icons/tb";
import Profile from "../Profile/Profile";
import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [donee, setDonee] = useState([]);

  useEffect(() => {
    fetch("/todo.json")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  useEffect(() => {
    fetch("/onprogress.json")
      .then((res) => res.json())
      .then((data) => setProgress(data));
  }, []);

  useEffect(() => {
    fetch("/done.json")
      .then((res) => res.json())
      .then((data) => setDonee(data));
  }, []);

  console.log(donee);

  const handleDragEnd = (result) => {
    // Check if the item was dropped outside a droppable area
    if (!result.destination) {
      return;
    }

    // Reorder the items based on the drag and drop result
    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      // Reorder within the same droppable area
      if (source.droppableId === "todo") {
        const reorderedItems = Array.from(todo);
        const [reorderedItem] = reorderedItems.splice(source.index, 1);
        reorderedItems.splice(destination.index, 0, reorderedItem);
        setTodo(reorderedItems);
      } else if (source.droppableId === "progress") {
        const reorderedItems = Array.from(progress);
        const [reorderedItem] = reorderedItems.splice(source.index, 1);
        reorderedItems.splice(destination.index, 0, reorderedItem);
        setProgress(reorderedItems);
      } else if (source.droppableId === "done") {
        const reorderedItems = Array.from(donee);
        const [reorderedItem] = reorderedItems.splice(source.index, 1);
        reorderedItems.splice(destination.index, 0, reorderedItem);
        setDonee(reorderedItems);
      }
    } else {
      // Move the item between droppable areas
      if (
        source.droppableId === "todo" &&
        destination.droppableId === "progress"
      ) {
        const [movedItem] = todo.splice(source.index, 1);
        const newProgress = Array.from(progress);
        newProgress.splice(destination.index, 0, movedItem);
        setTodo(todo);
        setProgress(newProgress);
      } else if (
        source.droppableId === "progress" &&
        destination.droppableId === "todo"
      ) {
        const [movedItem] = progress.splice(source.index, 1);
        const newTodo = Array.from(todo);
        newTodo.splice(destination.index, 0, movedItem);
        setProgress(progress);
        setTodo(newTodo);
      } else if (
        source.droppableId === "progress" &&
        destination.droppableId === "done"
      ) {
        const [movedItem] = progress.splice(source.index, 1);
        const newDone = Array.from(donee);
        newDone.splice(destination.index, 0, movedItem);
        setProgress(progress);
        setDonee(newDone);
      } else if (
        source.droppableId === "done" &&
        destination.droppableId === "progress"
      ) {
        const [movedItem] = donee.splice(source.index, 1);
        const newProgress = Array.from(progress);
        newProgress.splice(destination.index, 0, movedItem);
        setDonee(donee);
        setProgress(newProgress);
      }
    }
  };

  return (
    <div className="w-full h-full p-2">
      <div className="md:flex justify-between gap-5">
        {/* search box */}
        <div className="bg-[#F6F1F1] mt-3   md:w-5/12 mx-4 p-2  flex gap-4 items-center">
          <AiOutlineSearch className="text-3xl" />
          <input
            type="text"
            placeholder="Search Anything..."
            className="input w-full max-w-xs"
          />
        </div>
        {/* icons */}
        <div className=" md:mx-0 flex mx-7 mt-6  md:mt-0  items-center gap-4">
          <AiOutlineCalendar className="text-2xl" />
          <BsQuestionSquare className="text-2xl" />
          <IoMdNotificationsOutline className="text-2xl" />
        </div>
        {/* profile */}
        <Profile></Profile>
      </div>
      <div className="md:flex  mt-8 items-center justify-between gap-4">
        {/* title name */}
        <div className="flex  items-center gap-4">
          {/* <div> */}
          <h2 className="text-5xl font-bold mx-4 my-3 md:my-0">Mobile App</h2>
          {/* </div> */}

          <BsPencil className="text-2xl bg-violet-500 text-white" />
          <ImAttachment className="text-2xl bg-violet-500 text-white" />
        </div>
        {/* profile invitation */}
        <div className="flex gap-3 items-center mx-4">
          <AiOutlinePlusSquare className="bg-violet-300 text-2xl rounded" />
          <h3 className="text-xl text-violet-400 font-medium">Invite</h3>
          <Avatar></Avatar>
        </div>
      </div>
      {/* third part */}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-3  gap-7  mx-4">
        {/*  */}
        <div className="flex gap-3 w-6/12 items-center">
          <div className="p-3 border flex gap-4  items-center  rounded-lg">
            <AiOutlineFilter className="text-xl" />
            <h2 className="text-xl">Filter</h2>
          </div>
          <div className="p-3 border flex gap-4  items-center rounded-lg">
            <AiOutlineCalendar className="text-xl" />
            <h2>Today</h2>
            <IoIosArrowDropdown className="text-2xl" />
          </div>
        </div>
        {/*  */}
        <div className="flex gap-3  items-center">
          <div className="p-3  flex gap-4  items-center rounded-lg">
            <div className=" border p-3 flex gap-4  items-center rounded-lg">
              <FiUsers className="text-xl text-black" />
              <h2 className="text-xl "> Share </h2>
            </div>

            <p className="text-3xl">| </p>
            <HiOutlineBars2 className="text-2xl bg-violet-500 text-white font-bold" />
            <TbGridDots className="text-2xl text-black" />
          </div>
        </div>
      </div>
      {/* card */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="md:flex gap-5">
          {/* todo */}
          <div className="bg-[#EEEEEE] rounded-xl gap-4">
            <div className="flex my-4 mx-3 items-center justify-between">
              <div className="flex items-center mt-4 md:mt-0 gap-4">
                <FaBowlingBall className="text-blue-300 text-xs" />
                <h2 className="font-bold ">To Do</h2>
                <p className="px-2 py-1 w-7 h-7 bg-slate-200 rounded-full">4</p>
              </div>
              <AiOutlinePlusSquare className="text-violet-700 bg-violet-300 text-xl rounded" />
            </div>
            <div className="w-full my-4 border-2 border-violet-500"></div>
            <Droppable droppableId="todo">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {todo.map((eachcard, index) => (
                    <Draggable
                      key={eachcard.id}
                      draggableId={eachcard.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card
                            key={eachcard.id}
                            aboutp="todoabout"
                            eachcard={eachcard}
                          ></Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          {/* On progress */}
          <div className="bg-[#EEEEEE]  rounded-xl">
            <div className="flex my-4 mx-3 items-center justify-between">
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <FaBowlingBall className="text-orange-400 text-xs" />
                <h2 className="font-bold  ">On progress</h2>
                <p className="px-2 py-1 w-7 h-7 bg-slate-200 rounded-full">3</p>
              </div>
            </div>
            <div className="w-full my-4 border-2 border-orange-400"></div>
            <Droppable droppableId="progress">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {progress.map((eachcard, index) => (
                    <Draggable
                      key={eachcard.id}
                      draggableId={eachcard.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card
                            key={eachcard.id}
                            title="onprogress"
                            eachcard={eachcard}
                          ></Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          {/* done*/}
          <div className="bg-[#EEEEEE]  rounded-xl ">
            <div className="flex my-4 mx-3 items-center justify-between">
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <FaBowlingBall className="text-green-400 text-xs" />
                <h2 className="font-bold ">Done</h2>
                <p className="px-2 py-1 w-7 h-7 bg-slate-200 rounded-full">2</p>
              </div>
            </div>
            <div className="w-full my-4 border-2 border-green-400"></div>
            <Droppable droppableId="done">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {donee.map((eachcard, index) => (
                    <Draggable
                      key={eachcard.id}
                      draggableId={eachcard.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card
                            key={eachcard.id}
                            title="done"
                            eachcard={eachcard}
                          ></Card>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import {
//   AiOutlineSearch,
//   AiOutlineCalendar,
//   AiOutlineFilter,
// } from "react-icons/ai";
// import { FaBowlingBall } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
// import { IoIosArrowDropdown } from "react-icons/io";
// import { BsQuestionSquare, BsPencil } from "react-icons/bs";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { ImAttachment } from "react-icons/im";
// import { AiOutlinePlusSquare } from "react-icons/ai";
// import { HiOutlineBars2 } from "react-icons/hi2";
// import { TbGridDots } from "react-icons/tb";
// import Profile from "../Profile/Profile";
// import Avatar from "../Avatar/Avatar";
// import Card from "../Card/Card";

// const Home = () => {
//   const [todo, setTodo] = useState([]);
//   const [progress, setProgress] = useState([]);
//   const [donee, setDonee] = useState([]);

//   useEffect(() => {
//     fetch("/todo.json")
//       .then((res) => res.json())
//       .then((data) => setTodo(data));
//   }, []);

//   useEffect(() => {
//     fetch("/onprogress.json")
//       .then((res) => res.json())
//       .then((data) => setProgress(data));
//   }, []);

//   useEffect(() => {
//     fetch("/done.json")
//       .then((res) => res.json())
//       .then((data) => setDonee(data));
//   }, []);

//   console.log(donee);

//   return (
//     <div className="w-full h-full p-2">
//       <div className="md:flex justify-between gap-5">
//         {/* search box */}
//         <div className="bg-[#F6F1F1] mt-3   md:w-5/12 mx-4 p-2  flex gap-4 items-center">
//           <AiOutlineSearch className="text-3xl" />
//           <input
//             type="text"
//             placeholder="Search Anything..."
//             className="input w-full max-w-xs"
//           />
//         </div>
//         {/* icons */}
//         <div className=" md:mx-0 flex mx-7 mt-6  md:mt-0  items-center gap-4">
//           <AiOutlineCalendar className="text-2xl" />
//           <BsQuestionSquare className="text-2xl" />
//           <IoMdNotificationsOutline className="text-2xl" />
//         </div>
//         {/* profile */}
//         <Profile></Profile>
//       </div>
//       <div className="md:flex  mt-8 items-center justify-between gap-4">
//         {/* title name */}
//         <div className="flex  items-center gap-4">
//           {/* <div> */}
//           <h2 className="text-5xl font-bold mx-4 my-3 md:my-0">Mobile App</h2>
//           {/* </div> */}

//           <BsPencil className="text-2xl bg-violet-500 text-white" />
//           <ImAttachment className="text-2xl bg-violet-500 text-white" />
//         </div>
//         {/* profile invitation */}
//         <div className="flex gap-3 items-center mx-4">
//           <AiOutlinePlusSquare className="bg-violet-300 text-2xl rounded" />
//           <h3 className="text-xl text-violet-400 font-medium">Invite</h3>
//           <Avatar></Avatar>
//         </div>
//       </div>
//       {/* third part */}
//       <div className="mt-7 grid grid-cols-1 md:grid-cols-3  gap-7  mx-4">
//         {/*  */}
//         <div className="flex gap-3 w-6/12 items-center">
//           <div className="p-3 border flex gap-4  items-center  rounded-lg">
//             <AiOutlineFilter className="text-xl" />
//             <h2 className="text-xl">Filter</h2>
//           </div>
//           <div className="p-3 border flex gap-4  items-center rounded-lg">
//             <AiOutlineCalendar className="text-xl" />
//             <h2>Today</h2>
//             <IoIosArrowDropdown className="text-2xl" />
//           </div>
//         </div>
//         {/*  */}
//         <div className="flex gap-3  items-center">
//           <div className="p-3  flex gap-4  items-center rounded-lg">
//             <div className=" border p-3 flex gap-4  items-center rounded-lg">
//               <FiUsers className="text-xl text-black" />
//               <h2 className="text-xl "> Share </h2>
//             </div>

//             <p className="text-3xl">| </p>
//             <HiOutlineBars2 className="text-2xl bg-violet-500 text-white font-bold" />
//             <TbGridDots className="text-2xl text-black" />
//           </div>
//         </div>
//       </div>
//       {/* card */}

//       <div className="md:flex gap-5 ">
//         {/* todo */}
//         <div className="bg-[#EEEEEE] rounded-xl gap-4">
//           <div className="flex my-4 mx-3 items-center justify-between">
//             <div className="flex items-center mt-4 md:mt-0 gap-4">
//               <FaBowlingBall className="text-blue-300 text-xs" />
//               <h2 className="font-bold ">To Do</h2>
//               <p className=" px-2 py-1 w-7 h-7 bg-slate-200 rounded-full">4</p>
//             </div>
//             <AiOutlinePlusSquare className="text-violet-700 bg-violet-300 text-xl rounded" />
//           </div>
//           <div className=" w-full my-4 border-2 border-violet-500"></div>
//           <div className="pb-5">
//             {todo.map((eachcard) => (
//               <Card
//                 key={eachcard.id}
//                 aboutp={"todoabout"}
//                 eachcard={eachcard}
//               ></Card>
//             ))}
//           </div>
//         </div>
//         {/* On progress */}
//         <div className="bg-[#EEEEEE]  rounded-xl">
//           <div className="flex my-4 mx-3 items-center justify-between">
//             <div className="flex items-center gap-4 mt-4 md:mt-0">
//               <FaBowlingBall className="text-orange-400 text-xs" />
//               <h2 className="font-bold  ">On progress</h2>
//               <p className=" px-2 py-1 w-7 h-7 bg-slate-200 rounded-full">3</p>
//             </div>
//           </div>
//           <div className=" w-full my-4 border-2 border-orange-400"></div>
//           <div className="pb-5">
//             {progress.map((eachcard) => (
//               <Card
//                 key={eachcard.id}
//                 title={"onprogress"}
//                 eachcard={eachcard}
//               ></Card>
//             ))}
//           </div>
//         </div>
//         {/* done*/}
//         <div className="bg-[#EEEEEE]  rounded-xl ">
//           <div className="flex my-4 mx-3 items-center justify-between">
//             <div className="flex items-center gap-4 mt-4 md:mt-0">
//               <FaBowlingBall className="text-green-400 text-xs" />
//               <h2 className="font-bold ">Done</h2>
//               <p className=" px-2 py-1 w-7 h-7 bg-slate-200 rounded-full">2</p>
//             </div>
//           </div>
//           <div className=" w-full my-4 border-2 border-green-400"></div>
//           <div className="pb-5">
//             {donee.map((eachcard) => (
//               <Card key={eachcard.id} title={"done"} eachcard={eachcard}></Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
