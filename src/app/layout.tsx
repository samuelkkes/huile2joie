import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import {DM_Sans, DM_Mono} from "next/font/google";
import Providers from "@/providers/providers";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import './globals.css'
import {Layout} from "@/components/layout";

const dmSans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-dm-sans',
});

const dmMono = DM_Mono({
    subsets: ['latin'],
    display: 'swap',
    weight: ["500"],
    variable: '--font-dm-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>
      <Providers>
          <div className="h-full">
              <Header />
              <Layout>
                  {children}
              </Layout>
              <Footer />
          </div>
      </Providers>
      </body>
      <PrismicPreview repositoryName={repositoryName}/>
    </html>
  );
}
