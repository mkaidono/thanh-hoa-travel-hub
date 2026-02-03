import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, User, Search, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/diem-den", label: "Điểm đến" },
    { href: "/tour", label: "Tour du lịch" },
    { href: "/khach-san", label: "Khách sạn" },
    { href: "/tin-tuc", label: "Tin tức" },
    { href: "/lien-he", label: "Liên hệ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Thanh Hóa, Việt Nam
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              1900 1234
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-accent transition-colors">VI</button>
            <span className="opacity-50">|</span>
            <button className="hover:text-accent transition-colors">EN</button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-md shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground font-display font-bold text-xl">TH</span>
              </div>
              <div>
                <h1 className="font-display font-bold text-xl text-foreground">
                  Thanh Hóa
                </h1>
                <p className="text-xs text-muted-foreground">Du lịch & Nghỉ dưỡng</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Search className="w-5 h-5" />
              </Button>
              
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <User className="w-4 h-4" />
                      {user.user_metadata?.full_name || user.email?.split('@')[0]}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to="/tai-khoan" className="cursor-pointer">
                        Tài khoản của tôi
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/dat-cho" className="cursor-pointer">
                        Đơn đặt của tôi
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => signOut()} className="text-destructive cursor-pointer">
                      <LogOut className="w-4 h-4 mr-2" />
                      Đăng xuất
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="outline" className="gap-2" asChild>
                  <Link to="/dang-nhap">
                    <User className="w-4 h-4" />
                    Đăng nhập
                  </Link>
                </Button>
              )}
              
              <Button variant="ocean" asChild>
                <Link to="/tour">Đặt tour ngay</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-2 text-foreground/80 hover:text-primary font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border space-y-3">
                  {user ? (
                    <>
                      <div className="py-2 text-foreground font-medium">
                        Xin chào, {user.user_metadata?.full_name || user.email?.split('@')[0]}
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full gap-2"
                        onClick={() => {
                          signOut();
                          setIsMenuOpen(false);
                        }}
                      >
                        <LogOut className="w-4 h-4" />
                        Đăng xuất
                      </Button>
                    </>
                  ) : (
                    <Button variant="outline" className="w-full gap-2" asChild>
                      <Link to="/dang-nhap" onClick={() => setIsMenuOpen(false)}>
                        <User className="w-4 h-4" />
                        Đăng nhập
                      </Link>
                    </Button>
                  )}
                  <Button variant="ocean" className="w-full" asChild>
                    <Link to="/tour" onClick={() => setIsMenuOpen(false)}>
                      Đặt tour ngay
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
