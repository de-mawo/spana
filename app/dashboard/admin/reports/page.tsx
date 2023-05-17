import React from "react";
import Container from "../../../Container";
import DownloadBalances from "./DownloadBalances";
import DownloadLeaves from "./DownloadLeaves";

const Reports = () => {
  return (
    <Container>
      <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        <DownloadBalances pageProps={undefined} />
        <DownloadLeaves pageProps={undefined}/>
      </section>
    </Container>
  );
};

export default Reports;
