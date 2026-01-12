import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar/>
      <main>
        {children}
      </main>
      <ScrollToTopButton/>
      <iframe
        src="https://thosam1.substack.com/embed"
        style={{
          width: '100%',
          height: '320px',
          borderTop: '2px solid #EEE',
          background: 'white',
        }}
        frameBorder={0}
        scrolling="no"
      >
      </iframe>
      <Footer/>
    </>
  );
}
