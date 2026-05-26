import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you requested could not be found on SSL Group website.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-industrial-blue">404</p>
      <h1 className="font-heading mt-2 text-4xl font-bold text-white">Page Not Found</h1>
      <p className="mt-4 max-w-md text-metallic/80">
        The page you are looking for may have been moved or does not exist on{" "}
        <a href="https://www.sslgroup.in/" className="text-industrial-blue hover:text-white">
          www.sslgroup.in
        </a>
        .
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </section>
  );
}
