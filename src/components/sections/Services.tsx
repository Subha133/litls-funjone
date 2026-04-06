"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PartyPopper, Baby, Clock, Users, Music } from "lucide-react";
import confetti from "canvas-confetti";
import data from "@/data/data.json";

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

const formatPrice = (price) =>
  typeof price === "number" ? `Rs ${price.toLocaleString("en-IN")}` : "N/A";

const openWhatsApp = (message, confettiOn = false) => {
  if (confettiOn) triggerConfetti();

  const url = `https://wa.me/${
    data.business.contact.phone_whatsapp
  }?text=${encodeURIComponent(message)}`;

  setTimeout(() => window.open(url, "_blank"), confettiOn ? 600 : 0);
};

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" ref={ref} className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground">
            Fun for kids, peace for parents
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.services.map((service, i) => (
            <motion.div
              key={service.service_type}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="bg-white shadow-lg hover:shadow-xl transition rounded-2xl p-6 flex flex-col items-start h-full"
            >
              {/* 🎉 Birthday */}
              {service.service_type === "Birthday Party Package" ? (
                <>
                  <div className="flex items-center gap-3 mb-4 w-full">
                    <PartyPopper />
                    <h3 className="text-2xl font-bold">
                      {service.service_type}
                    </h3>
                  </div>

                  {/* ✅ CONTROLLED IMAGE SIZE */}
                  <div className="mb-6 flex justify-center w-full">
                    <img
                      src={service.image?.url.replace(
                        "/upload/",
                        "/upload/f_auto,q_auto/"
                      )}
                      alt="birthday"
                      className="w-full max-w-[450px] h-auto rounded-xl shadow-md"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-3 w-full text-emerald-700 font-semibold">
                    <Users size={16} />
                    <span className="rounded-full bg-emerald-100 border border-emerald-200 px-3 py-1 text-emerald-700">{service.age_group}</span>
                  </div>

                  <p className="mb-5 w-full rounded-lg bg-blue-50 border border-blue-200 px-3 py-2 font-semibold text-blue-700">
                    {service.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 w-full">
                    <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3">
                      <p className="text-sm font-semibold text-emerald-600">Child</p>
                      <p className="font-bold text-xl text-emerald-700">
                        {formatPrice(service.pricing?.child_per_head)}
                      </p>
                    </div>
                    <div className="rounded-xl bg-blue-50 border border-blue-200 px-4 py-3">
                      <p className="text-sm font-semibold text-blue-600">Adult</p>
                      <p className="font-bold text-xl text-blue-700">
                        {formatPrice(service.pricing?.adult_per_head)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      openWhatsApp("Hi! I want to book Birthday Party.", true)
                    }
                    className="w-full bg-pink-500 text-white py-3 rounded-full font-bold hover:scale-105 transition"
                  >
                    Book Birthday 🎉
                  </button>
                </>
              ) : service.service_type === "Zumba Fitness" ? (
                <>
                  <div className="flex items-center gap-3 mb-4 w-full">
                    <Music />
                    <h3 className="text-xl font-bold">
                      {service.service_type}
                    </h3>
                  </div>

                  <div className="mb-6 flex justify-center w-full">
                    <img
                      src={service.image?.url?.replace(
                        "/upload/",
                        "/upload/f_auto,q_auto/"
                      )}
                      alt={service.image?.alt || "zumba"}
                      className="w-full max-w-[450px] h-auto rounded-xl shadow-md"
                      loading="lazy"
                    />
                  </div>

                  <div className="w-full space-y-2 mb-4 text-foreground/90">
                    <p className="font-semibold text-emerald-700">
                      Target client: {(service.targetAudience || []).join(", ")}
                    </p>
                    <p className="text-sm">* {service.schedule?.day} {service.schedule?.time}</p>
                    <p className="text-sm">Activities: {(service.activities || []).join(", ")}</p>
                    <p className="text-sm font-semibold text-blue-700">
                      Pricing (valid till {service.pricing?.validTill})
                    </p>
                    <p className="text-sm">Non-member Women: {formatPrice(service.pricing?.plans?.[0]?.price)} (4class)</p>
                    <p className="text-sm">
                      Non-member Kids: {formatPrice(service.pricing?.plans?.[1]?.price)} ({service.pricing?.plans?.[1]?.extra})
                    </p>
                    <p className="text-sm">
                      Members: {service.pricing?.plans?.[2]?.price === 0 ? "Free" : formatPrice(service.pricing?.plans?.[2]?.price)} | {service.pricing?.plans?.[2]?.note}
                    </p>
                    <p className="text-sm font-semibold text-orange-700">20%price hike after 11 April 2026</p>
                  </div>

                  <button
                    onClick={() =>
                      openWhatsApp("Hi! I want to book Zumba.")
                    }
                    className="w-full mt-4 bg-blue-500 text-white py-2 rounded-full"
                  >
                    Book Zumba
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-4 w-full">
                    <Baby />
                    <h3 className="text-xl font-bold">
                      {service.service_type}
                    </h3>
                  </div>

                  <div className="mb-6 flex justify-center w-full">
                    <img
                      src={service.image?.url?.replace(
                        "/upload/",
                        "/upload/f_auto,q_auto/"
                      )}
                      alt={service.image?.alt || "daycare"}
                      className="w-full max-w-[450px] h-auto rounded-xl shadow-md"
                      loading="lazy"
                    />
                  </div>

                  <p className="mb-3 w-full font-semibold text-emerald-700">{service.headline || service.description}</p>

                  <div className="flex items-center gap-2 text-sm mb-3 w-full">
                    <Clock size={16} />
                    <span>
                      Weekdays | {service.timing?.weekdays || [service.timing?.days, service.timing?.hours].filter(Boolean).join(" | ")}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 w-full">
                    <div className="rounded-xl bg-green-50 border border-green-200 px-3 py-2">
                      <p className="text-sm text-green-700">Monthly</p>
                      <p className="font-bold text-lg text-green-800">
                        {formatPrice(service.pricing?.monthly || service.fees?.monthly)}
                      </p>
                    </div>
                    <div className="rounded-xl bg-blue-50 border border-blue-200 px-3 py-2">
                      <p className="text-sm text-blue-700">Weekday + Weekend</p>
                      <p className="font-bold text-lg text-blue-800">
                        {formatPrice(service.pricing?.weekday_plus_weekend)}
                      </p>
                    </div>
                  </div>

                  {service.additional_services?.pickup_facility?.available && (
                    <p className="mb-4 w-full text-sm text-foreground/80">
                      Pick up within 5kms with extra cost
                    </p>
                  )}

                  <button
                    onClick={() =>
                      openWhatsApp("Hi! I want daycare details.")
                    }
                    className="w-full bg-green-500 text-white py-2 rounded-full"
                  >
                    Enquire
                  </button>
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
