import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | SSL Group",
  description: "Explore career opportunities at SSL Group.",
};

export default function CareersPage() {
  return (
    <section className="text-white">
      <div className="container mx-auto ">
        <section className="px-6 py-24">
          <h1 className="text-5xl font-bold">Careers at SSL Group</h1>
          <p className="mt-6 max-w-2xl text-slate-300">
            Build your future with SSL Group. Explore open positions and apply online.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/career"
              className="rounded-lg bg-[#0461cfad] px-5 py-3 font-medium"
            >
              View Open Roles
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-700 px-5 py-3"
            >
              Contact HR
            </Link>
          </div>
        </section>

        <section id="jobs" className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-2xl border border-slate-800 p-8">
            <h2 className="text-2xl font-semibold">Open Positions</h2>
            <p className="mt-2 text-slate-400">
              Connect this section to your CMS or API.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
