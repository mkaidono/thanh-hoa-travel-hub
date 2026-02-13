import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import destPuLuong from "@/assets/dest-pu-luong.jpg";
import destSamSon from "@/assets/dest-sam-son.jpg";
import tourHeritage from "@/assets/tour-heritage.jpg";

const articlesData: Record<string, {
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}> = {
  "1": {
    title: "Top 10 điều phải làm khi du lịch Sầm Sơn",
    content: `
      <h2>1. Tắm biển tại bãi biển Sầm Sơn</h2>
      <p>Bãi biển Sầm Sơn trải dài hơn 6km với bãi cát mịn, nước biển trong xanh. Đây là hoạt động không thể thiếu khi đến Sầm Sơn.</p>
      <h2>2. Tham quan Đền Độc Cước</h2>
      <p>Ngôi đền nằm trên núi Trường Lệ, nơi có truyền thuyết về chàng khổng lồ tự xẻ đôi thân mình để bảo vệ dân làng.</p>
      <h2>3. Thưởng thức hải sản tươi sống</h2>
      <p>Chợ hải sản Sầm Sơn nổi tiếng với các loại tôm, cua, ghẹ, mực tươi ngon. Bạn có thể mua và nhờ chế biến tại chỗ.</p>
      <h2>4. Leo núi Trường Lệ</h2>
      <p>Từ đỉnh núi, bạn có thể ngắm toàn cảnh thành phố biển Sầm Sơn với tầm nhìn tuyệt đẹp.</p>
      <h2>5. Khám phá hòn Trống Mái</h2>
      <p>Hai khối đá tự nhiên hình trống và mái nằm chênh vênh trên vách núi, là biểu tượng của Sầm Sơn.</p>
      <h2>6. Dạo chơi Quảng trường biển</h2>
      <p>Quảng trường biển Sầm Sơn là nơi tổ chức nhiều sự kiện, lễ hội và hoạt động giải trí vào ban đêm.</p>
      <h2>7. Chèo SUP trên biển</h2>
      <p>Trải nghiệm chèo SUP (Stand Up Paddleboard) giúp bạn ngắm biển từ góc nhìn hoàn toàn mới.</p>
      <h2>8. Ghé thăm chùa Cô Tiên</h2>
      <p>Ngôi chùa cổ nằm ẩn mình trong rừng thông, mang lại không gian thanh tịnh giữa thiên nhiên.</p>
      <h2>9. Mua sắm đặc sản</h2>
      <p>Mắm tôm, nước mắm, bánh gai là những đặc sản nổi tiếng bạn nên mua làm quà.</p>
      <h2>10. Ngắm hoàng hôn trên biển</h2>
      <p>Hoàng hôn Sầm Sơn đẹp mê hồn với bầu trời đỏ rực phản chiếu trên mặt biển lấp lánh.</p>
    `,
    image: destSamSon,
    author: "Minh Anh",
    date: "15/01/2024",
    readTime: "5 phút",
    category: "Cẩm nang",
  },
  "2": {
    title: "Pù Luông mùa lúa chín - Thiên đường xanh",
    content: `
      <h2>Thời điểm lý tưởng</h2>
      <p>Mùa lúa chín ở Pù Luông thường rơi vào tháng 9-10 hàng năm. Đây là thời điểm đẹp nhất để chiêm ngưỡng ruộng bậc thang vàng óng.</p>
      <h2>Lịch trình gợi ý 2 ngày 1 đêm</h2>
      <p><strong>Ngày 1:</strong> Xuất phát từ Thanh Hóa, đến bản Đôn rồi trekking qua các bản làng. Nghỉ đêm tại homestay bản Hiêu.</p>
      <p><strong>Ngày 2:</strong> Thăm thác Hiêu, tắm suối và trở về.</p>
      <h2>Homestay nổi bật</h2>
      <p>Pù Luông Retreat, Pù Luông Natura, và các homestay bản địa đều mang đến trải nghiệm sống giữa thiên nhiên tuyệt vời.</p>
      <h2>Ẩm thực</h2>
      <p>Cơm lam, gà nướng, rượu cần và các món ăn dân tộc Thái là những trải nghiệm ẩm thực không thể bỏ qua.</p>
    `,
    image: destPuLuong,
    author: "Hoàng Nam",
    date: "12/01/2024",
    readTime: "8 phút",
    category: "Sinh thái",
  },
  "3": {
    title: "Thành Nhà Hồ - Kỳ quan kiến trúc đá",
    content: `
      <h2>Di sản thế giới UNESCO</h2>
      <p>Thành Nhà Hồ được UNESCO công nhận là Di sản Văn hóa Thế giới năm 2011, là tòa thành đá duy nhất còn lại ở Đông Nam Á.</p>
      <h2>Kiến trúc độc đáo</h2>
      <p>Thành được xây bằng đá khối lớn, nặng hàng chục tấn, ghép lại không dùng vữa. Đến nay, kỹ thuật xây dựng này vẫn là bí ẩn.</p>
      <h2>Lịch sử</h2>
      <p>Thành do Hồ Quý Ly cho xây dựng năm 1397, là kinh đô của nhà Hồ (1400-1407). Chu vi thành khoảng 3.5km.</p>
      <h2>Tham quan</h2>
      <p>Ngoài thành đá, du khách có thể tham quan bảo tàng Thành Nhà Hồ, các di tích đàn tế Nam Giao và khu khảo cổ.</p>
    `,
    image: tourHeritage,
    author: "Thu Hà",
    date: "10/01/2024",
    readTime: "6 phút",
    category: "Văn hóa",
  },
};

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? articlesData[id] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Bài viết không tồn tại</h1>
          <Button variant="ocean" asChild>
            <Link to="/tin-tuc">Quay lại tin tức</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Button variant="ghost" className="gap-2 mb-6" asChild>
              <Link to="/tin-tuc">
                <ArrowLeft className="w-4 h-4" />
                Quay lại tin tức
              </Link>
            </Button>

            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
              {article.category}
            </span>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><User className="w-4 h-4" />{article.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{article.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{article.readTime}</span>
            </div>

            <div className="rounded-2xl overflow-hidden mb-8">
              <img src={article.image} alt={article.title} className="w-full h-[400px] object-cover" />
            </div>

            <div
              className="prose prose-lg max-w-none text-foreground prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </motion.div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetailPage;
