import { Star } from "lucide-react";

type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  return [1, 2, 3, 4, 5].map((index) => (
    <Star
      key={index}
      className="w-4 h-4"
      color={index <= rating ? "#FFC107" : "#E4E5E9"}
    />
  ));
};

export default Rating;
