"use client"
import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Loader from "../common/Loader";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, loading, setToken } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Extract token from URL and store it if present
    const handleTokenFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (token) {
        setToken(token);
        // Remove the token from the URL after storing it
        router.replace(window.location.pathname);
      }
    };

    handleTokenFromURL();
  }, [setToken, router]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {loading ? <Loader /> : children}
          </div>
        </main>
      </div>
    </div>
  );
}
