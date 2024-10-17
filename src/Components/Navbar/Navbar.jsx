import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    Link: "#",
  },
  {
    id: 2,
    title: "Products",
    Link: "#",
  },
  {
    id: 3,
    title: "About",
    Link: "#",
  },
  {
    id: 4,
    title: "Shop",
    Link: "#",
  },
  {
    id: 5,
    title: "Contacts",
    Link: "#",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center  py-4 md:pt-4">
          {/* Logo Section */}
          <div className="flex gap-4 font-bold text-2xl items-center uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-600" />
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex gap-6 items-center text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="">
                  <a
                    href={menu.Link}
                    className="inline-block hover:text-primary px-3 font-semibold hover:shadow-[0_3px_-1px_#ef4444]"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="hover:bg-primary hover:text-white rounded-lg p-2 duration-200 hover:shadow-[0_3px_-1px_#ef4444]">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>
          {/* Humburger Mobile Section */}
          <div className="md:hidden">
            <MdMenu
              className="text-4xl"
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
        </div>
      </nav>
      {/*  */}
      <ResponsiveMenu open={open} NavbarMenu={NavbarMenu} />
    </>
  );
}

export default Navbar;
