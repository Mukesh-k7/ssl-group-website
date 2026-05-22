import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-industrial-blue">404</p>
      <h1 className="font-heading mt-2 text-4xl font-bold text-white">Page Not Found</h1>
      <p className="mt-4 max-w-md text-metallic/80">
        The page you are looking for may have been moved or does not exist.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </section>
  );
}
