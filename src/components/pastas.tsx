// export const runtime = "edge";
// export const preferredRegion = "home";
// export const dynamic = "force-dynamic";

import List from "@/pages/list";

export default function Pastas() {
  console.log(process.env.DATABASE_URL);
  const pastas = await fetchPastas();
  return (
    <div>
      <div>pastas</div>
      {/* <List /> */}
    </div>
  );
}
