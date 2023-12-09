import { Inter } from 'next/font/google'

import Header from '../components/header/header.component';

const inter = Inter({ subsets: ['latin'] })

import '../scss/global.scss';

export const metadata = {
  title: 'AdventOfCode2023 EHJ',
  description: 'fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pane pane__main">
          <div className="paneInner">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
