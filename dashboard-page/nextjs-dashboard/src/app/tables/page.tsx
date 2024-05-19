import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import AllPortfoliosTable from "@/components/Tables/AllPortfoliosTable";
import TableThree from "@/components/Tables/TableThree";
import SinglePortfolioTable from "@/components/Tables/SinglePortfolioTable";
import NewInvestmentForm from "@/components/Tables/NewInvestmentForm";
import AnalizeButton from "@/components/Analize/analize";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <AllPortfoliosTable />
        <SinglePortfolioTable />
        <NewInvestmentForm portfolioId={1}/>
        <AnalizeButton />
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
