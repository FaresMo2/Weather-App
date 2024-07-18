import Search from "./Search";
import Date from "./Date";

function Header() {
  return (
    <div className="flex items-center justify-between w-3/4">
      <Search />
      <Date />
    </div>
  );
}

export default Header;
