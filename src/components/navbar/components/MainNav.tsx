import { Link, useLocation, useNavigate } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { docsConfig } from "@/config/docs";

export default function MainNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="mr-4 hidden md:flex">
      <Link
        to="/"
        className="mr-6 flex items-center space-x-2"
        onClick={() => navigate("/")}
      >
        <Icons.logo className="h-6 w-6" />
        <span className="hidden sm:inline-block">
          Sam
          <span className="font-bold">Bennett</span>
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {docsConfig.mainNav.map((navItem) => (
          <Link
            key={navItem.href}
            to={navItem.href!}
            target={navItem.external ? "_blank" : undefined}
            className={cn(
              "transition-colors hover:text-foreground/80",
              location.pathname === navItem.href
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            {navItem.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
