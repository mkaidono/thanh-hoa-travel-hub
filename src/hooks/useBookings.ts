import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables, TablesInsert } from "@/integrations/supabase/types";
import { useToast } from "@/hooks/use-toast";

export type Booking = Tables<"bookings">;
export type BookingInsert = TablesInsert<"bookings">;

export const useBookings = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select(`
          *,
          tours (name, image_url, duration),
          hotels (name, image_url, location)
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (booking: Omit<BookingInsert, "user_id">) => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("Bạn cần đăng nhập để đặt tour/khách sạn");
      }

      const { data, error } = await supabase
        .from("bookings")
        .insert({
          ...booking,
          user_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast({
        title: "Đặt thành công!",
        description: "Chúng tôi sẽ liên hệ với bạn sớm nhất",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Đặt thất bại",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};
