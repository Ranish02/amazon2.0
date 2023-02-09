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
      <body>{children}</body>
    </html>
  );
}
