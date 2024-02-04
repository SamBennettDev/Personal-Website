import { ModeToggle } from "../ui/mode-toggle";
import { MobileNav } from "./components/MobileNav";
import MainNav from "./components/MainNav";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center w-[100vw] px-5 h-[60px] fixed  top-0 bg-card">
        <div>
          <MainNav />
          <MobileNav />
        </div>
        <ModeToggle />
      </div>
    </>
  );
}

export default Navbar;
