import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-bold text-center">
          Hi! Welcome to my app :)
        </h1>
        <Button asChild>
          <Link href="/dashboard">sign in</Link>
        </Button>
      </main>
    </div>
  );
}
