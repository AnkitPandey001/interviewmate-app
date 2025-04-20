import { Outlet } from "react-router-dom"
import bgImage from '../assets/img/bg.png';


export const AuthenticationLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center relative">
      <img src={bgImage} alt="Background" className="absolute w-full h-full object-cover opacity-20"/>
      <Outlet/>
    </div>
  )
}


