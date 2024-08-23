"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Dropdown,
  Input, // Import Input from NextUI
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Shop", "About", "Blog", "Contact"];
  const profileItems = [
    { key: "login", label: "Login", href: "/login" },
    { key: "signup", label: "Sign Up", href: "/signup" },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white dark:bg-gray-800 w-full max-w-full mx-auto px-4" // Ensure full width with no extra space
    >
      {/* Left Section: Logo */}
      <NavbarContent justify="start" className="gap-4">
        <NavbarBrand>
          <p className="font-bold text-inherit">GM LEATHER</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Center Section: Nav Links */}
      <NavbarContent justify="center" className="hidden sm:flex gap-8">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Section: Search Bar, Cart, Profile */}
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem className='rounded-none'>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[12rem] h-10",
              mainWrapper: "h-full",
              input: "text-small text-gray-700 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400",
              inputWrapper: "h-full font-normal dark:bg-default-500/20",
              border: 'rounded-none'
            }}
            className='rounded-none'
            placeholder="Search..."
            size="sm"
            type="search"
          />
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <ShoppingCartIcon className="h-6 w-6 text-gray-700 dark:text-white" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown className='rounded-none'>
            <DropdownTrigger>
              <UserIcon className="h-6 w-6 cursor-pointer text-gray-700 dark:text-white" />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile actions" >
              {profileItems.map((item) => (
                <DropdownItem key={item.key} className='rounded-none'>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
