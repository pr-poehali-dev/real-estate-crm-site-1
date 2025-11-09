import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">О компании</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
          Premium Estate — ведущее агентство элитной недвижимости с 20-летней историей успеха
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Наша миссия</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Мы помогаем нашим клиентам находить идеальную недвижимость премиум-класса, 
              обеспечивая безупречный сервис на каждом этапе сделки.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наша команда экспертов обладает глубокими знаниями рынка элитной недвижимости 
              и индивидуальным подходом к каждому клиенту.
            </p>
          </div>
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold mb-2">2000+</div>
                  <p className="text-primary-foreground/80">Успешных сделок</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <p className="text-primary-foreground/80">Объектов в портфеле</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">20+</div>
                  <p className="text-primary-foreground/80">Лет на рынке</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-4xl font-bold mb-8 text-center">Наши ценности</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "Shield", title: "Надежность", desc: "Гарантия юридической чистоты каждой сделки" },
            { icon: "Heart", title: "Забота", desc: "Персональное внимание к каждому клиенту" },
            { icon: "Award", title: "Профессионализм", desc: "Высочайший уровень экспертизы" }
          ].map((value, index) => (
            <Card key={index} className="text-center p-8">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon name={value.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
