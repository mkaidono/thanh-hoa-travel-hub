import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

import destPuLuong from "@/assets/dest-pu-luong.jpg";
import destSamSon from "@/assets/dest-sam-son.jpg";
import tourHeritage from "@/assets/tour-heritage.jpg";

const articles = [
  {
    id: 1,
    title: "Top 10 điều phải làm khi du lịch Sầm Sơn",
    excerpt: "Khám phá những trải nghiệm không thể bỏ lỡ khi đến với bãi biển nổi tiếng nhất xứ Thanh. Từ tắm biển, thưởng thức hải sản đến khám phá đền Độc Cước...",
    image: destSamSon,
    author: "Minh Anh",
    date: "15/01/2024",
    readTime: "5 phút",
    category: "Cẩm nang",
  },
  {
    id: 2,
    title: "Pù Luông mùa lúa chín - Thiên đường xanh",
    excerpt: "Hướng dẫn chi tiết cho chuyến trekking khám phá ruộng bậc thang Pù Luông vào mùa lúa chín vàng óng. Lịch trình, homestay và những điều cần biết...",
    image: destPuLuong,
    author: "Hoàng Nam",
    date: "12/01/2024",
    readTime: "8 phút",
    category: "Sinh thái",
  },
  {
    id: 3,
    title: "Thành Nhà Hồ - Kỳ quan kiến trúc đá",
    excerpt: "Tìm hiểu về di sản văn hóa thế giới UNESCO với lịch sử hơn 600 năm. Bí ẩn về kỹ thuật xây dựng thành đá không dùng vữa...",
    image: tourHeritage,
    author: "Thu Hà",
    date: "10/01/2024",
    readTime: "6 phút",
    category: "Văn hóa",
  },
];

const categories = ["Tất cả", "Cẩm nang", "Sinh thái", "Văn hóa", "Ẩm thực"];

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Page header */}
        <section className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-primary font-medium mb-4">TIN TỨC & CẨM NANG</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Kinh nghiệm <span className="text-gradient-ocean">du lịch</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Cập nhật tin tức, mẹo hay và gợi ý lịch trình cho chuyến đi của bạn
            </p>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="container mx-auto px-4 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, index) => (
              <Button
                key={cat}
                variant={index === 0 ? "ocean" : "sand"}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </section>

        {/* Articles grid */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-display text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2">
              Xem thêm bài viết
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
