"use client";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getTestimonials } from "@/lib/dal";

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    getTestimonials().then((data) => {
      if (data?.success !== false && Array.isArray(data)) {
        setTestimonials(data);
      }
    });
  }, []);

  if (!testimonials.length) return null;

  const t = testimonials[current];

  return (
    <>
      <div
        aria-label="Testimonials"
        className="testi_container flex flex-col items-center gap-4 mt-20 mb-7"
      >
        {" "}
        <h1 className="  text-center line-clamp-2 ">
          Det siger vores kunder om os
        </h1>
        <article className="shadow-(--box-shadow)">
          <p className="italic mb-4 text-secondary">{t.content}</p>
          <div className="mt-2">
            <p className="font-bold text-secondary">{t.name}</p>
            <p className="text-sm text-secondary">{t.occupation}</p>
          </div>
        </article>
        <div className="button-group flex gap-4">
          <button
            onClick={() =>
              setCurrent(
                (prev) =>
                  (prev - 1 + testimonials.length) % testimonials.length,
              )
            }
            aria-label="previous testimonial"
            className="flex items-center justify-center bg-[#183153] border-2 border-white rounded-full w-12 h-12"
          >
            <FaChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            onClick={() =>
              setCurrent((prev) => (prev + 1) % testimonials.length)
            }
            aria-label="next testimonial"
            className="flex items-center justify-center bg-[#183153] border-2 border-white rounded-full w-12 h-12"
          >
            <FaChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="text-xs text-secondary" aria-live="polite">
        {current + 1} / {testimonials.length}
      </div> */
}
