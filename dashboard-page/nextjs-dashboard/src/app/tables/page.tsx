import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import AllPortfoliosTable from "@/components/Tables/AllPortfoliosTable";
import TableThree from "@/components/Tables/TableThree";
import SinglePortfolioTable from "@/components/Tables/SinglePortfolioTable";
import NewInvestmentForm from "@/components/Tables/NewInvestmentForm";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
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
        <NewInvestmentForm portfolioId={2}/>
        <TableOne />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
