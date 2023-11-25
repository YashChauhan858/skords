import Link from "next/link";

const Nav = () => {
  return (
    <nav className="p-6 px-24 sticky top-0">
      <ul className="flex gap-10">
        <li className="select-none cursor-pointer hover:text-badgeText transition-all duration-200">
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li className="select-none cursor-pointer hover:text-badgeText transition-all duration-200">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
