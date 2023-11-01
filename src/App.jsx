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
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="container bg-slate-800 text-white">
        <Header />
        <main className="flex flex-row sidebar">
          <Sidebar />
          <div className="w-[100%] overflow-y-scroll relative">
            <div className="bg-black w-[100%] ps-5 py-2 sticky top-0">
              <ul className="flex items-center gap-3 ">
                <li className="px-3 py-[2px] bg-[#222222] rounded-lg hover:text-[#000000] hover:bg-[#ffffff]">
                  <a href="#">ທົງໝົດ</a>
                </li>
                <li className="px-3 py-[2px] bg-[#222222] rounded-lg hover:text-[#000000] hover:bg-[#ffffff]">
                  <a href="#">ເພງ</a>
                </li>
                <li className="px-3 py-[2px] bg-[#222222] rounded-lg hover:text-[#000000] hover:bg-[#ffffff]">
                  <a href="#">ການມິກ</a>
                </li>
                <li className="px-3 py-[2px] bg-[#222222] rounded-lg hover:text-[#000000] hover:bg-[#ffffff]">
                  <a href="#">ສົດ</a>
                </li>
                <li className="px-3 py-[2px] bg-[#222222] rounded-lg hover:text-[#000000] hover:bg-[#ffffff]">
                  <a href="#">ເກມ</a>
                </li>
                <li className="px-3 py-[2px] bg-[#222222] rounded-lg hover:text-[#000000] hover:bg-[#ffffff]">
                  <a href="#">ການແຕ່ງກີນ</a>
                </li>
                <li className="px-3 py-[2px] bg-[#222222] rounded-lg hover:text-[#000000] hover:bg-[#ffffff]">
                  <a href="#">ອັບໂຫລດຫຼ້າສຸດ</a>
                </li>
                <li className="px-3 py-[2px] bg-[#222222] rounded-lg hover:text-[#000000] hover:bg-[#ffffff]">
                  <a href="#">ເບິ່ງແລ້ວ</a>
                </li>
                <li className="px-3 py-[2px] bg-[#222222] rounded-lg hover:text-[#000000] hover:bg-[#ffffff]">
                  <a href="#">ໃໝ່ສຳລັບທ່ານ</a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-3 p-5">
              <a href="#">
                <div className="w-[100%] h-[150px] mb-2 bg-slate-700 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-[100%] bg-slate-500">
                    <FontAwesomeIcon icon={faUserSecret} />
                  </div>
                  <div className="w-[100%]">
                    <span>Developer Portfolio | React Tailwind</span>
                    <h1 className="text-slate-400">Dev Programer</h1>
                    <p className="text-slate-400">ຍອດເບິ່ງ 4,3 ພັນ ເທື່ອ 3 ເດືອນກ່ອນ</p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="w-[100%] h-[150px] mb-2 bg-slate-700 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-[100%] bg-slate-500">
                    <FontAwesomeIcon icon={faUserSecret} />
                  </div>
                  <div className="w-[100%]">
                    <span>Developer Portfolio | React Tailwind</span>
                    <h1 className="text-slate-400">Dev Programer</h1>
                    <p className="text-slate-400">ຍອດເບິ່ງ 4,3 ພັນ ເທື່ອ 3 ເດືອນກ່ອນ</p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="w-[100%] h-[150px] mb-2 bg-slate-700 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-[100%] bg-slate-500">
                    <FontAwesomeIcon icon={faUserSecret} />
                  </div>
                  <div className="w-[100%]">
                    <span>Developer Portfolio | React Tailwind</span>
                    <h1 className="text-slate-400">Dev Programer</h1>
                    <p className="text-slate-400">ຍອດເບິ່ງ 4,3 ພັນ ເທື່ອ 3 ເດືອນກ່ອນ</p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="w-[100%] h-[150px] mb-2 bg-slate-700 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-[100%] bg-slate-500">
                    <FontAwesomeIcon icon={faUserSecret} />
                  </div>
                  <div className="w-[100%]">
                    <span>Developer Portfolio | React Tailwind</span>
                    <h1 className="text-slate-400">Dev Programer</h1>
                    <p className="text-slate-400">ຍອດເບິ່ງ 4,3 ພັນ ເທື່ອ 3 ເດືອນກ່ອນ</p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="w-[100%] h-[150px] mb-2 bg-slate-700 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-[100%] bg-slate-500">
                    <FontAwesomeIcon icon={faUserSecret} />
                  </div>
                  <div className="w-[100%]">
                    <span>Developer Portfolio | React Tailwind</span>
                    <h1 className="text-slate-400">Dev Programer</h1>
                    <p className="text-slate-400">ຍອດເບິ່ງ 4,3 ພັນ ເທື່ອ 3 ເດືອນກ່ອນ</p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="w-[100%] h-[150px] mb-2 bg-slate-700 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-[100%] bg-slate-500">
                    <FontAwesomeIcon icon={faUserSecret} />
                  </div>
                  <div className="w-[100%]">
                    <span>Developer Portfolio | React Tailwind</span>
                    <h1 className="text-slate-400">Dev Programer</h1>
                    <p className="text-slate-400">ຍອດເບິ່ງ 4,3 ພັນ ເທື່ອ 3 ເດືອນກ່ອນ</p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="w-[100%] h-[150px] mb-2 bg-slate-700 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-[100%] bg-slate-500">
                    <FontAwesomeIcon icon={faUserSecret} />
                  </div>
                  <div className="w-[100%]">
                    <span>Developer Portfolio | React Tailwind</span>
                    <h1 className="text-slate-400">Dev Programer</h1>
                    <p className="text-slate-400">ຍອດເບິ່ງ 4,3 ພັນ ເທື່ອ 3 ເດືອນກ່ອນ</p>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="w-[100%] h-[150px] mb-2 bg-slate-700 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-[100%] bg-slate-500">
                    <FontAwesomeIcon icon={faUserSecret} />
                  </div>
                  <div className="w-[100%]">
                    <span>Developer Portfolio | React Tailwind</span>
                    <h1 className="text-slate-400">Dev Programer</h1>
                    <p className="text-slate-400">ຍອດເບິ່ງ 4,3 ພັນ ເທື່ອ 3 ເດືອນກ່ອນ</p>
                  </div>
                </div>
              </a>              <a href="#">
                <div className="w-[100%] h-[150px] mb-2 bg-slate-700 rounded-lg"></div>
                <div className="flex gap-2">
                  <div className="w-10 h-10 flex justify-center items-center rounded-[100%] bg-slate-500">
                    <FontAwesomeIcon icon={faUserSecret} />
                  </div>
                  <div className="w-[100%]">
                    <span>Developer Portfolio | React Tailwind</span>
                    <h1 className="text-slate-400">Dev Programer</h1>
                    <p className="text-slate-400">ຍອດເບິ່ງ 4,3 ພັນ ເທື່ອ 3 ເດືອນກ່ອນ</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
