/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  ArrowRight,
  Award,
  BookOpen,
  HeartHandshake,
  Home,
  Clock
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/4QOX52COXXP2C1";

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
);

const Card = ({ title, description, icon: Icon, highlight = false, cta = "Más información" }: { title: string, description: string, icon: any, highlight?: boolean, cta?: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-8 rounded-2xl border ${highlight ? 'bg-navy text-white border-gold' : 'bg-white border-navy/10'} shadow-sm flex flex-col h-full`}
  >
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${highlight ? 'bg-gold text-navy' : 'bg-navy/5 text-navy'}`}>
      <Icon size={24} />
    </div>
    <h3 className={`text-2xl mb-4 ${highlight ? 'text-gold' : 'text-navy'}`}>{title}</h3>
    <p className={`mb-8 flex-grow ${highlight ? 'text-white/80' : 'text-navy/70'}`}>{description}</p>
    <a 
      href={WHATSAPP_URL} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${highlight ? 'text-gold hover:text-gold-light' : 'text-navy hover:text-gold'}`}
    >
      {cta} <ArrowRight size={16} />
    </a>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-navy/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://lh3.googleusercontent.com/d/1bA-j6eDlH6cWVdTcSNuG-vXl0xC0HOev" 
            className="w-10 h-10 rounded-full object-cover border border-gold/30" 
            alt="Experior Logo" 
            referrerPolicy="no-referrer" 
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-navy">MONICA SEGURA</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">Financial Advisor</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#inicio" className="hover:text-gold transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-gold transition-colors">Servicios</a>
          <a href="#sobre-mi" className="hover:text-gold transition-colors">Sobre Mí</a>
        </div>
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-navy text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold transition-all"
        >
          Consultoría Gratis
        </a>
      </nav>

      {/* Hero Section */}
      <Section id="inicio" className="pt-40 pb-32 bg-gradient-to-b from-navy/5 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} /> Licencia NPN: G147318 USA
            </div>
            <h1 className="text-5xl md:text-7xl mb-6 leading-[1.1] text-navy">
              Construye un <span className="italic text-gold">Legado</span> que no dependa del mercado.
            </h1>
            <p className="text-xl text-navy/70 mb-8 max-w-xl leading-relaxed">
              ¿Preocupado por la volatilidad de sus ahorros? Implemente una estrategia de retiro con acumulación de efectivo libre de impuestos diseñada para proteger a su familia y su futuro.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Acumulación de efectivo con protección contra caídas del mercado.",
                "Beneficios en vida y acceso a capital libre de impuestos.",
                "Protección familiar integral con beneficios por fallecimiento."
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold mt-1 shrink-0" size={20} />
                  <span className="text-navy/80 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gold transition-all shadow-lg shadow-navy/20"
              >
                <MessageCircle size={20} /> Agendar Consultoría en WhatsApp
              </a>
              <div className="flex items-center gap-4 px-4 py-2">
                <div className="flex -space-x-2">
                  {[
                    "1-hXlQrIi0xjCe6mDKa9O2lSuJwKDYPCk",
                    "1wnEV4kvviYxhDXTN5BebLBnVdHcu1Cb0",
                    "1jGAsSmHCCHcQyEFTeRO9QihDDqmcHORJ"
                  ].map((id, i) => (
                    <img key={i} src={`https://lh3.googleusercontent.com/d/${id}`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Client" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div className="text-xs">
                  <p className="font-bold text-navy">+500 Familias</p>
                  <p className="text-navy/60">Asesoradas con éxito</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://lh3.googleusercontent.com/d/1Kj9YAf4lEs4tJHkyUDLMwh-sXPZja8PX" 
                alt="Monica Segura - Financial Advisor" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-navy/5 hidden md:block">
              <p className="text-3xl font-serif font-bold text-navy">19 Años</p>
              <p className="text-xs uppercase tracking-widest text-gold font-bold">De Experiencia</p>
            </div>
            <div className="absolute top-12 -right-6 bg-gold p-6 rounded-2xl shadow-xl text-navy hidden md:block">
              <img 
                src="https://lh3.googleusercontent.com/d/1bA-j6eDlH6cWVdTcSNuG-vXl0xC0HOev" 
                className="w-12 h-12 rounded-full mb-2 object-cover border-2 border-white/50" 
                alt="Experior Badge" 
                referrerPolicy="no-referrer" 
              />
              <p className="font-bold leading-tight">Estratega en<br/>Protección Familiar</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Problem & Solution */}
      <Section className="bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-12">¿Por qué el ahorro tradicional <span className="text-gold italic">ya no es suficiente</span>?</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl text-gold">El Problema</h3>
              <p className="text-white/70 leading-relaxed">
                Las cuentas de ahorro tradicionales y los planes 401(k) están expuestos a la inflación, los altos impuestos futuros y la volatilidad extrema del mercado. Usted trabaja duro por su dinero, pero el sistema no siempre trabaja para usted.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-red-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Riesgo de pérdida de capital
                </li>
                <li className="flex items-center gap-2 text-red-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Impuestos que devoran su retiro
                </li>
                <li className="flex items-center gap-2 text-red-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" /> Falta de liquidez inmediata
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl text-gold">La Solución IUL</h3>
              <p className="text-white/70 leading-relaxed">
                Mi metodología integra tácticas de construcción de riqueza basadas en la planificación avanzada. El IUL (Seguro de Vida Indexado) permite capturar el crecimiento del mercado sin arriesgar su capital principal, con beneficios fiscales estratégicos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Piso del 0% (Nunca pierde por mercado)
                </li>
                <li className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Retiros libres de impuestos
                </li>
                <li className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Protección y ahorro en un solo plan
                </li>
              </ul>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 p-8 rounded-2xl border border-gold/30 bg-white/5 inline-block"
          >
            <p className="text-xl italic font-serif">"Mi enfoque no es solo ahorrar, es crear patrimonio real para las familias latinas."</p>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="servicios" className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-navy">Soluciones Financieras <span className="text-gold">Estratégicas</span></h2>
            <p className="text-navy/60 max-w-2xl mx-auto">Protección integral diseñada para cada etapa de su vida y las necesidades específicas de su familia.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card 
              title="IUL (Index Universal Life)"
              description="La herramienta maestra para acumulación de efectivo libre de impuestos y protección familiar de por vida."
              icon={TrendingUp}
              highlight={true}
              cta="Ver Estrategia IUL"
            />
            <Card 
              title="Mortgage Protection"
              description="Asegure que su familia conserve su hogar pase lo que pase. Cobertura diseñada para cancelar su hipoteca."
              icon={Home}
            />
            <Card 
              title="Seguro de Vida Término"
              description="Protección máxima a bajo costo para etapas críticas de la vida, garantizando la estabilidad de sus seres queridos."
              icon={ShieldCheck}
            />
            <Card 
              title="Gastos Finales"
              description="Paz mental para usted y su familia, cubriendo todos los costos finales sin dejar cargas financieras."
              icon={HeartHandshake}
            />
          </div>
        </div>
      </Section>

      {/* About Me Section */}
      <Section id="sobre-mi" className="bg-navy/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl mb-8 text-navy">Experiencia que <span className="text-gold">Trasciende Fronteras</span></h2>
            <div className="space-y-6 text-navy/80 leading-relaxed">
              <p>
                Soy asesora financiera con un recorrido de 15 años en el mercado colombiano, donde me afiancé como experta en gestión crediticia y estructuración en consolidación de deudas.
              </p>
              <p>
                Tras especializarme en Estados Unidos, refiné mi metodología para integrar tácticas de construcción de riqueza basadas en la planificación avanzada y el ahorro con propósito. Mi enfoque no es solo "ahorrar", es crear patrimonio.
              </p>
              <p className="font-bold text-navy">
                Ayudo a las familias latinas a través de la educación financiera para lograr un verdadero cambio de mentalidad: dejar atrás la cultura de la deuda y adoptar una visión de planeación proactiva.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">19</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-navy/50">Años de Trayectoria</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <BookOpen size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-navy">Educativo</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-navy/50">Enfoque de Marca</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl border border-navy/10 shadow-sm">
              <p className="text-sm font-bold text-gold uppercase tracking-widest mb-2">Misión Profesional</p>
              <p className="text-navy/80 italic">"Ayudar a familias latinas a crear un legado financiero que no dependa de la volatilidad del mercado en los Estados Unidos."</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-2xl relative z-10">
              <img 
                src="https://lh3.googleusercontent.com/d/1bA-j6eDlH6cWVdTcSNuG-vXl0xC0HOev" 
                alt="Monica Segura Montañez" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 rounded-full -z-0 blur-3xl" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-navy/5 rounded-full -z-0 blur-3xl" />
          </div>
        </div>
      </Section>

      {/* Social Proof & Compliance */}
      <Section className="bg-white border-t border-navy/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-navy mb-4">Confianza y Transparencia</h2>
            <div className="h-1 w-20 bg-gold mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                text: "Gracias a la asesoría de Monica, finalmente entendemos cómo funciona el sistema en USA. Ahora tenemos un plan claro para nuestro retiro.",
                author: "Familia Rodríguez",
                location: "Florida"
              },
              {
                text: "Excelente profesional. No nos presionó para comprar, sino que nos educó para tomar la mejor decisión para nuestros hijos.",
                author: "Carlos M.",
                location: "Texas"
              },
              {
                text: "El IUL cambió nuestra perspectiva del ahorro. Monica nos guió en cada paso con mucha paciencia y conocimiento.",
                author: "Elena G.",
                location: "California"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 bg-navy/5 rounded-2xl italic text-navy/80 relative">
                <span className="text-6xl text-gold/20 absolute top-4 left-4 font-serif">"</span>
                <p className="relative z-10 mb-6">{t.text}</p>
                <div className="not-italic">
                  <p className="font-bold text-navy">{t.author}</p>
                  <p className="text-xs text-navy/50 uppercase tracking-widest">{t.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-navy p-8 rounded-3xl text-center">
            <p className="text-white/60 text-sm uppercase tracking-[0.3em] mb-6">Cumplimiento Regulatorio</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-50 grayscale invert">
              {/* Placeholder for trust logos */}
              <div className="text-2xl font-serif font-bold">FINRA</div>
              <div className="text-2xl font-serif font-bold">SEC</div>
              <div className="text-2xl font-serif font-bold">NPN</div>
              <div className="text-2xl font-serif font-bold">NAIC</div>
            </div>
            <p className="text-white/40 text-[10px] mt-8 max-w-2xl mx-auto">
              Monica Segura Montañez es una agente de seguros con licencia activa en los Estados Unidos. La información proporcionada en este sitio es para fines educativos y no constituye asesoramiento legal o fiscal individual. Los resultados pueden variar según el perfil de cada cliente.
            </p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gold text-navy text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full border-[40px] border-navy" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full border-[40px] border-navy" />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl mb-8">¿Listo para asegurar el <span className="italic">futuro</span> de su familia?</h2>
          <p className="text-xl mb-12 font-medium">
            No deje su legado al azar. Las oportunidades de planificación avanzada tienen ventanas de tiempo críticas. Actúe hoy por los que más ama.
          </p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-navy/90 transition-all shadow-2xl shadow-navy/30"
          >
            <MessageCircle size={24} /> Solicitar Mi Consultoría Personalizada
          </a>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest opacity-70">
            Cupos limitados para consultoría gratuita este mes
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-navy text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex flex-col mb-6">
                <span className="font-serif text-3xl font-bold tracking-tight">MONICA SEGURA</span>
                <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Financial Advisor</span>
              </div>
              <p className="text-white/50 max-w-md leading-relaxed">
                Especialista en estrategias de acumulación de efectivo y protección familiar. Dedicada a empoderar a la comunidad latina en Estados Unidos a través de la educación financiera proactiva.
              </p>
            </div>
            
            <div>
              <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-6">Contacto</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-gold" />
                  <span>Licencia: G147318</span>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-gold" />
                  <a href={WHATSAPP_URL} className="hover:text-gold transition-colors">WhatsApp Business</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-6">Sigueme</h4>
              <div className="flex gap-4">
                <a href="https://instagram.com/smartfinances_ms" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://tiktok.com/@smartfinances0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all">
                  <Users size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Monica Segura Montañez. Todos los derechos reservados.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            </div>
          </div>
          
          <div className="mt-10 p-6 bg-white/5 rounded-xl">
            <p className="text-[10px] leading-relaxed text-white/20 text-center">
              DISCLAIMER LEGAL: La información contenida en este sitio web es solo para fines informativos y no debe considerarse como asesoramiento financiero, de inversión, legal o fiscal. Los productos de seguros están sujetos a los términos y condiciones de la compañía emisora. Las garantías están respaldadas por la capacidad de pago de siniestros de la compañía de seguros. Monica Segura Montañez no garantiza resultados específicos y recomienda consultar con profesionales calificados antes de tomar decisiones financieras importantes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
