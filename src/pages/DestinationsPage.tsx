import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Star, ArrowRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

import destSamSon from "@/assets/dest-sam-son.jpg";
import destHaiTien from "@/assets/dest-hai-tien.jpg";
import destPuLuong from "@/assets/dest-pu-luong.jpg";
import destThanhNhaHo from "@/assets/dest-thanh-nha-ho.jpg";
import destLamKinh from "@/assets/dest-lam-kinh.jpg";

const allDestinations = [
  {
    id: 1,
    name: "Biển Sầm Sơn",
    description: "Bãi biển nổi tiếng nhất xứ Thanh với cát trắng mịn, làn nước trong xanh và hệ thống khách sạn, resort đẳng cấp. Điểm đến lý tưởng cho kỳ nghỉ hè.",
    image: destSamSon,
    tours: 45,
    rating: 4.8,
    reviews: 1250,
    category: "Biển",
    highlights: ["Bãi biển dài 16km", "Resort 5 sao", "Hải sản tươi ngon"],
  },
  {
    id: 2,
    name: "Biển Hải Tiến",
    description: "Thiên đường nghỉ dưỡng với resort cao cấp và bãi biển hoang sơ. Yên tĩnh, sang trọng, phù hợp cho kỳ nghỉ lãng mạn.",
    image: destHaiTien,
    tours: 28,
    rating: 4.9,
    reviews: 876,
    category: "Biển",
    highlights: ["Bãi biển hoang sơ", "Resort đẳng cấp", "Spa & wellness"],
  },
  {
    id: 3,
    name: "Khu bảo tồn Pù Luông",
    description: "Thiên đường xanh với ruộng bậc thang trải dài, bản làng dân tộc Thái và không khí trong lành. Trải nghiệm homestay độc đáo.",
    image: destPuLuong,
    tours: 36,
    rating: 4.9,
    reviews: 654,
    category: "Sinh thái",
    highlights: ["Ruộng bậc thang", "Homestay bản địa", "Trekking"],
  },
  {
    id: 4,
    name: "Thành Nhà Hồ",
    description: "Di sản văn hóa thế giới UNESCO với kiến trúc đá độc đáo có tuổi đời hơn 600 năm. Chứng nhân lịch sử của triều đại nhà Hồ.",
    image: destThanhNhaHo,
    tours: 15,
    rating: 4.7,
    reviews: 432,
    category: "Văn hóa",
    highlights: ["UNESCO", "Kiến trúc đá", "Lịch sử 600 năm"],
  },
  {
    id: 5,
    name: "Khu di tích Lam Kinh",
    description: "Khu di tích lịch sử thời Lê với quần thể lăng mộ, đền đài và cảnh quan thiên nhiên tuyệt đẹp. Nơi lưu giữ hồn thiêng dân tộc.",
    image: destLamKinh,
    tours: 12,
    rating: 4.6,
    reviews: 321,
    category: "Lịch sử",
    highlights: ["Di tích quốc gia", "Đền thờ vua Lê", "Rừng cổ thụ"],
  },
];

const categories = ["Tất cả", "Biển", "Sinh thái", "Văn hóa", "Lịch sử"];

const DestinationsPage = () => {
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
            <span className="inline-block text-primary font-medium mb-4">ĐIỂM ĐẾN</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Khám phá các điểm đến <span className="text-gradient-ocean">tuyệt vời</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Từ biển xanh cát trắng đến núi rừng hùng vĩ, từ di sản văn hóa đến làng quê yên bình
            </p>
          </motion.div>
        </section>

        {/* Filters */}
        <section className="container mx-auto px-4 mb-10">
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
        </section>

        {/* Destinations list */}
        <section className="container mx-auto px-4">
          <div className="space-y-8">
            {allDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                        {dest.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {dest.name}
                        </h2>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-accent text-accent" />
                            <span className="font-semibold">{dest.rating}</span>
                            <span className="text-muted-foreground">({dest.reviews} đánh giá)</span>
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {dest.tours} tour có sẵn
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {dest.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {dest.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>

                    <Button variant="ocean" className="gap-2" asChild>
                      <Link to="/tour">
                        Khám phá ngay
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
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

export default DestinationsPage;
