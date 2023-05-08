import Link from "next/link";
import SigninButton from "./SigninButton";

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-slate-950 to-slate-700 shadow">
      <Link className="transition-colors hover:text-blue-300" href={"/"}>
        Home Page
      </Link>
      <Link
        className="transition-colors hover:text-blue-300"
        href={"/userposts"}
      >
        User Post Page
      </Link>
      <SigninButton />
    </header>
  );
};

export default AppBar;
