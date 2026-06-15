"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const locales = ["en", "hi", "ar"];

  const currentLocale = locales.includes(
    pathname.split("/")[1]
  )
    ? pathname.split("/")[1]
    : "en";

  const changeLanguage = (locale: string) => {
    const segments = pathname.split("/");

    if (locales.includes(segments[1])) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }

    router.push(segments.join("/"));
  };

  return (
    <select
      value={currentLocale}
      onChange={(e) =>
        changeLanguage(e.target.value)
      }
      className="rounded-md border bg-white px-3 py-2 text-sm text-black"
    >
      <option value="en">English</option>
      <option value="hi">हिन्दी</option>
      <option value="ar">العربية</option>
    </select>
  );
}