import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/site";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "Terms & Conditions | SSL Group",
    description:
        "Read the Terms & Conditions governing the use of the SSL Group website and services.",
};

export default function TermsAndConditionsPage() {
    const t = useTranslations("termsconditions");

    const sections = [
        {
            title: t("AcceptanceofTerms"),
            content: (
                <p>
                    {t("TermsConditions")}
                </p>
            ),
        },
        {
            title: t("AboutSSLGroup"),
            content: (
                <p>
                    {t("informational")}
                </p>
            ),
        },
        {
            title: t("Website"),
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li> {t("lawful")} </li>
                    <li> {t("unauthorized")} </li>
                    <li> {t("malicious")} </li>
                    <li> {t("functionality")} </li>
                    <li> {t("prior")} </li>
                </ul>
            ),
        },
        {
            title: t("ProductInformation"),
            content: (
                <p>
                    {t("manufacturing")}
                </p>
            ),
        },
        {
            title: t("Quotations"),
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li> {t("Pricesdisplayed")} </li>
                    <li> {t("Official")} </li>
                    <li> {t("additional")} </li>
                </ul>
            ),
        },
        {
            title: t("Intellectual"),
            content: (
                <p>
                    {t("reproduction")}
                </p>
            ),
        },
        {
            title: t("ThirdParty"),
            content: (
                <p>
                    {t("convenience")}
                </p>
            ),
        },
        {
            title: t("Liability"),
            content: (
                <p>
                    {t("consequential")}
                </p>
            ),
        },
        {
            title: t("Disclaimer"),
            content: (
                <p>
                    {t("warranties")}
                </p>
            ),
        },
        {
            title: t("Privacy"),
            content: (
                <p>
                    {t("PrivacyPolicy")}
                </p>
            ),
        },
        {
            title: t("ChangestoTerms"),
            content: (
                <p>
                    {t("acceptance")}
                </p>
            ),
        },
        {
            title: t("GoverningLaw"),
            content: (
                <p>
                    {t("jurisdiction")}
                </p>
            ),
        },
    ];

    return (
        <main className="bg-gray-50 py-16 mt-20">
            <div className="mx-auto max-w-5xl px-6">
                <div className="rounded-xl bg-white p-8 shadow-lg md:p-12">
                    <h1 className="text-4xl font-bold text-gray-900">
                        {t("Heading")}
                    </h1>

                    <p className="mt-3 text-gray-600">
                        <strong>{t("Updated")} :</strong> July 17, 2026
                    </p>

                    <p className="mt-6 leading-8 text-gray-700">
                        {t("Welcometo")} <strong>SSL Group</strong>. {t("acknowledge")}
                    </p>

                    <div className="mt-12 space-y-10">
                        {sections.map((section) => (
                            <section key={section.title}>
                                <h2 className="mb-4 text-2xl font-bold text-transparent bg-linear-to-b bg-clip-text from-[#F7941D] via-[#C96A00] to-[#5B2A00] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]">
                                    <h2 className="mb-4 text-2xl font-bold text-transparent bg-linear-to-b bg-clip-text from-[#F7941D] via-[#C96A00] to-[#5B2A00] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]">
                                    {section.title}
                                </h2>

                                <div className="text-gray-700 leading-8">
                                    {section.content}
                                </div>  
                            </section>
                        ))}
                    </div>

                    <section className="mt-12 border-t pt-10">
                        <h2 className="mb-5 text-2xl font-bold text-transparent bg-linear-to-b bg-clip-text from-[#F7941D] via-[#C96A00] to-[#5B2A00] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]">
                            <h2 className="mb-5 text-2xl font-bold text-transparent bg-linear-to-b bg-clip-text from-[#F7941D] via-[#C96A00] to-[#5B2A00] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)]">
                            {t("ContactInformation")}
                        </h2>

                        <div className="space-y-3 text-gray-700">
                            <p>
                                {t("regarding")}
                            </p>

                            <p>
                                <strong>SSL Group</strong>
                            </p>

                            <ul className="space-y-4">
                                <li className="flex text-sm gap-3">
                                    <Link
                                        href="https://www.google.com/maps?q=28.67378742741595,77.47962866652804"
                                        target="_blank"
                                        className="flex gap-3 text-sm"
                                    >
                                        <MapPin className="w-4 h-4 mt-0.5 text-[#fcaf1c] text-bold shrink-0" />
                                        <div >
                                            <span>
                                                {t("Address1")}
                                                <br />
                                                {t("Address2")}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${company.phone}`}
                                        className="flex items-center text-sm gap-3"
                                    >
                                        <Phone
                                            className="w-4 h-4 text-[#fcaf1c] text-bold"
                                        />
                                        {company.phone}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${company.email}`}
                                        className="flex items-center text-sm gap-3">
                                        <Mail
                                            className="w-4 h-4 text-[#fcaf1c] text-bold" />
                                        {company.email}
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href={company.website}
                                        className="inline-block mt-3 text-sm text-[#0853b1]"
                                    >
                                        🌐 {company.website}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}