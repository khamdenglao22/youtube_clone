import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBars,
  faMagnifyingGlass,
  faMicrophone,
  faVideo,
  faBell,
  faUserSecret,
  faFileVideo,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center px-5 py-2 bg-[#0F0F0F] h-[56px]">
          <div className="flex items-center">
            <FontAwesomeIcon
              className="text-[22px] cursor-pointer"
              icon={faBars}
            />
            <FontAwesomeIcon
              className="text-[#FF0000] text-[28px] ml-5"
              icon={faYoutube}
            />
            <h2 className="ml-1 font-bold capitalize">youtube</h2>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-[600px] flex items-center gap-[2px]">
              <input
                type="text"
                className="w-[90%] ps-3 py-1 bg-[#121212] outline outline-1  outline-offset-1 focus:outline-1 rounded-l-full focus:outline-none focus:ring focus:border-blue-500"
                placeholder="ຊອກຫາ"
              />
              <button className="w-[10%] rounded-r-full bg-[#222222] p-[7px]">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
            <div className="w-10 h-10 rounded-[100%] bg-[#222222] flex items-center justify-center cursor-pointer">
              <FontAwesomeIcon icon={faMicrophone} />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-slate-500 rounded-[100%]">
              <FontAwesomeIcon className="text-[22px]" icon={faVideo} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-slate-500 rounded-[100%] relative">
              <FontAwesomeIcon className="text-[22px]" icon={faBell} />
              <div className="w-5 h-5 bg-red-700 text-[12px] flex items-center justify-center rounded-[100%] absolute right-0 top-0">
                <p>9</p>
              </div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-slate-500 rounded-[100%] cursor-pointer">
              <FontAwesomeIcon icon={faUserSecret} />
            </div>
          </div>
        </header>
    </>
  )
}

export default Header