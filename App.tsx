import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MessageCircle, MapPin, Clock, Instagram, 
  CheckCircle, Star, ChevronDown, ChevronUp, ArrowRight, 
  Sparkles, ExternalLink, ShieldCheck
} from 'lucide-react';
import { PHONE_NUMBER, SERVICES, FAQ_ITEMS, REVIEWS, COURSE_FEATURES, ADDRESS, GOOGLE_MAPS_URL } from './data';
import { Service } from './types';
import ServiceCard from './components/ServiceCard';
import Section from './components/Section';

// --- Shared UI Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = "", 
  href,
  onClick,
  icon: Icon 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost'; 
  className?: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ElementType;
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 text-sm tracking-wide transform active:scale-95";
  
  const variants = {
    primary: "bg-rose-gold text-white hover:bg-rose-dark shadow-lg shadow-rose-gold/20 hover:shadow-rose-gold/30",
    secondary: "bg-gray-900 text-white hover:bg-black shadow-lg",
    outline: "bg-transparent border border-rose-gold text-rose-gold hover:bg-rose-50",
    ghost: "bg-white text-gray-600 hover:text-rose-gold hover:bg-rose-50 shadow-sm border border-gray-100"
  };

  const content = (
    <>
      {children}
      {Icon && <Icon size={16} className="ml-2" />}
    </>
  );

  if (href) {
    return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`${baseStyles} ${variants[variant]} ${className}`}>{content}</a>;
  }
  return <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>{content}</button>;
};

// --- Modals ---

const ServiceModal = ({ service, isOpen, onClose }: { service: Service | null; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen || !service) return null;

  const message = `Olá Thaís! Gostaria de agendar o serviço: ${service.name} (R$ ${service.price})`;
  const link = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4" 
      onClick={onClose}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity animate-fade-in"></div>
      
      {/* Modal Content - Bottom sheet on mobile, Centered on desktop */}
      <div 
        className="relative w-full sm:w-full max-w-md bg-white rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl transform animate-slide-up sm:animate-fade-in p-3 sm:p-4 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Indicator */}
        <div className="w-full flex justify-center pt-2 pb-1 sm:hidden absolute top-0 left-0 z-10">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
        </div>

        {/* Content Container with Dashed Border */}
        <div className="dashed-border-container rounded-[1.5rem] p-6 sm:p-8 flex flex-col relative bg-white/50 overflow-y-auto custom-scrollbar">
          
          <button 
            onClick={onClose} 
            className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2 text-gray-400 hover:text-rose-gold hover:bg-rose-50 transition-all rounded-full z-20"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col items-center text-center mb-6 mt-4 sm:mt-0">
            <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-gold mb-4 shadow-soft shrink-0">
              <Sparkles size={24} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2 leading-tight px-2">
              {service.name}
            </h3>
            <div className="inline-flex items-center px-4 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-full shadow-lg">
              R$ {service.price}
            </div>
          </div>
          
          <div className="flex-grow space-y-6 mb-8">
            <p className="text-gray-600 text-sm leading-relaxed text-center px-2">
              {service.description || "Procedimento realizado com técnica exclusiva para garantir conforto, durabilidade e um resultado estético perfeito para o seu olhar."}
            </p>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 text-sm text-gray-700 bg-white border border-rose-100 p-3 rounded-2xl shadow-sm">
                <div className="p-2 bg-rose-50 rounded-full text-rose-gold">
                  <Clock size={16} />
                </div>
                <span>Duração média: <span className="font-semibold">2 horas</span></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 bg-white border border-rose-100 p-3 rounded-2xl shadow-sm">
                <div className="p-2 bg-rose-50 rounded-full text-rose-gold">
                  <ShieldCheck size={16} />
                </div>
                <span>Materiais Premium Hipoalergênicos</span>
              </div>
            </div>
          </div>

          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-4 bg-[#25D366] hover:bg-[#1da851] text-white font-bold rounded-xl transition-all shadow-lg shadow-green-500/20 transform hover:-translate-y-0.5 active:scale-95 mt-auto"
          >
            <MessageCircle className="mr-2" size={20} />
            Agendar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

const ImageModal = ({ src, onClose }: { src: string | null; onClose: () => void }) => {
  if (!src) return null;
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/90 backdrop-blur-xl transition-all duration-300"
      onClick={onClose}
    >
      <button className="absolute top-6 right-6 text-gray-900 hover:text-rose-gold transition-colors p-2 rounded-full bg-white shadow-md">
        <X size={24} />
      </button>
      <img 
        src={src} 
        alt="Zoom" 
        className="max-w-full max-h-[85vh] rounded-lg shadow-2xl animate-fade-in select-none" 
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

// --- Sections ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Curso VIP', href: '#curso', highlight: true },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      {/* Top Alert Bar */}
      <div className={`absolute top-0 left-0 w-full bg-gradient-to-r from-rose-gold to-rose-400 text-white text-[10px] md:text-xs py-1.5 text-center font-medium tracking-widest uppercase transition-transform duration-300 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
         Vagas limitadas para o curso VIP — Apenas 5 vagas restantes
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center mt-4 md:mt-2">
        <a href="#" className="text-2xl font-serif font-bold text-gray-900 tracking-tight group">
          Studio <span className="text-rose-gold group-hover:text-rose-dark transition-colors">Thaís Oliveira</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                link.highlight 
                  ? 'ml-4 bg-gray-900 text-white hover:bg-rose-gold hover:shadow-lg shadow-gray-900/10' 
                  : scrolled ? 'text-gray-600 hover:text-rose-gold hover:bg-rose-50' : 'text-gray-800 hover:text-rose-gold hover:bg-white/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-900 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className={`text-3xl font-serif font-medium ${link.highlight ? 'text-rose-gold' : 'text-gray-900'}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-rose-50/50 -skew-x-12 translate-x-32 opacity-60 pointer-events-none"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-rose-100/40 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-100 shadow-sm text-rose-gold text-xs font-bold uppercase tracking-widest mb-8">
             <Sparkles size={12} />
             Referência em Cílios
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-gray-900 mb-8 leading-[1.1]">
            Sua beleza, <br/>
            <span className="italic text-rose-gold relative inline-block">
              nosso detalhe.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-rose-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg text-gray-500 mb-12 max-w-md leading-relaxed font-light">
            Especialista em extensão de cílios e design de sobrancelhas. Técnicas exclusivas para um olhar marcante e natural.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              href={`https://wa.me/${PHONE_NUMBER}?text=Oi%20Tha%C3%ADs!%20Vi%20o%20site%20e%20quero%20agendar%20um%20hor%C3%A1rio%20%F0%9F%92%96`}
              icon={MessageCircle}
            >
              Agendar Horário
            </Button>
            <Button 
              href="#servicos" 
              variant="ghost"
            >
              Ver Serviços
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-4 text-sm text-gray-400">
             <div className="flex items-center gap-1 text-rose-gold">
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
             </div>
             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
             <p>Studio 5 Estrelas</p>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          {/* Image container with square shape and pink dashed border */}
          <div className="relative z-10 overflow-hidden shadow-2xl aspect-[3/4] max-w-sm mx-auto border-4 border-dashed border-rose-300 bg-white">
             <img 
               src="https://i.imgur.com/N0ONq4e.png" 
               alt="Extensão de Cílios" 
               className="object-cover w-full h-full scale-105 hover:scale-100 transition-transform duration-1000"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <Section id="sobre" className="bg-white overflow-hidden">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="relative group order-2 md:order-1">
          <div className="relative rounded-[2rem] overflow-hidden shadow-soft aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 bg-rose-gold/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="https://imgur.com/IbXfvIz.jpg" 
              alt="Thaís Oliveira" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Clean decorative circle */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-rose-50 rounded-full -z-10 blur-2xl"></div>
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="text-rose-gold font-bold tracking-widest uppercase text-xs mb-4">A Profissional</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">Thaís Oliveira</h3>
          
          <div className="space-y-6 text-gray-600 leading-loose font-light text-lg">
            <p>
              Olá! Sou Thaís Oliveira, apaixonada pela arte de realçar a beleza natural através do olhar. 
              Meu studio em <strong className="text-rose-gold font-medium">Arinos/MG</strong> foi projetado para ser um refúgio de autocuidado, onde cada cliente é tratada como única.
            </p>
            <p>
              Com especializações em diversas técnicas, do clássico ao mega volume, utilizo apenas produtos premium hipoalergênicos para garantir não apenas beleza, mas saúde ocular e durabilidade.
            </p>
            <p>
              Meu objetivo não é apenas aplicar cílios, mas devolver sua autoestima e praticidade para o dia a dia. Acorde pronta todos os dias!
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 flex gap-12">
             <div>
               <p className="text-3xl font-serif text-gray-900 font-bold">3+</p>
               <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Anos Exp.</p>
             </div>
             <div>
               <p className="text-3xl font-serif text-gray-900 font-bold">1k+</p>
               <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Atendimentos</p>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'cilios' | 'sobrancelhas'>('todos');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = activeCategory === 'todos' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'cilios', label: 'Cílios' },
    { id: 'sobrancelhas', label: 'Sobrancelhas' },
  ];

  return (
    <Section id="servicos" className="bg-gray-50/50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Nossos Serviços</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12 font-light">
          Selecione um procedimento abaixo para ver mais detalhes e valores.
        </p>
        
        {/* Clean Filter Tabs */}
        <div className="inline-flex p-1 bg-white rounded-full shadow-sm border border-gray-100">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-rose-gold text-white shadow-md' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid - More generous spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {filteredServices.map((service) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>

      <ServiceModal 
        service={selectedService} 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </Section>
  );
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "https://i.imgur.com/MzKF6fw.png",
    "https://i.imgur.com/TcLB18r.png",
    "https://i.imgur.com/NQUuzBf.png",
    "https://i.imgur.com/GqVJK6j.png"
  ];

  return (
    <Section id="galeria" className="bg-white" centered>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12">Galeria de Resultados</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative group rounded-2xl overflow-hidden cursor-zoom-in bg-gray-50 aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Resultado ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/30 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                   <Sparkles size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
    </Section>
  );
};

const CourseSection = () => {
  return (
    <Section id="curso" className="bg-rose-50/50 overflow-hidden relative">
      <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
        <div className="md:col-span-7">
          <span className="text-rose-gold font-bold tracking-widest uppercase text-xs mb-2 block">Carreira</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Curso VIP <br/> <span className="text-rose-gold">Lash Designer</span>
          </h2>
          
          <p className="text-gray-600 mb-10 text-lg font-light max-w-xl">
            Torne-se uma profissional qualificada e conquiste sua independência financeira. Método validado com certificado incluso.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {COURSE_FEATURES.map((feat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 text-rose-gold">
                   <CheckCircle size={12} />
                </div>
                <span className="text-sm text-gray-700">{feat.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button 
              href={`https://wa.me/${PHONE_NUMBER}?text=Oi%20Tha%C3%ADs!%20Quero%20saber%20mais%20sobre%20o%20Curso%20VIP%20%E2%9C%A8`}
              className="w-full sm:w-auto"
            >
              Quero me Inscrever
            </Button>
            <p className="text-sm text-rose-gold font-medium animate-pulse">
              * Últimas vagas para este mês
            </p>
          </div>
        </div>
        
        <div className="md:col-span-5 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white aspect-[4/5] rotate-3 hover:rotate-0 transition-all duration-500">
             <img 
              src="https://i.imgur.com/XZEycat.png" 
              alt="Curso VIP" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

const Reviews = () => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-16">
         <h2 className="text-3xl font-serif font-bold text-gray-900">Feedback das Clientes</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {REVIEWS.map((review) => (
          <div key={review.id} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
            <div className="flex text-gold mb-4">
              {[...Array(review.stars)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-6 font-light text-lg">"{review.text}"</p>
            <div className="flex items-center gap-4">
              <img 
                src={review.image} 
                alt={review.name} 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-gray-900 font-bold text-sm">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Location = () => {
  return (
    <Section id="localizacao" className="bg-gray-900 text-white rounded-t-[3rem] mt-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-3xl font-serif font-bold mb-8">Onde estamos</h3>
          
          <div className="space-y-8">
            <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-rose-gold">
                 <MapPin size={24} />
               </div>
               <div>
                 <p className="font-bold text-lg mb-1">Localização</p>
                 <p className="text-gray-400 leading-relaxed">{ADDRESS}</p>
                 <a 
                   href={GOOGLE_MAPS_URL} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-rose-gold text-sm mt-2 inline-flex items-center hover:underline"
                 >
                   Ver no Google Maps <ExternalLink size={12} className="ml-1" />
                 </a>
               </div>
            </div>

            <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-rose-gold">
                 <Clock size={24} />
               </div>
               <div>
                 <p className="font-bold text-lg mb-1">Horários</p>
                 <p className="text-gray-400">Seg - Sex: 08:00 às 19:00</p>
                 <p className="text-gray-400">Sábado: 08:00 às 14:00</p>
               </div>
            </div>
          </div>
        </div>
        
        <div className="h-[350px] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
           <iframe 
            src={GOOGLE_MAPS_URL} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Localização"
            className="opacity-80 hover:opacity-100 transition-opacity duration-500"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq" centered className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">Dúvidas Frequentes</h2>
      <div className="space-y-3">
        {FAQ_ITEMS.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <button 
              className="w-full p-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              {openIndex === index ? <ChevronUp size={18} className="text-rose-gold" /> : <ChevronDown size={18} className="text-gray-400" />}
            </button>
            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-500 text-sm leading-relaxed animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">
        <a href="#" className="text-2xl font-serif font-bold text-white">
            Studio <span className="text-rose-gold">Thaís Oliveira</span>
        </a>
        
        <div className="flex gap-6">
          <a href="https://instagram.com/studiothaisoliveiraa_" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:bg-rose-gold hover:text-white transition-all">
            <Instagram size={20} />
          </a>
          <a href={`https://wa.me/${PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:bg-[#25D366] hover:text-white transition-all">
            <MessageCircle size={20} />
          </a>
        </div>
        
        <p className="text-gray-600 text-xs mt-4">
          © 2025 Studio Thaís Oliveira. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

const FloatingWhatsapp = () => {
  return (
    <a 
      href={`https://wa.me/${PHONE_NUMBER}?text=Oi%20Tha%C3%ADs!%20Vi%20o%20site%20e%20quero%20agendar%20um%20hor%C3%A1rio%20%F0%9F%92%96`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
    >
      <MessageCircle size={28} fill="white" className="text-white" />
    </a>
  );
};

const App: React.FC = () => {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Header />
      <Hero />
      <About />
      <ServicesSection />
      <Gallery />
      <CourseSection />
      <Reviews />
      <FAQ />
      <Location />
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
};

export default App;