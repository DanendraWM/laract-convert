import { Link } from "@inertiajs/inertia-react";
const Navbar = ({ user }) => {
  return (
    <div className="navbar bg-base-100 lg:px-10 sm:px-2">
      <div className="flex-1">
        <label
          htmlFor="my-drawer"
          className="btn btn-ghost normal-case text-xl drawer-button"
        >
          Auto<div className="text-emerald-300">Convert</div>
        </label>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/nature" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {!user ? (
              <>
                <li>
                  <Link href={route("register")} as="button">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href={route("login")} as="button">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* <li>
                  <Link
                    href={route("dashboard")}
                    as="button"
                    className="justify-between"
                  >
                    Dashboard
                  </Link>
                </li> */}
                <li>
                  <Link href={route("logout")} method="post" as="button">
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
