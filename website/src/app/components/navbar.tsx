"use client";

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, } from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isRegisterPage = pathname === "/register";

  return (
    <Navbar className="bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 w-full">
        <NavbarBrand className="flex items-center">
          <a href="/">
            <div className="flex items-center">
              <Image
                src="/vercel.svg"
                alt="Logo"
                className="dark:invert"
                width={50}
                height={50}
              />
              <p className="font-bold text-inherit ml-4">LiosCodeX</p>
            </div>
          </a>
        </NavbarBrand>
        {!(isLoginPage || isRegisterPage) && (
          <NavbarContent className="flex-grow flex items-center justify-center space-x-4">
            <NavbarItem>
              <Link color="warning" href="#">
                Tickets
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link color="warning" href="#" aria-current="page">
                Gutscheine
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="warning" href="https://liosclothinguniverse.myspreadshop.de/">
                FanShop
              </Link>
            </NavbarItem>
          </NavbarContent>
        )}
        <NavbarContent className="flex items-center space-x-4">
          {(isLoginPage || isRegisterPage) ? (
            <NavbarItem>
              <Button
                as={Link}
                href={isLoginPage ? "/register" : "/login"}
                variant="flat"
                className="transition-colors duration-200 border border-black bg-white text-black hover:bg-black hover:text-white"
              >
                {isLoginPage ? "Sign Up" : "Login"}
              </Button>
            </NavbarItem>
          ) : (
            <>
              <NavbarItem className="hidden lg:flex">
                <Link color="danger" href="login">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button
                  as={Link}
                  href="/register"
                  variant="flat"
                  className="transition-colors duration-200 border border-black bg-white text-black hover:bg-black hover:text-white"
                >
                  Sign Up
                </Button>
              </NavbarItem>
            </>
          )}
        </NavbarContent>
      </div>
    </Navbar>
  );
}
