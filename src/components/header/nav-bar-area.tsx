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
    <Navbar
      position="sticky"
      maxWidth="md"
      className="bg-gray-100 w-full"
    >
      <NavbarContent className="w-full justify-between bg-white shadow-md rounded-lg">
        <NavbarBrand className="pl-4 mr-4">
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <div className="text-sm" onClick={logout}>logout</div>
          </NavbarItem>
          <NavbarItem className="pr-6">
            <NavDropdown />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
