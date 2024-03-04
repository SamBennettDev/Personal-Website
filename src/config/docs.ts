import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Projects",
      href: "/Projects",
    },
    {
      title: "Experience",
      href: "/Experience",
    },
    {
      title: "Contact",
      href: "/Contact",
    },
    {
      title: "GitHub",
      href: "https://github.com/SamBennettDev",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Portfolio",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
    {
      title: "Joe",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
      ],
    },
  ],
};
