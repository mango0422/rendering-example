"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Next.js Rendering Demo</h1>
        <div className="space-x-4">
          <Link
            href="/"
            className={`px-4 py-2 rounded ${pathname === "/" ? "bg-gray-700" : "hover:bg-gray-700"}`}
          >
            Home
          </Link>
          <Link
            href="/compare-csr-ssr-1"
            className={`px-4 py-2 rounded ${pathname === "/compare-csr-ssr-1" ? "bg-gray-700" : "hover:bg-gray-700"}`}
          >
            Compare CSR vs SSR
          </Link>
          <Link
            href="/compare-csr-ssr-with-partial-rendering"
            className={`px-4 py-2 rounded ${pathname === "/compare-csr-ssr-with-partial-rendering" ? "bg-gray-700" : "hover:bg-gray-700"}`}
          >
            Partial Rendering vs CSR/SSR
          </Link>
        </div>
      </div>
    </nav>
  );
}
