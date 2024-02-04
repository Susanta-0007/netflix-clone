import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptsearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { BiMoviePlay } from "react-icons/bi";
import { FaRobot } from "react-icons/fa6";

const Header = () => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showgptSearch = useSelector((store) => store.gpt.showGptSearch);

  const [isOpen, setIsOpen] = useState(false);

  const handlerDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        nevigate("/error") ;
      });
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        nevigate("/browse") ;
      } else {
        dispatch(removeUser());
        nevigate("/");
      }
    });
    // Unsubscribe when component unmount ...
    return () => unsubcribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleGptsearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-[100%]  px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between max-md:px-4 ">
      <Link to={"/browse"}><img className="w-44 max-md:w-28" src={LOGO} alt="logo" /></Link>
      

      {user && (
        <div className="flex gap-2 items-center">
          <button
            onClick={() => handleGPTSearch()}
            className="px-2 py-1 text-2xl bg-purple-600 text-white font-semibold rounded-sm max-md:text-xl"
          >
            {showgptSearch ? <BiMoviePlay /> : <FaRobot />}
          </button>
          <img
            onClick={handlerDropDown}
            className="h-8 w-8 rounded-sm cursor-pointer max-md:h-7"
            src={user?.photoURL}
            alt="user-icon"
          />
          
          

          {isOpen && (
            <div
              className="bg-black/95 px-3 absolute right-2 top-16 mt-2 border border-gray-900 rounded-md
                max-md:top-12 flex flex-col items-center "
            >
              <div className="flex items-center justify-end left-0 pt-1 px-1 gap-2  text-gray-400 hover:text-white">
                <p className="w-4 h-4 max-md:h-3 max-md:w-3 bg-red-600 rounded-sm"></p>
                <p className="text-lg cursor-pointer  max-md:text-sm">
                  {" "}
                  {user.displayName}{" "}
                </p>
              </div>

              <div className="px-2 gap-3  text-slate-300 flex justify-center items-center border-t border-gray-700 mt-4 hover:text-white">
                <button
                  className="text-lg p-2  max-md:text-sm hover:text-red-600"
                  onClick={handleSignOut}
                >
                  {" "}
                  Sign Out
                </button>
              </div>
              {showgptSearch && (
                <select
                  onChange={handleLanguageChange}
                  className="px-2 py-1 rounded-sm mb-2 outline-none bg-gray-300 max-md:text-sm font-semibold "
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option
                      className=""
                      key={lang.identifier}
                      value={lang.identifier}
                    >
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
