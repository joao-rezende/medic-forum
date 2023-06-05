import Head from "next/head";
import Menu from "./menu";

const Public = ({ title = "", children }) => {
  if (title != "") title += " - ";
  title += "Fórum Médico";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Menu />
      <main style={{ height: "calc(100vh - 97px)" }}>
        {children}
      </main>
    </>
  );
}

export default Public;