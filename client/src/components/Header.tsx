import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  
  return (
    <nav className="w-full h-[60px] bg-black text-white p-3 flex justify-between items-center border-b-2 border-white">
      <Link to="/">
        <h2 className="font-bold select-none">CodeCraft</h2>
      </Link>
      <ul className="flex gap-2">
          <li>
            <Link to="/compiler">
              <Button className="text-sm" variant="default">Compiler</Button>
            </Link>
          </li>
        </ul>

    </nav>
  );
};

export default Header;
