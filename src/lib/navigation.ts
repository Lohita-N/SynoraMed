import {
  LayoutDashboard,
  Upload,
  FileText,
  TrendingUp,
  BookOpen,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

/** Public marketing site top-nav links */
export const marketingNav = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
];

/** Signed-in app left-sidebar links */
export const appNav: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Upload Report", href: "/upload", icon: Upload },
  { label: "My Reports", href: "/reports", icon: FileText },
  { label: "Trends", href: "/trends", icon: TrendingUp },
  { label: "Glossary", href: "/glossary", icon: BookOpen },
  { label: "Settings", href: "/settings", icon: Settings },
];
