import Navbar from "./Navbar";
import React from "react";
const Layout = ({children}) => {
  return(
      <React.Fragment>
        <div className={'container w-4/5 mx-auto'}>
            <Navbar/>
            {children}
        </div>
      </React.Fragment>
  )
}
export default Layout