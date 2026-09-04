
// import "./globals.css";
// import StarBackground from "@/components/StarBackground";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
     
// <body className="min-h-screen antialiased">



//         {/* GLOBAL STAR BACKGROUND */}
//         <StarBackground />

//         {/* ALL WEBSITE CONTENT */}
//         <main className="relative z-10">
         
//         {children}
//         </main>

//       </body>
//     </html>
//   );
// }


import "./globals.css";
import StarBackground from "@/components/StarBackground";
import ThemeProvider from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">

        <ThemeProvider>
          
          {/* GLOBAL STAR BACKGROUND */}
          <StarBackground />

          {/* ALL WEBSITE CONTENT */}
          <main className="relative z-10">
            {children}
          </main>

        </ThemeProvider>

      </body>
    </html>
  );
}

