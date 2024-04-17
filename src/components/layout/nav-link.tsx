"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  title: string;
  path: string;
}

export function NavLink({ path, title }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <div className="flex flex-col relative w-fit">
      <Link
        href={path}
        className={clsx("text-sm m-auto text-grey", {
          "text-primary": isActive,
        })}
      >
        {title}
      </Link>
      <span
        className={clsx({
          "absolute bottom-0 w-full h-2 bg-red-500 rounded-ss-md rounded-se-md":
            isActive,
        })}
      ></span>
    </div>
  );
}
