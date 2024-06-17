import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./shared/Button";

const Navbar = () => {
  return (
    <nav className="flexBetween padding-container max-container relative z-30 py-5">
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((item) => (
          <Link
            href={item.href}
            key={item.key}
            className="reqular-16 text-gray-50 flexCenter cursor-pointer  pb-1.5 transition-all hover:font-bold"
          >
            {item.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src={"menu.svg"}
        alt="menu"
        width={24}
        height={24}
        className="lg:hidden inline-block cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
