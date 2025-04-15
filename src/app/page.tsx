import LampDemo from "@/components/ui/lamp-demo";
import WorldMapDemo from "@/components/ui/world-map-demo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <LampDemo />
      <WorldMapDemo />
    </main>
  );
}
