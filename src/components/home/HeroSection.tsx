import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-sam-son.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/tour");
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Biển Sầm Sơn, Thanh Hóa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6">
            🌊 Khám phá vẻ đẹp xứ Thanh
          </span>
          
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Thanh Hóa
            <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 font-medium opacity-90">
              Điểm đến du lịch tuyệt vời
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Từ bãi biển Sầm Sơn thơ mộng đến núi rừng Pù Luông hùng vĩ. 
            Đặt tour, khách sạn và trải nghiệm kỳ nghỉ đáng nhớ nhất.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" asChild>
              <Link to="/diem-den">Khám phá ngay</Link>
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to="/tour">Xem tour du lịch</Link>
            </Button>
          </div>
        </motion.div>

        {/* Search box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-elevated p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination */}
              <div className="relative">
                <label className="block text-xs font-medium text-muted-foreground mb-2">Điểm đến</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <select className="w-full pl-10 pr-4 py-3 bg-muted rounded-xl text-foreground font-medium border-0 focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer">
                    <option>Tất cả điểm đến</option>
                    <option>Biển Sầm Sơn</option>
                    <option>Biển Hải Tiến</option>
                    <option>Pù Luông</option>
                    <option>Thành Nhà Hồ</option>
                    <option>Lam Kinh</option>
                  </select>
                </div>
              </div>

              {/* Check-in date */}
              <div className="relative">
                <label className="block text-xs font-medium text-muted-foreground mb-2">Ngày đi</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 bg-muted rounded-xl text-foreground font-medium border-0 focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-xs font-medium text-muted-foreground mb-2">Số khách</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <select className="w-full pl-10 pr-4 py-3 bg-muted rounded-xl text-foreground font-medium border-0 focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer">
                    <option>1 người</option>
                    <option>2 người</option>
                    <option>3 người</option>
                    <option>4 người</option>
                    <option>5+ người</option>
                  </select>
                </div>
              </div>

              {/* Search button */}
              <div className="flex items-end">
                <Button variant="ocean" className="w-full py-6 text-base font-semibold gap-2" onClick={handleSearch}>
                  <Search className="w-5 h-5" />
                  Tìm kiếm
                </Button>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Phổ biến:</span>
              <Link to="/tour" className="text-sm text-primary hover:underline">Tour Sầm Sơn 2N1Đ</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/tour" className="text-sm text-primary hover:underline">Pù Luông nghỉ dưỡng</Link>
              <span className="text-muted-foreground">•</span>
              <Link to="/khach-san" className="text-sm text-primary hover:underline">Combo khách sạn 5*</Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
