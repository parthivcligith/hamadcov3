"use client"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer
      className="bg-slate-900 text-white border-t border-slate-700"
      aria-labelledby="site-footer-heading"
      style={{ backgroundColor: "#0f172a !important", color: "#ffffff !important" }}
    >
      <h2 id="site-footer-heading" className="sr-only">
        Site footer
      </h2>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/placeholder-logo.svg" alt="Hamadco logo" className="h-8 w-auto" />
              <span className="text-lg font-semibold text-white" style={{ color: "#ffffff !important" }}>
                Hamadco
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed" style={{ color: "#d1d5db !important" }}>
              Two decades of export excellence across five sectors. We deliver quality, precision, and reliability to
              partners worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-200" style={{ color: "#e5e7eb !important" }}>
              Industries
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  className="hover:text-green-400 transition-colors text-gray-300"
                  href="/plastics"
                  style={{ color: "#d1d5db !important" }}
                >
                  Plastics
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-400 transition-colors text-gray-300"
                  href="/rubber"
                  style={{ color: "#d1d5db !important" }}
                >
                  Rubber
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-400 transition-colors text-gray-300"
                  href="/electronics"
                  style={{ color: "#d1d5db !important" }}
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-400 transition-colors text-gray-300"
                  href="/chemicals"
                  style={{ color: "#d1d5db !important" }}
                >
                  Chemicals
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-400 transition-colors text-gray-300"
                  href="/agriculture"
                  style={{ color: "#d1d5db !important" }}
                >
                  Agriculture
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-200" style={{ color: "#e5e7eb !important" }}>
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  className="hover:text-green-400 transition-colors text-gray-300"
                  href="/about"
                  style={{ color: "#d1d5db !important" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-400 transition-colors text-gray-300"
                  href="/quality"
                  style={{ color: "#d1d5db !important" }}
                >
                  Quality &amp; Compliance
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-400 transition-colors text-gray-300"
                  href="/logistics"
                  style={{ color: "#d1d5db !important" }}
                >
                  Logistics
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-green-400 transition-colors text-gray-300"
                  href="/contact"
                  style={{ color: "#d1d5db !important" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gray-200" style={{ color: "#e5e7eb !important" }}>
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>
                <span className="block text-gray-300" style={{ color: "#d1d5db !important" }}>
                  Email: info@hamadco.in
                </span>
              </li>
              <li>
                <span className="block text-gray-300" style={{ color: "#d1d5db !important" }}>
                  Phone: +91 8086890111
                </span>
              </li>
              <li>
                <span className="block text-gray-300" style={{ color: "#d1d5db !important" }}>
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400" style={{ color: "#9ca3af !important" }}>
            © {new Date().getFullYear()} Hamadco. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex items-center gap-4 text-xs text-gray-400">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-green-400 transition-colors text-gray-400"
                  style={{ color: "#9ca3af !important" }}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-green-400 transition-colors text-gray-400"
                  style={{ color: "#9ca3af !important" }}
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="hover:text-green-400 transition-colors text-gray-400"
                  style={{ color: "#9ca3af !important" }}
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
