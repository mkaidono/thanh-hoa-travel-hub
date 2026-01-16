import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">TH</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Thanh Hóa</h3>
                <p className="text-sm opacity-70">Du lịch & Nghỉ dưỡng</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Nền tảng đặt dịch vụ du lịch trực tuyến hàng đầu tại Thanh Hóa. 
              Khám phá vẻ đẹp xứ Thanh với những trải nghiệm tuyệt vời nhất.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Điểm đến</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link to="/diem-den/sam-son" className="hover:text-primary transition-colors">Biển Sầm Sơn</Link></li>
              <li><Link to="/diem-den/hai-tien" className="hover:text-primary transition-colors">Biển Hải Tiến</Link></li>
              <li><Link to="/diem-den/pu-luong" className="hover:text-primary transition-colors">Khu bảo tồn Pù Luông</Link></li>
              <li><Link to="/diem-den/thanh-nha-ho" className="hover:text-primary transition-colors">Thành Nhà Hồ</Link></li>
              <li><Link to="/diem-den/lam-kinh" className="hover:text-primary transition-colors">Khu di tích Lam Kinh</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Dịch vụ</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link to="/tour" className="hover:text-primary transition-colors">Tour du lịch</Link></li>
              <li><Link to="/khach-san" className="hover:text-primary transition-colors">Đặt phòng khách sạn</Link></li>
              <li><Link to="/combo" className="hover:text-primary transition-colors">Combo nghỉ dưỡng</Link></li>
              <li><Link to="/xe" className="hover:text-primary transition-colors">Thuê xe du lịch</Link></li>
              <li><Link to="/huong-dan" className="hover:text-primary transition-colors">Hướng dẫn viên</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>123 Đại lộ Lê Lợi, TP. Thanh Hóa, Thanh Hóa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" />
                <span>1900 1234 (24/7)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <span>info@dulichthanhoa.vn</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>© 2024 Du lịch Thanh Hóa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/chinh-sach" className="hover:text-primary transition-colors">Chính sách bảo mật</Link>
            <Link to="/dieu-khoan" className="hover:text-primary transition-colors">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
