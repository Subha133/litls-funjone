import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Phone, PartyPopper, Star } from "lucide-react";
import data from "@/data/data.json";

const counters = [
  { label: "Happy Kids", end: 5000, suffix: "+" },
  { label: "Parties Hosted", end: 500, suffix: "+" },
  { label: "Years of Fun", end: 3, suffix: "+" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-extrabold text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full opacity-60 ${className}`}
    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const Hero = () => {
  const { name, tagline } = data.business;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, hsl(40 100% 97%) 0%, hsl(200 80% 95%) 50%, hsl(330 70% 95%) 100%)",
      }}
    >
      {/* Floating decorations */}
      <FloatingShape className="w-20 h-20 bg-fun-yellow top-[15%] left-[8%]" delay={0} />
      <FloatingShape className="w-14 h-14 bg-fun-pink top-[25%] right-[10%]" delay={1} />
      <FloatingShape className="w-16 h-16 bg-fun-green bottom-[20%] left-[15%]" delay={2} />
      <FloatingShape className="w-10 h-10 bg-fun-purple bottom-[30%] right-[20%]" delay={0.5} />
      <FloatingShape className="w-12 h-12 bg-fun-orange top-[60%] left-[50%]" delay={1.5} />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-fun-yellow/20 rounded-full animate-blob" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-fun-pink/15 rounded-full animate-blob" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="text-fun-yellow" fill="hsl(45 100% 55%)" size={28} />
            <Star className="text-fun-yellow" fill="hsl(45 100% 55%)" size={20} />
            <Star className="text-fun-yellow" fill="hsl(45 100% 55%)" size={28} />
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-4 leading-tight">
            {name}
          </h1>
          <p className="font-display text-xl md:text-2xl text-muted-foreground font-semibold mb-8">
            {tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#services"
            className="flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-display text-lg font-bold text-secondary-foreground shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <PartyPopper size={22} /> Book Birthday Party
          </a>
          <a
            href={`tel:${data.business.contact.phone_whatsapp}`}
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-lg font-bold text-primary-foreground shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            <Phone size={22} /> Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {counters.map((c) => (
            <div key={c.label} className="flex flex-col items-center">
              <Counter end={c.end} suffix={c.suffix} />
              <span className="text-muted-foreground font-semibold text-sm mt-1">{c.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
