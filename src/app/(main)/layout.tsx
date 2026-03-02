import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import ChatBubble from '@/components/Chat/ChatBubble';

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
      <ChatBubble/>
      {/* Light mode: Substack iframe */}
      <div className="border-t-2 border-border-default bg-bg-base dark:hidden">
        <iframe
          src="https://thosam1.substack.com/embed"
          style={{
            width: '100%',
            height: '320px',
          }}
          frameBorder={0}
          scrolling="no"
          title="Newsletter signup"
        >
        </iframe>
      </div>
      {/* Dark mode: Styled subscribe CTA */}
      <div className="hidden dark:flex border-t-2 border-border-default bg-bg-base flex-col items-center py-16 px-8">
        <h3 className="text-text-primary text-2xl font-semibold mb-3">
          💌 Subscribe to my Newsletter
        </h3>
        <p className="text-text-secondary mb-6 text-center max-w-md">
          Sign up for my monthly newsletter — interesting ideas and what I&apos;ve been working on
        </p>
        <a
          href="https://thosam1.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-6 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors"
        >
          Subscribe on Substack
        </a>
      </div>
      <Footer/>
    </>
  );
}
