import Sidebar from "@/components/navigation/sidebar";

export default function JobLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
