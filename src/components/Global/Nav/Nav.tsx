import Link from "next/link";

const Nav = () => {
  return (
    <nav className="p-6 px-24 sticky top-0">
      <ul className="flex gap-10">
        <li className="select-none cursor-pointer  transition-all duration-200 px-2 py-1 rounded-full hover:text-badgeText hover:bg-badgeBg">
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li className="select-none cursor-pointer  transition-all duration-200 px-2 py-1 rounded-full hover:text-badgeText hover:bg-badgeBg">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
