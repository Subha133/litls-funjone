import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import data from "@/data/data.json";

const Reviews = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" ref={ref} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-3">
            Happy Client Reviews
          </h2>
          <p className="text-muted-foreground text-lg">Real parents, real joy ❤️</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.happy_client_reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-2xl bg-background shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-border"
            >
              <div className="relative aspect-video bg-foreground/5">
                <video
                  src={review.url}
                  className="w-full h-full object-cover"
                  preload="metadata"
                  controls
                  playsInline
                  aria-label={review.title}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                    <Play className="text-primary-foreground ml-1" size={28} />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{review.title}</h3>
                <p className="text-muted-foreground text-sm">{review.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
