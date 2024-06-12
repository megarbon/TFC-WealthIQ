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
  title: "WealthIQ - Dashboard de Gestión de Carteras de Inversión",
  description:
    "WealthIQ es el mejor dashboard de gestión de carteras de inversión. ¡Optimiza tus inversiones con nuestras herramientas inteligentes!",
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
