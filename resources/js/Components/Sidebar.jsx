import { Link } from "@inertiajs/inertia-react";
const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li>
          <Link href={route("HomePage")}>Home</Link>
        </li>
        <li>
          <Link href={route("test")}>File</Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
