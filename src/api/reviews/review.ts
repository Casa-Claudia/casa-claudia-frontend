export interface Review {
    id: number;
    first_name: string;
    last_name: string;
    rating: number;
    comment: string;
    created_at: Date;
    updated_at: Date;
    show: boolean;
  }
  
export interface ApiResponseReview {
    success: boolean;
    reviews: Review[];
  }
