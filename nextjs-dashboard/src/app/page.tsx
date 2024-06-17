import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import StocksDashboard from "@/components/Dashboard/StocksDashboard";

export const metadata: Metadata = {
  title: "WealthIQ - Dashboard de Gestión de Carteras de Inversión",
  description:
    "WealthIQ es el mejor dashboard de gestión de carteras de inversión. ¡Optimiza tus inversiones con nuestras herramientas inteligentes!",
};


export default function Home() {
  return (
    <>
      <DefaultLayout>
        <StocksDashboard />
      </DefaultLayout>
    </>
  );
}
