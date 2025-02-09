"use client";

import clsx from "clsx";
import { JSX } from "react";

export function FeatureCard({ icon, title, description, is_active }: { icon: JSX.Element, title: string, description: string, is_active?: boolean }) {
  return (
    <div className={clsx("p-6 rounded-xl  transition", is_active ? "bg-primary " : "shadow-md shadow-stone-300/25")} >
      <div className="mb-4">{icon}</div>
      <h3 className={clsx(" text-xl font-semibold  mb-2",is_active?"text-gray-100":"text-foreground")} >{title}</h3>
      <p className={clsx(" ",is_active?"text-gray-100":"text-gray-500")}>{description}</p>
    </div>
  );
}