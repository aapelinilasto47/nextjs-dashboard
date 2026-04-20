import { lusitana } from "@/app/ui/fonts";

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-6 text-3xl font-bold`}>
        Customers
      </h1>
      <p className="text-gray-600">This is the customers page.</p>
    </main>
  );
}
