import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import { QueryProvider } from "@/components/providers/query.provider";
import { ThemeProvider } from "@/components/providers/theme.provider";

import "./globals.css";
import "./voxrel-aurora-theme.css";

const outfit = Outfit({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-display",
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-body",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-data",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Voxrel | Super Admin",
    description: "Voxrel is a platform for transcripting and labeling audio and video files.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${outfit.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased aurora-shell`}>
                <QueryProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        forcedTheme="dark"
                        disableTransitionOnChange
                    >
                        {children}
                    </ThemeProvider>
                </QueryProvider>
            </body>
        </html>
    );
}
