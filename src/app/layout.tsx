import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { config as fontawesome } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
fontawesome.autoAddCss = false
import ogImage from "./og-image.jpg"
import appleTouchIcon from "./apple-touch-icon.png"
import favicon32 from "./favicon-32x32.png"
import resume from './resume';
import { StaticImageData } from 'next/image'

const PUBLIC_URL = process.env.PUBLIC_URL
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: resume.basics.fullName,
  description: resume.basics.description,
  themeColor: "#acdfa1",
  applicationName: resume.basics.fullName,
  icons: {
    apple: describeIcon(appleTouchIcon),
    icon: describeIcon(favicon32),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: resume.basics.fullName,
    description: resume.basics.description,
    type: "profile",
    url: PUBLIC_URL,
    images: [
      ogImage.src
    ],
    firstName: resume.basics.firstName,
    lastName: resume.basics.lastName,
    countryName: resume.basics.location.countryCode,
    emails: resume.basics.email,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script src="/static/scroll2css.js" async />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
function describeIcon(icon: StaticImageData): import("next/dist/lib/metadata/types/metadata-types").IconDescriptor {
  return  {
    url: icon.src,
    type: "image/png",
    sizes: `${icon.width}x${icon.height}`
  }
}

