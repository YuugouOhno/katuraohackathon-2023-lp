import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const siteName= 'かつらおハッカソン';
const description = 'かつらおハッカソンの公式ページです。';
const url = 'https://katurao-hackathon-2023.vercel.app/';

export const metadata = {
  title: siteName,
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: siteName,
  //   description,
  //   site: '@サイト用アカウントのTwitterID',
  //   creator: '@作者のTwitterID',
  // },
  // verification: {
  //   google: 'サーチコンソールのやつ',
  // },
  alternates: {
    canonical: url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
