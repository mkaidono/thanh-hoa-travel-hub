import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import destSamSon from "@/assets/dest-sam-son.jpg";
import destHaiTien from "@/assets/dest-hai-tien.jpg";
import destPuLuong from "@/assets/dest-pu-luong.jpg";
import destThanhNhaHo from "@/assets/dest-thanh-nha-ho.jpg";
import destLamKinh from "@/assets/dest-lam-kinh.jpg";

const destinations = [
  {
    id: 1,
    name: "Biển Sầm Sơn",
    description: "Bãi biển nổi tiếng nhất xứ Thanh với cát trắng mịn và làn nước trong xanh",
    image: destSamSon,
    tours: 45,
    category: "Biển",
  },
  {
    id: 2,
    name: "Biển Hải Tiến",
    description: "Thiên đường nghỉ dưỡng với resort cao cấp và bãi biển hoang sơ",
    image: destHaiTien,
    tours: 28,
    category: "Biển",
  },
  {
    id: 3,
    name: "Pù Luông",
    description: "Khu bảo tồn thiên nhiên với ruộng bậc thang và bản làng dân tộc",
    image: destPuLuong,
    tours: 36,
    category: "Sinh thái",
  },
  {
    id: 4,
    name: "Thành Nhà Hồ",
    description: "Di sản văn hóa thế giới UNESCO với kiến trúc đá độc đáo",
    image: destThanhNhaHo,
    tours: 15,
    category: "Văn hóa",
  },
  {
    id: 5,
    name: "Lam Kinh",
    description: "Khu di tích lịch sử thời Lê với cảnh quan thiên nhiên tuyệt đẹp",
    image: destLamKinh,
    tours: 12,
    category: "Lịch sử",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const DestinationsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-medium mb-4"
          >
            ĐIỂM ĐẾN NỔI BẬT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Khám phá vẻ đẹp <span className="text-gradient-ocean">Thanh Hóa</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Từ bãi biển thơ mộng đến núi rừng hùng vĩ, từ di sản văn hóa đến làng quê yên bình
          </motion.p>
        </div>

        {/* Destinations grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Featured destination - Large card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:row-span-2 group cursor-pointer"
          >
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-card">
              <img
                src={destinations[0].image}
                alt={destinations[0].name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-3">
                  {destinations[0].category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  {destinations[0].name}
                </h3>
                <p className="text-primary-foreground/80 mb-4 max-w-md">
                  {destinations[0].description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                    <MapPin className="w-4 h-4" />
                    {destinations[0].tours} tour có sẵn
                  </span>
                  <Button variant="heroOutline" size="sm" className="gap-2 py-2 px-4">
                    Khám phá
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other destinations */}
          {destinations.slice(1).map((dest) => (
            <motion.div
              key={dest.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                    {dest.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm line-clamp-2 mb-3">
                    {dest.description}
                  </p>
                  <span className="flex items-center gap-2 text-primary-foreground/60 text-xs">
                    <MapPin className="w-3 h-3" />
                    {dest.tours} tour có sẵn
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2">
            Xem tất cả điểm đến
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
