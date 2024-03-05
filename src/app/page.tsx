import { Header, Grid, MainBanner } from "./commonFunctions";
import Image from "next/image";

export default function Home() {
    const defaultProducts = [
        {id: 0, name: "Arroz Tres Delicias", price: 11, imagePath: "/arroz_3_delicias.jpg"},
        {id: 1, name: "Pollo con almendras", price: 8, imagePath: "/pollo_almendras.jpg"},
        {id: 2, name: "Bambú salteado", price: 12, imagePath: "/bambu_y_setas.jpg"},
        {id: 3, name: "Pato al pekinés", price: 5, imagePath: "/pato_pekines.png"},
        {id: 2, name: "Rollitos de primavera", price: 5, imagePath: "/rollitos_primavera.jpg"},
        {id: 3, name: "Pollo Sichuan", price: 5, imagePath: "/pollo_sichuan.jpg"},
        {id: 2, name: "Sopa Wantan", price: 12, imagePath: "/sopa_wantan.jpg"},
        {id: 3, name: "Galletas de la fortuna", price: 0, imagePath: "/galletas.png"},
    ]

  return (
      <main className="flex min-h-screen min-w-screen bg-gray-50 dark:bg-gray-900 flex-col items-center">
          <Header>
          </Header>
          <MainBanner algorithm={""}>
          </MainBanner>
          <Grid items={defaultProducts}>
          </Grid>
      </main>
  );
}
