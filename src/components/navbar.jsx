"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, List } from "lucide-react";
import { FaUser } from "react-icons/fa";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/aktiviteter", label: "Aktiviteter", icon: List },
  { href: "/profile", label: "Profile", icon: FaUser },
];

export default function NavbarFooter() {
  const pathname = usePathname();

  return (
    <footer className="fixed mt-15 bottom-0 w-full">
      <div className="w-full bg-secondary border-t shadow-lg">
        <nav className="flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex flex-col items-center gap-1.5 px-4 py-2 rounded-2xl
                  transition-all duration-300 ease-out relative
                  ${isActive ? "text-black" : "text-[#6F6F6F]"}
                `}
              >
                <div
                  className={`
                    relative flex items-center justify-center w-10 h-10
                    transition-transform duration-300 ease-out
                    ${isActive ? "-translate-y-0.5" : ""}
                  `}
                >
                  {isActive && (
                    <div className="absolute inset-0 -m-1 rounded-full" />
                  )}
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <span
                  className={`
                    text-[11px] font-medium tracking-tight transition-all duration-300
                    ${isActive ? "font-semibold scale-105" : ""}
                  `}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
