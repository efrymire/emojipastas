import { fetchPastas } from "@/app/lib/data";
import { sql } from "@vercel/postgres";

export default async function List() {
  // console.log(process.env);
  console.log(process.env.DATABASE_URL);
  const pastas = await fetchPastas();
  // console.log(pastas);

  // let data;
  // let startTime = Date.now();

  // try {
  //   data = await sql`SELECT * FROM pastas_main`;
  // } catch (e: any) {
  //   if (e.message.includes('relation "users" does not exist')) {
  //     console.log(
  //       "Table does not exist, creating and seeding it with dummy data now..."
  //     );
  //     // Table is not created yet
  //     await seed();
  //     startTime = Date.now();
  //     data = await sql`SELECT * FROM users`;
  //   } else {
  //     throw e;
  //   }
  // }

  return <div>Hello List</div>;
}
