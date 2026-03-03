import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sathveek Nalla — AI Systems Architect & Automation Engineer",
  description:
    "I design and build intelligent systems that solve real-world complexity — AI rule engines, trading automation, simulation systems, and full-stack dashboards.",
  openGraph: {
    title: "Sathveek Nalla — AI Systems Architect & Automation Engineer",
    description:
      "AI systems, automation, trading logic, simulation, and performance-focused full-stack engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark"]}
        >
          <div className="hidden lg:block">
            <CustomCursor />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
