import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface Client {
  id: number;
  name: string;
  phone: string;
  email: string;
  status: "new" | "active" | "closed";
  interest: string;
  budget: string;
  date: string;
}

interface Deal {
  id: number;
  client: string;
  property: string;
  amount: number;
  status: "negotiation" | "contract" | "completed";
  date: string;
}

const CRM = () => {
  const [clients] = useState<Client[]>([
    {
      id: 1,
      name: "Иванов Иван Иванович",
      phone: "+7 (999) 123-45-67",
      email: "ivanov@email.com",
      status: "active",
      interest: "Пентхаус в центре",
      budget: "40-50 млн ₽",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Петрова Мария Сергеевна",
      phone: "+7 (999) 234-56-78",
      email: "petrova@email.com",
      status: "new",
      interest: "Вилла у моря",
      budget: "80-90 млн ₽",
      date: "2024-01-20"
    },
    {
      id: 3,
      name: "Сидоров Петр Алексеевич",
      phone: "+7 (999) 345-67-89",
      email: "sidorov@email.com",
      status: "active",
      interest: "Апартаменты премиум",
      budget: "25-30 млн ₽",
      date: "2024-01-18"
    }
  ]);

  const [deals] = useState<Deal[]>([
    {
      id: 1,
      client: "Иванов И.И.",
      property: "Пентхаус в центре",
      amount: 45000000,
      status: "negotiation",
      date: "2024-01-15"
    },
    {
      id: 2,
      client: "Сидоров П.А.",
      property: "Апартаменты премиум",
      amount: 25000000,
      status: "contract",
      date: "2024-01-18"
    },
    {
      id: 3,
      client: "Козлова А.В.",
      property: "Таунхаус",
      amount: 35000000,
      status: "completed",
      date: "2024-01-10"
    }
  ]);

  const stats = [
    { title: "Всего клиентов", value: "127", icon: "Users", change: "+12%" },
    { title: "Активные сделки", value: "23", icon: "TrendingUp", change: "+5%" },
    { title: "Выручка (месяц)", value: "156 млн ₽", icon: "DollarSign", change: "+18%" },
    { title: "Конверсия", value: "34%", icon: "Target", change: "+3%" }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; variant: "default" | "secondary" | "outline" }> = {
      new: { label: "Новый", variant: "default" },
      active: { label: "Активный", variant: "secondary" },
      closed: { label: "Закрыт", variant: "outline" },
      negotiation: { label: "Переговоры", variant: "default" },
      contract: { label: "Договор", variant: "secondary" },
      completed: { label: "Завершена", variant: "outline" }
    };
    return variants[status];
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-5xl font-bold mb-2">CRM Система</h1>
            <p className="text-xl text-muted-foreground">Управление клиентами и сделками</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2">
                <Icon name="Plus" size={20} />
                Добавить клиента
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Новый клиент</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">ФИО</Label>
                    <Input id="name" placeholder="Иванов Иван Иванович" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="client@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">Интересующий объект</Label>
                  <Input id="interest" placeholder="Пентхаус в центре" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Бюджет</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите диапазон" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="20-30">20-30 млн ₽</SelectItem>
                      <SelectItem value="30-50">30-50 млн ₽</SelectItem>
                      <SelectItem value="50-80">50-80 млн ₽</SelectItem>
                      <SelectItem value="80+">80+ млн ₽</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Заметки</Label>
                  <Textarea id="notes" placeholder="Дополнительная информация..." />
                </div>
                <Button className="w-full">Сохранить клиента</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={stat.icon} className="text-primary" size={24} />
                  </div>
                  <Badge variant="secondary">{stat.change}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="clients" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="clients" className="gap-2">
              <Icon name="Users" size={16} />
              Клиенты
            </TabsTrigger>
            <TabsTrigger value="deals" className="gap-2">
              <Icon name="Briefcase" size={16} />
              Сделки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="clients">
            <Card>
              <CardHeader>
                <CardTitle>База клиентов</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ФИО</TableHead>
                      <TableHead>Контакты</TableHead>
                      <TableHead>Интерес</TableHead>
                      <TableHead>Бюджет</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Дата</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {clients.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell className="font-medium">{client.name}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div className="flex items-center gap-1 mb-1">
                              <Icon name="Phone" size={12} />
                              {client.phone}
                            </div>
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Icon name="Mail" size={12} />
                              {client.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{client.interest}</TableCell>
                        <TableCell>{client.budget}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadge(client.status).variant}>
                            {getStatusBadge(client.status).label}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(client.date).toLocaleDateString("ru-RU")}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <Icon name="MoreVertical" size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deals">
            <Card>
              <CardHeader>
                <CardTitle>Активные сделки</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Клиент</TableHead>
                      <TableHead>Объект</TableHead>
                      <TableHead>Сумма</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Дата</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {deals.map((deal) => (
                      <TableRow key={deal.id}>
                        <TableCell className="font-medium">{deal.client}</TableCell>
                        <TableCell>{deal.property}</TableCell>
                        <TableCell className="font-semibold text-primary">
                          {formatPrice(deal.amount)}
                        </TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadge(deal.status).variant}>
                            {getStatusBadge(deal.status).label}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(deal.date).toLocaleDateString("ru-RU")}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <Icon name="MoreVertical" size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CRM;
