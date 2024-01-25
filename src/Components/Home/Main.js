import { Outlet} from "react-router-dom";
import Navbar from "../sharedComponent/Navbar";
import Footer from "../sharedComponent/Footer";


const Main = () => {
    
    return (
        <div className="bg-[#FBF3EB]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;