import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Container from "@/components/Container";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <Container>
              {children}
            </Container>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
