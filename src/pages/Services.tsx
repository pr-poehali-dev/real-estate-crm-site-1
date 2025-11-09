import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Search",
      title: "Подбор недвижимости",
      description: "Поиск объектов по вашим критериям с учетом всех пожеланий и бюджета"
    },
    {
      icon: "FileCheck",
      title: "Юридическое сопровождение",
      description: "Полная проверка документов и сопровождение сделки на всех этапах"
    },
    {
      icon: "Key",
      title: "Управление недвижимостью",
      description: "Комплексное управление вашими объектами недвижимости"
    },
    {
      icon: "TrendingUp",
      title: "Инвестиционный анализ",
      description: "Оценка инвестиционной привлекательности объектов"
    },
    {
      icon: "Home",
      title: "Ипотечное кредитование",
      description: "Помощь в получении ипотеки на выгодных условиях"
    },
    {
      icon: "Users",
      title: "Консультации",
      description: "Экспертные консультации по всем вопросам недвижимости"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Наши услуги</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
          Полный спектр услуг для комфортной работы с недвижимостью премиум-класса
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Icon name={service.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
