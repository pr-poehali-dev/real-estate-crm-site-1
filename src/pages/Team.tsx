import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  experience: string;
  phone: string;
  email: string;
  specialization: string[];
  avatar: string;
}

const Team = () => {
  const team: TeamMember[] = [
    {
      id: 1,
      name: "Александра Волкова",
      position: "Генеральный директор",
      department: "Руководство",
      experience: "15 лет",
      phone: "+7 (495) 123-45-67",
      email: "volkova@premiumestate.ru",
      specialization: ["Стратегия", "Управление", "VIP-клиенты"],
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Дмитрий Соколов",
      position: "Директор по продажам",
      department: "Продажи",
      experience: "12 лет",
      phone: "+7 (495) 123-45-68",
      email: "sokolov@premiumestate.ru",
      specialization: ["Элитная недвижимость", "Переговоры", "Инвестиции"],
      avatar: "👨‍💼"
    },
    {
      id: 3,
      name: "Елена Петрова",
      position: "Ведущий брокер",
      department: "Продажи",
      experience: "10 лет",
      phone: "+7 (495) 123-45-69",
      email: "petrova@premiumestate.ru",
      specialization: ["Пентхаусы", "Апартаменты", "Центр города"],
      avatar: "👩‍💻"
    },
    {
      id: 4,
      name: "Михаил Лебедев",
      position: "Старший брокер",
      department: "Продажи",
      experience: "8 лет",
      phone: "+7 (495) 123-45-70",
      email: "lebedev@premiumestate.ru",
      specialization: ["Загородная недвижимость", "Виллы", "Таунхаусы"],
      avatar: "👨‍💻"
    },
    {
      id: 5,
      name: "Ольга Морозова",
      position: "Юрист",
      department: "Юридический",
      experience: "9 лет",
      phone: "+7 (495) 123-45-71",
      email: "morozova@premiumestate.ru",
      specialization: ["Сопровождение сделок", "Договоры", "Проверка документов"],
      avatar: "👩‍⚖️"
    },
    {
      id: 6,
      name: "Андрей Новиков",
      position: "Финансовый аналитик",
      department: "Финансы",
      experience: "7 лет",
      phone: "+7 (495) 123-45-72",
      email: "novikov@premiumestate.ru",
      specialization: ["Инвестиционный анализ", "Оценка", "Ипотека"],
      avatar: "👨‍💼"
    },
    {
      id: 7,
      name: "Мария Белова",
      position: "Менеджер по работе с клиентами",
      department: "Клиентский сервис",
      experience: "6 лет",
      phone: "+7 (495) 123-45-73",
      email: "belova@premiumestate.ru",
      specialization: ["CRM", "Консультации", "Поддержка клиентов"],
      avatar: "👩"
    },
    {
      id: 8,
      name: "Сергей Орлов",
      position: "Маркетолог",
      department: "Маркетинг",
      experience: "5 лет",
      phone: "+7 (495) 123-45-74",
      email: "orlov@premiumestate.ru",
      specialization: ["Digital-маркетинг", "Реклама", "Продвижение"],
      avatar: "👨"
    }
  ];

  const departments = ["Все", "Руководство", "Продажи", "Юридический", "Финансы", "Клиентский сервис", "Маркетинг"];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Наша команда</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Профессионалы с многолетним опытом работы на рынке элитной недвижимости
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          {departments.map((dept, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="rounded-full"
            >
              {dept}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card 
              key={member.id}
              className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                {member.avatar}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <Badge variant="secondary" className="mb-4">
                  {member.department}
                </Badge>

                <div className="space-y-3 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Award" size={14} />
                    <span>Опыт: {member.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Phone" size={14} />
                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Mail" size={14} />
                    <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors truncate">
                      {member.email}
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Специализация:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialization.map((spec, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full gap-2">
                  <Icon name="MessageCircle" size={16} />
                  Связаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-16 bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <Icon name="Users" className="mx-auto mb-6" size={64} />
            <h2 className="text-4xl font-bold mb-4">Хотите присоединиться к нашей команде?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Мы всегда ищем талантливых профессионалов в сфере недвижимости
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              <Icon name="Briefcase" size={20} />
              Открытые вакансии
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Team;
