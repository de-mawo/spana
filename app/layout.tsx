import "../styles/globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-white dark:bg-gray-800">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
