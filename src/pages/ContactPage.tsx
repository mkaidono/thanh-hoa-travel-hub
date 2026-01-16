import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        {/* Page header */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-primary font-medium mb-4">LIÊN HỆ</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Chúng tôi luôn <span className="text-gradient-ocean">sẵn sàng hỗ trợ</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Liên hệ ngay để được tư vấn và đặt dịch vụ du lịch tốt nhất tại Thanh Hóa
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Thông tin liên hệ
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Địa chỉ</h3>
                    <p className="text-muted-foreground">
                      123 Đại lộ Lê Lợi, TP. Thanh Hóa, Thanh Hóa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hotline</h3>
                    <p className="text-muted-foreground">
                      1900 1234 (Miễn phí, 24/7)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      info@dulichthanhoa.vn
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Giờ làm việc</h3>
                    <p className="text-muted-foreground">
                      Thứ 2 - Chủ nhật: 8:00 - 22:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-card bg-muted h-64 flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps sẽ hiển thị tại đây</p>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Gửi yêu cầu tư vấn
                </h2>
                <p className="text-muted-foreground mb-8">
                  Điền thông tin và chúng tôi sẽ liên hệ trong vòng 30 phút
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Họ và tên *
                      </label>
                      <Input
                        placeholder="Nguyễn Văn A"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Số điện thoại *
                      </label>
                      <Input
                        placeholder="0912 345 678"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Dịch vụ quan tâm
                    </label>
                    <select className="w-full h-12 px-4 bg-background border border-input rounded-lg text-foreground focus:ring-2 focus:ring-primary outline-none">
                      <option>Chọn dịch vụ</option>
                      <option>Tour du lịch</option>
                      <option>Đặt khách sạn</option>
                      <option>Combo nghỉ dưỡng</option>
                      <option>Thuê xe du lịch</option>
                      <option>Khác</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nội dung *
                    </label>
                    <Textarea
                      placeholder="Mô tả yêu cầu của bạn..."
                      rows={5}
                    />
                  </div>

                  <Button variant="ocean" size="xl" className="w-full gap-2">
                    <Send className="w-5 h-5" />
                    Gửi yêu cầu
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Bằng việc gửi form, bạn đồng ý với{" "}
                    <a href="#" className="text-primary hover:underline">
                      chính sách bảo mật
                    </a>{" "}
                    của chúng tôi.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
