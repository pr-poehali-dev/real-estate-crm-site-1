import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Главная", icon: "Home" },
    { id: "catalog", label: "Каталог", icon: "Building2" },
    { id: "services", label: "Услуги", icon: "Briefcase" },
    { id: "about", label: "О компании", icon: "Info" },
    { id: "team", label: "Команда", icon: "Users" },
    { id: "blog", label: "Блог", icon: "FileText" },
    { id: "contacts", label: "Контакты", icon: "MapPin" }
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleNavigation("home")}
          >
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Building2" className="text-primary-foreground" size={24} />
            </div>
            <div>
              <div className="text-xl font-bold">PREMIUM ESTATE</div>
              <div className="text-xs text-muted-foreground">Элитная недвижимость</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                onClick={() => handleNavigation(item.id)}
                className="gap-2"
              >
                <Icon name={item.icon} size={16} />
                {item.label}
              </Button>
            ))}
            <Button 
              variant={currentPage === "crm" ? "default" : "outline"}
              className="ml-4 gap-2"
              onClick={() => handleNavigation("crm")}
            >
              <Icon name="LayoutDashboard" size={16} />
              CRM
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? "default" : "ghost"}
                    onClick={() => handleNavigation(item.id)}
                    className="w-full justify-start gap-3 text-lg h-14"
                  >
                    <Icon name={item.icon} size={20} />
                    {item.label}
                  </Button>
                ))}
                <Button 
                  variant={currentPage === "crm" ? "default" : "outline"}
                  className="w-full gap-3 text-lg h-14 mt-4"
                  onClick={() => handleNavigation("crm")}
                >
                  <Icon name="LayoutDashboard" size={20} />
                  CRM Система
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;