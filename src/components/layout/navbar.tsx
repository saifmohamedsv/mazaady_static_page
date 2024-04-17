"use client";
import LogoWhite from "@/assets/logo.svg";
import { ButtonWithIcon, Divider, UserAvatar } from "@/components/common";
import { Container, NavLink } from "@/components/layout";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { BellIcon, GlobeIcon, MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {}

const DesktopNav = () => (
  <div className={clsx("items-center gap-4 hidden", "md:flex")}>
    <SearchIcon />
    <Divider />
    <BellIcon className="mx-2" />
    <Divider />
    <UserAvatar />
    <Divider />
    <ButtonWithIcon title={"Add new product"} icon={PlusCircledIcon} />
    <div className="ml-4 flex items-center gap-2">
      <GlobeIcon />
      <Divider />
      <p>EN</p>
    </div>
  </div>
);

const MobileNav = () => (
  <div className={clsx("flex items-center gap-4", "md:hidden")}>
    <SearchIcon className="w-6 h-6" />
    <BellIcon className="w-6 h-6 mx-2" />
    <UserAvatar />
  </div>
);

export function Navbar({}: NavbarProps) {
  return (
    <nav
      className={clsx("relative flex w-full bg-white h-[var(--navbar-height)]")}
    >
      <Container className="flex items-center justify-between">
        <div className="flex h-full gap-12 items-center">
          <div className="flex items-center gap-2">
            <MenuIcon className={clsx("cursor-pointer block", "md:hidden")} />
            <Link href={"/"}>
              <Image
                src={LogoWhite}
                alt="Mazaady"
                className={clsx("h-8 w-24", "md:h-12 md:w-32")}
              />
            </Link>
          </div>

          {/* Nav Links */}
          <div className="h-full gap-6 hidden md:flex">
            <NavLink path="/" title="Home" />
            <NavLink path="/blog" title="Blog" />
            <NavLink path="/gifts" title="Gifts" />
          </div>
        </div>

        <DesktopNav />

        <MobileNav />
      </Container>
    </nav>
  );
}
