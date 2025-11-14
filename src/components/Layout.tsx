"use client";

import Header from "./Header";
import Footer from "./Footer";
import { bgClass } from "@/lib/classNames";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("min-h-screen flex flex-col", bgClass("bg"))}>
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
