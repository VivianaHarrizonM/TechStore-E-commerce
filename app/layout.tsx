import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <CartProvider>
          <Navbar />
          <Container>
            {children}
          </Container>
        </CartProvider>
      </body>
    </html>
  );
}
