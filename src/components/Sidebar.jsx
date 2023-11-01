import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserSecret,
  faFileVideo,
  faPhotoFilm,
  faArrowRight,
  faUser,
  faClock,
  faFilm,
  faHourglass,
  faThumbsUp,
  faFire,
  faMusic,
  faGamepad,
  faMedal,
  faGear,
  faBookmark,
  faQuestion,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <>
      <div className="basis-1/6 p-5 overflow-y-scroll">
        <div className="border-b-2 pb-5">
          <ul>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faHouse} />
              </div>
              <span>ໜ້າທຳອິດ</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faFileVideo} />
              </div>
              <span>Shorts</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faPhotoFilm} />
              </div>
              <span>ການຕິດຕາມ</span>
            </li>
          </ul>
        </div>
        <div className="border-b-2 pb-5">
          <div className="flex items-center">
            <h2 className="px-2 py-1">ທ່ານ</h2>
            <FontAwesomeIcon className="text-sm" icon={faArrowRight} />
          </div>
          <ul>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faUser} />
              </div>
              <span>ຊ່ອງຂອງທ່ານ</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faClock} />
              </div>
              <span>ປະຫວັດ</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faFilm} />
              </div>
              <span>ວິດີໂອຂອງທ່ານ</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faHourglass} />
              </div>
              <span>ເບິ່ງພາຍຫຼັງ</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faThumbsUp} />
              </div>
              <span>ວິດີໂທີ່ມັກ</span>
            </li>
          </ul>
        </div>
        <div className="border-b-2 pb-5">
          <h2 className="px-2 py-1">ການຕິດຕາມ</h2>
          <ul>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 h-6 flex justify-center items-center rounded-[100%] bg-slate-400">
                <FontAwesomeIcon className="text-[18px]" icon={faUserSecret} />
              </div>
              <span>Dev Programmer</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 h-6 flex justify-center items-center rounded-[100%] bg-slate-400">
                <FontAwesomeIcon className="text-[18px]" icon={faUserSecret} />
              </div>
              <span>Dev HTMl</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 h-6 flex justify-center items-center rounded-[100%] bg-slate-400">
                <FontAwesomeIcon className="text-[12px]" icon={faUserSecret} />
              </div>
              <span>Tailwind</span>
            </li>
          </ul>
        </div>
        <div className="border-b-2 pb-5">
          <h2 className="px-2 py-1">ສຳຫຼວດ</h2>
          <ul>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faFire} />
              </div>
              <span>ກຳລັງນິຍົມ</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faMusic} />
              </div>
              <span>ດົນຕີ</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faGamepad} />
              </div>
              <span>ເກມ</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faMedal} />
              </div>
              <span>ກີລາ</span>
            </li>
          </ul>
        </div>
        <div className="border-b-2 pb-5 mt-2">
          <ul>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faGear} />
              </div>
              <span>ການຕັ້ງຄ່າ</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faBookmark} />
              </div>
              <span>ປະຫວັດການລາຍງານ</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faQuestion} />
              </div>
              <span>ຊ່ວຍເຫຼືອ</span>
            </li>
            <li className="px-2 py-2 hover:bg-slate-500 hover:rounded-lg cursor-pointer flex items-center gap-3">
              <div className="w-6 flex justify-center items-center">
                <FontAwesomeIcon className="text-[18px]" icon={faComment} />
              </div>
              <span>ສົ່ງຄຳຕິຊົມ</span>
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h1 className="text-[12px] capitalize font-medium">youtube clone by khamdeng lao</h1>
          <h2 className="text-[12px]">Email: <span className="text-blue-500 text-[12px]">khamdenglao22@gmail.com</span></h2>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
