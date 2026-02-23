
import NavbarFooter from "@/components/navbar";
import "./globals.css";
import { Suspense } from "react";
import LoadingSpinner from "./loading";



export const viewport = {
  themeColor: 'red',
}

export const metadata = {

  title: {

    template: "%s | Landrup Dans ",
    default: "Landrup Dans ",
  },
  description:
    "Velkommen til Landrup Dans, din destination for dans og bevægelse. ",


};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <main className="pb-24">
            {children}
          </main>
        </Suspense>
        <NavbarFooter />

      </body>
    </html >
  );
}
