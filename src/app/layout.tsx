import "./globals.css";
import { Header } from '../components/header'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header/>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
