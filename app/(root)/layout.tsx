import StreamVideoProvider from "@/providers/StreamProviderClient";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Stream-App",
  description: "Video calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
