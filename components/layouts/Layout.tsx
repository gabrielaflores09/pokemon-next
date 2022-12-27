import Head from "next/head";
import { FC } from "react";
import Navbar from "../iu/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

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
      </Head>
      {/* Navbar */}
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
