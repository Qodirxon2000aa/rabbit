import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rodentia Research Labs',
  description: 'EXPERIMENTAL ANALYTICS',
  generator: 'umayr-dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
