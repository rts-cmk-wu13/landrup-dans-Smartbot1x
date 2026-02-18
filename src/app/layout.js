
import { Toaster } from "react-hot-toast";
import "./globals.css";



export const metadata = {
  title: {
    template: "%s | Landrup Dans ",
    default: "Landrup Dans ",
  },
  description:
    "Velkommen til Landrup Dans, din destination for dans og bevægelse. Uanset om du er nybegynder eller erfaren danser, har vi et bredt udvalg af dansekurser og workshops, der passer til alle niveauer. Vores passionerede instruktører guider dig gennem forskellige dansegenrer, fra salsa og tango til hip-hop og ballroom. Kom og oplev glæden ved dans i vores varme og indbydende atmosfære. Tilmeld dig i dag og lad os danse sammen!",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Toaster
          position="top-right"

        />
        {children}
      </body>
    </html>
  );
}
