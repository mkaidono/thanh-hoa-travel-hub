import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Tour = Tables<"tours"> & {
  reviews?: { rating: number }[];
  avgRating?: number;
  reviewCount?: number;
};

export const useTours = (featured?: boolean) => {
  return useQuery({
    queryKey: ["tours", { featured }],
    queryFn: async () => {
      let query = supabase
        .from("tours")
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
      return (data || []).map((tour) => ({
        ...tour,
        avgRating: tour.reviews?.length 
          ? tour.reviews.reduce((sum, r) => sum + r.rating, 0) / tour.reviews.length 
          : 4.5,
        reviewCount: tour.reviews?.length || 0,
      }));
    },
  });
};

export const useTour = (id: string) => {
  return useQuery({
    queryKey: ["tour", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tours")
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
