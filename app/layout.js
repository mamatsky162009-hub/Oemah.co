import "./globals.css";

export const metadata = {
  title: "Oemah.co | A Little Taste of Home",
  description:
    "Discover your favorite food and drinks at Oemah.co.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
