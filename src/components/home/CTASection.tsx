import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 15 Q 25 0, 50 15 T 100 15" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Sẵn sàng cho kỳ nghỉ?
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Liên hệ ngay để được tư vấn
            <span className="block text-gradient-ocean">miễn phí!</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Đội ngũ tư vấn viên giàu kinh nghiệm sẵn sàng hỗ trợ bạn 24/7. 
            Đặt lịch tư vấn hoặc gọi ngay hotline để được phục vụ tốt nhất.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="ocean" size="xl" className="gap-3">
              <Phone className="w-5 h-5" />
              1900 1234
            </Button>
            <Button variant="outline" size="xl" className="gap-3">
              <MessageCircle className="w-5 h-5" />
              Chat với tư vấn viên
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Hotline hoạt động 24/7 • Tư vấn miễn phí • Cam kết giá tốt nhất
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
