import { useEffect } from 'react'
import { SITE } from './config'

const track = (name) => window.dispatchEvent(new CustomEvent('presifix:analytics', { detail: { name } }))
const DemoLink = ({ className = 'button primary', children = 'Ver demo' }) => <a className={className} href={SITE.demoUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('click_ver_demo')}>{children}<span aria-hidden="true">↗</span></a>
const RequestLink = ({ className = 'button secondary' }) => <a className={className} href={SITE.demoUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('click_solicitar_demostracion')}>Solicitar demo</a>

const prices = [['Hasta 10 viviendas', '9 €'], ['11–25 viviendas', '19 €'], ['26–50 viviendas', '29 €'], ['51–100 viviendas', '49 €'], ['Más de 100 viviendas', '79 €']]
const faqs = [
  ['¿Necesito saber de tecnología para usar PresiFix?', 'No. PresiFix está diseñada para ser intuitiva y sencilla de utilizar desde el móvil.'],
  ['¿Por qué no seguir utilizando WhatsApp?', 'WhatsApp sigue siendo útil para comunicarse. PresiFix organiza el seguimiento de las incidencias para que la información importante no quede dispersa entre conversaciones.'],
  ['¿Sustituye al programa del Administrador de Fincas?', 'No. PresiFix está especializada en el seguimiento de incidencias y está pensada para complementar el trabajo del Administrador.'],
  ['¿Qué puede hacer Mantenimiento?', 'Puede consultar los trabajos que le corresponden, actualizar su estado y aportar información, notas y fotografías.'],
  ['¿PresiFix utiliza inteligencia artificial?', 'Sí. Incorpora ayuda inteligente de ChatGPT para facilitar tareas como resumir o redactar información relacionada con las incidencias.'],
  ['¿Qué ocurre con las incidencias antiguas?', 'PresiFix permite mantener un histórico para poder consultar qué ocurrió y cómo se gestionó.'],
  ['¿El precio cambia según las funciones?', 'No. La herramienta es la misma. La tarifa se adapta al tamaño de la comunidad.'],
]

function AppMockup() {
  return <div className="app-stage" aria-label="Vista ilustrativa de la interfaz de PresiFix">
    <div className="phone">
      <div className="phone-top"><b>{SITE.brand}</b><span>•••</span></div>
      <div className="hello"><span>Buenos días</span><strong>Tu comunidad, al día</strong></div>
      <div className="summary"><span><b>6</b> Abiertas</span><span><b>3</b> En curso</span><span><b>12</b> Resueltas</span></div>
      <div className="mock-label">Incidencias recientes</div>
      <div className="issue"><i className="dot coral"/><span><b>Fuga en el garaje</b><small>En curso · Actualizada hoy</small></span><em>›</em></div>
      <div className="issue"><i className="dot blue"/><span><b>Luz del portal</b><small>Asignada · Mantenimiento</small></span><em>›</em></div>
      <div className="issue"><i className="dot green"/><span><b>Puerta de acceso</b><small>Resuelta · Ayer</small></span><em>›</em></div>
      <div className="phone-nav"><span>⌂<small>Inicio</small></span><span>☷<small>Incidencias</small></span><span>＋<small>Nueva</small></span></div>
    </div>
    <div className="float-card float-one"><span className="mini-icon">✓</span><div><small>Estado actualizado</small><b>En curso</b></div></div>
    <div className="float-card float-two"><span className="mini-icon blue">▣</span><div><small>Nuevas fotos</small><b>2 añadidas</b></div></div>
  </div>
}

function ObserveSections() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.seen) { e.target.dataset.seen = '1'; track(e.target.id === 'precios' ? 'view_pricing' : 'view_demo_section') }
    }), { threshold: .35 })
    ;['precios', 'demo'].forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])
  return null
}

export default function App() {
  return <>
    <ObserveSections />
    <a className="skip" href="#contenido">Saltar al contenido</a>
    <a className="whatsapp-float" href="https://wa.me/34653655706" target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp" onClick={() => track('click_whatsapp_float')}>
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#fff" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/></svg>
    </a>
    <header className="header"><a className="logo" href="#inicio" aria-label={`${SITE.brand}, inicio`}><span>P</span>{SITE.brand}</a></header>
    <main id="contenido">
      <section className="hero" id="inicio"><div className="hero-copy"><h1>Presidente, todas las incidencias de tu comunidad, bajo control, en un solo lugar.</h1><p className="lead">{SITE.brand} reúne seguimiento, fotos, estados, notas e histórico para que nada se quede a medias — y tus vecinos sepan que su comunidad está en buenas manos.</p><div className="actions"><RequestLink className="button primary hero-cta" /></div></div><div className="hero-illustration"><span className="hero-shape shape-blue" aria-hidden="true"></span><span className="hero-shape shape-cream" aria-hidden="true"></span><img src="/illustrations/presifix-hero.png" alt="Persona gestionando con tranquilidad las incidencias de su comunidad desde el móvil" fetchPriority="high" /></div></section>
      <section className="hero-transition" aria-label="Incidencias claras, comunidad tranquila"><span aria-hidden="true"></span><p>Incidencias claras, comunidad tranquila.</p><span aria-hidden="true"></span></section>

      <section className="section problem"><div className="section-copy"><p className="kicker">El problema</p><h2>¿Cuántas veces has tenido que preguntar «qué ha pasado con esto»?</h2><p>Entre WhatsApp, llamadas y mensajes es fácil perder información. {SITE.brand} centraliza cada incidencia para que puedas seguirla desde el primer aviso hasta su resolución.</p></div><figure className="problem-visual"><img src="/illustrations/incidencias-claras.png" alt="Persona gestionando una incidencia con mensajes, llamadas, fotos y estados organizados" loading="lazy" /></figure></section>

      <section className="section centered soft" id="beneficios"><p className="kicker">Más claridad, menos preguntas</p><h2>Toda la información, en un solo lugar</h2><p className="intro">Consulta el estado, quién está gestionando la incidencia, las fotos, las notas y el histórico sin tener que perseguir a nadie.</p><img className="features-illustration" src="/screenshots/features-illustration.png" alt="Seis tarjetas de colores representando Estado, Foto, Notas, Seguimiento, Histórico e Información clara" loading="lazy" /></section>

      <section className="section centered" id="como-funciona"><img className="section-illustration" src="/screenshots/seccion-paso-a-paso.png" alt="Paso a paso: se comunica una incidencia, el Presidente la revisa, se deriva a Administración o Mantenimiento, la persona responsable actualiza el estado y todo queda registrado hasta su resolución" loading="lazy" /></section>

      <section className="section roles" id="para-quien"><div className="centered"><p className="kicker">Cada persona ve lo que necesita</p><h2>Una misma incidencia, todos coordinados</h2></div><div className="role-images"><img className="section-illustration" src="/screenshots/rol-presidente.png" alt="El presidente sabe qué está pasando: incidencias y estados, fotos y seguimiento, histórico e información clara" loading="lazy" /><img className="section-illustration" src="/screenshots/rol-administrador.png" alt="El Administrador tiene el control total: todas tus comunidades en un vistazo, asignación inteligente de tareas, seguimiento y control en tiempo real, informes y trazabilidad" loading="lazy" /><img className="section-illustration" src="/screenshots/rol-mantenedor.png" alt="El mantenedor sabe qué tiene que resolver: urgentes y tareas, materiales y gastos, seguimiento y notas" loading="lazy" /></div></section>

      <section className="section centered section-full-image"><img className="section-illustration" src="/screenshots/seccion-ia-chatgpt.png" alt="Con ayuda inteligente de ChatGPT: redacta avisos, resume incidencias y ordena la información en segundos" loading="lazy" /></section>

      <section className="section centered soft" id="demo">
        <p className="kicker">La aplicación, por dentro</p>
        <h2>Mira {SITE.brand} por dentro</h2>
        <p className="intro">Una forma clara y sencilla de gestionar las incidencias de tu comunidad.</p>
        <div className="screens real-screens">
          <article className="screenshot-card dashboard-card">
            <div className="screenshot-media square-media">
              <img src="/screenshots/comunicar-averia.png" alt="Pantalla de comunicar avería, indicando a quién debe llegar y qué ha ocurrido" loading="lazy" />
            </div>
            <div className="screenshot-copy"><h3>Controla tu comunidad de un vistazo</h3><p>Consulta incidencias, avisos de vecinos y actividad mensual desde un mismo panel.</p></div>
          </article>
          <article className="screenshot-card tracking-card">
            <div className="screenshot-media tracking-media">
              <img src="/screenshots/seguimiento-incidencia.png" alt="Seguimiento real de incidencias con prioridad, estado, notas y evolución" loading="lazy" />
            </div>
            <div className="screenshot-copy"><h3>Sigue cada incidencia sin perderte</h3><p>Cada incidencia queda registrada con su evolución, notas, prioridad y estado.</p></div>
          </article>
          <article className="screenshot-card report-card">
            <div className="screenshot-media report-media">
              <img src="/screenshots/dashboard-presidente.png" alt="Panel del Presidente con accesos a Incidencia, Avisos de vecinos, Resumen del mes y Vocales, y contadores de pendientes y en curso" loading="lazy" />
            </div>
            <div className="screenshot-copy"><h3>Todo tu panel, de un vistazo</h3><p>Incidencia, avisos de vecinos, resumen del mes y vocales, con los pendientes y en curso siempre visibles.</p></div>
          </article>
        </div>
      </section>

      <section className="section centered section-full-image"><img className="section-illustration" src="/screenshots/seccion-whatsapp-vs-presifix.png" alt="Comparativa: WhatsApp sirve para hablar, PresiFix sirve para hacer seguimiento, con ayuda inteligente de ChatGPT" loading="lazy" /></section>

      <section className="section centered pricing" id="precios"><p className="kicker">Precios claros</p><h2>Planes sencillos para cada comunidad</h2><p className="intro">La misma herramienta para todos. El precio se adapta al tamaño de la comunidad.</p><div className="price-grid">{prices.map(([range, price]) => <article className="price" key={range}><p>{range}</p><strong>{price}</strong><span>al mes</span><small>Todas las funciones incluidas</small></article>)}</div><p className="same"><span>✓</span> Mismas funciones en todos los planes. Solo cambia el precio según el número de viviendas.</p></section>

      <section className="section faq" id="faq"><div><p className="kicker">Resolvemos tus dudas</p><h2>Preguntas frecuentes</h2><p>Respuestas directas para que tengas claro qué hace {SITE.brand} y cómo encaja en tu comunidad.</p></div><div className="accordion">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">＋</span></summary><p>{a}</p></details>)}</div></section>

      <section className="final-cta" id="solicitar-demo"><div><p className="kicker">Da el siguiente paso</p><h2>¿Quieres verlo en funcionamiento?</h2><p>Descubre cómo puede ayudarte {SITE.brand} a gestionar las incidencias de tu comunidad de una forma más clara y sencilla.</p><div className="actions"><RequestLink className="button primary" /></div></div></section>
    </main>
  </>
}
