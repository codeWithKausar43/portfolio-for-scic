import { Outlet, ScrollRestoration } from "react-router-dom";
import MainPage from "../pages/MainPage";
 
export default function RootLayout() {
  return (
   <>
   <div>
   <ScrollRestoration />
   </div>
    <div>
        <MainPage/>
    </div>
    <div>
        <Outlet/>
    </div>
   </>
  )
}
