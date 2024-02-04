import { ModeToggle } from "../ui/mode-toggle";
import { MobileNav } from "./components/MobileNav";
import MainNav from "./components/MainNav";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center w-[100vw] px-5 py-3">
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
