import "./globals.css";

export const metadata = {
  title: "Shashi Suman | Full Stack Software Developer",
  description: "Portfolio of Shashi Suman — Full Stack Software Developer with 3.5+ years of experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
