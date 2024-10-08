// import { RiEditBoxLine } from "react-icons/ri"
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"

// import { formattedDate } from "../../../utils/dateFormatter"
// import IconBtn from "../../Common/IconBtn"


// export default function MyProfile() {
//   const { user } = useSelector((state) => state.profile)
//   const navigate = useNavigate()
   
//   return (
//     <>
//       <h1 className="mb-14 text-3xl font-medium text-richblack-5">
//         My Profile
//       </h1>
//       <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
//         <div className="flex items-center gap-x-4">
//           <img
//             src={user?.image}
//             alt={`profile-${user?.firstName}`}
//             className="aspect-square w-[78px] rounded-full object-cover"
//           />
//           <div className="space-y-1">
//             <p className="text-lg font-semibold text-richblack-5">
//               {user?.firstName + " " + user?.lastName}
//             </p>
//             <p className="text-sm text-richblack-300">{user?.email}</p>
//           </div>
//         </div>
//         <IconBtn
//           text="Edit"
//           onclick={() => {
//             navigate("/dashboard/settings")
//           }}
//         >
//           <RiEditBoxLine />
//         </IconBtn>
//       </div>
//       <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
//         <div className="flex w-full items-center justify-between">
//           <p className="text-lg font-semibold text-richblack-5">About</p>
//           <IconBtn
//             text="Edit"
//             onclick={() => {
//               navigate("/dashboard/settings")
//             }}
//           >
//             <RiEditBoxLine />
//           </IconBtn>
//         </div>
//         <p
//           className={`${
//             user?.additionalDetails?.about
//               ? "text-richblack-5"
//               : "text-richblack-400"
//           } text-sm font-medium`}
//         >
//           {user?.additionalDetails?.about ?? "Write Something About Yourself"}
//         </p>
//         <p className="text-lg text-richblack-5">
//           Account Type:{" "}
//           <span className=" font-semibold">{user?.accountType}</span>
//         </p>
//       </div>
//       <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
//         <div className="flex w-full items-center justify-between">
//           <p className="text-lg font-semibold text-richblack-5">
//             Personal Details
//           </p>
//           <IconBtn
//             text="Edit"
//             onclick={() => {
//               navigate("/dashboard/settings")
//             }}
//           >
//             <RiEditBoxLine />
//           </IconBtn>
//         </div>
//         <div className="flex max-w-[500px] justify-between">
//           <div className="flex flex-col gap-y-5">
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">First Name</p>
//               <p className="text-sm font-medium text-richblack-5">
//                 {user?.firstName}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Email</p>
//               <p className="text-sm font-medium text-richblack-5">
//                 {user?.email}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Gender</p>
//               <p className="text-sm font-medium text-richblack-5">
//                 {user?.additionalDetails?.gender ?? "Add Gender"}
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col gap-y-5">
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Last Name</p>
//               <p className="text-sm font-medium text-richblack-5">
//                 {user?.lastName}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
//               <p className="text-sm font-medium text-richblack-5">
//                 {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
//               </p>
//             </div>
//             <div>
//               <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
//               <p className="text-sm font-medium text-richblack-5">
//                 {formattedDate(user?.additionalDetails?.dateOfBirth) ??
//                   "Add Date Of Birth"}
//               </p>
//             </div>
//           </div>
//         </div>


 

//       </div>
//     </>
//   )
// }
import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../Common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <>
      <h1 className="mb-6 text-2xl font-medium text-richblack-5 md:text-3xl">
        My Profile
      </h1>
      <div className="flex flex-col items-start justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 md:flex-row md:items-center md:p-8 md:px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[60px] rounded-full object-cover md:w-[78px]"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
      </div>

      {/* About Section */}
      <div className="my-6 flex flex-col gap-y-4 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 md:my-10 md:gap-y-10 md:p-8 md:px-12">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <div className="ml-2">
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/settings")
              }}
            >
              <RiEditBoxLine />
            </IconBtn>
          </div>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
        <p className="text-lg text-richblack-5">
          Account Type:{" "}
          <span className="font-semibold">{user?.accountType}</span>
        </p>
      </div>

      {/* Personal Details Section */}
      <div className="my-6 flex flex-col gap-y-4 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-4 md:my-10 md:gap-y-10 md:p-8 md:px-12">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <div className="ml-2">
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/settings")
              }}
            >
              <RiEditBoxLine />
            </IconBtn>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 md:flex-row md:max-w-[500px] md:justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ??
                  "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
