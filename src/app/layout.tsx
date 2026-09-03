
import "./globals.css";
import StarBackground from "@/components/StarBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#030114] text-white antialiased">

        {/* GLOBAL STAR BACKGROUND */}
        <StarBackground />

        {/* ALL WEBSITE CONTENT */}
        <main className="relative z-10">
         
        {children}
        </main>

      </body>
    </html>
  );
}