import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Star, MapPin, Wifi, Car, Utensils, Waves, Heart, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

import tourBeach from "@/assets/tour-beach-resort.jpg";
import destHaiTien from "@/assets/dest-hai-tien.jpg";
import destSamSon from "@/assets/dest-sam-son.jpg";

const hotels = [
  {
    id: 1,
    name: "FLC Grand Hotel Sầm Sơn",
    description: "Resort 5 sao với view biển tuyệt đẹp, hồ bơi vô cực và spa cao cấp.",
    image: tourBeach,
    location: "Sầm Sơn",
    rating: 4.9,
    reviews: 856,
    pricePerNight: 2500000,
    originalPrice: 3200000,
    type: "Resort",
    amenities: ["wifi", "parking", "restaurant", "pool"],
    stars: 5,
  },
  {
    id: 2,
    name: "Hải Tiến Resort & Spa",
    description: "Khu nghỉ dưỡng sang trọng bên bờ biển Hải Tiến với dịch vụ đẳng cấp quốc tế.",
    image: destHaiTien,
    location: "Hải Tiến",
    rating: 4.8,
    reviews: 432,
    pricePerNight: 2800000,
    originalPrice: 3500000,
    type: "Resort",
    amenities: ["wifi", "parking", "restaurant", "pool"],
    stars: 5,
  },
  {
    id: 3,
    name: "Vinpearl Hotel Sầm Sơn",
    description: "Khách sạn hiện đại nằm ngay trung tâm với đầy đủ tiện nghi và view biển.",
    image: destSamSon,
    location: "Sầm Sơn",
    rating: 4.7,
    reviews: 678,
    pricePerNight: 1800000,
    originalPrice: 2200000,
    type: "Khách sạn",
    amenities: ["wifi", "parking", "restaurant"],
    stars: 4,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN").format(price);
};

const getAmenityIcon = (amenity: string) => {
  switch (amenity) {
    case "wifi": return <Wifi className="w-4 h-4" />;
    case "parking": return <Car className="w-4 h-4" />;
    case "restaurant": return <Utensils className="w-4 h-4" />;
    case "pool": return <Waves className="w-4 h-4" />;
    default: return null;
  }
};

const getAmenityName = (amenity: string) => {
  switch (amenity) {
    case "wifi": return "WiFi";
    case "parking": return "Bãi đỗ xe";
    case "restaurant": return "Nhà hàng";
    case "pool": return "Hồ bơi";
    default: return amenity;
  }
};

const HotelsPage = () => {
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
            <span className="inline-block text-primary font-medium mb-4">KHÁCH SẠN & RESORT</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nơi nghỉ dưỡng <span className="text-gradient-ocean">lý tưởng</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Từ khách sạn bình dân đến resort 5 sao, đáp ứng mọi nhu cầu của bạn
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
                  {["Tất cả", "Resort", "Khách sạn", "Homestay"].map((cat, index) => (
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
                Hiển thị <span className="font-semibold text-foreground">{hotels.length}</span> kết quả
              </div>
            </div>
          </div>
        </section>

        {/* Hotels list */}
        <section className="container mx-auto px-4">
          <div className="space-y-6">
            {hotels.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <button className="absolute top-4 right-4 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors group/heart">
                      <Heart className="w-5 h-5 text-muted-foreground group-hover/heart:text-coral transition-colors" />
                    </button>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                        {hotel.type}
                      </span>
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                        {hotel.stars}★
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h2 className="font-display text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {hotel.name}
                        </h2>
                      </div>

                      <div className="flex items-center gap-4 text-sm mb-4">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {hotel.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="font-semibold">{hotel.rating}</span>
                          <span className="text-muted-foreground">({hotel.reviews} đánh giá)</span>
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {hotel.description}
                      </p>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {hotel.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="flex items-center gap-2 px-3 py-2 bg-muted text-muted-foreground text-sm rounded-lg"
                          >
                            {getAmenityIcon(amenity)}
                            {getAmenityName(amenity)}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-muted-foreground text-sm line-through">
                          {formatPrice(hotel.originalPrice)}đ
                        </span>
                        <p className="text-primary font-bold text-2xl">
                          {formatPrice(hotel.pricePerNight)}đ
                          <span className="text-sm font-normal text-muted-foreground">/đêm</span>
                        </p>
                      </div>
                      <Button variant="ocean" className="gap-2">
                        Đặt phòng
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

export default HotelsPage;
