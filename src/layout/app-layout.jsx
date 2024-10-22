import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        {/* Header */}
        <Header />
        <Outlet />
      </main>
      {/* Footer */}
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with ❤️ by rvif
      </div>
    </div>
  );
};

export default AppLayout;
