// import { useEffect, useState } from "react";
// import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
// import { BsChevronDown } from "react-icons/bs";
// import { useSelector } from "react-redux";
// import { Link, matchPath, useLocation } from "react-router-dom";

// import logo1 from "../../assets/Logo/StudyZone2.png";
// import { NavbarLinks } from "../../data/navbar-links";
// import { apiConnector } from "../../services/apiConnector";
// import { categories } from "../../services/apis";
// import { ACCOUNT_TYPE } from "../../utils/constants";
// import ProfileDropdown from "../core/Auth/ProfileDropdown";

// function Navbar() {
//   const { token } = useSelector((state) => state.auth);
//   const { user } = useSelector((state) => state.profile);
//   const { totalItems } = useSelector((state) => state.cart);
//   const location = useLocation();

//   const [subLinks, setSubLinks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCatalogOpen, setIsCatalogOpen] = useState(false); // State for catalog dropdown

//   useEffect(() => {
//     (async () => {
//       setLoading(true);
//       try {
//         const res = await apiConnector("GET", categories.CATEGORIES_API);
//         setSubLinks(res.data.data);
//       } catch (error) {
//         console.log("Could not fetch Categories.", error);
//       }
//       setLoading(false);
//     })();
//   }, []);
// console.log('catalog data',subLinks);

//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu
//   };

//   const toggleCatalog = () => {
//     setIsCatalogOpen(!isCatalogOpen); // Toggle the catalog dropdown
//   };
//   const closeCatalog = () => {
//     setIsCatalogOpen(false);
//   };
//   return (
//     <div >
//       <div
//         className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
//           location.pathname !== "/" ? "bg-richblack-800" : ""
//         } transition-all duration-200`}
//       >
//         <div className="flex w-11/12 max-w-maxContent items-center justify-between">
//           {/* Logo */}
//           <Link to="/">
//             <img
//               src={logo1}
//               alt="Logo"
//               width={160}
//               height={32}
//               loading="lazy"
//             />
//           </Link>
//           {/* Navigation links */}
//           <nav className="hidden md:block">
//             <ul className="flex gap-x-6 text-richblack-25">
//               {NavbarLinks.map((link, index) => (
//                 <li key={index}>
//                   {link.title === "Courses" ? (
//                     <>
//                       <div
//                         className={`group relative flex cursor-pointer items-center gap-1 ${
//                           matchRoute("/catalog/:catalogName")
//                             ? "text-yellow-25"
//                             : "text-richblack-25"
//                         }`}
//                         onClick={toggleCatalog} // Toggle dropdown
//                         onMouseEnter={toggleCatalog}
//                         onMouseLeave={closeCatalog}
//                       >
//                         <p>{link.title}</p>
//                         <BsChevronDown />
//                         <div
//                           className={`absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px] ${
//                             isCatalogOpen ? "visible opacity-100" : "invisible opacity-0"
//                           }`}
//                           onMouseLeave={closeCatalog}
//                         >
//                           <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
//                           {loading ? (
//                             <p className="text-center">Loading...</p>
//                           ) : subLinks.length ? (
//                             <>
//                               {subLinks
//                                 ?.filter(
//                                   (subLink) => subLink?.courses?.length > 0
//                                 )
//                                 ?.map((subLink, i) => (
//                                   <Link
//                                     to={`/catalog/${subLink.name
//                                       .split(" ")
//                                       .join("-")
//                                       .toLowerCase()}`}
//                                     className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
//                                     key={i}
//                                     onClick={toggleMenu && toggleCatalog} // Close menu after selection
                                    
                                   
//                                   >
//                                     <p>{subLink.name}</p>
//                                   </Link>
//                                 ))}
//                             </>
//                           ) : (
//                             <p className="text-center">No Courses Found</p>
//                           )}
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <Link to={link?.path}>
//                       <p
//                         className={`${
//                           matchRoute(link?.path)
//                             ? "text-yellow-25"
//                             : "text-richblack-25"
//                         }`}
//                       >
//                         {link.title}
//                       </p>
//                     </Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>
//           {/* Login / Signup / Dashboard */}
//           <div className="hidden items-center gap-x-4 md:flex">
//             {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
//               <Link to="/dashboard/cart" className="relative">
//                 <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
//                 {totalItems > 0 && (
//                   <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
//                     {totalItems}
//                   </span>
//                 )}
//               </Link>
//             )}
//             {token === null && (
//               <>
//                 <Link to="/login">
//                   <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                     Log in
//                   </button>
//                 </Link>
//                 <Link to="/signup">
//                   <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                     Sign up
//                   </button>
//                 </Link>
//               </>
//             )}
//             {token !== null && <ProfileDropdown />}
//           </div>
//           {/* Mobile Menu Button */}
//           <button className="mr-4 md:hidden" onClick={toggleMenu}>
//             <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <nav className="md:hidden absolute top-14 left-0 w-full bg-richblack-900 z-50">
//           <ul className="flex flex-col items-center gap-4 py-4 text-white">
//             {NavbarLinks.map((link, index) => (
//               <li key={index} >
//                 {link.title === "Catalog" ? (
//                   <div onClick={toggleCatalog}>
//                     <p>{link.title}</p>
//                     {isCatalogOpen && (
//                       <div className="flex flex-col gap-2 mt-2 text-sm text-gray-400 justify-center items-center text-yellow-25">
//                         {subLinks.map((subLink, i) => (
//                           <Link
//                             to={`/catalog/${subLink.name
//                               .split(" ")
//                               .join("-")
//                               .toLowerCase()}`}
//                             key={i}
//                             onClick={toggleMenu} // Close menu after selection
//                           >
//                             {subLink.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link to={link?.path} onClick={toggleMenu}>
//                     {link.title}
//                   </Link>
//                 )}
//               </li>
//             ))}
//             {token === null ? (
//               <>
//                 <Link to="/login" onClick={toggleMenu}>
//                   <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                     Log in
//                   </button>
//                 </Link>
//                 <Link to="/signup" onClick={toggleMenu}>
//                   <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
//                     Sign up
//                   </button>
//                 </Link>
//               </>
//             ) : (
//               <ProfileDropdown />
//             )}
//           </ul>
//         </nav>
//       )}

//       {/* Content Push Down */}
//       {isMenuOpen && <div className="h-[280px]" />}
//       { isMenuOpen && isCatalogOpen && <div className="h-[120px]" />}
//     </div>
//   );
// }

// export default Navbar;



import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

import logo1 from "../../assets/Logo/StudyZone2.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropdown";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false); // State for catalog dropdown

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu
  };

  const toggleCatalog = () => {
    setIsCatalogOpen(!isCatalogOpen); // Toggle the catalog dropdown
  };

  const closeCatalog = () => {
    setIsCatalogOpen(false);
  };

  return (
    <div>
      <div
        className={`flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
          location.pathname !== "/" ? "bg-richblack-800" : ""
        } transition-all duration-200`}
      >
        <div className="flex w-11/12 max-w-maxContent items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo1}
              alt="Logo"
              width={160}
              height={32}
              loading="lazy"
            />
          </Link>
          {/* Navigation links */}
          <nav className="hidden md:block">
            <ul className="flex gap-x-6 text-richblack-25">
              {NavbarLinks.map((link, index) => (
                <li key={index}>
                  {link.title === "Courses" ? (
                    <>
                      <div
                        className={`group relative flex cursor-pointer items-center gap-1 ${
                          matchRoute("/catalog/:catalogName")
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                        onClick={toggleCatalog} // Toggle dropdown for desktop
                        onMouseEnter={toggleCatalog}
                        onMouseLeave={closeCatalog}
                      >
                        <p>{link.title}</p>
                        <BsChevronDown />
                        <div
                          className={`absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px] ${
                            isCatalogOpen ? "visible opacity-100" : "invisible opacity-0"
                          }`}
                        >
                          <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                          {loading ? (
                            <p className="text-center">Loading...</p>
                          ) : subLinks.length ? (
                            <>
                              {subLinks
                                ?.filter(
                                  (subLink) => subLink?.courses?.length > 0
                                )
                                ?.map((subLink, i) => (
                                  <Link
                                    to={`/catalog/${subLink.name
                                      .split(" ")
                                      .join("-")
                                      .toLowerCase()}`}
                                    className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                    key={i}
                                    onClick={() => {
                                      toggleMenu();
                                      toggleCatalog();
                                    }} // Close menu after selection
                                  >
                                    <p>{subLink.name}</p>
                                  </Link>
                                ))}
                            </>
                          ) : (
                            <p className="text-center">No Courses Found</p>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${
                          matchRoute(link?.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* Login / Signup / Dashboard */}
          <div className="hidden items-center gap-x-4 md:flex">
            {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                {totalItems > 0 && (
                  <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}
            {token === null && (
              <>
                <Link to="/login">
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                    Sign up
                  </button>
                </Link>
              </>
            )}
            {token !== null && <ProfileDropdown />}
          </div>
          {/* Mobile Menu Button */}
          <button className="mr-4 md:hidden" onClick={toggleMenu}>
            <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-14 left-0 w-full bg-richblack-900 z-50">
          <ul className="flex flex-col items-center gap-4 py-4 text-white">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Courses" ? (
                  <div onClick={toggleCatalog}>
                    <p>{link.title}</p>
                    {isCatalogOpen && (
                      <div className="flex flex-col gap-2 mt-2 text-sm text-gray-400 justify-center items-center text-yellow-25">
                        {subLinks.map((subLink, i) => (
                          <Link
                            to={`/catalog/${subLink.name
                              .split(" ")
                              .join("-")
                              .toLowerCase()}`}
                            key={i}
                            onClick={() => {
                              toggleMenu();
                              toggleCatalog();
                            }} // Close menu after selection
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link to={link?.path} onClick={toggleMenu}>
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
            {token === null ? (
              <>
                <Link to="/login" onClick={toggleMenu}>
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                    Log in
                  </button>
                </Link>
                <Link to="/signup" onClick={toggleMenu}>
                  <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100">
                    Sign up
                  </button>
                </Link>
              </>
            ) : (
              <ProfileDropdown />
            )}
          </ul>
        </nav>
      )}

      {/* Content Push Down */}
      {isMenuOpen && <div className="h-[280px]" />}
      {isMenuOpen && isCatalogOpen && <div className="h-[120px]" />}
    </div>
  );
}

export default Navbar;
