import {Link, useLocation } from "react-router";
import UserAuth from "../hooks/UserAuth"
import { BellIcon, LogOutIcon, ShipWheelIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import uselogout from "../hooks/uselogout";

const Navbar = () => {
    const {authuser}=UserAuth();
    const location= useLocation();
    const isChatPage=location.pathname?.startsWith("/chat");
   // console.log(location)

//        const queryClient = useQueryClient();
//    const { mutate: logoutMutation } = useMutation({
//      mutationFn: logout,
//      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authuser"] }),
//    });
    const {logoutMutation}=uselogout();
  return (
     <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end w-full">
          {/* LOGO - ONLY IN THE CHAT PAGE */}
          {isChatPage && (
            <div className="pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <ShipWheelIcon className="size-9 text-primary" />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  tracking-wider">
                 Talksy
                </span>
              </Link>
              <div className="text-s">Speak Yours. Learn Theirs</div>
            </div>
            
            
          )}
               {/* <div className="flex items-center justify-evenly"> */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <Link to={"/notifications"}>
              <button className="btn btn-ghost btn-circle bg-transparent border-none shadow-none ">
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>
          </div>

          {/* TODO */}
          <ThemeSelector />

          <div className="avatar">
            <div className="w-9 rounded-full">
              <img src={authuser?.profilePic} alt="User Avatar" rel="noreferrer" />
            </div>
          </div>

          {/* Logout button */}
          <button className="btn btn-ghost btn-circle p-3" onClick={logoutMutation}>
            <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
          </button>
        </div>
        </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar
