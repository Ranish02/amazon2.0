"use client";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { store } from "../app/[component]/[redux]/store";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Amazon 2.0</title>
      </head>
      <body>
        <SessionProvider>
          <Provider store={store}>{children}</Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
