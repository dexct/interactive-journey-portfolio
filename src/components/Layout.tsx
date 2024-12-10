import React from "react";
import Navbar from "./Navbar";
import { useToast } from "@/hooks/use-toast";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;