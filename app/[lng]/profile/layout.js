import SideBar from "../components/Profile/SideBar";
import UserInformation from "../components/UserInformation";

export default function Layout({ children, params: { lng } }) {
  return (
    <div className="w-full bg-[#f2f2f2]">
      <div className="container  items-start space-x-4 py-10 ">
        <div className="grid grid-cols-12 gap-4">{children}</div>
      </div>
    </div>
  );
}
