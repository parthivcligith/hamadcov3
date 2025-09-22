import type { Metadata } from "next"
import AeronauticalExportsClientPage from "./AeronauticalExportsClientPage"

export const metadata: Metadata = {
  title: "Aeronautical Parts Exports | Aircraft Components & Aviation Spare Parts - Hamadco",
  description:
    "Hamadco specializes in exporting high-precision aircraft components and aviation spare parts globally. Reliable delivery with certified suppliers and international aviation standards.",
  keywords: [
    "aeronautical exports",
    "aircraft parts",
    "aviation spare parts",
    "aircraft components",
    "aviation exports",
    "aerospace parts",
    "aircraft maintenance",
    "aviation supplies",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Aeronautical Parts Exports | Aircraft Components & Aviation Spare Parts - Hamadco",
    description:
      "Hamadco specializes in exporting high-precision aircraft components and aviation spare parts globally. Reliable delivery with certified suppliers and international aviation standards.",
    type: "website",
  },
}

export default function AeronauticalExportsPage() {
  return <AeronauticalExportsClientPage />
}
