import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

interface Property {
  id: number;
  title: string;
  type: string;
  price: number;
  area: number;
  rooms: number;
  location: string;
  image: string;
  status: "available" | "reserved" | "sold";
}

const Catalog = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [propertyType, setPropertyType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const properties: Property[] = [
    {
      id: 1,
      title: "Пентхаус в центре",
      type: "penthouse",
      price: 45000000,
      area: 250,
      rooms: 4,
      location: "Центральный район",
      image: "🏢",
      status: "available"
    },
    {
      id: 2,
      title: "Вилла у моря",
      type: "villa",
      price: 85000000,
      area: 450,
      rooms: 6,
      location: "Приморский район",
      image: "🏰",
      status: "available"
    },
    {
      id: 3,
      title: "Апартаменты премиум",
      type: "apartment",
      price: 25000000,
      area: 150,
      rooms: 3,
      location: "Деловой квартал",
      image: "🏙️",
      status: "reserved"
    },
    {
      id: 4,
      title: "Таунхаус",
      type: "townhouse",
      price: 35000000,
      area: 200,
      rooms: 4,
      location: "Загородный комплекс",
      image: "🏘️",
      status: "available"
    },
    {
      id: 5,
      title: "Элитная квартира",
      type: "apartment",
      price: 30000000,
      area: 180,
      rooms: 3,
      location: "Исторический центр",
      image: "🏛️",
      status: "available"
    },
    {
      id: 6,
      title: "Загородный дом",
      type: "house",
      price: 55000000,
      area: 350,
      rooms: 5,
      location: "Коттеджный поселок",
      image: "🏡",
      status: "sold"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0
    }).format(price);
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      available: { label: "Доступно", variant: "default" as const },
      reserved: { label: "Забронировано", variant: "secondary" as const },
      sold: { label: "Продано", variant: "outline" as const }
    };
    return variants[status as keyof typeof variants];
  };

  const filteredProperties = properties.filter((property) => {
    const matchesType = propertyType === "all" || property.type === propertyType;
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const priceInMillions = property.price / 1000000;
    const matchesPrice = priceInMillions >= priceRange[0] && priceInMillions <= priceRange[1];
    
    return matchesType && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Каталог объектов</h1>
        <p className="text-xl text-muted-foreground mb-12">Найдите свою идеальную недвижимость</p>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <Card className="lg:col-span-1 h-fit sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="SlidersHorizontal" size={20} />
                Фильтры
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-3 block">Поиск</label>
                <Input
                  placeholder="Название или район..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Тип недвижимости</label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="apartment">Апартаменты</SelectItem>
                    <SelectItem value="penthouse">Пентхаус</SelectItem>
                    <SelectItem value="villa">Вилла</SelectItem>
                    <SelectItem value="house">Дом</SelectItem>
                    <SelectItem value="townhouse">Таунхаус</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">
                  Цена: {priceRange[0]} - {priceRange[1]} млн ₽
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={100}
                  step={5}
                  className="mb-2"
                />
              </div>

              <Button className="w-full" variant="outline" onClick={() => {
                setPriceRange([0, 100]);
                setPropertyType("all");
                setSearchQuery("");
              }}>
                <Icon name="X" className="mr-2" size={16} />
                Сбросить фильтры
              </Button>
            </CardContent>
          </Card>

          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Найдено объектов: <span className="font-semibold text-foreground">{filteredProperties.length}</span>
              </p>
              <Select defaultValue="price-desc">
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="area-desc">Площадь: по убыванию</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-8xl">
                    {property.image}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-semibold">{property.title}</h3>
                      <Badge variant={getStatusBadge(property.status).variant}>
                        {getStatusBadge(property.status).label}
                      </Badge>
                    </div>
                    
                    <p className="text-3xl font-bold text-primary mb-4">
                      {formatPrice(property.price)}
                    </p>

                    <div className="space-y-2 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        <span>{property.location}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Icon name="Maximize" size={16} />
                          <span>{property.area} м²</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Home" size={16} />
                          <span>{property.rooms} комнат</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Icon name="Eye" className="mr-2" size={16} />
                        Подробнее
                      </Button>
                      <Button variant="outline" size="icon">
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
