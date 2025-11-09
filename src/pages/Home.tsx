import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Home = () => {
  const features = [
    {
      icon: "Building2",
      title: "Элитная недвижимость",
      description: "Эксклюзивные объекты премиум-класса в лучших локациях"
    },
    {
      icon: "Shield",
      title: "Юридическая чистота",
      description: "Полное сопровождение сделок и проверка документов"
    },
    {
      icon: "Users",
      title: "Персональный подход",
      description: "Индивидуальное обслуживание каждого клиента"
    },
    {
      icon: "Award",
      title: "20+ лет на рынке",
      description: "Проверенная репутация и тысячи успешных сделок"
    }
  ];

  const stats = [
    { value: "2000+", label: "Успешных сделок" },
    { value: "500+", label: "Объектов в портфеле" },
    { value: "98%", label: "Довольных клиентов" },
    { value: "20+", label: "Лет опыта" }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHoiIHN0cm9rZT0iIzhCNUNGNiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground leading-tight">
            Элитная недвижимость<br />
            <span className="text-primary">премиум-класса</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Эксклюзивные объекты, персональный сервис и безупречная репутация на рынке элитной недвижимости
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="Search" className="mr-2" size={20} />
              Подобрать объект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">Наши преимущества</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Почему выбирают нас</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name={feature.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Готовы найти свой идеальный дом?</h2>
          <p className="text-xl mb-8 opacity-90">Свяжитесь с нами для персональной консультации</p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Оставить заявку
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
