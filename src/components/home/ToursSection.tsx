import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, Star, Heart, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTours } from "@/hooks/useTours";
import BookingModal from "@/components/booking/BookingModal";

import tourBeach from "@/assets/tour-beach-resort.jpg";
import tourEco from "@/assets/tour-eco-trek.jpg";
import tourHeritage from "@/assets/tour-heritage.jpg";

// Fallback images
const fallbackImages = [tourBeach, tourEco, tourHeritage];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN").format(price);
};

const ToursSection = () => {
  const { data: tours, isLoading } = useTours(true);
  const [selectedTour, setSelectedTour] = useState<typeof tours extends (infer T)[] ? T : never | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleBookNow = (tour: NonNullable<typeof tours>[number]) => {
    setSelectedTour(tour);
    setBookingModalOpen(true);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary font-medium mb-4"
            >
              TOUR NỔI BẬT
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            >
              Trải nghiệm <span className="text-gradient-ocean">tuyệt vời</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="outline" className="gap-2 mt-4 md:mt-0" asChild>
              <Link to="/tour">
                Xem tất cả tour
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {/* Tours grid */}
        {!isLoading && tours && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.slice(0, 3).map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
                  {/* Image */}
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
                      {tour.is_featured && (
                        <span className="px-3 py-1 bg-coral text-accent-foreground text-xs font-medium rounded-full">
                          Hot
                        </span>
                      )}
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

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                      {tour.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {tour.description}
                    </p>

                    {/* Meta info */}
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

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="font-semibold text-foreground">{tour.avgRating?.toFixed(1)}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        ({tour.reviewCount} đánh giá)
                      </span>
                    </div>

                    {/* Price and CTA */}
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
        )}

        {/* Empty state */}
        {!isLoading && (!tours || tours.length === 0) && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Chưa có tour nào</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
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
    </section>
  );
};

export default ToursSection;
