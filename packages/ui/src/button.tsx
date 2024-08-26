"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className="rounded-full bg-blue-500 text-white px-4 py-2"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
