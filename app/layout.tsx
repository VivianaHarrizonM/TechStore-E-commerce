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
        
          <CartProvider>
            <AuthProvider>
              <Navbar />
              <Container>
                {children}
              </Container>
            </AuthProvider>
          </CartProvider>
        
      </body>
    </html>
  );
}
