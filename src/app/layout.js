
import "./globals.css";


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
      <body className="bg-background">

        {children}
      </body>
    </html>
  );
}
