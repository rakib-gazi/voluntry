import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Layout = () => {
    return (
        <>
           <Navbar></Navbar>
           <div className="min-h-[calc(100vh-540px)]">
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
        </>
    );
};

export default Layout;