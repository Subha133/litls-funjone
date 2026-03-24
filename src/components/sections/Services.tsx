import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PartyPopper, Baby, Clock, Users } from "lucide-react";
import confetti from "canvas-confetti";
import data from "@/data/data.json";

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#FF6B9D", "#FFD93D", "#6BCB77", "#4D96FF", "#FF6B35"],
  });
};

const Services = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleBirthdayBooking = () => {
    triggerConfetti();
    
    const message = `Hi! I'm interested in booking a Birthday Party Package at Litls Funzone.
Details:
- Age Group: ${data.services[0].age_group}
- Pricing: ₹${data.services[0].pricing?.child_per_head} Per Child, ₹${data.services[0].pricing?.adult_per_head} Per Adult

Looking forward to it!`;
    
    const whatsappUrl = `https://wa.me/${data.business.contact.phone_whatsapp}?text=${encodeURIComponent(message)}`;
    
    // Small delay to allow confetti to start before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  return (
    <section id="services" ref={ref} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Fun-filled experiences designed for kids and peace of mind for parents
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.services.map((service, i) => (
            <motion.div
              key={service.service_type}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative rounded-2xl bg-background p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-fun-yellow/10 rounded-bl-full" />

              {service.service_type === "Birthday Party Package" ? (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <PartyPopper className="text-secondary" size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {service.service_type}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Users size={16} />
                    <span>Age Group: {service.age_group}</span>
                  </div>
                  <p className="text-foreground/80 font-semibold mb-4">{service.tagline}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="rounded-xl bg-fun-pink/10 px-4 py-2 text-center">
                      <p className="text-xs text-muted-foreground">Per Child</p>
                      <p className="font-display text-xl font-bold text-secondary">
                        ₹{service.pricing?.child_per_head}
                      </p>
                    </div>
                    <div className="rounded-xl bg-primary/10 px-4 py-2 text-center">
                      <p className="text-xs text-muted-foreground">Per Adult</p>
                      <p className="font-display text-xl font-bold text-primary">
                        ₹{service.pricing?.adult_per_head}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleBirthdayBooking}
                    className="w-full rounded-full bg-secondary py-3 font-display font-bold text-secondary-foreground shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
                  >
                    🎉 Book Now
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-fun-green/10 flex items-center justify-center">
                      <Baby className="text-fun-green" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        {service.service_type}
                      </h3>
                      {service.admission_status && (
                        <span className="text-xs font-bold text-fun-green bg-fun-green/10 px-2 py-0.5 rounded-full">
                          Admissions {service.admission_status}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-3">{service.description}</p>
                  {service.timing && (
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Clock size={16} />
                      <span>{service.timing.days} · {service.timing.hours}</span>
                    </div>
                  )}
                  {service.fees && (
                    <div className="rounded-xl bg-fun-green/10 px-4 py-2 inline-block mb-6">
                      <p className="text-xs text-muted-foreground">Monthly Fee</p>
                      <p className="font-display text-xl font-bold text-fun-green">
                        ₹{service.fees.monthly?.toLocaleString()}
                      </p>
                    </div>
                  )}
                  <a
                    href={`https://wa.me/${data.business.contact.phone_whatsapp}?text=Hi! I'm interested in the Child Daycare at Litls Funzone`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-full bg-fun-green py-3 font-display font-bold text-center text-primary-foreground shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
                  >
                    Enquire on WhatsApp
                  </a>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
