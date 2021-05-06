import React from "react";

function Header() {
  return (
    <div className="flex justify-around p-4">
      <h4 className="text-2xl p-2 text-gray-500">Logo</h4>
      <ul className="flex ">
        <NavItem name="Home" />
        <NavItem name="About" />
        <NavItem name="ContactUs" />
        <NavItem name="Careers" />
      </ul>
    </div>
  );
}

const NavItem = (props) => {
  return (
    <li className="p-2 mx-4 bg-gray-900 text-white hover:bg-purple-700 ">
      <a href="/#">{props.name}</a>
    </li>
  );
};

export default Header;
