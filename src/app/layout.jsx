
import "./globals.css";

export const metadata = {
  title: "DVD screen saver thing",
  description: "Tutorial purposes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
