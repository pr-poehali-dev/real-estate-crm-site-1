import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Contacts = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
  };

  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      link: "tel:+74951234567"
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@premiumestate.ru",
      link: "mailto:info@premiumestate.ru"
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "Москва, Тверская ул., 15",
      link: "#"
    },
    {
      icon: "Clock",
      title: "Режим работы",
      value: "Пн-Пт: 9:00 - 20:00, Сб-Вс: 10:00 - 18:00",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Контакты</h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
          Свяжитесь с нами любым удобным способом
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-8">Наши контакты</h2>
            
            {contacts.map((contact, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={contact.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{contact.title}</p>
                      {contact.link !== "#" ? (
                        <a 
                          href={contact.link}
                          className="text-lg font-semibold hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Социальные сети</h3>
                <div className="flex gap-4">
                  {["Facebook", "Instagram", "Linkedin", "Youtube"].map((social, index) => (
                    <button
                      key={index}
                      className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                    >
                      <Icon name={social as any} size={20} />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Оставить заявку</h2>
              <p className="text-muted-foreground mb-8">
                Заполните форму и мы свяжемся с вами в течение 15 минут
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов" 
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+7 (999) 123-45-67" 
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="example@email.com"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Интересующий объект</Label>
                  <Input 
                    id="interest" 
                    placeholder="Например: Пентхаус в центре"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о ваших пожеланиях..."
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full h-12 text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden">
          <div className="h-96 bg-muted flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" className="mx-auto mb-4 text-primary" size={48} />
              <p className="text-xl font-semibold">Карта офиса</p>
              <p className="text-muted-foreground">Москва, Тверская ул., 15</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;
