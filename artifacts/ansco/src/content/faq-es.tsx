/**
 * Spanish FAQ ("Hola, Vecino") at /faq-es/. Text copied verbatim from the original page.
 * EDITORS: edit Spanish copy here; layout is shared with the English FAQ (src/components/FaqView.tsx).
 */
import type { FaqContent } from "./faq";

export const faqEs: FaqContent = {
  meta: {
    title: "Hello Neighbor!",
    description: "Our company is planning to lay fiber optic cables underground throughout your community for a major telecommunications provider.",
  },
  path: "/faq-es/",
  hero: { title: "Hola, Vecino", image: "/assets/contact-banner.webp" },
  intro: {
    title: "¡Estamos ayudando a llevar fibra óptica a su comunidad!",
    paragraphs: [
      "Tenemos noticias emocionantes para su comunidad. Ansco, nuestra compañía, tiene previsto tender cables de fibra óptica subterráneos en toda la comunidad para un importante proveedor de telecomunicaciones.",
      "Los cables de fibra óptica ofrecen la conexión a Internet más rápida y confiable disponible actualmente. Con esta tecnología, disfrutará de velocidades de Internet ultrarrápidas, transmisiones de video sin interrupciones y llamadas de voz nítidas.",
    ],
    tagline: "La gente conectando América™",
    callLabel: "¿Preguntas? Llame a nuestro equipo.",
    languageLabel: "Click Here to View in English",
    languageHref: "/faq/",
  },
  installation: {
    title: "Instalación",
    paragraphs: [
      "Nuestro equipo ha diseñado un proceso de instalación perfecto que no alterará su vida cotidiana.",
      "Ya sea que enterremos los cables de fibra óptica bajo tierra o utilicemos postes de servicios públicos existentes, el trabajo se llevará a cabo de la manera más discreta y eficiente posible.",
    ],
    videoLead: "Vea nuestro video informativo para saber más sobre nuestro proceso.",
    // Original Spanish Vimeo embed.
    video: "https://player.vimeo.com/video/884943021?h=1c2e308c0f&dnt=1&app_id=122963",
  },
  faqTitle: "Preguntas frecuentes",
  items: [
    { question: "¿Cuándo se realizarán las obras?", answer: <p>Generalmente, las obras comienzan dentro de las dos semanas siguientes a la notificación a los residentes. En la mayoría de los casos, los residentes recibirán un cartel en la puerta con detalles.</p> },
    { question: "¿Dónde se realizarán las obras?", answer: <p>Las obras se realizarán en el área de derecho de paso de las propiedades a lo largo de Mesa, Arizona.</p> },
    { question: "¿Cuánto durarán las obras?", answer: <p>El plazo de instalación previsto es de 30 a 45 días. Nuestro compromiso es minimizar cualquier inconveniente para usted y sus vecinos, manteniendo al mismo tiempo estándares de calidad excepcionales.</p> },
    { question: "¿Excavarán en mi propiedad?", answer: <p>Puede que sí, pero quédese tranquilo. Nuestros profesionales se encargarán de todo con pericia, restaurando el estado original de su jardín tras la instalación.</p> },
    {
      question: "¿Tendré que reparar mi propiedad?",
      answer: (
        <>
          <p>No – Nuestros profesionales restaurarán la condición original de su jardín después de cualquier excavación o instalación.</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <img src="/assets/antes-300x276-1.jpg" alt="Antes" width={300} height={276} />
            <img src="/assets/despues-300x276-1.jpg" alt="Después" width={300} height={276} />
          </div>
        </>
      ),
    },
    {
      question: "¿Qué pasa si algo se daña?",
      answer: (
        <p>
          Comuníquese con nuestra Línea de atención al cliente: <a href="tel:877-245-6660">877-245-6660</a>
          <br />o envíanos un correo electrónico a <a href="mailto:customercare@anscollc.com">customercare@anscollc.com</a>
        </p>
      ),
    },
    { question: "¿Puedo negar el acceso a mi jardín para detener estas obras?", answer: <p>No, las obras se llevan a cabo en la zona de derecho de paso. El permiso para trabajar en esta zona se rige por la ciudad o el municipio a través de una servidumbre de servicios públicos.</p> },
    { question: "¿Qué es una servidumbre de servicios públicos?", answer: <p>Una servidumbre de servicios públicos/P.U.E. o Derecho de Vía, a menudo llamado ROW, es un derecho legal que permite a los servicios públicos acceder a partes específicas de una propiedad para realizar tareas de infraestructura. Estas Servidumbres son vitales para mantener los servicios esenciales y, al mismo tiempo, permitir el uso del terreno. Dentro del alcance de la Servidumbre, las restricciones no contemplan obstrucciones.</p> },
    { question: "¿Por qué están sus marcas de pintura en mi propiedad?", answer: <p>Para garantizar que la infraestructura subterránea esté protegida cuando se produzca la actividad de excavación, las empresas de servicios públicos deben ubicar sus servicios públicos existentes en el área antes de la excavación. Es posible que observe diversas marcas de pintura en su propiedad o cerca de ella. Estas marcas sirven de guía a nuestras cuadrillas para que sepan lo que hay debajo de la superficie aun antes de comenzar a usar las palas. Estas marcas de pintura irán desapareciendo con el tiempo.</p> },
    {
      question: "¿Qué tipo de equipos utilizarán?",
      answer: (
        <>
          <p>Estos son los equipos que puede ver en su vecindario cuando se entierren cables de fibra óptica.</p>
          <ul>
            <li><strong>Pala</strong>: es un elemento esencial para la excavación inicial de las zanjas.</li>
            <li><strong>Retroexcavadora o excavadora</strong>: se utiliza cuando las condiciones de suelo son difíciles o para zanjas más grandes.</li>
            <li><strong>Máquina de microzanja</strong>: máquina corta fácilmente hormigón o asfalto, utilizando una cuchilla circular grande para colocar la fibra. Los restos de extracción se aspiran mediante una excavadora aspiradora, que es como una aspiradora comercial extremadamente grande.</li>
            <li><strong>Taladro direccional</strong>: es una herramienta especial para crear vías subterráneas con mínima alteración de la superficie.</li>
            <li><strong>Equipo de perforación con Topo misil:</strong> resulta ideal para distancias más cortas, ya que crea túneles con un mínimo impacto en la superficie.</li>
            <li><strong>Camión con cesta</strong>: a menudo denominado camión elevador o camión con pluma, es un tipo de elevador aéreo o plataforma de trabajo esencial para colgar cables de fibra óptica.</li>
            <li><strong>Equipo para tracción de cables</strong>: garantiza una instalación de cables uniforme y segura.</li>
            <li><strong>Equipos de empalme de fibra óptica:</strong> une filamentos individuales para lograr integridad de la red.</li>
          </ul>
        </>
      ),
    },
    { question: "¿Qué es una servidumbre de lote trasero?", answer: <p>Una servidumbre de lote trasero es cuando un terreno no tiene acceso al camino a la vía pública, es decir. como un patio trasero y requiere entrada por el patio delantero o por el camino de entrada.</p> },
    {
      question: "¿En qué consisten las microzanjas?",
      answer: (
        <>
          <p>Las microzanjas representan una tecnología mínimamente invasiva que mejora la capacidad de colocar cables de fibra óptica de forma rápida y eficaz en entornos de construcción desafiantes, como lechos de carreteras existentes y densas áreas urbanas. El proceso de microzanjas comprende lo siguiente:</p>
          <ol>
            <li>cortar una zanja angosta en la superficie existente para crear un vacío</li>
            <li>eliminar los escombros</li>
            <li>realizar el tendido de cables</li>
            <li>aplicar un compuesto que no se contrae en dicho vacío</li>
            <li>aplicar material de cobertura.</li>
          </ol>
          <p>El proceso implica hacer un corte angosto en la superficie existente y luego, retirar los escombros de la zanja al mismo tiempo que se utiliza un sistema de vacío especialmente diseñado. Luego, se coloca el conducto de fibra en la zanja junto con un relleno de material fluido especial.</p>
        </>
      ),
    },
    { question: "¿Qué es esta caja de servicios públicos enterrada en mi jardín?", answer: <p>En ciertos casos, es posible que tengamos que colocar un registro en su propiedad: se trata de una caja enterrada en el suelo para empalmar la fibra. La servidumbre de servicios públicos nos autoriza a hacerlo.</p> },
  ],
  stateContactLabel: "Póngase en contacto con nosotros directamente al",
  stateContacts: [
    { state: "Arizona", phone: "1-855-520-1757", email: "customercare@anscollc.com" },
    { state: "Georgia", phone: "1-877-245-6660", email: "CustomerCare@Anscollc.com" },
    { state: "North Carolina", phone: "1-877-245-6660", email: "CustomerCare@Anscollc.com" },
    { state: "South Carolina", phone: "1-877-245-6660", email: "CustomerCare@Anscollc.com" },
    { state: "Texas", phone: "1-855-520-1757", email: "CustomerCare@Anscollc.com" },
  ],
};
