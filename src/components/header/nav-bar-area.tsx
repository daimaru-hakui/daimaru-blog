"use client";
import Logo from "@/images/logo";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import NavDropdown from "./nav-dropdown";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function NavbarArea() {
  const logout = async () => {
    await signOut();
  };
  return (
    <Navbar shouldHideOnScroll maxWidth="md" className="mt-6 bg-gray-100 w-full">
      <NavbarContent className="w-full justify-between rounded-lg">
        <NavbarBrand className="">
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <div className="text-sm cursor-pointer" onClick={logout}>
              logout
            </div>
          </NavbarItem>
          <NavbarItem >
            <NavDropdown />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
