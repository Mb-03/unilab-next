"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const currentPath = usePathname();

  const isActive = currentPath === href;
  const linkStyle = `${isActive ? "text-[#FF7A00]" : "text-[#555555]"}`;

  return (
    <div>
      <Link href={href} className={linkStyle}>
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
