import { useState } from "react";
import { motion } from "framer-motion";
import { X, Calendar, Users, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreateBooking } from "@/hooks/useBookings";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "tour" | "hotel";
  item: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN").format(price);
};

const BookingModal = ({ open, onOpenChange, type, item }: BookingModalProps) => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [notes, setNotes] = useState("");
  
  const { user } = useAuth();
  const navigate = useNavigate();
  const createBooking = useCreateBooking();

  const calculateTotal = () => {
    if (type === "hotel" && checkInDate && checkOutDate) {
      const start = new Date(checkInDate);
      const end = new Date(checkOutDate);
      const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights * item.price * guests : item.price;
    }
    return item.price * guests;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      onOpenChange(false);
      navigate("/dang-nhap");
      return;
    }

    await createBooking.mutateAsync({
      booking_type: type,
      tour_id: type === "tour" ? item.id : null,
      hotel_id: type === "hotel" ? item.id : null,
      check_in_date: checkInDate,
      check_out_date: type === "hotel" ? checkOutDate : null,
      guests,
      total_price: calculateTotal(),
      notes: notes || null,
    });

    onOpenChange(false);
    setCheckInDate("");
    setCheckOutDate("");
    setGuests(1);
    setNotes("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            Đặt {type === "tour" ? "tour" : "phòng"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-4 p-4 bg-muted rounded-xl mb-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
            <p className="text-primary font-bold text-lg">
              {formatPrice(item.price)}đ
              {type === "hotel" && <span className="text-sm font-normal text-muted-foreground">/đêm</span>}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="checkIn">
                {type === "tour" ? "Ngày khởi hành" : "Ngày nhận phòng"}
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="checkIn"
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="pl-10"
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            {type === "hotel" && (
              <div className="space-y-2">
                <Label htmlFor="checkOut">Ngày trả phòng</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="checkOut"
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="pl-10"
                    required
                    min={checkInDate || new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>
            )}

            <div className={`space-y-2 ${type === "tour" ? "" : ""}`}>
              <Label htmlFor="guests">Số {type === "tour" ? "người" : "khách"}</Label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="guests"
                  type="number"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="pl-10"
                  min={1}
                  max={20}
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Ghi chú (tùy chọn)</Label>
            <Textarea
              id="notes"
              placeholder="Yêu cầu đặc biệt..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Tổng tiền:</span>
              <span className="text-primary font-bold text-2xl">
                {formatPrice(calculateTotal())}đ
              </span>
            </div>

            <Button
              type="submit"
              variant="ocean"
              className="w-full"
              disabled={createBooking.isPending}
            >
              {createBooking.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Đang xử lý...
                </>
              ) : user ? (
                "Xác nhận đặt"
              ) : (
                "Đăng nhập để đặt"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
