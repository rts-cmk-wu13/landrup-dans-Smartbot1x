
import "./globals.css";



export const metadata = {

  title: {

    template: "%s | Landrup Dans ",
    default: "Landrup Dans ",
  },
  description:
    "Velkommen til Landrup Dans, din destination for dans og bevægelse. ",
  themeColor: "#e9e9e9",

};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background">

        {children}
      </body>
    </html>
  );
}
