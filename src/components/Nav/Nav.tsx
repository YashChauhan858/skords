import Link from "next/link";

const Nav = () => {
  return (
    <nav className=" p-6">
      <ul className="flex gap-10">
        <li className="select-none cursor-pointer">
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li className="select-none cursor-pointer">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
