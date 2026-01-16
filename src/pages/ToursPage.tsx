import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Clock, Users, Star, Heart, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import tourBeach from "@/assets/tour-beach-resort.jpg";
import tourEco from "@/assets/tour-eco-trek.jpg";
import tourHeritage from "@/assets/tour-heritage.jpg";
import destSamSon from "@/assets/dest-sam-son.jpg";
import destPuLuong from "@/assets/dest-pu-luong.jpg";

const allTours = [
  {
    id: 1,
    name: "Nghỉ dưỡng biển Sầm Sơn 3N2Đ",
    description: "Combo khách sạn 5 sao + tour tham quan + ăn uống đặc sản. Trọn gói nghỉ dưỡng cao cấp.",
    image: tourBeach,
    duration: "3 ngày 2 đêm",
    groupSize: "2-10 người",
    rating: 4.9,
    reviews: 324,
    originalPrice: 4500000,
    price: 3200000,
    discount: 29,
    category: "Nghỉ dưỡng",
  },
  {
    id: 2,
    name: "Khám phá Pù Luông 2N1Đ",
    description: "Trekking ruộng bậc thang, homestay bản địa, trải nghiệm văn hóa dân tộc Thái.",
    image: tourEco,
    duration: "2 ngày 1 đêm",
    groupSize: "4-15 người",
    rating: 4.8,
    reviews: 187,
    originalPrice: 2800000,
    price: 2200000,
    discount: 21,
    category: "Sinh thái",
  },
  {
    id: 3,
    name: "Tour di sản văn hóa 1 ngày",
    description: "Thành Nhà Hồ - Lam Kinh - Đền Bà Triệu. Khám phá lịch sử xứ Thanh.",
    image: tourHeritage,
    duration: "1 ngày",
    groupSize: "6-20 người",
    rating: 4.7,
    reviews: 156,
    originalPrice: 1200000,
    price: 890000,
    discount: 26,
    category: "Văn hóa",
  },
  {
    id: 4,
    name: "Biển Sầm Sơn cuối tuần 2N1Đ",
    description: "Gói du lịch tiết kiệm cho gia đình và nhóm bạn. Nghỉ dưỡng + tắm biển + ẩm thực.",
    image: destSamSon,
    duration: "2 ngày 1 đêm",
    groupSize: "2-8 người",
    rating: 4.6,
    reviews: 245,
    originalPrice: 1800000,
    price: 1450000,
    discount: 19,
    category: "Biển",
  },
  {
    id: 5,
    name: "Pù Luông trọn gói 3N2Đ",
    description: "Trải nghiệm đầy đủ vẻ đẹp Pù Luông với trekking, homestay cao cấp và ẩm thực.",
    image: destPuLuong,
    duration: "3 ngày 2 đêm",
    groupSize: "4-12 người",
    rating: 4.9,
    reviews: 98,
    originalPrice: 4200000,
    price: 3500000,
    discount: 17,
    category: "Sinh thái",
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN").format(price);
};

const categories = ["Tất cả", "Nghỉ dưỡng", "Sinh thái", "Văn hóa", "Biển"];

const ToursPage = () => {
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
            <span className="inline-block text-primary font-medium mb-4">TOUR DU LỊCH</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Chọn tour <span className="text-gradient-ocean">phù hợp với bạn</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Đa dạng tour từ nghỉ dưỡng, sinh thái đến khám phá văn hóa lịch sử
            </p>
          </motion.div>
        </section>

        {/* Filters */}
        <section className="container mx-auto px-4 mb-10">
          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Bộ lọc
                </Button>
                <div className="flex flex-wrap gap-2">
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
              </div>
              <div className="text-sm text-muted-foreground">
                Hiển thị <span className="font-semibold text-foreground">{allTours.length}</span> tour
              </div>
            </div>
          </div>
        </section>

        {/* Tours grid */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {tour.category}
                      </span>
                    </div>
                    <button className="absolute top-4 right-4 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors group/heart">
                      <Heart className="w-5 h-5 text-muted-foreground group-hover/heart:text-coral transition-colors" />
                    </button>
                    {tour.discount > 0 && (
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-coral text-accent-foreground text-sm font-bold rounded-lg">
                        -{tour.discount}%
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                      {tour.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                      {tour.description}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {tour.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {tour.groupSize}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="font-semibold text-foreground">{tour.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        ({tour.reviews} đánh giá)
                      </span>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        {tour.originalPrice > tour.price && (
                          <span className="text-muted-foreground text-sm line-through">
                            {formatPrice(tour.originalPrice)}đ
                          </span>
                        )}
                        <p className="text-primary font-bold text-xl">
                          {formatPrice(tour.price)}đ
                        </p>
                      </div>
                      <Button variant="ocean" size="sm">
                        Đặt ngay
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ToursPage;
