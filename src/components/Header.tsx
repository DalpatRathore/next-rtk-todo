import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-gray-50/95 dark:bg-black/95 dark:border-black shadow rounded-b-md sticky top-0 left-0 z-50">
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
              <Button
                type="button"
                title="add task"
                variant="default"
                size="icon"
              >
                <PlusCircledIcon className="w-5 h-5"></PlusCircledIcon>
              </Button>
            </Link>
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
