import { useEffect } from 'react'
import { SITE } from './config'

const track = (name) => window.dispatchEvent(new CustomEvent('presifix:analytics', { detail: { name } }))
const DemoLink = ({ className = 'button primary', children = 'Ver demo' }) => <a className={className} href={SITE.demoUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('click_ver_demo')}>{children}<span aria-hidden="true">↗</span></a>
const RequestLink = ({ className = 'button secondary' }) => <a className={className} href={SITE.demoUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('click_solicitar_demostracion')}>Solicitar demo</a>

const features = [
  ['Estado', 'Consulta el avance de un vistazo.', 'check'], ['Fotos', 'Todo el contexto visual, reunido.', 'camera'],
  ['Notas', 'La información importante no se pierde.', 'note'], ['Seguimiento', 'Sabe quién se ocupa y qué viene después.', 'route'],
  ['Histórico', 'Cada actualización queda registrada.', 'clock'], ['Información clara', 'Lista para compartir con vecinos y junta.', 'spark'],
]
const steps = ['Se comunica una incidencia.', 'El Presidente la revisa.', 'Se deriva a Administración o Mantenimiento.', 'La persona responsable actualiza el estado.', 'Todo queda registrado hasta su resolución.']
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

function Icon({ name }) {
  const icons = { check: '✓', camera: '▣', note: '≡', route: '→', clock: '◷', spark: '✦' }
  return <span className={`icon icon-${name}`} aria-hidden="true">{icons[name] || '✓'}</span>
}

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
    <header className="header"><a className="logo" href="#inicio" aria-label={`${SITE.brand}, inicio`}><span>P</span>{SITE.brand}</a></header>
    <main id="contenido">
      <section className="hero" id="inicio"><div className="hero-copy"><h1>Presidente, controla las incidencias de tu comunidad de vecinos de forma ordenada y sin perseguir a nadie.</h1><p className="lead">{SITE.brand} reúne seguimiento, fotos, estados, notas e histórico en un solo lugar para que sepas siempre qué está pasando en tu comunidad de vecinos.</p><div className="actions"><RequestLink className="button primary hero-cta" /></div></div><div className="hero-illustration"><span className="hero-shape shape-blue" aria-hidden="true"></span><span className="hero-shape shape-cream" aria-hidden="true"></span><img src="/illustrations/presifix-hero.png" alt="Persona gestionando con tranquilidad las incidencias de su comunidad desde el móvil" fetchPriority="high" /></div></section>
      <section className="hero-transition" aria-label="Incidencias claras, comunidad tranquila"><span aria-hidden="true"></span><p>Incidencias claras, comunidad tranquila.</p><span aria-hidden="true"></span></section>

      <section className="section problem"><div className="section-copy"><p className="kicker">El problema</p><h2>¿Cuántas veces has tenido que preguntar «qué ha pasado con esto»?</h2><p>Entre WhatsApp, llamadas y mensajes es fácil perder información. {SITE.brand} centraliza cada incidencia para que puedas seguirla desde el primer aviso hasta su resolución.</p></div><figure className="problem-visual"><img src="/illustrations/incidencias-claras.png" alt="Persona gestionando una incidencia con mensajes, llamadas, fotos y estados organizados" loading="lazy" /></figure></section>

      <section className="section centered soft" id="beneficios"><p className="kicker">Más claridad, menos preguntas</p><h2>Toda la información, en un solo lugar</h2><p className="intro">Consulta el estado, quién está gestionando la incidencia, las fotos, las notas y el histórico sin tener que perseguir a nadie.</p><div className="feature-grid">{features.map(([title, desc, icon]) => <article className="feature" key={title}><Icon name={icon}/><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

      <section className="section centered" id="como-funciona"><p className="kicker">Paso a paso</p><h2>Así de fácil funciona {SITE.brand}</h2><div className="steps">{steps.map((step, i) => <article className="step" key={step}><span>{i + 1}</span><p>{step}</p></article>)}</div></section>

      <section className="section roles" id="para-quien"><div className="centered"><p className="kicker">Cada persona ve lo que necesita</p><h2>Una misma incidencia, todos coordinados</h2></div><div className="role-grid"><article className="role president"><div className="role-tag">Presidente</div><h3>El Presidente sabe qué está pasando</h3><p>Control, seguimiento y transparencia sin llamadas constantes ni mensajes dispersos.</p><ul><li>Incidencias y estados</li><li>Fotos y seguimiento</li><li>Histórico e información clara</li></ul></article><article className="role admin"><div className="role-tag">Administrador de Fincas</div><h3>El Administrador trabaja con información más clara</h3><p>Recibe las incidencias que requieren su gestión, las actualiza y mantiene informado al Presidente sin sustituir su software habitual.</p><small>{SITE.brand} complementa su trabajo diario.</small></article><article className="role maint"><div className="role-tag">Mantenimiento</div><h3>Mantenimiento recibe exactamente lo que necesita</h3><p>Incidencia, ubicación, fotos y seguimiento. Después puede actualizar el estado y dejar constancia del trabajo realizado.</p></article></div></section>

      <section className="section ai"><div className="ai-mark" aria-hidden="true">✦</div><div><p className="kicker">Una ayuda cuando la necesitas</p><h2>Con ayuda inteligente de ChatGPT</h2><p>{SITE.brand} incorpora asistencia inteligente para ayudarte a redactar, resumir y presentar la información de las incidencias de forma clara.</p></div><div className="ai-card"><span>Resumen de incidencia</span><p>“Fuga localizada en la plaza 14. Mantenimiento avisado y visita prevista.”</p><small>Claro y listo para compartir</small></div></section>

      <section className="section centered soft" id="demo">
        <p className="kicker">La aplicación, por dentro</p>
        <h2>Mira {SITE.brand} por dentro</h2>
        <p className="intro">Una forma clara y sencilla de gestionar las incidencias de tu comunidad.</p>
        <div className="screens real-screens">
          <article className="screenshot-card dashboard-card">
            <div className="screenshot-media square-media">
              <img src="/screenshots/dashboard-presidente.png" alt="Dashboard del Presidente con accesos a incidencias, avisos, vocales y resumen mensual" loading="lazy" />
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
              <img src="/screenshots/comunicar-incidencia.png" alt="Formulario real para comunicar una incidencia, indicar destinatario, ubicación y añadir una foto" loading="lazy" />
            </div>
            <div className="screenshot-copy"><h3>Comunicar una incidencia es fácil</h3><p>Indica a quién debe llegar, explica qué ocurre, señala dónde sucede y añade una foto si hace falta.</p></div>
          </article>
        </div>
      </section>

      <section className="section comparison"><div className="centered"><p className="kicker">Cada herramienta, para lo que hace mejor</p><h2>WhatsApp sirve para hablar. {SITE.brand} sirve para hacer seguimiento.</h2><p className="intro">Una conversación puede perderse. Una incidencia en {SITE.brand} queda organizada, actualizada y registrada.</p></div><div className="compare-grid"><article><h3>WhatsApp</h3><ul><li>Conversaciones</li><li>Información dispersa</li><li>Búsqueda manual</li><li>Difícil histórico</li></ul></article><article className="presifix"><h3>{SITE.brand}</h3><ul><li>Incidencia organizada</li><li>Estado visible</li><li>Fotos y notas</li><li>Seguimiento</li><li>Histórico</li></ul></article></div></section>

      <section className="section centered pricing" id="precios"><p className="kicker">Precios claros</p><h2>Planes sencillos para cada comunidad</h2><p className="intro">La misma herramienta para todos. El precio se adapta al tamaño de la comunidad.</p><div className="price-grid">{prices.map(([range, price]) => <article className="price" key={range}><p>{range}</p><strong>{price}</strong><span>al mes</span><small>Todas las funciones incluidas</small></article>)}</div><p className="same"><span>✓</span> Mismas funciones en todos los planes. Solo cambia el precio según el número de viviendas.</p></section>

      <section className="section faq" id="faq"><div><p className="kicker">Resolvemos tus dudas</p><h2>Preguntas frecuentes</h2><p>Respuestas directas para que tengas claro qué hace {SITE.brand} y cómo encaja en tu comunidad.</p></div><div className="accordion">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden="true">＋</span></summary><p>{a}</p></details>)}</div></section>

      <section className="final-cta" id="solicitar-demo"><div><p className="kicker">Da el siguiente paso</p><h2>¿Quieres verlo en funcionamiento?</h2><p>Descubre cómo puede ayudarte {SITE.brand} a gestionar las incidencias de tu comunidad de una forma más clara y sencilla.</p><div className="actions"><RequestLink className="button primary" /></div></div></section>
    </main>
    <footer><a className="logo" href="#inicio"><span>P</span>{SITE.brand}</a><p>Gestión clara de incidencias para comunidades de vecinos.</p></footer>
  </>
}
