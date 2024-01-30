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
      className="bg-gray-100 w-[calc(100%)]"
    >
      <NavbarContent className="mt-6 px-6 justify-between bg-white shadow-md rounded-lg">
        <NavbarBrand className="mr-4">
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>

        <NavbarItem>
          <Button size="sm" onClick={logout}>logout</Button>
        </NavbarItem>

        <NavbarItem>
          <NavDropdown />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
