import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router";
import { serviceImages, serviceKeys, steps, whyIcons } from "~/const/app";

export default function Home() {
  const { t } = useTranslation();

  // Animation variants for a cohesive "Luxury" reveal
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <main className="min-h-screen bg-[#FDFCFB] overflow-hidden selection:bg-gold-200">
      <section id="hero" className="relative min-h-[90vh] md:pt-0 pt-20 flex items-center overflow-hidden">

        {/* Aesthetic Background Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="/living.jpg"
            className="w-full h-full object-cover opacity-40 mix-blend-multiply"
            alt=""
          />

        </div>

        <div className="container-x mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div {...fadeInUp}>
              <span className="inline-block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                {t("home.subtitle") || "Premium Service"}
              </span>
              <h1 className="text-6xl md:text-8xl leading-[1.1] text-neutral-900 tracking-tight">
                {/* Splitting text for a characterful layout */}
                <span className="block">{t("home.welcome_line_1") || "Yindee"}</span>
                <span className="block italic font-light ml-12 text-neutral-700">
                  {t("home.welcome_line_2") || "Cleaning"}
                </span>
              </h1>
            </motion.div>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="max-w-md text-lg text-neutral-600 leading-relaxed font-light"
            >
              {t("home.description") || "Experience the art of pristine living with our bespoke cleaning services tailored for luxury spaces."}
            </motion.p>

            <div className="flex gap-2">
              <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                <button className="group relative px-8 py-4 bg-(--primary-color) rounded-full text-white overflow-hidden transition-all duration-300 hover:pr-12">
                  <span className="relative z-10 uppercase tracking-widest text-sm font-medium">
                    {t("home.cta") || "Book Consultation"}
                  </span>
                  <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    →
                  </span>
                </button>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                <NavLink to="/services" className="group relative px-8 py-4 text-zinc-800 flex items-center transition-all duration-300 pr-10 hover:pr-12">
                  <span className="relative z-10 uppercase tracking-widest text-sm font-medium">
                    {t("home.cta2") || "Book Consultation"}
                  </span>
                  <span className="absolute right-4 ">
                    <FaArrowRightLong />
                  </span>
                </NavLink>
              </motion.div>
            </div>
          </div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >


            <div className="relative  w-[640px] z-10 overflow-hidden bottom-[-60px] md:left-[-180px]">
              <img
                src="maid.webp"
                className="w-full h-auto object-cover "
                alt="Professional maid service"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/*  */}

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="container-x mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left: Sticky Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div {...fadeInUp}>
                <span className="inline-block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                  {t("why_us.subtitle") || "Why Choose Us"}
                </span>
                <h2 className="text-5xl md:text-6xl leading-[1.1] text-neutral-900 tracking-tight mb-8">
                  <span className="block">{t("why_us.title_line_1")}</span>
                  <span className="block italic font-light text-neutral-600 ml-8">
                    {t("why_us.title_line_2")}
                  </span>
                </h2>
                <p className="max-w-sm text-lg text-neutral-500 font-light leading-relaxed">
                  {t("why_us.description")}
                </p>
              </motion.div>
            </div>

            {/* Right: Grid of Points */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[1, 2, 3, 4].map((i,index) => (
                <motion.div
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: 0.1 * i }}
                  className="group space-y-4 rounded-xl bg-white shadow-xl p-6"
                >
                  
                  <div className="">
                    <img
                    className="size-12 hue-rotate-[345deg]"
                    src={whyIcons[index]}/>
                  </div>
                  <h4 className="text-xl font-medium text-neutral-900 pt-2">
                    {t(`why_us.points.point${i}_title`)}
                  </h4>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">
                    {t(`why_us.points.point${i}_desc`)}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <div className="container-x mt-10">
        <div className="mb-16">
          <motion.div {...fadeInUp}>
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              {t("process.protocol_label") || "The Yindee Clean"}
            </span>
            <h2 className="text-4xl md:text-5xl leading-[1.2] text-neutral-900 tracking-tight">
              <span className="block">{t("process.title_line_1") || "Bespoke Service"}</span>
              <span className="block italic font-light text-neutral-600">
                {t("process.title_line_2") || "Operational Excellence"}
              </span>
            </h2>
          </motion.div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-neutral-200">

          {steps.map((step, index) => {
            const isFirst = index === 0;
            const isLast = index === steps.length - 1;
            return (
              <div
                key={step.key}
                className={`
            pt-12 pb-16
            ${isFirst ? "lg:pr-10" : ""}
            ${!isFirst && !isLast ? "lg:px-10 border-r border-neutral-100" : ""}
            ${isLast ? "lg:pl-10" : ""}
            border-b lg:border-b-0 border-neutral-100
            group hover:bg-white transition-all duration-700
          `}
              >
                <span className="font-mono bg-(--primary-color) text-white text-[10px]
                w-fit p-2 rounded-full  mb-10 block min-h-6
                transition-opacity tracking-widest uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="text-2xl font-light mb-6">
                  {t(`process.${step.key}_title`)}
                </h4>
                <p className="text-sm leading-relaxed text-neutral-500 font-light pr-4">
                  {t(`process.${step.key}_desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* service section */}
      <section className="py-24 bg-white">
        <div className="container-x mx-auto px-6">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-sans md:text-5xl text-zinc-900 tracking-tight mb-4">
                {t('service.title')}
              </h2>
              <p className="text-zinc-500 font-light text-lg">
                {t('service.description')}
              </p>
            </div>
            <div className="hidden md:block h-px flex-grow bg-zinc-100 mx-10 mb-4"></div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceKeys.map((key, index) => (
              <div
                key={key}
                className="group relative h-[500px] w-full overflow-hidden rounded-2xl bg-zinc-100"
              >
                {/* Image with subtle zoom */}
                <img
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  src={serviceImages[index]} // Replace with specific service images
                  alt={t(`service.categories.${key}`)}
                />

                {/* Sophisticated Gradient Overlay (Lighter than before) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>

                {/* Content Positioning */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">

                    {/* Category Badge */}
                    <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.2em] px-3 py-1 rounded-full mb-4">
                      {t(`service.categories.${key}`)}
                    </span>

                    {/* Description - reveals more on hover */}
                    <p className="text-white/90 text-sm font-light leading-relaxed line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {t(`service.details.${key}`)}
                    </p>

                    {/* Decorative line */}
                    <div className="mt-4 w-0 group-hover:w-12 h-[1px] bg-(--primary-color) transition-all duration-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* blog */}
      {/* Blog/Journal Section */}
      <section className="py-24 bg-[#FDFCFB]">
        <div className="container-x mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <motion.span {...fadeInUp} className="inline-block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
                {t("blog.subtitle") || "Journal"}
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">
                {t("blog.title") || "Insights & Care"}
              </h2>
            </div>
            <p className="max-w-xs text-sm text-neutral-500 font-light leading-relaxed">
              {t("blog.description")}
            </p>
          </div>

          {/* Draggable Carousel */}
          <div className="relative overflow-visible cursor-grab active:cursor-grabbing">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -800 }} // Adjust based on your content width
              className="flex gap-8 w-max"
            >
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-[300px] md:w-[400px] shrink-0 group">
                  {/* Image Wrap */}
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 mb-6 relative">
                    <img
                      src={`/clean${i + 1}.jpg`} // Replace with your actual assets
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>

                  {/* Post Metadata */}
                  <div className="space-y-3">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400">
                      {t(`blog.posts.post${i}_date`)}
                    </span>
                    <h3 className="text-xl font-light text-neutral-800 leading-snug group-hover:text-neutral-900 transition-colors">
                      {t(`blog.posts.post${i}_title`)}
                    </h3>

                    <button className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 mt-4 group-hover:text-neutral-900 transition-all">
                      <span>{t("blog.read_more") || "Read Story"}</span>
                      <FaArrowRightLong className="text-[10px] transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}