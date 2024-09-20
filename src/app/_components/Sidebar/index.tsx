"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  CircleDollarSign,
  LayoutDashboard,
  LucideIcon,
  Menu,
  Package,
  Settings,
  SquarePlus,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinksProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLinks = ({
  href,
  icon: Icon,
  label,
  isCollapsed,
}: SidebarLinksProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-4 py-3"
        } text-gray-700 hover:text-orange-600 gap-3 transition-colors ${
          isActive ? "text-orange-600" : ""
        }`}
      >
        <Icon className="w-6 h-6" />

        <span className={`${isCollapsed ? "hidden" : "block"} font-medium`}>
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const isSidebarcollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarcollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarcollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarcollapsed ? "px-4" : "px-8"
        }`}
      >
        <div>Logo</div>
        <h1
          className={`${
            isSidebarcollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}
        >
          StockFY
        </h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-grow mt-8">
        <div className="flex flex-col pb-4 px-5">
          <span
            className={`${
              isSidebarcollapsed ? "hidden" : "block"
            } font-semibold`}
          >
            Main
          </span>
          <SidebarLinks
            href="/dashboard"
            icon={LayoutDashboard}
            label="Dashboard"
            isCollapsed={isSidebarcollapsed}
          />
        </div>

        <div className="flex flex-col pb-4 px-5">
          <span
            className={`${
              isSidebarcollapsed ? "hidden" : "block"
            } font-semibold`}
          >
            Inventário
          </span>
          <SidebarLinks
            href="/products"
            icon={Package}
            label="Produtos"
            isCollapsed={isSidebarcollapsed}
          />
          <SidebarLinks
            href="/products/create-products"
            icon={SquarePlus}
            label="Criar Produto"
            isCollapsed={isSidebarcollapsed}
          />
          <SidebarLinks
            href="/inventory"
            icon={Archive}
            label="Inventory"
            isCollapsed={isSidebarcollapsed}
          />
        </div>

        <div className="flex flex-col pb-4 px-5">
          <span
            className={`${
              isSidebarcollapsed ? "hidden" : "block"
            } font-semibold`}
          >
            Gerenciamento de usuários
          </span>
          <SidebarLinks
            href="/users"
            icon={UserCheck}
            label="Usuários"
            isCollapsed={isSidebarcollapsed}
          />
        </div>

        <div className="flex flex-col pb-4 px-5">
          <span
            className={`${
              isSidebarcollapsed ? "hidden" : "block"
            } font-semibold`}
          >
            Finanças e Contas
          </span>
          <SidebarLinks
            href="/expenses"
            icon={CircleDollarSign}
            label="Expenses"
            isCollapsed={isSidebarcollapsed}
          />
        </div>

        <div className="flex flex-col pb-4 px-5">
          <span
            className={`${
              isSidebarcollapsed ? "hidden" : "block"
            } font-semibold`}
          >
            Configurações
          </span>
          <SidebarLinks
            href="/products/edit-products"
            icon={Settings}
            label="Configurações gerais"
            isCollapsed={isSidebarcollapsed}
          />
        </div>
      </div>

      <div className={`${isSidebarcollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">
          &copy; 2024 Paulo Araújo
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
