import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-gray-50 shadow rounded-md sticky top-0 left-0 z-50">
      <div className="mx-auto max-w-screen-xl px-5 py-5">
        <div className="flex gap-4 items-center justify-between">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={24}
              priority
            />
          </Link>

          <div className="flex items-center gap-4">
            <Link href={"/add-task"}>
              <Button type="button" size={"icon"} title="add task">
                <PlusCircledIcon className="w-5 h-5"></PlusCircledIcon>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
