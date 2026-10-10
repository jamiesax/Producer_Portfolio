import './globals.css';
import { AudioProvider } from '@/context/AudioContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalAudioPlayer from '@/components/GlobalAudioPlayer';

export const metadata = {
  title: 'Music Producer Portfolio & Studio Services',
  description: 'Custom Beat Production, Vocal Arrangement, and Mixing & Mastering.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased min-h-screen flex flex-col">
        <AudioProvider>
          <Navbar />
          <main className="flex-1 pb-24">{children}</main>
          <GlobalAudioPlayer />
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}