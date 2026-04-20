import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/* Tässä on se valmis sivupalkki, joka tuli projektipohjan mukana */}
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/* Tähän 'children' kohdalle ilmestyy se sivu, jolla kulloinkin olet */}
        {children}
      </div>
    </div>
  );
}
