import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const TARGET_EMAIL = "khoimai2429@gmail.com";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { bookingType, itemName, checkInDate, checkOutDate, guests, totalPrice, notes, userName, userEmail } = await req.json();

    const formatPrice = (price: number) => new Intl.NumberFormat("vi-VN").format(price);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0ea5e9, #06b6d4); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0;">🌴 Đơn đặt mới</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0;">Thanh Hóa Du lịch & Nghỉ dưỡng</p>
        </div>
        <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <h2 style="color: #0f172a; margin-top: 0;">Thông tin đặt ${bookingType === 'tour' ? 'tour' : 'phòng'}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b;">Dịch vụ:</td><td style="padding: 8px 0; font-weight: bold; color: #0f172a;">${itemName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Loại:</td><td style="padding: 8px 0; color: #0f172a;">${bookingType === 'tour' ? 'Tour du lịch' : 'Khách sạn'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">${bookingType === 'tour' ? 'Ngày khởi hành' : 'Ngày nhận phòng'}:</td><td style="padding: 8px 0; color: #0f172a;">${checkInDate}</td></tr>
            ${checkOutDate ? `<tr><td style="padding: 8px 0; color: #64748b;">Ngày trả phòng:</td><td style="padding: 8px 0; color: #0f172a;">${checkOutDate}</td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #64748b;">Số khách:</td><td style="padding: 8px 0; color: #0f172a;">${guests} người</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Tổng tiền:</td><td style="padding: 8px 0; font-weight: bold; color: #0ea5e9; font-size: 18px;">${formatPrice(totalPrice)}đ</td></tr>
            ${notes ? `<tr><td style="padding: 8px 0; color: #64748b;">Ghi chú:</td><td style="padding: 8px 0; color: #0f172a;">${notes}</td></tr>` : ''}
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          <h3 style="color: #0f172a;">Thông tin khách hàng</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b;">Họ tên:</td><td style="padding: 8px 0; color: #0f172a;">${userName || 'Chưa cung cấp'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email:</td><td style="padding: 8px 0; color: #0f172a;">${userEmail || 'Chưa cung cấp'}</td></tr>
          </table>
        </div>
      </div>
    `;

    // Try Resend if API key exists, otherwise just log
    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Thanh Hóa Tourism <onboarding@resend.dev>",
          to: [TARGET_EMAIL],
          subject: `[Đơn đặt mới] ${itemName} - ${guests} khách`,
          html: emailHtml,
        }),
      });

      if (!res.ok) {
        const errorData = await res.text();
        console.error("Resend error:", errorData);
        // Still return success since booking was saved
      }
    } else {
      console.log("No RESEND_API_KEY configured. Booking email details:", {
        to: TARGET_EMAIL,
        bookingType,
        itemName,
        checkInDate,
        guests,
        totalPrice,
        userName,
        userEmail,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
