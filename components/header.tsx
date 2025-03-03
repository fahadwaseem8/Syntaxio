"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

type HeaderProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  const pathname = usePathname();

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`rounded-lg px-4 py-2 transition-colors ${
          isDarkMode
            ? `${
                isActive
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            : `${
                isActive
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header
      className={`border-b ${
        isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <Logo
                className={`h-8 w-8 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              />
              <span
                className={`text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Syntaxio
              </span>
            </Link>
            <nav className="hidden space-x-2 md:flex">
              <NavLink href="/">Editor</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`rounded-lg p-2 ${
                isDarkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {isDarkMode
                ? "Switch to Light Mode 🌞"
                : "Switch to Dark Mode 🌙"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="mt-4 flex space-x-2 md:hidden">
          <NavLink href="/">Editor</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
