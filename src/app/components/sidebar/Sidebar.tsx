import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <aside
      id="sidebar"
      className="fixed font-poppins top-0 right-0 z-50 transition-all duration-300 h-full w-0 overflow-hidden bg-black shadow-left"
    >
      <SidebarHeader />
      <SidebarMenu />
    </aside>
  );
}
