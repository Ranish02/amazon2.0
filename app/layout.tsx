"use client";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../app/[component]/[redux]/store";
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Sabbai</title>
        <meta name="description" content="Shop Smarter at Sabbai: Your Gateway to Quality Products in Nepal. Developed by Ranish Kunwar, Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <SessionProvider>
          <Provider store={store}>{children}</Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
