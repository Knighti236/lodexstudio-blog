import React from "react";
import GlobalContainer from "../utils/GlobalContainer";

function Navbar() {

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 md:h-[80px] xl:h-[88px] flex items-center border-b z-50 shadow transition-all duration-500">
      <GlobalContainer>
        <div className="flex justify-between items-center ">
          {/* Logo + Menu */}
        </div>
      </GlobalContainer>
    </nav>
  );
}

export default Navbar;