import { inter } from "@/styles/fonts";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export const metadata = {
  title: "Zulu - Stream TV | Movies",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-dark`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
