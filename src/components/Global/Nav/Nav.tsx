import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="p-6 px-24 sticky top-0 backdrop-blur-md z-30">
      <ul className="flex gap-10 items-center">
        <li className="select-none cursor-pointer">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="logo" height={40} width={40} />
          </Link>
        </li>
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
