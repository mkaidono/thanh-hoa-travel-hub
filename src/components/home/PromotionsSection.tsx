import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const promotions = [
  {
    id: 1,
    title: "Flash Sale Cuối Tuần",
    description: "Giảm đến 40% cho tất cả tour biển Sầm Sơn",
    discount: "40%",
    code: "WEEKEND40",
    validUntil: "31/01/2024",
    bgClass: "gradient-ocean",
  },
  {
    id: 2,
    title: "Combo Honeymoon",
    description: "Trọn gói nghỉ dưỡng lãng mạn cho cặp đôi",
    discount: "25%",
    code: "LOVE2024",
    validUntil: "14/02/2024",
    bgClass: "gradient-sunset",
  },
];

const PromotionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-coral font-medium mb-4"
          >
            <Sparkles className="w-5 h-5" />
            ƯU ĐÃI ĐẶC BIỆT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            Khuyến mãi <span className="text-coral">hot</span> nhất
          </motion.h2>
        </div>

        {/* Promotions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${promo.bgClass} rounded-2xl p-8 md:p-10 text-primary-foreground relative overflow-hidden shadow-elevated`}
            >
              {/* Decorative circles */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary-foreground/10 rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-foreground/10 rounded-full" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                      {promo.title}
                    </h3>
                    <p className="opacity-90">{promo.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl md:text-5xl font-display font-bold">
                      -{promo.discount}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-primary-foreground/20">
                  <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-primary-foreground/20 rounded-lg font-mono font-bold tracking-wider">
                      {promo.code}
                    </div>
                    <div className="flex items-center gap-2 text-sm opacity-80">
                      <Clock className="w-4 h-4" />
                      HSD: {promo.validUntil}
                    </div>
                  </div>
                  <Button
                    variant="heroOutline"
                    size="sm"
                    className="gap-2 px-6"
                    asChild
                  >
                    <Link to="/tour">
                      Sử dụng ngay
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
