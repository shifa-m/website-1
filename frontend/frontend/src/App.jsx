import {Outlet} from "react-router-dom";
import { Navigate } from "./pages/Auth/Navigation";
import {ToastContainer} from "react-toastify";//Toast notifications ki styling load karta hai.Colors ,Animation ,Spacing ,Position
import "react-toastify/dist/ReactToastify.css"//Toast notifications ki ready-made CSS styling



const App=()=>{
            return(
                        <>
                        <ToastContainer/>
                        <Navigation/>
                        <main className="py-3">
                                    <Outlet/>
                        </main>
                        </>
            )
}