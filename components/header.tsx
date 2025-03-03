"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        } else {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        }
        setDarkMode(!darkMode);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
    ];

    return (
        <header className="border-b border-zinc-200 dark:border-zinc-800">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-lg font-medium">
                        Chanakorn
                    </Link>
                </div>

                <div className="hidden md:flex md:gap-x-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`transition-colors hover:text-black dark:hover:text-white ${
                                pathname === item.href
                                    ? "text-black dark:text-white"
                                    : "text-zinc-500 dark:text-zinc-400"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleDarkMode}
                        className="rounded-full"
                    >
                        {darkMode ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                        <span className="sr-only">Toggle dark mode</span>
                    </Button>

                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMobileMenu}
                            className="rounded-full"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <nav className="md:hidden py-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="container space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block transition-colors hover:text-black dark:hover:text-white ${
                                    pathname === item.href
                                        ? "text-black dark:text-white"
                                        : "text-zinc-500 dark:text-zinc-400"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}
