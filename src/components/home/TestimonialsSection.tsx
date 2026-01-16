import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn Minh",
    location: "Hà Nội",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Chuyến du lịch Pù Luông tuyệt vời! Cảnh đẹp, không khí trong lành, dịch vụ chu đáo. Sẽ quay lại lần nữa!",
    tour: "Tour Pù Luông 2N1Đ",
  },
  {
    id: 2,
    name: "Trần Thị Hương",
    location: "TP. Hồ Chí Minh",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Resort ở Hải Tiến rất đẹp và sang trọng. Bãi biển sạch, đồ ăn ngon. Gia đình tôi rất hài lòng!",
    tour: "Combo nghỉ dưỡng Hải Tiến",
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    location: "Đà Nẵng",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    text: "Hướng dẫn viên nhiệt tình, am hiểu lịch sử. Tour Thành Nhà Hồ - Lam Kinh rất đáng để trải nghiệm.",
    tour: "Tour di sản văn hóa 1 ngày",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-medium mb-4"
          >
            KHÁCH HÀNG NÓI GÌ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Đánh giá từ <span className="text-gradient-ocean">du khách</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Hơn 10,000+ khách hàng hài lòng với dịch vụ của chúng tôi
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow"
            >
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Tour name */}
              <p className="text-sm text-primary font-medium mb-4">
                {testimonial.tour}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          {[
            { value: "10K+", label: "Khách hàng" },
            { value: "500+", label: "Tour được đặt" },
            { value: "4.9", label: "Đánh giá TB" },
            { value: "98%", label: "Hài lòng" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <span className="block font-display text-3xl md:text-4xl font-bold text-gradient-ocean mb-2">
                {stat.value}
              </span>
              <span className="text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
