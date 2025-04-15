import LampDemo from "@/components/ui/lamp-demo";
import { Article } from "@/components/ui/article";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <LampDemo />
      <Article />
      <footer className="text-center py-6 text-orange-700 text-sm border-t border-orange-500/30 mt-20">
        <p>© 2025 Postura Hacker. Todos os direitos reservados. // Execução Finalizada</p>
      </footer>
    </main>
  );
}
