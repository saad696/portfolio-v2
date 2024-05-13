import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';
import { Providers } from './providers';
import Header from '@/components/Header';
import Template from './template';
import BottomBar from '@/components/BottomBar';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '800'] });

export const metadata: Metadata = {
    title: "SS Portfolio",
    description:
      "Full Stack Developer & Life Enthusiast: I’m the guy who’s been diving into code for over 3 years, playing around with cool stuff like MERN and MEAN.",
    openGraph: {
      title: "SS Portfolio",
      siteName: "SS Portfolio",
      url: "https://sdesaadshaikh.vercel.app",
      type: "website",
      description:
        "Full Stack Developer & Life Enthusiast: I’m the guy who’s been diving into code for over 3 years, playing around with cool stuff like MERN and MEAN.",
      images: [
        {
          url: "https://res.cloudinary.com/dkjo8w9u8/image/upload/v1715601375/Screenshot_2024-05-13_172543_z2juxo.png",
          alt: "Portfolio logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "SS Portfolio",
      description:
        "Full Stack Developer & Life Enthusiast: I’m the guy who’s been diving into code for over 3 years, playing around with cool stuff like MERN and MEAN.",
      images: [
        {
          url: "https://res.cloudinary.com/dkjo8w9u8/image/upload/v1715601375/Screenshot_2024-05-13_172543_z2juxo.png",
          alt: "Portfolio logo",
        },
      ],
    },
  };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${poppins.className} relative`}>
                <Providers>
                    <Header />
                    <Template>{children}</Template>
                    <BottomBar />
                </Providers>
            </body>
        </html>
    );
}
