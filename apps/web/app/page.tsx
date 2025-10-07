export default function Home() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ? "[definido]"
    : "[no definido]";

  return (
    <main>
      <h1>superapp-oficial-proyecto</h1>
      <p>Next.js + TypeScript listo.</p>
      <h3>Verificación de entorno</h3>
      <p>SUPABASE_URL: {url || "[no definido]"}</p>
      <p>ANON_KEY: {anon}</p>
    </main>
  );
}
