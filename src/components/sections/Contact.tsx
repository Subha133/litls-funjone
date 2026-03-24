import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Instagram, Facebook, Navigation } from "lucide-react";
import data from "@/data/data.json";

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const c = data.business.contact;

  return (
    <section id="contact" ref={ref} className="py-20" style={{
      background: "linear-gradient(135deg, hsl(200 80% 96%) 0%, hsl(330 70% 96%) 100%)",
    }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-3">
            Visit Us
          </h2>
          <p className="text-muted-foreground text-lg">We'd love to see you and your little ones!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto rounded-3xl bg-card p-8 md:p-12 shadow-xl border border-border"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-lg">Address</p>
                <p className="text-muted-foreground">{c.address}</p>
                <p className="text-muted-foreground text-sm mt-1">📍 {c.landmark}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-fun-green/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-fun-green" size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-lg">Phone / WhatsApp</p>
                <a href={`tel:${c.phone_whatsapp}`} className="text-primary font-semibold hover:underline">
                  {c.phone_whatsapp}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-fun-pink/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="text-fun-pink" size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-lg">Instagram</p>
                <a
                  href={`https://instagram.com/${c.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  @{c.instagram}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Facebook className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-foreground text-lg">Facebook</p>
                <a
                  href={`https://facebook.com/${c.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  {c.facebook}
                </a>
              </div>
            </div>
          </div>

          {c.google_maps_available && (
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(c.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 w-full rounded-full bg-primary py-3.5 font-display font-bold text-primary-foreground shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <Navigation size={18} /> Open in Google Maps
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
