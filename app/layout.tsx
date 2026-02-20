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
      <body className="bg-slate-900 text-white antialiased">
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
