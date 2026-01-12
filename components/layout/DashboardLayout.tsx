import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

<main className="flex-1 px-8 py-6 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
