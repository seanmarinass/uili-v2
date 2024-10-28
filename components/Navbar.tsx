"use client";

import { NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

interface NavbarItem {
  href: string;
  label: string;
}

const navbarItems: NavbarItem[] = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#works",
    label: "Our Works",
  },
];

export default function Navbar() {
  return (
    <nav className="flex w-full p-[1rem]">
      <div className="flex-grow">
        <h1>Logo</h1>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="flex gap-[0.75rem] text-xl font-bold">
          {navbarItems.map((item, index) => {
            const { href, label } = item;

            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
