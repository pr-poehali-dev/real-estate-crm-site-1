import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  views: number;
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Тренды рынка элитной недвижимости 2024",
      excerpt: "Анализ ключевых тенденций премиум-сегмента: что изменилось за год и какие перспективы ждут рынок в ближайшее время.",
      category: "Аналитика",
      date: "2024-02-15",
      readTime: "8 мин",
      author: "Александра Волкова",
      image: "📊",
      views: 1240
    },
    {
      id: 2,
      title: "Инвестиции в недвижимость: руководство для начинающих",
      excerpt: "Пошаговая инструкция как начать инвестировать в недвижимость с минимальными рисками и максимальной доходностью.",
      category: "Инвестиции",
      date: "2024-02-10",
      readTime: "12 мин",
      author: "Андрей Новиков",
      image: "💰",
      views: 2150
    },
    {
      id: 3,
      title: "Топ-5 районов Москвы для покупки элитного жилья",
      excerpt: "Обзор самых престижных локаций столицы: инфраструктура, ценовая динамика и инвестиционная привлекательность.",
      category: "Обзоры",
      date: "2024-02-08",
      readTime: "10 мин",
      author: "Елена Петрова",
      image: "🏙️",
      views: 3420
    },
    {
      id: 4,
      title: "Юридические аспекты покупки недвижимости",
      excerpt: "На что обратить внимание при проверке документов, типичные ошибки и как их избежать при совершении сделки.",
      category: "Юридическое",
      date: "2024-02-05",
      readTime: "15 мин",
      author: "Ольга Морозова",
      image: "⚖️",
      views: 980
    },
    {
      id: 5,
      title: "Загородная недвижимость: что выбрать в 2024?",
      excerpt: "Сравнение вилл, коттеджей и таунхаусов: плюсы и минусы, особенности эксплуатации и советы по выбору.",
      category: "Обзоры",
      date: "2024-02-01",
      readTime: "9 мин",
      author: "Михаил Лебедев",
      image: "🏡",
      views: 1850
    },
    {
      id: 6,
      title: "Ипотека на элитную недвижимость: условия 2024",
      excerpt: "Актуальные ставки, требования банков и схемы финансирования для покупки премиальной недвижимости.",
      category: "Финансы",
      date: "2024-01-28",
      readTime: "11 мин",
      author: "Андрей Новиков",
      image: "🏦",
      views: 1560
    },
    {
      id: 7,
      title: "Как правильно оценить стоимость элитной квартиры",
      excerpt: "Факторы ценообразования в премиум-сегменте: от расположения до отделки и инфраструктуры комплекса.",
      category: "Аналитика",
      date: "2024-01-25",
      readTime: "7 мин",
      author: "Дмитрий Соколов",
      image: "💎",
      views: 1120
    },
    {
      id: 8,
      title: "Умный дом: технологии для элитной недвижимости",
      excerpt: "Обзор современных систем автоматизации, которые повышают комфорт и стоимость премиальной недвижимости.",
      category: "Технологии",
      date: "2024-01-20",
      readTime: "13 мин",
      author: "Сергей Орлов",
      image: "🏠",
      views: 2340
    }
  ];

  const categories = ["Все", "Аналитика", "Инвестиции", "Обзоры", "Юридическое", "Финансы", "Технологии"];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "Все" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Блог и новости</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Экспертные статьи, аналитика рынка и актуальные новости элитной недвижимости
        </p>

        <div className="mb-8">
          <Input
            placeholder="Поиск статей..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md h-12"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <Card className="p-12 text-center">
            <Icon name="FileSearch" className="mx-auto mb-4 text-muted-foreground" size={64} />
            <p className="text-xl text-muted-foreground">Статьи не найдены</p>
          </Card>
        ) : (
          <>
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {filteredPosts.slice(0, 1).map((post, index) => (
                <Card 
                  key={post.id}
                  className="lg:col-span-2 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-9xl">
                    {post.image}
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge>{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 hover:text-primary cursor-pointer transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="User" size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={14} />
                          <span>{post.views}</span>
                        </div>
                      </div>
                      <Button>
                        Читать далее
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredPosts.slice(1, 3).map((post, index) => (
                <Card 
                  key={post.id}
                  className={`overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in ${index === 0 ? 'lg:col-span-1' : ''}`}
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-7xl">
                    {post.image}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-primary cursor-pointer transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Eye" size={12} />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Читать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPosts.slice(3).map((post, index) => (
                <Card 
                  key={post.id}
                  className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                    {post.image}
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                    <h3 className="text-lg font-bold mb-2 hover:text-primary cursor-pointer transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Eye" size={12} />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Читать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        <Card className="mt-16 bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <Icon name="Mail" className="mx-auto mb-6" size={64} />
            <h2 className="text-4xl font-bold mb-4">Подписка на рассылку</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Получайте свежие статьи и эксклюзивную аналитику рынка недвижимости
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Ваш email" 
                className="h-12 bg-primary-foreground text-foreground"
              />
              <Button size="lg" variant="secondary" className="gap-2 whitespace-nowrap">
                <Icon name="Send" size={20} />
                Подписаться
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
