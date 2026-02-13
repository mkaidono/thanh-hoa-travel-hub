import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Clock, Users, Star, Heart, Filter, Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTours } from "@/hooks/useTours";
import BookingModal from "@/components/booking/BookingModal";

import tourBeach from "@/assets/tour-beach-resort.jpg";
import tourEco from "@/assets/tour-eco-trek.jpg";
import tourHeritage from "@/assets/tour-heritage.jpg";

const fallbackImages = [tourBeach, tourEco, tourHeritage];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN").format(price);
};

const categories = ["Tất cả", "Nghỉ dưỡng", "Sinh thái", "Văn hóa", "Biển"];

const ToursPage = () => {
  const { data: tours, isLoading } = useTours();
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTour, setSelectedTour] = useState<NonNullable<typeof tours>[number] | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleBookNow = (tour: NonNullable<typeof tours>[number]) => {
    setSelectedTour(tour);
    setBookingModalOpen(true);
  };

  const filteredTours = tours?.filter(tour => {
    const matchesCategory = activeFilter === "Tất cả" || tour.category === activeFilter;
    const matchesSearch = !searchQuery || tour.name.toLowerCase().includes(searchQuery.toLowerCase()) || tour.description?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

        {/* Search & Filters */}
        <section className="container mx-auto px-4 mb-10">
          <div className="bg-card rounded-2xl p-6 shadow-soft space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm tour..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="w-4 h-4" />
                  Bộ lọc
                </Button>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={activeFilter === cat ? "ocean" : "sand"}
                      size="sm"
                      onClick={() => setActiveFilter(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Hiển thị <span className="font-semibold text-foreground">{filteredTours?.length || 0}</span> tour
              </div>
            </div>
          </div>
        </section>

        {/* Loading */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {/* Tours grid */}
        {!isLoading && filteredTours && (
          <section className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour, index) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={tour.image_url || fallbackImages[index % 3]}
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
                      {tour.discount && tour.discount > 0 && (
                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-coral text-accent-foreground text-sm font-bold rounded-lg">
                          -{tour.discount}%
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                        {tour.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                        {tour.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {tour.duration}
                        </span>
                        {tour.group_size && (
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {tour.group_size}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="font-semibold text-foreground">{tour.avgRating?.toFixed(1)}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">
                          ({tour.reviewCount} đánh giá)
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          {tour.original_price && tour.original_price > tour.price && (
                            <span className="text-muted-foreground text-sm line-through">
                              {formatPrice(tour.original_price)}đ
                            </span>
                          )}
                          <p className="text-primary font-bold text-xl">
                            {formatPrice(tour.price)}đ
                          </p>
                        </div>
                        <Button variant="ocean" size="sm" onClick={() => handleBookNow(tour)}>
                          Đặt ngay
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {!isLoading && (!filteredTours || filteredTours.length === 0) && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Chưa có tour nào</p>
          </div>
        )}
      </main>

      <Footer />

      {selectedTour && (
        <BookingModal
          open={bookingModalOpen}
          onOpenChange={setBookingModalOpen}
          type="tour"
          item={{
            id: selectedTour.id,
            name: selectedTour.name,
            price: selectedTour.price,
            image: selectedTour.image_url || fallbackImages[0],
          }}
        />
      )}
    </div>
  );
};

export default ToursPage;
