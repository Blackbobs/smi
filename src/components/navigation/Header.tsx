import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface HeaderProp {
  setOpenSideMenu: (open: boolean) => void;
}

const Header: React.FC<HeaderProp> = ({setOpenSideMenu}) => {
  const handleOpenSideMenu = () => {
    setOpenSideMenu(true)
  }
  return (
    <header className="bg-secondary p-3 w-full text-white flex items-center justify-between gap-10">
      <div className="w-full md:max-w-[90%] flex items-center justify-between mx-auto">
        <div>
          <h1 className="text-2xl font-semibold italic text-nowrap capitalize">
            Saint ministry international
          </h1>
        </div>
        {/* Nav links */}
        <nav className="hidden md:flex items-center justify-between gap-5 text-[20px] font-medium">
          <small>
            <Link href={"/"}>Sermons</Link>
          </small>
          <small>
            <Link href={"/#!"}>Songs</Link>
          </small>
          <small>
            <Link href={"/#!"}>Articles</Link>
          </small>
          <small>
            <Link href={"/auth/login"}>Admin</Link>
          </small>
        </nav>
        <button className="md:hidden" aria-label="open menu">
          <RxHamburgerMenu onClick={handleOpenSideMenu} size={30} color="#fff" />
        </button>
      </div>
    </header>
  );
};

export default Header;
