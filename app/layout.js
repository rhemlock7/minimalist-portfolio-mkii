// React dependecies
import { Inter } from 'next/font/google'
// React Components
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
// Styling
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ryan Hemlock',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://use.typekit.net/vcu5wsc.css" />
      
      <body className={inter.className}>



        {/* Navigation */}
        <Navigation />

        {/* Body */}
        {children}
        
        {/* Footer */}
        <Footer />



        </body>

      

    </html>
  )
}
