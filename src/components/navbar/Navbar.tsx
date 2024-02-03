import { ModeToggle } from "../ui/mode-toggle";
import { MobileNav } from "./components/MobileNav";
import MainNav from "./components/MainNav";

function Navbar() {
  return (
    <>
      <div className="flex justify-between content-center w-[100vw] px-10 pt-5">
        <div>
          <MainNav />
          <MobileNav />
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

export default Navbar;
