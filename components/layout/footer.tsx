import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { company, navigation } from "@/data/site";
import { products } from "@/data/products";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
          mx-auto px-4 md:px-6 py-16
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
              India's trusted metallurgy and steel industry raw material exporter.
              Serving global steel manufacturers since {company.founded}.
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
                font-heading font-semibold text-sm text-white uppercase
                tracking-wider
              "
            >
              Company
            </h3>
            <ul
              className="
                space-y-2
              "
            >
              {navigation.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      text-sm text-metallic/80 hover:text-white
                      transition-colors
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="
                mb-4
                font-heading font-semibold text-sm text-white uppercase
                tracking-wider
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
                font-heading font-semibold text-sm text-white uppercase
                tracking-wider
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
                <MapPin
                  className="
                    h-4 w-4
                    mt-0.5
                    text-[#c96a00] text-bold
                    shrink-0
                  "
                />
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
                      h-4 w-4
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
                      h-4 w-4
                      text-[#c96a00] text-bold
                    "
                  />
                  {company.email}
                </a>
              </li>
            </ul>
            <a
              href="https://www.linkedin.com/company/ssl-group"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                mt-4
                text-sm text-metallic/80 hover:text-white
                gap-2
              "
              aria-label="LinkedIn"
            >
              <svg
                className="
                  h-5 w-5
                "
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow on LinkedIn
              <ArrowUpRight
                className="
                  h-3 w-3
                "
              />
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
