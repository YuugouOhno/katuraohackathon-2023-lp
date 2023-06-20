import './globals.css'
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>かつらおハッカソン</title>
        <meta name="description" content="かつらおハッカソンの公式ページです。" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:image:secure_url" content="/thumbnail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
