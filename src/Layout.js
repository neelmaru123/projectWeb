import { Outlet } from "react-router-dom";
import SideHeader from "./SideHeader";
import TopHeader from "./TopHeader";

function LayoutMain() {
    return (
        <>
            {/* <SideHeader /> */}
            <TopHeader />
            {/* <div className="container body ">
                <div className="row gy-5 gx-5"> */}
                    <Outlet />
                {/* </div>
            </div> */}

        </>
    )
}

function LayoutProfile(){
    return (
        <>
            <SideHeader />
            <Outlet />
        </>
    )
}

export  {LayoutMain,LayoutProfile};