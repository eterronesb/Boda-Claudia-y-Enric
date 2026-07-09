const translations = {
  es: {
    heroSubtitle: "Nos casamos",
    heroNames: "Claudia<br>& Enric",
    heroDate: "10 de octubre de 2026",
    heroButton: "Ver invitación",
    sectionTitle: "Nuestra boda",
    sectionText:
      "Este 10 de octubre celebraremos nuestra boda en el Molí Vell de Benifayó. Nos haría muchísima ilusión compartir este día tan especial con vosotros.",
    timelineTitle: "Horarios",
    ceremonyTitle: "Ceremonia",
    cocktailTitle: "Banquete tipo Cóctel",
    banquetTitle: "Fiesta",
    partyTitle: "Despedida",
    rsvpTitle: "CONFIRMACIÓN DE ASISTENCIA",
    rsvpText: "Por favor, confirma tu asistencia rellenando nuestro formulario.",
    rsvpButton: "CONFIRMACIÓN DE ASISTENCIA",
    footerText: "Gracias por formar parte de nuestra historia",
    countdownLabel: "Faltan",
    days: "días",
    hours: "horas",
    minutes: "minutos",
    seconds: "segundos",
    eventTitle: "El gran día",
    eventDateTitle: "Fecha",
    eventDateText: "10 de octubre de 2026",
    eventTimeTitle: "Hora",
    eventTimeText: "18:00",
    eventPlaceTitle: "Lugar",
    eventPlaceText: "Molí Vell de Benifayó",
    eventDressTitle: "Dress Code",
    eventDressText: "Formal/Cocktail",
    faqTitle: "Preguntas frecuentes",
    faq1Question: "¿Dónde es la boda?",
    faq1Answer: "En el Molí Vell de Benifayó.",
    faq2Question: "¿A qué hora empieza?",
    faq2Answer: "La ceremonia empezará a las 18:00.",
    faq3Question: "¿Cuál es el dress code?",
    faq3Answer: "Formal/Cocktail.",
    faq4Question: "¿Cómo confirmo asistencia?",
    faq4Answer: "A través del formulario que encontrarás al final de esta página.",
    giftTitle: "NUESTRO MEJOR REGALO ES DISFRUTAR CON VOSOTROS",
    giftText: "Tu presencia es el mejor regalo, pero si quieres tener un detalle con nosotros, ponemos a disposicion este numero de cuenta.",
    giftNote: "¡Muchas gracias por adelantado!",
    copyButton: "Copiar",
  },

  ca: {
    heroSubtitle: "Ens casem",
    heroNames: "Claudia<br>& Enric",
    heroDate: "10 d’octubre de 2026",
    heroButton: "Veure invitació",
    sectionTitle: "El nostre casament",
    sectionText:
      "Aquest 10 d’octubre celebrarem el nostre casament al Molí Vell de Benifayó. Ens faria moltíssima il·lusió compartir aquest dia tan especial amb vosaltres.",
    timelineTitle: "Horaris",
    ceremonyTitle: "Cerimònia",
    cocktailTitle: "Banquet tipus còctel",
    banquetTitle: "Festa",
    partyTitle: "Despedida",
    rsvpTitle: "CONFIRMACIÓ D’ASSISTÈNCIA",
    rsvpText: "Si us plau, confirmeu la vostra assistència omplint el formulari.",
    rsvpButton: "CONFIRMACIÓ D’ASSISTÈNCIA",
    footerText: "Gràcies per formar part de la nostra història",
    countdownLabel: "Falten",
    days: "dies",
    hours: "hores",
    minutes: "minuts",
    seconds: "segons",
    eventTitle: "El gran dia",
    eventDateTitle: "Data",
    eventDateText: "10 d’octubre de 2026",
    eventTimeTitle: "Hora",
    eventTimeText: "18:00",
    eventPlaceTitle: "Lloc",
    eventPlaceText: "Molí Vell de Benifayó",
    eventDressTitle: "Dress Code",
    eventDressText: "Formal/Cocktail",
    faqTitle: "Preguntes freqüents",
    faq1Question: "On és el casament?",
    faq1Answer: "Al Molí Vell de Benifayó.",
    faq2Question: "A quina hora comença?",
    faq2Answer: "La cerimònia començarà a les 18:00.",
    faq3Question: "Quin és el dress code?",
    faq3Answer: "Formal/Cocktail.",
    faq4Question: "Com confirmo assistència?",
    faq4Answer: "A través del formulari que trobaràs al final d’aquesta pàgina.",
    giftTitle: "EL NOSTRE MILLOR REGAL ÉS GAUDIR AMB VOSALTRES",
    giftText: "La vostra presència és el millor regal, però si voleu tindre un detall amb nosaltres, posem a disposició aquest número de compte.",
    giftNote: "Moltes gràcies per endavant!",
    copyButton: "Copiar",
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = translations[lang][key];
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lang-es").addEventListener("click", () => {
    setLanguage("es");
  });

  document.getElementById("lang-ca").addEventListener("click", () => {
    setLanguage("ca");
  });

  setLanguage("es");
});

const weddingDate = new Date("2026-10-10T18:00:00");

function updateCountdown() {
  const now = new Date();
  const difference = weddingDate - now;

  if (difference <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const copyButton = document.getElementById("copy-iban");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const iban = document.getElementById("iban").textContent.trim();

    try {
      await navigator.clipboard.writeText(iban);
      copyButton.textContent = "Copiado";

      setTimeout(() => {
        copyButton.textContent = translations[document.documentElement.lang].copyButton;
      }, 2000);
    } catch (error) {
      console.error("Error al copiar el IBAN:", error);
      alert("No se ha podido copiar. Copia el IBAN manualmente.");
    }
  });
}