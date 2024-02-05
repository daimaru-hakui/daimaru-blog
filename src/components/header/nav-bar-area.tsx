"use client";
import Logo from "@/images/logo";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Tooltip,
} from "@nextui-org/react";
import NavDropdown from "./nav-dropdown";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { AiOutlineRedo } from "react-icons/ai";
import { updatePage } from "@/actions/updatePage";
import { useParams } from "next/navigation";

export default function NavbarArea() {
  const params = useParams();
  const categoryId = params.categoryId as string;
  const postId = params.postId as string;
  const logout = async () => {
    await signOut();
  };

  const clickHandler = async () => {
    updatePage(categoryId, postId);
  };

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="md"
      className="mt-6 bg-gray-100 w-full"
    >
      <NavbarContent className="w-full justify-between rounded-lg">
        <NavbarBrand>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <Tooltip content="更新">
              <button className="flex items-center">
                <AiOutlineRedo
                  className="cursor-pointer"
                  onClick={clickHandler}
                />
              </button>
            </Tooltip>
          </NavbarItem>
          <NavbarItem>
            <div className="text-sm cursor-pointer" onClick={logout}>
              logout
            </div>
          </NavbarItem>
          <NavbarItem>
            <NavDropdown />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
}
