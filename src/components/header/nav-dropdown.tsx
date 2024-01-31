"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Category {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

export default function NavDropdown() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      const url = "https://jrk7rmu7lk.microcms.io/api/v1/categories";
      const response = await fetch(url, {
        headers: {
          "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });
      const data = await response.json();
      const contents = data.contents;
      setCategories(contents);
    };
    getCategories();
  }, []);

  return (
    <Dropdown>
      <DropdownTrigger>
        <div>
          <AiOutlineMenu className="cursor-pointer" />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {categories.map((category) => (
          <DropdownItem key={category.id} className="">
            <Link href={`/posts/${category.id}`} className="w-full block">{category.name}</Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
