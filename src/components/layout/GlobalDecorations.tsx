import { motion } from "framer-motion";

const Balloon = ({
  className,
  colorClass,
  delay = 0,
}: {
  className: string;
  colorClass: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ y: [0, -18, 0], rotate: [0, 2, -2, 0] }}
    transition={{ duration: 7, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <div className={`h-16 w-12 md:h-20 md:w-14 rounded-[45%_45%_50%_50%] ${colorClass} shadow-md`} />
    <div className="mx-auto h-3 w-3 -mt-1 rotate-45 bg-white/70" />
    <div className="mx-auto h-10 w-px bg-foreground/20" />
  </motion.div>
);

const Cloud = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
    transition={{ duration: 9, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    <div className="relative h-12 w-28 md:h-14 md:w-[8rem]">
      <div className="absolute left-0 top-4 h-8 w-14 rounded-full bg-white/70 blur-[0.3px]" />
      <div className="absolute left-8 top-0 h-10 w-14 rounded-full bg-white/80 blur-[0.3px]" />
      <div className="absolute right-0 top-5 h-7 w-12 rounded-full bg-white/70 blur-[0.3px]" />
    </div>
  </motion.div>
);

const Rainbow = ({ className }: { className: string }) => (
  <div className={`absolute ${className}`}>
    <div className="h-24 w-44 md:h-28 md:w-56 rounded-t-full border-t-[12px] border-fun-pink/55" />
    <div className="-mt-20 ml-3 h-20 w-[9.5rem] md:-mt-24 md:ml-4 md:h-24 md:w-[12rem] rounded-t-full border-t-[10px] border-fun-orange/55" />
    <div className="-mt-16 ml-6 h-16 w-32 md:-mt-20 md:ml-8 md:h-20 md:w-40 rounded-t-full border-t-[9px] border-fun-yellow/60" />
    <div className="-mt-12 ml-9 h-12 w-[6.5rem] md:-mt-16 md:ml-12 md:h-16 md:w-[8rem] rounded-t-full border-t-[8px] border-fun-green/55" />
  </div>
);

const GlobalDecorations = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.55),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.4),transparent_24%)]" />

      <Cloud className="top-[8%] left-[6%] opacity-80" delay={0.4} />
      <Cloud className="top-[16%] right-[8%] opacity-70" delay={1.2} />
      <Cloud className="bottom-[18%] left-[18%] opacity-65 hidden sm:block" delay={2.2} />

      <Balloon className="top-[20%] left-[4%] opacity-85" colorClass="bg-fun-pink/70" delay={0.3} />
      <Balloon className="top-[36%] right-[10%] opacity-80" colorClass="bg-fun-yellow/70" delay={1.1} />
      <Balloon className="bottom-[26%] right-[20%] opacity-75 hidden md:block" colorClass="bg-fun-green/70" delay={2} />

      <motion.div
        className="absolute bottom-[7%] left-[8%] opacity-70"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Rainbow className="" />
      </motion.div>

      <motion.div
        className="absolute top-[64%] right-[5%] opacity-55 hidden lg:block"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
      >
        <Rainbow className="scale-75" />
      </motion.div>
    </div>
  );
};

export default GlobalDecorations;
