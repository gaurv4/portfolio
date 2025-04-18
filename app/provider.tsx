"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

const MainBg = () => {
  // Define video sources based on theme
  const videoSrc = "/videos/main-bg-dark.mp4";

  return (
    <div className="-z-10 fixed top-0 left-0 w-full h-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover bg-cover bg-fixed overflow-x-hidden"
        autoPlay
        loop
        muted
        key={videoSrc} // Ensure reloading on theme change
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support.
      </video>
      <div className="absolute inset-0 backdrop-blur-3xl bg-black/10 dark:bg-black/50"></div>
    </div>
  );
};

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
