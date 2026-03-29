import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router";
import { useTranslation } from 'react-i18next';
import {
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D,
  HiOutlineUserGroup,
  HiOutlineBuildingOffice,
  HiOutlineBuildingStorefront,
  HiOutlineBuildingOffice2,
  HiOutlineHomeModern
} from "react-icons/hi2";
import { serviceKeys } from "~/const/app";
import CTACard from "~/components/ctaCard";

export default function Home() {

  const { t } = useTranslation();

  return (
    <main>
      <section className="relative bg-white overflow-hidden">
        <div className="container-x w-full flex items-center min-h-[700px]">
          {/* Background Image with a softer, cleaner fade */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://carecleans.com/wp-content/uploads/2024/08/Group-2-banner.webp"
              className="w-full h-full object-cover opacity-30 md:opacity-100 md:w-1/2 md:ml-auto"
              alt="Professional Cleaning"
            />
            {/* Gradient mask to blend image into the white background */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 md:via-white/40 to-transparent"></div>
          </div>
          {/* Content Layer */}
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl">
              {/* Refined Badge */}
              <span className="inline-block px-3 py-1 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase border border-zinc-200 text-zinc-400 rounded-full">
                Yindee Clean
              </span>
              {/* Modern Typography Hierarchy */}
              <h2 className="text-zinc-500 text-lg font-medium tracking-tight mb-1">
                Professional Cleaning Service
              </h2>
              <h1 className="playfair text-6xl md:text-8xl font-bold text-zinc-900 tracking-tighter leading-none mb-6">
                Condo Clean<span className="text-(--primary-color)">.</span>
              </h1>
              <p className="text-zinc-500 text-lg max-w-md leading-relaxed font-light mb-10">
                Premium cleaning solutions tailored for your lifestyle—offering hourly,
                daily, or monthly maintenance with trusted professionals.
              </p>
              {/* Minimal Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <NavLink
                  to="/booking"
                  className="w-full sm:w-auto btn-primary"
                >
                  Book a Cleaning
                </NavLink>
                <NavLink
                  to="/services"
                  className="group flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  View all services
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE */}

     <section className="py-24 bg-white">
      <div className="container-x mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
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
          {serviceKeys.map((key) => (
            <div
              key={key}
              className="group relative h-[500px] w-full overflow-hidden rounded-2xl bg-zinc-100"
            >
              {/* Image with subtle zoom */}
              <img
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                src={`https://carecleans.com/wp-content/uploads/2024/08/about-us-768x768.webp`} // Replace with specific service images
                alt={t(`service.categories.${key}`)}
              />

              {/* Sophisticated Gradient Overlay (Lighter than before) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>

              {/* Content Positioning */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  
                  {/* Category Badge */}
                  <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-sm mb-4">
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
      {/* about us */}

      <section className="py-24 bg-white">
        <div className="container-x mx-auto px-6">

          {/* Header Section */}
          <div className="max-w-3xl mb-20">
            <span className="inline-block px-3 py-1 mb-6 text-[11px] font-bold tracking-[0.2em] uppercase border border-zinc-200 text-zinc-400 rounded-sm">
              {t('whyYindee.badge')}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter leading-[1.1] mb-8">
              {t('whyYindee.headline')}
            </h2>
            <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-2xl">
              {t('whyYindee.subHeadline')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

            {/* Card 1: Cleanliness */}
            <div className="group space-y-5">
              <HiOutlineSparkles className="text-3xl text-zinc-900 transition-transform duration-300 group-hover:-translate-y-1" />
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-zinc-900 tracking-tight">
                  {t('whyYindee.features.clean.title')}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                  {t('whyYindee.features.clean.desc')}
                </p>
              </div>
            </div>

            {/* Card 2: Expertise */}
            <div className="group space-y-5">
              <HiOutlineShieldCheck className="text-3xl text-zinc-900 transition-transform duration-300 group-hover:-translate-y-1" />
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-zinc-900 tracking-tight">
                  {t('whyYindee.features.expert.title')}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                  {t('whyYindee.features.expert.desc')}
                </p>
              </div>
            </div>

            {/* Card 3: Efficiency */}
            <div className="group space-y-5">
              <HiOutlineSquare3Stack3D className="text-3xl text-zinc-900 transition-transform duration-300 group-hover:-translate-y-1" />
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-zinc-900 tracking-tight">
                  {t('whyYindee.features.efficient.title')}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                  {t('whyYindee.features.efficient.desc')}
                </p>
              </div>
            </div>

            {/* Card 4: Service */}
            <div className="group space-y-5">
              <HiOutlineUserGroup className="text-3xl text-zinc-900 transition-transform duration-300 group-hover:-translate-y-1" />
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-zinc-900 tracking-tight">
                  {t('whyYindee.features.service.title')}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                  {t('whyYindee.features.service.desc')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* properties */}

      <section className="py-24 bg-zinc-50/50">
        <div className="container-x mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">
              {t('properties.badge')}
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
              {t('properties.headline')}
            </h2>
            <div className="mt-6 h-1 w-12 bg-(--primary-color) mx-auto"></div>
            <p className="mt-6 text-zinc-500 font-light leading-relaxed">
              {t('properties.subHeadline')}
            </p>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">

            {/* Apartment Buildings */}
            <div className="bg-white p-10 flex flex-col h-full group transition-colors hover:bg-zinc-50">
              <HiOutlineHomeModern className="text-3xl text-zinc-400 mb-8 group-hover:text-zinc-900 transition-colors" />
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{t('properties.items.apartments.title')}</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                {t('properties.items.apartments.description')}
              </p>
              <NavLink to="" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-900 group/link">
                <span className="border-b border-transparent group-hover/link:border-zinc-900 transition-all">
                  {t('properties.items.apartments.link')}
                </span>
                <span className="ml-2 transition-transform group-hover/link:translate-x-1">→</span>
              </NavLink>
            </div>

            {/* Office Buildings */}
            <div className="bg-white p-10 flex flex-col h-full group transition-colors hover:bg-zinc-50">
              <HiOutlineBuildingOffice2 className="text-3xl text-zinc-400 mb-8 group-hover:text-zinc-900 transition-colors" />
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{t('properties.items.offices.title')}</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                {t('properties.items.offices.description')}
              </p>
              <NavLink to="" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-900 group/link">
                <span className="border-b border-transparent group-hover/link:border-zinc-900 transition-all">
                  {t('properties.items.offices.link')}
                </span>
                <span className="ml-2 transition-transform group-hover/link:translate-x-1">→</span>
              </NavLink>
            </div>

            {/* Retail Locations */}
            <div className="bg-white p-10 flex flex-col h-full group transition-colors hover:bg-zinc-50">
              <HiOutlineBuildingStorefront className="text-3xl text-zinc-400 mb-8 group-hover:text-zinc-900 transition-colors" />
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{t('properties.items.retail.title')}</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                {t('properties.items.retail.description')}
              </p>
              <NavLink to="" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-900 group/link">
                <span className="border-b border-transparent group-hover/link:border-zinc-900 transition-all">
                  {t('properties.items.retail.link')}
                </span>
                <span className="ml-2 transition-transform group-hover/link:translate-x-1">→</span>
              </NavLink>
            </div>

            {/* Condominium Communities */}
            <div className="bg-white p-10 flex flex-col h-full group transition-colors hover:bg-zinc-50">
              <HiOutlineBuildingOffice className="text-3xl text-zinc-400 mb-8 group-hover:text-zinc-900 transition-colors" />
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{t('properties.items.condo.title')}</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                {t('properties.items.condo.description')}
              </p>
              <NavLink to="" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-900 group/link">
                <span className="border-b border-transparent group-hover/link:border-zinc-900 transition-all">
                  {t('properties.items.condo.link')}
                </span>
                <span className="ml-2 transition-transform group-hover/link:translate-x-1">→</span>
              </NavLink>
            </div>

          </div>
        </div>
      </section>
      {/* CTA */}
      <CTACard />
    </main>
  )
}
