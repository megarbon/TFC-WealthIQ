import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import StocksDashboard from "@/components/Dashboard/StocksDashboard";

export const metadata: Metadata = {
  title:
    "WealthIQ - Stocks Dashboard",
  description: "Dashboard personal donde controlar las cuentas personales",
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
