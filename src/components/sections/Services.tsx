"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PartyPopper, Baby, Clock, Users, Music, Star } from "lucide-react";
import confetti from "canvas-confetti";
import data from "@/data/data.json";

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

const formatPrice = (price: number) =>
  typeof price === "number" ? `Rs ${price.toLocaleString("en-IN")}` : "N/A";

const openWhatsApp = (message: string, confettiOn = false) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 max-w-7xl mx-auto items-stretch">
          {data.services.map((service, i) => {
            const isPlayzone = service.service_type === "Playzone";
            const isPlaySchool = service.service_type === "Play School & Daycare Package";
            
            return (
              <motion.div
                key={service.service_type}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 }}
                className={`bg-white shadow-lg hover:shadow-xl transition flex flex-col w-full rounded-2xl p-6 md:p-8 border-2 border-transparent hover:border-purple-100 ${
                  isPlayzone || isPlaySchool
                    ? "md:col-span-1 lg:col-span-3"
                    : "md:col-span-1 lg:col-span-2"
                }`}
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

                    <div className="mb-6 flex justify-center w-full">
                      <img
                        src={service.image?.url.replace(
                          "/upload/",
                          "/upload/f_auto,q_auto/"
                        )}
                        alt="birthday"
                        className="w-full max-w-[450px] h-auto rounded-xl shadow-md object-cover"
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
                      className="w-full mt-auto bg-pink-500 text-white py-3 rounded-full font-bold hover:scale-105 transition"
                    >
                      Book Birthday 🎉
                    </button>
                  </>
                ) : service.service_type === "Zumba/Dance/Mindful Yoga fitness" ? (
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
                        className="w-full max-w-[450px] h-auto rounded-xl shadow-md object-cover"
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
                        Pricing valid till {service.pricing?.validTill}
                      </p>
                      <p className="text-sm">Non-member Women: {formatPrice(service.pricing?.plans?.[0]?.price)} (4class)</p>
                      <p className="text-sm">
                        Non-member Kids: {formatPrice(service.pricing?.plans?.[1]?.price)} ({service.pricing?.plans?.[1]?.extra})
                      </p>
                      <p className="text-sm">
                        Members: {service.pricing?.plans?.[2]?.price === 0 ? "Free" : formatPrice(service.pricing?.plans?.[2]?.price)} | {service.pricing?.plans?.[2]?.note}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        openWhatsApp("Hi! I want to book Zumba.")
                      }
                      className="w-full mt-auto bg-blue-500 text-white py-2 rounded-full font-bold hover:scale-105 transition"
                    >
                      Book Zumba
                    </button>
                  </>
                ) : service.service_type === "Play School & Daycare Package" ? (
                  <>
                    <div className="flex items-center gap-3 mb-4 w-full">
                      <Baby />
                      <h3 className="text-xl lg:text-2xl font-bold">
                        {service.service_type}
                      </h3>
                    </div>

                    <div className="mb-6 flex justify-center w-full">
                      <img
                        src={service.image?.url?.replace(
                          "/upload/",
                          "/upload/f_auto,q_auto/"
                        )}
                        alt={service.service_type}
                        className="w-full max-w-[500px] h-[250px] md:h-[300px] rounded-xl shadow-md object-cover"
                        loading="lazy"
                      />
                    </div>

                    <p className="mb-3 w-full font-semibold text-emerald-700 text-xl">{service.headline}</p>
                    <p className="mb-5 w-full text-foreground/80 leading-relaxed text-lg">{service.description}</p>
                    
                    <div className="mb-5 w-full bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-xl text-center">
                      <p className="font-semibold mb-1">Seats strictly upon availability!</p>
                      <p className="text-sm">Reach out to us to check if slots are open for your branch.</p>
                    </div>

                    <button
                      onClick={() =>
                        openWhatsApp("Hi! I want to know more about the Play School & Daycare Package.")
                      }
                      className="w-full mt-auto bg-green-500 text-white py-3 rounded-full font-bold hover:scale-105 transition"
                    >
                      Enquire Now
                    </button>
                  </>
                ) : service.service_type === "Playzone" ? (
                  <>
                    <div className="flex items-center gap-3 mb-4 w-full">
                      <Star className="text-purple-500" />
                      <h3 className="text-xl lg:text-2xl font-bold">
                        {service.service_type}
                      </h3>
                    </div>

                    <div className="mb-6 flex justify-center w-full">
                      <img
                        src={service.image?.url?.replace(
                          "/upload/",
                          "/upload/f_auto,q_auto/"
                        )}
                        alt={service.headline || "playzone"}
                        className="w-full max-w-[500px] h-[250px] md:h-[300px] rounded-xl shadow-md object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="w-full flex-grow flex flex-col justify-center items-center py-6">
                      <h3 className="font-extrabold text-3xl md:text-4xl text-purple-700 text-center leading-tight mb-2">
                        {service.headline}
                      </h3>
                      <p className="text-foreground/80 text-lg text-center mt-2">
                        Where joy meets unlimited active play. 
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        openWhatsApp("Hi! I want to know more about the Playzone.")
                      }
                      className="w-full mt-auto bg-purple-500 text-white py-3 rounded-full font-bold hover:scale-105 transition"
                    >
                      Enquire Now
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
                        className="w-full max-w-[450px] h-auto rounded-xl shadow-md object-cover"
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
                      className="w-full mt-auto bg-green-500 text-white py-2 rounded-full font-bold hover:scale-105 transition"
                    >
                      Enquire
                    </button>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
