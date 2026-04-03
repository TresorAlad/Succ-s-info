import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Counter from '../components/Counter';

import img1 from '../assets/images/profile.jpg';
import img2 from '../assets/images/profile1.jpg';
import img3 from '../assets/images/profile2.jpeg';
import img4 from '../assets/images/profile3.jpeg';

const About = () => {
  const stats = [
    { label: "Années d'expérience", value: "10+" },
    { label: "Projets réussis", value: "200+" },
    { label: "Formations certifiées", value: "1200+" },
  ];

  const suggestions = [
    { title: "Écosystème Connecté", desc: "Collaboration étroite avec les leaders du secteur pour des solutions toujours à la pointe.", icon: "hub", iconColor: "text-primary", bg: "bg-primary/10" },
    { title: "Innovation Continue", desc: "Veille technologique permanente pour vous proposer les outils et méthodes les plus récents.", icon: "lightbulb", iconColor: "text-accent-orange", bg: "bg-orange-50" },
    { title: "Accompagnement Dédié", desc: "Un conseiller personnel vous guide à chaque étape de votre parcours de formation.", icon: "support_agent", iconColor: "text-accent-green", bg: "bg-green-50" },
    { title: "Certification Reconnue", desc: "Obtenez des attestations valorisantes pour booster votre carrière professionnelle.", icon: "workspace_premium", iconColor: "text-blue-500", bg: "bg-blue-50" }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % suggestions.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [suggestions.length]);

  const carouselImages = [img1, img2, img3, img4];
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const Icon = ({ name, className = "", size = "24px" }) => (
    <span className={`material-symbols-outlined !text-[inherit] ${className}`} style={{ fontSize: size }}>
      {name}
    </span>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pb-24"
    >
      {/* Header */}
      <section className="bg-secondary-dark text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold mb-8">Notre Mission : Votre <span className="text-primary italic">Réussite Technologique</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Depuis plus de 10 ans, nous accompagnons les entreprises et les particuliers dans leur quotidien numérique avec une expertise pointue en maintenance et formation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro & Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              {...fadeUp}
              className="relative"
              style={{ perspective: '1200px' }}
            >
              {/* 3D Stacked Cards Carousel */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {carouselImages.map((img, i) => {
                  const offset = (i - activeCard + carouselImages.length) % carouselImages.length;
                  const isFront = offset === 0;
                  const zIndex = carouselImages.length - offset;
                  const scale = 1 - offset * 0.06;
                  const translateX = offset * 25;
                  const translateY = offset * -10;
                  const rotateY = offset * -5;
                  const opacity = offset > 2 ? 0 : 1 - offset * 0.2;

                  return (
                    <motion.div
                      key={i}
                      animate={{
                        scale,
                        x: translateX,
                        y: translateY,
                        rotateY,
                        opacity,
                        zIndex,
                      }}
                      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white cursor-pointer"
                      style={{ transformStyle: 'preserve-3d' }}
                      onClick={() => setActiveCard(i)}
                    >
                      <img
                        src={img}
                        alt={`SuccesInfo ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay only on front card */}
                      {isFront && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-8 left-8 text-white">
                            <span className="text-7xl font-black block mb-1 drop-shadow-lg">10</span>
                            <span className="text-sm font-bold uppercase tracking-[0.25em] opacity-90">Ans de Service</span>
                          </div>
                        </>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {carouselImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCard(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === activeCard ? 'w-8 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>

              {/* Floating icon */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-6 bg-accent-orange p-12 rounded-3xl shadow-2xl hidden md:flex items-center justify-center border-4 border-white z-50"
              >
                <Icon name="handyman" size="56px" className="text-white" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Notre Identité</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-dark mb-8 leading-tight">Expertise, Proximité et Partage</h2>
              <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                <span className="font-bold text-secondary-dark">Le Succès Informatique</span> est un centre de ressources numériques dédié à l'excellence. Nous croyons que la maîtrise de l'outil informatique est la clé du succès professionnel aujourd'hui.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Maintenance Experte", desc: "Un diagnostic précis et des interventions rapides pour vos équipements.", icon: "settings_suggest" },
                  { title: "Pédagogie Adaptée", desc: "Des formations pas à pas pour maîtriser l'informatique, quel que soit votre niveau.", icon: "school" },
                  { title: "Service de Proximité", desc: "Un partenaire local de confiance, engagé dans la réussite de votre projet.", icon: "handshake" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-6 items-start p-7 bg-white border border-gray-100 rounded-[2rem] hover:border-primary/20 transition-all group shadow-sm hover:shadow-xl"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Icon name={item.icon} className="text-primary group-hover:text-white transition-colors" size="28px" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section - PROFESSIONAL RE-FORM */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              { label: "Années d'Expérience", value: "10+", icon: "history", color: "from-blue-500 to-primary", bg: "bg-blue-50" },
              { label: "Projets Réussis", value: "200+", icon: "task_alt", iconColor: "text-accent-green", bg: "bg-green-50" },
              { label: "Apprenants Formés", value: "1000+", icon: "groups", iconColor: "text-accent-orange", bg: "bg-orange-50" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative bg-white p-10 rounded-[3rem] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all overflow-hidden text-center"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className={`w-20 h-20 mx-auto ${stat.bg} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <Icon name={stat.icon} className={stat.iconColor || "text-primary"} size="40px" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-5xl sm:text-6xl font-display font-black text-secondary-dark tracking-tighter block group-hover:text-primary transition-colors">
                    <Counter value={stat.value} />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-secondary-dark transition-colors">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vision Section */}
          <motion.div
            {...fadeUp}
            className="bg-blue-50/50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-blue-100/50"
          >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-secondary-dark mb-8">Vision 2030</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  Notre ambition est de devenir le pôle de référence en formation numérique et maintenance informatique au niveau régional, en créant un environnement propice à l'innovation pour tous.
                </p>
                <ul className="space-y-5">
                  {[
                    "Leadership régional en formation bureautique",
                    "Expansion de nos services de maintenance",
                    "Solutions numériques accessibles et innovantes"
                  ].map((text, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-4 font-bold text-secondary-dark group"
                    >
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Icon name="check" className="text-primary group-hover:text-white transition-colors" size="16px" />
                      </span>
                      {text}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center w-full">
                <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-2xl w-full max-w-sm border border-blue-100 flex flex-col items-center text-center relative overflow-hidden" style={{ minHeight: '320px' }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSlide}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className={`w-20 h-20 ${suggestions[activeSlide].bg} rounded-3xl flex items-center justify-center mb-8`}>
                        <Icon name={suggestions[activeSlide].icon} className={suggestions[activeSlide].iconColor} size="40px" />
                      </div>
                      <h3 className="font-bold text-2xl mb-4 text-secondary-dark">{suggestions[activeSlide].title}</h3>
                      <p className="text-gray-400 text-sm mb-8 leading-relaxed">{suggestions[activeSlide].desc}</p>
                    </motion.div>
                  </AnimatePresence>
                  <div className="flex gap-3 mt-auto">
                    {suggestions.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === activeSlide ? 'w-10 bg-primary' : 'w-4 bg-blue-200 hover:bg-blue-300'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default About;
