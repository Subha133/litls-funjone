import { motion } from "framer-motion";
import { Award, Heart, PartyPopper, Phone, Star } from "lucide-react";
import data from "@/data/data.json";

const counters = [
  {
    title: "Happy Kids",
    subtitle: "Loved by children who keep coming back for more fun",
    accentClass: "from-fun-orange/20 to-fun-yellow/10 border-fun-orange/30",
    Icon: Heart,
  },
  {
    title: "Joyful Parties",
    subtitle: "Successfully hosted celebrations full of laughter and memories",
    accentClass: "from-fun-pink/20 to-fun-purple/10 border-fun-pink/30",
    Icon: PartyPopper,
  },
  {
    title: "Years of Care",
    subtitle: "Experienced team dedicated to protecting every child's smile",
    accentClass: "from-fun-green/20 to-primary/10 border-fun-green/30",
    Icon: Award,
  },
];

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full opacity-60 ${className}`}
    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const CartoonBuddy = ({
  className,
  faceClass,
  earClass,
  delay = 0,
}: {
  className: string;
  faceClass: string;
  earClass: string;
  delay?: number;
}) => (
  <motion.div
    className={`pointer-events-none absolute ${className}`}
    animate={{ y: [0, -12, 0], rotate: [0, 3, -3, 0] }}
    transition={{ duration: 7, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <div className="relative h-20 w-20 md:h-24 md:w-24">
      <div className={`absolute -top-2 left-2 h-6 w-6 rounded-full ${earClass} border-2 border-foreground/10`} />
      <div className={`absolute -top-2 right-2 h-6 w-6 rounded-full ${earClass} border-2 border-foreground/10`} />
      <div className={`absolute inset-0 rounded-full ${faceClass} border-2 border-foreground/10 shadow-lg`} />
      <div className="absolute left-5 top-8 h-2.5 w-2.5 rounded-full bg-foreground/70" />
      <div className="absolute right-5 top-8 h-2.5 w-2.5 rounded-full bg-foreground/70" />
      <div className="absolute left-1/2 top-12 h-1.5 w-8 -translate-x-1/2 rounded-full bg-foreground/70" />
      <div className="absolute left-3 top-11 h-2 w-2 rounded-full bg-secondary/40" />
      <div className="absolute right-3 top-11 h-2 w-2 rounded-full bg-secondary/40" />
    </div>
  </motion.div>
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

      {/* Cartoon character elements */}
      <CartoonBuddy className="top-[10%] right-[6%] opacity-60" faceClass="bg-fun-yellow/70" earClass="bg-fun-orange/65" delay={0.2} />
      <CartoonBuddy className="top-[58%] left-[4%] opacity-55 hidden sm:block" faceClass="bg-fun-pink/65" earClass="bg-fun-purple/60" delay={1.1} />
      <CartoonBuddy className="bottom-[8%] right-[14%] opacity-60" faceClass="bg-fun-green/65" earClass="bg-primary/45" delay={2.3} />

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {counters.map((c, index) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.7 + index * 0.15 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${c.accentClass} bg-white/75 p-5 md:p-6 text-left shadow-lg backdrop-blur-sm transition-all duration-300`}
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                <c.Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-foreground mb-2">{c.title}</h3>
              <p className="font-body text-sm md:text-base leading-relaxed text-foreground/75">{c.subtitle}</p>
              <div className="pointer-events-none absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-white/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
