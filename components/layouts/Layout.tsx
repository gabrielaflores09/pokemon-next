import Head from "next/head";
import { FC } from "react";
import Navbar from "../iu/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

const Layout: FC<LayoutProps> = ({ children, title }: LayoutProps) => {
    
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Gabriela Flores" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta property="og:description" content={`Esta es la page sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      {/* Navbar */}
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
