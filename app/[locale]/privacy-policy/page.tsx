import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/site";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "Privacy Policy | SSL Group",
    description:
        "Read SSL Group's Privacy Policy to understand how we collect, use, protect, and manage your personal information.",
};



export default function PrivacyPolicyPage() {
    const t = useTranslations("privatepolicy");


    const sections = [
        {
            title: t("Information"),
            content: (
                <>
                    <p className="mb-4">
                        {t("technicalinformation")}
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {t("PersonalInformation")}
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">
                        <li> {t("FullName")} </li>
                        <li> {t("CompanyName")} </li>
                        <li> {t("EmailAddress")} </li>
                        <li> {t("PhoneNumber")} </li>
                        <li> {t("Location")} </li>
                        <li> {t("BusinessRequirements")} </li>
                        <li> {t("voluntarily")} </li>
                    </ul>

                    <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
                        {t("TechnicalInformation")}
                    </h3>

                    <ul className="list-disc pl-6 space-y-2">
                        <li> {t("IPAddress")} </li>
                        <li> {t("BrowserType")} </li>
                        <li> {t("OperatingSystem")} </li>
                        <li> {t("DeviceInformation")} </li>
                        <li> {t("PagesVisited")} </li>
                        <li> {t("VisitDate")} </li>
                        <li> {t("Statistics")} </li>
                    </ul>
                </>
            ),
        },
        {
            title: t("YourInformation"),
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li> {t("Respond")} </li>
                    <li> {t("Provide")} </li>
                    <li> {t("Improve")} </li>
                    <li> {t("Process")} </li>
                    <li> {t("Maintain")} </li>
                    <li> {t("Comply")} </li>
                </ul>
            ),
        },
        {
            title: t("Cookies"),
            content: (
                <>
                    <p>
                        {t("functionality")}
                    </p>

                    <p className="mt-4">
                        {t("functionproperly")}
                    </p>
                </>
            ),
        },
        {
            title: t("SharingofInformation"),
            content: (
                <>
                    <p className="mb-4">
                        {t("personalinformation")}
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                        <li> {t("Businesspartners")} </li>
                        <li> {t("Shipping")} </li>
                        <li> {t("Technology")} </li>
                        <li> {t("Government")}  </li>
                    </ul>
                </>
            ),
        },
        {
            title: t("DataSecurity"),
            content: (
                <p>
                    {t("administrative")}
                </p>
            ),
        },
        {
            title: t("DataRetention"),
            content: (
                <p>
                    {t("obligations")}
                </p>
            ),
        },
        {
            title: t("ThirdParty"),
            content: (
                <p>
                    {t("responsible")}
                </p>
            ),
        },
        {
            title: t("YourRights"),
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li> {t("Requestaccess")} </li>
                    <li> {t("Requestcorrection")} </li>
                    <li> {t("Requestdeletion")} </li>
                    <li> {t("Withdrawconsent")} </li>
                    <li> {t("processing")} </li>
                </ul>
            ),
        },
        {
            title: t("ChildrenPrivacy"),
            content: (
                <p>
                    {t("knowingly")}
                </p>
            ),
        },
        {
            title: t("International"),
            content: (
                <p>
                    {t("countries")}
                </p>
            ),
        },
        {
            title: t("ChangestoTh"),
            content: (
                <p>
                    {t("effectivedate")}
                </p>
            ),
        },
    ];

    return (
        <main className="bg-gray-50 py-16 my-16">
            <div className="mx-auto max-w-5xl px-6">
                <div className="rounded-xl bg-white shadow-lg p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-gray-900">
                        {t("Heading")}
                    </h1>

                    <p className="mt-3 text-gray-600">
                        <strong>{t("Updated")} :</strong> July 17, 2026
                    </p>

                    <p className="mt-6 text-gray-700 leading-8">
                        {t("Welcometo")}  <strong>SSL Group</strong>. {t("safeguarding")}
                    </p>

                    <div className="mt-12 space-y-10">
                        {sections.map((section) => (
                            <section key={section.title}>
                                <h2 className="text-2xl font-bold text-transparent font-bold bg-gradient-to-b bg-clip-text from-[#F7941D] via-[#C96A00] to-[#5B2A00] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)] mb-4">
                                    {section.title}
                                </h2>

                                <div className="text-gray-700 leading-8">
                                    {section.content}
                                </div>
                            </section>
                        ))}
                    </div>

                    <section className="mt-12 border-t pt-10">
                        <h2 className="text-2xl font-bold text-transparent font-bold bg-gradient-to-b bg-clip-text from-[#F7941D] via-[#C96A00] to-[#5B2A00] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)] mb-5">
                            {t("ContactUs")}
                        </h2>

                        <div className="space-y-3 text-gray-700">
                            <p>
                                {t("questionsregarding")}
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
                                        <MapPin className="w-4 h-4 mt-0.5 text-[#c96a00] text-bold shrink-0" />
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
                                            className="w-4 h-4 text-[#c96a00] text-bold"
                                        />
                                        {company.phone}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${company.email}`}
                                        className="flex items-center text-sm gap-3">
                                        <Mail
                                            className="w-4 h-4 text-[#c96a00] text-bold" />
                                        {company.email}
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href={company.website}
                                        className="inline-blockmt-3 text-sm text-[#0853b1]"
                                    >
                                        🌐 {company.website}
                                    </a>
                                </li>
                            </ul>

                            {/* <p>🌐 Website: www.sslgroup.com</p> */}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}