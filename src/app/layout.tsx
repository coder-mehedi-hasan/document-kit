"use client"
import { SessionProvider } from 'next-auth/react';
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Header from '@/components/Header';
const inter = Inter({ subsets: ["latin"] });
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Script from 'next/script';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <div className='container'>
              <Header></Header>
              {children}
            </div>
          </SessionProvider>
        </QueryClientProvider>
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></Script>
      </body>
    </html>
  );
}
