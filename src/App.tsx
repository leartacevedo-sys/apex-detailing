import {
  Phone, Car, Sparkles, Shield, Star, Clock, MapPin, CheckCircle,
  Droplets, SprayCan, Armchair, CircleDot, Truck, Wrench,
  Menu, X
} from 'lucide-react'
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#paquetes', label: 'Paquetes' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-wider">APEX <span className="text-blue-brand">DETAILING</span></a>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            {navLinks.map(l => <a key={l.href} href={l.href} className="hover:text-white transition">{l.label}</a>)}
          </nav>
          <a href="tel:3463070407" className="hidden md:flex items-center gap-2 text-blue-brand font-semibold">
            <Phone size={16} /> 346-307-0407
          </a>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-black border-t border-gray-800 px-4 py-4 flex flex-col gap-3 text-gray-300">
            {navLinks.map(l => <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="hover:text-white">{l.label}</a>)}
            <a href="tel:3463070407" className="text-blue-brand font-semibold flex items-center gap-2"><Phone size={16} /> 346-307-0407</a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">APEX <span className="text-blue-brand">DETAILING</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">Detallado Profesional a Domicilio</p>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Llevamos nuestros servicios directamente a tu hogar o trabajo para que tu vehiculo luzca impecable, protegido y como nuevo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacto" className="bg-blue-brand hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">Reservar Ahora</a>
            <a href="tel:3463070407" className="border border-blue-brand text-blue-brand hover:bg-blue-brand hover:text-white px-8 py-3 rounded-lg font-semibold transition">Llamar Ahora</a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestros <span className="text-blue-brand">Servicios</span></h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">Ofrecemos una amplia gama de servicios de detallado profesional para mantener tu vehiculo en perfectas condiciones.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Droplets size={32} />, title: 'Lavado Exterior Profesional' },
            { icon: <Armchair size={32} />, title: 'Detallado Interior Completo' },
            { icon: <Sparkles size={32} />, title: 'Paquete Completo Interior y Exterior' },
            { icon: <Car size={32} />, title: 'Limpieza de Asientos y Alfombras' },
            { icon: <Shield size={32} />, title: 'Proteccion con Cera Premium' },
            { icon: <SprayCan size={32} />, title: 'Proteccion Ceramica en Spray' },
            { icon: <Wrench size={32} />, title: 'Limpieza de Compartimiento del Motor' },
            { icon: <Truck size={32} />, title: 'Detallado para Vans y Flotas Comerciales' },
          ].map((s, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-brand transition group">
              <div className="text-blue-brand mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PAQUETES */}
      <section id="paquetes" className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestros <span className="text-blue-brand">Paquetes</span></h2>
          <p className="text-gray-400 text-center mb-12">Elige el paquete que mejor se adapte a tus necesidades.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Paquete Basico', price: '$60', featured: false },
              { name: 'Paquete Interior', price: '$120', featured: false },
              { name: 'Paquete Completo', price: '$180', featured: false },
              { name: 'Paquete Premium', price: '$250', featured: true },
            ].map((p, i) => (
              <div key={i} className={`rounded-xl p-6 border ${p.featured ? 'bg-blue-brand/10 border-blue-brand scale-105' : 'bg-gray-900 border-gray-800'} flex flex-col items-center text-center`}>
                {p.featured && <span className="bg-blue-brand text-white text-xs px-3 py-1 rounded-full mb-4 font-semibold">POPULAR</span>}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-gray-400 text-sm mb-4">Desde</p>
                <p className="text-4xl font-bold text-blue-brand mb-6">{p.price}</p>
                <a href="#contacto" className={`w-full py-2 rounded-lg font-semibold transition text-center ${p.featured ? 'bg-blue-brand text-white hover:bg-blue-700' : 'border border-gray-600 text-gray-300 hover:border-blue-brand hover:text-blue-brand'}`}>Reservar</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE ELEGIRNOS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Por Que <span className="text-blue-brand">Elegirnos</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <MapPin size={28} />, text: 'Servicio movil a domicilio' },
            { icon: <Sparkles size={28} />, text: 'Productos profesionales de alta calidad' },
            { icon: <CheckCircle size={28} />, text: 'Atencion al detalle' },
            { icon: <Clock size={28} />, text: 'Puntualidad y confiabilidad' },
            { icon: <Shield size={28} />, text: 'Resultados garantizados' },
            { icon: <CircleDot size={28} />, text: 'Servicio en Houston, Katy, Fulshear, Richmond, Rosenberg y alrededores' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="text-blue-brand shrink-0">{item.icon}</div>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="nosotros" className="py-20 px-4 bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre <span className="text-blue-brand">Nosotros</span></h2>
          <p className="text-gray-400 text-lg leading-relaxed">En Apex Detailing nos especializamos en ofrecer servicios profesionales de detallado movil con atencion personalizada y resultados excepcionales. Nuestro objetivo es que cada vehiculo recupere su mejor apariencia y proteccion.</p>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestra <span className="text-blue-brand">Galeria</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-video rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-800 flex items-center justify-center">
              <Car size={48} className="text-gray-700" />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-20 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lo Que Dicen Nuestros <span className="text-blue-brand">Clientes</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Excelente servicio y atencion. Mi vehiculo quedo como nuevo.',
              'Profesionales, puntuales y muy detallistas.',
              'Definitivamente volvere a contratar sus servicios.',
            ].map((t, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={18} className="text-yellow-400 fill-yellow-400" />)}</div>
                <p className="text-gray-300 italic">"{t}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Solicita Tu <span className="text-blue-brand">Cotizacion</span></h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={e => e.preventDefault()}>
          <input placeholder="Nombre" className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-brand outline-none transition" />
          <input placeholder="Telefono" className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-brand outline-none transition" />
          <input placeholder="Tipo de vehiculo" className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-brand outline-none transition" />
          <select className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-brand outline-none transition text-gray-400">
            <option value="">Servicio solicitado</option>
            <option>Lavado Exterior Profesional</option>
            <option>Detallado Interior Completo</option>
            <option>Paquete Completo Interior y Exterior</option>
            <option>Limpieza de Asientos y Alfombras</option>
            <option>Proteccion con Cera Premium</option>
            <option>Proteccion Ceramica en Spray</option>
            <option>Limpieza de Compartimiento del Motor</option>
            <option>Detallado para Vans y Flotas Comerciales</option>
          </select>
          <input type="date" placeholder="Fecha preferida" className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-brand outline-none transition text-gray-400" />
          <textarea placeholder="Mensaje" rows={3} className="sm:col-span-2 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-brand outline-none transition resize-none"></textarea>
          <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4">
            <button type="submit" className="flex-1 bg-blue-brand hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">Solicitar Cotizacion</button>
            <a href="tel:3463070407" className="flex-1 border border-blue-brand text-blue-brand hover:bg-blue-brand hover:text-white py-3 rounded-lg font-semibold transition text-center">Reservar Servicio</a>
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">APEX <span className="text-blue-brand">DETAILING</span></h3>
          <p className="text-gray-400 mb-2">Detallado Profesional a Domicilio</p>
          <p className="text-gray-500 text-sm mb-4">Houston | Katy | Fulshear | Richmond | Rosenberg</p>
          <a href="tel:3463070407" className="text-blue-brand font-semibold text-lg">346-307-0407</a>
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-blue-brand transition"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
            <a href="#" className="text-gray-400 hover:text-blue-brand transition"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            <a href="#" className="text-gray-400 hover:text-blue-brand transition"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
          </div>
          <p className="text-gray-600 text-sm mt-8">&copy; {new Date().getFullYear()} Apex Detailing. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* FLOATING CTA - MOBILE */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden flex gap-3 z-50">
        <a href="tel:3463070407" className="flex-1 bg-blue-brand text-white py-3 rounded-lg font-semibold text-center flex items-center justify-center gap-2 shadow-lg"><Phone size={18} /> Llamar</a>
        <a href="#contacto" className="flex-1 bg-white text-black py-3 rounded-lg font-semibold text-center shadow-lg">Reservar</a>
      </div>
    </div>
  )
}

export default App
