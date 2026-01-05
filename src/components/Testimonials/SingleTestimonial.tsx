import { Testimonial } from "@/types/testimonial";
import { Star } from "lucide-react";
import Image from "next/image";

const SingleTestimonial = ({
  testimonial: { star, name, image, content, designation },
}: {
  testimonial: Testimonial;
}) => {
  const ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index}>
        <Star className="w-5" fill="yellow" />
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div className="shadow-two hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark rounded-xs bg-white p-8 duration-300 lg:px-5 xl:px-8">
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="border-body-color/10 text-body-color mb-8 border-b pb-8 text-base leading-relaxed dark:border-white/10 dark:text-white">
          “{content}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-12.5 w-full max-w-12.5 overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h3 className="text-dark mb-1 text-lg font-semibold lg:text-base xl:text-lg dark:text-white">
              {name}
            </h3>
            <p className="text-body-color text-sm">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
