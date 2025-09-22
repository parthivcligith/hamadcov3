import type { Metadata } from "next"
import MarineExportsClientPage from "./MarineExportsClientPage"

export const metadata: Metadata = {
  title: "Marine Exports | Trusted Marine Spare Parts Exporter - Hamad Marine",
  description:
    "HAMAD MARINE specializes in exporting high-quality marine spare parts to Maldives and Saudi Arabia. Reliable parts delivery with OEM suppliers and international quality standards.",
  keywords: [
    "marine exports",
    "marine spare parts",
    "ship parts export",
    "marine equipment",
    "Maldives marine parts",
    "Saudi Arabia marine exports",
    "marine supplies",
    "ship maintenance",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Marine Exports | Trusted Marine Spare Parts Exporter - Hamad Marine",
    description:
      "HAMAD MARINE specializes in exporting high-quality marine spare parts to Maldives and Saudi Arabia. Reliable parts delivery with OEM suppliers and international quality standards.",
    type: "website",
  },
}

export default function MarineExportsPage() {
  return <MarineExportsClientPage />
}
