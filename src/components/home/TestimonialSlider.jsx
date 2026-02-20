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
    <div
      aria-label="Testimonials"
      className="flex flex-col items-center gap-4 mt-10"
    >
      <article className="shadow-(--box-shadow)">
        <p className="italic mb-4">{t.content}</p>
        <footer className="mt-2">
          <p className="font-bold">{t.name}</p>
          <p className="text-sm text-background/70">{t.occupation}</p>
        </footer>
      </article>
      <div className="button-group flex gap-4">
        <button
          onClick={() =>
            setCurrent(
              (prev) => (prev - 1 + testimonials.length) % testimonials.length,
            )
          }
          className="hover:bg-white"
          aria-label="previous testimonial"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
          className="hover:bg-white"
          aria-label="next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
{
  /* <div className="text-xs text-secondary" aria-live="polite">
        {current + 1} / {testimonials.length}
      </div> */
}
