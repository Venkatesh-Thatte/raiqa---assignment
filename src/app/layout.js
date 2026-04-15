import "./globals.css";

export const metadata = {
  title: "Home Chef Meals",
  description: "Browse and select meals from home chefs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
