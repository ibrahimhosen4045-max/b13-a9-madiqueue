"use client"
import Footer from "@/component/Footer"
import Nabver from "@/component/Nabver"
import { ToastContainer } from "@contentstack/react-toastify"

const MainLeyout = ({ children }) => {
  return (
    <div>
      <Nabver></Nabver>
      { children }
      <ToastContainer />
      <Footer></Footer>
    </div>
  )
}

export default MainLeyout
