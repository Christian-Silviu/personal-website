import { NavLink } from "react-router-dom";

function Nav() {
  const items = [
    { label: "Home", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-center gap-4 w-fit mx-auto mt-6 p-2 rounded-full bg-[#f9f9fb] border border-[#e6e1f5] shadow-sm">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className="font-medium text-base text-[#2e2a3d] px-4 py-2 rounded-lg transition-colors duration-200 hover:text-[#8b5cf6] hover:bg-[#ede9fb]"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
