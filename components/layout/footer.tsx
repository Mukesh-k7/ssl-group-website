import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { company, navigation } from "@/data/site";
import { products } from "@/data/products";
import { useTranslations } from "next-intl";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('navigation');

  return (
    <footer
      className="
        bg-charcoal
        border-t border-white/10
      "
    >
      <div
        className="
          container
          px-4 md:px-6 py-16 mx-auto
        "
      >
        <div
          className="
            grid lg:grid-cols-4
            gap-12
          "
        >
          <div
            className="
              lg:col-span-1
            "
          >
            <Link
              href="/"
              className="
                flex items-center
                gap-3
              "
            >
              <div
                className="
                  relative
                "
              >
                <Image
                  src="/images/products/logo.png"
                  alt="SSL Group Logo"
                  width={120}
                  height={110}
                  className="
                    object-cover
                    group-hover:brightness-110
                  "
                />
              </div>
            </Link>
            <p
              className="
                mt-4
                text-sm text-metallic/80 leading-relaxed
              "
            >
              India's trusted metallurgy and steel industry raw material
              exporter. Serving global steel manufacturers since{" "}
              {company.founded}.
            </p>
            <a
              href={company.website}
              className="
                inline-block
                mt-3
                text-sm text-industrial-blue hover:text-white
              "
            >
              {company.website}
            </a>
          </div>

          <div>
            <h3
              className="
                mb-4
                text-sm text-white font-heading font-semibold tracking-wider
                uppercase
              "
            >
              Company
            </h3>
            <ul
              className="
                space-y-2
              "
            >
              {navigation.slice(0, 10).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      text-sm text-metallic/80 hover:text-white
                      transition-colors
                    "
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="
                mb-4
                text-sm text-white font-heading font-semibold tracking-wider
                uppercase
              "
            >
              Products
            </h3>
            <ul
              className="
                space-y-2
              "
            >
              {products.slice(0, 6).map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="
                      text-sm text-metallic/80 hover:text-white
                      transition-colors
                    "
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="
                mb-4
                text-sm text-white font-heading font-semibold tracking-wider
                uppercase
              "
            >
              Contact
            </h3>
            <ul
              className="
                space-y-4
              "
            >
              <li
                className="
                  flex
                  text-sm text-metallic/80
                  gap-3
                "
              >

                <Link
                  href="https://www.google.com/maps?q=28.67378742741595,77.47962866652804"
                  target="_blank"
                >
                  <MapPin
                    className="
                    w-4 h-4
                    mt-0.5
                    text-[#c96a00] text-bold
                    shrink-0
                  "
                  /
                  >
                </Link>
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="
                    flex items-center
                    text-sm text-metallic/80 hover:text-white
                    gap-3
                  "
                >
                  <Phone
                    className="
                      w-4 h-4
                      text-[#c96a00] text-bold
                    "
                  />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="
                    flex items-center
                    text-sm text-metallic/80 hover:text-white
                    gap-3
                  "
                >
                  <Mail
                    className="
                      w-4 h-4
                      text-[#c96a00] text-bold
                    "
                  />
                  {company.email}
                </a>
              </li>
            </ul>
            <div
              className="
                flex items-center
                mt-3
                gap-2
              "
            >
              <h2>Follow on Social Media</h2>
              <ArrowUpRight
                className="
                  w-3 h-3
                "
              />
            </div>

            <a
              href="https://www.linkedin.com/company/ssl-group"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                p-[8px] pb-[7px] mt-2
                text-sm text-metallic/80 hover:text-white
                rounded-[23px] border border-[#c96a00]
                gap-2
              "
              aria-label="LinkedIn"
            >
              <svg
                className="
                  w-5 h-5
                  text-[#0073b1] text-bold
                "
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Instagram */}

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                p-[8px] pb-[7px] mx-2 mt-2
                rounded-[23px] border border-[#c96a00]
                gap-2
              "
              aria-label="Instagram"
            >
              <svg
                className="
                  w-5 h-5
                "
                viewBox="0 0 24 24"
                aria-hidden
              >
                <defs>
                  <linearGradient
                    id="instagramGradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#feda75" />
                    <stop offset="25%" stopColor="#fa7e1e" />
                    <stop offset="50%" stopColor="#d62976" />
                    <stop offset="75%" stopColor="#962fbf" />
                    <stop offset="100%" stopColor="#4f5bd5" />
                  </linearGradient>
                </defs>

                <path
                  fill="url(#instagramGradient)"
                  d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 013.95 3.95v8.5a3.95 3.95 0 01-3.95 3.95h-8.5a3.95 3.95 0 01-3.95-3.95v-8.5A3.95 3.95 0 017.75 3.8zm8.95 1.35a1.05 1.05 0 100 2.1 1.05 1.05 0 000-2.1zM12 6.5A5.5 5.5 0 106 12a5.5 5.5 0 006-5.5zm0 1.8A3.7 3.7 0 118.3 12 3.7 3.7 0 0112 8.3z"
                />
              </svg>
            </a>

            {/* Twitter / X Gradient Icon */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                p-[8px] pb-[7px] mt-2
                rounded-[23px] border border-[#c96a00]
                gap-2
              "
              aria-label="Twitter"
            >
              <svg
                fill="none"
                viewBox="0 0 480 490"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "20px", maxWidth: "20px", height: "auto" }}
              >
                <defs>
                  <radialGradient
                    cx="240"
                    cy="245"
                    gradientUnits="userSpaceOnUse"
                    id="heroHighlight"
                    r="200"
                  >
                    <stop stopColor="#ddd5d5" />
                    <stop offset="1" stopColor="#f5f0f0" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path
                  d="M285.38 207.711L462.954 1.5H420.874L266.687 180.55L143.538 1.5H1.50003L187.726 272.256L1.50003 488.5H43.5818L206.408 299.417L336.462 488.5H478.5L285.37 207.711H285.38ZM227.743 274.641L208.875 247.68L58.7444 33.147H123.379L244.536 206.282L263.405 233.243L420.894 458.292H356.259L227.743 274.652V274.641Z"
                  fill="#dfdede"
                />
                <path
                  d="M285.38 207.711L462.954 1.5H420.874L266.687 180.55L143.538 1.5H1.50003L187.726 272.256L1.50003 488.5H43.5818L206.408 299.417L336.462 488.5H478.5L285.37 207.711H285.38ZM227.743 274.641L208.875 247.68L58.7444 33.147H123.379L244.536 206.282L263.405 233.243L420.894 458.292H356.259L227.743 274.652V274.641Z"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                p-[8px] pb-[7px] mx-2 mt-2
                rounded-[23px] border border-[#c96a00]
                gap-2
              "
              aria-label="Facebook"
            >
              <svg
                className="
                  w-5 h-5
                "
                viewBox="0 0 24 24"
                aria-hidden
              >
                <defs>
                  <linearGradient
                    id="facebookGradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#1877F2" />
                    <stop offset="100%" stopColor="#0d5bd7" />
                  </linearGradient>
                </defs>

                <path
                  fill="url(#facebookGradient)"
                  d="M22 12a10 10 0 10-11.563 9.875v-6.987H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46H15.19c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888H13.56v6.987A10 10 0 0022 12z"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                p-[8px] pb-[7px] mt-2
                rounded-[23px] border border-[#c96a00]
                gap-2
              "
              aria-label="YouTube"
            >
              <svg
                className="
                  w-5 h-5
                "
                viewBox="0 0 24 24"
                aria-hidden
              >
                <defs>
                  <linearGradient
                    id="youtubeGradient"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ff0000" />
                    <stop offset="100%" stopColor="#cc0000" />
                  </linearGradient>
                </defs>

                <path
                  fill="url(#youtubeGradient)"
                  d="M23.498 6.186a2.997 2.997 0 00-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.566a2.997 2.997 0 00-2.11 2.12A31.243 31.243 0 000 12a31.243 31.243 0 00.502 5.814 2.997 2.997 0 002.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.388-.566a2.997 2.997 0 002.11-2.12A31.243 31.243 0 0024 12a31.243 31.243 0 00-.502-5.814zM9.75 15.568v-7.136L15.818 12 9.75 15.568z"
                />
              </svg>
            </a>
          </div>
        </div>

        <Separator
          className="
            my-8
          "
        />

        <div
          className="
            flex flex-col md:flex-row items-center justify-between
            text-sm text-metallic/60
            gap-4
          "
        >
          <p>
            © {currentYear} {company.legalName}. All rights reserved.
          </p>
          <div
            className="
              flex
              gap-6
            "
          >
            <Link
              href="/contact"
              className="
                hover:text-white
              "
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="
                hover:text-white
              "
            >
              Terms of Trade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
