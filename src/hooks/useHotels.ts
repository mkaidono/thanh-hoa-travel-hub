import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Hotel = Tables<"hotels"> & {
  reviews?: { rating: number }[];
  avgRating?: number;
  reviewCount?: number;
};

export const useHotels = (featured?: boolean) => {
  return useQuery({
    queryKey: ["hotels", { featured }],
    queryFn: async () => {
      let query = supabase
        .from("hotels")
        .select(`
          *,
          reviews (rating)
        `)
        .eq("is_active", true);

      if (featured) {
        query = query.eq("is_featured", true);
      }

      const { data, error } = await query.order("created_at", { ascending: false });

      if (error) throw error;

      // Calculate average ratings
      return (data || []).map((hotel) => ({
        ...hotel,
        avgRating: hotel.reviews?.length 
          ? hotel.reviews.reduce((sum, r) => sum + r.rating, 0) / hotel.reviews.length 
          : 4.5,
        reviewCount: hotel.reviews?.length || 0,
      }));
    },
  });
};

export const useHotel = (id: string) => {
  return useQuery({
    queryKey: ["hotel", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("hotels")
        .select(`
          *,
          reviews (rating, comment, created_at, user_id)
        `)
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });
};
