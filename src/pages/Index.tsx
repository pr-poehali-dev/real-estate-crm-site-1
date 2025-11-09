import { useState } from "react";
import Navbar from "@/components/Navbar";
import Home from "./Home";
import Catalog from "./Catalog";
import Services from "./Services";
import About from "./About";
import Team from "./Team";
import Contacts from "./Contacts";
import CRM from "./CRM";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "catalog":
        return <Catalog />;
      case "services":
        return <Services />;
      case "about":
        return <About />;
      case "team":
        return <Team />;
      case "blog":
        return <div className="min-h-screen pt-32 pb-20"><div className="container mx-auto px-4"><h1 className="text-5xl font-bold">Блог и новости</h1><p className="text-xl text-muted-foreground mt-4">Раздел в разработке</p></div></div>;
      case "contacts":
        return <Contacts />;
      case "crm":
        return <CRM />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </>
  );
};

export default Index;