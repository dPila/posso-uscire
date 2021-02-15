import {
  ABRUZZO,
  ALL_REGIONS,
  BOLZANO,
  CALABRIA,
  EMILIA_ROMAGNA,
  FRIULI_VENEZIA_GIULIA,
  LAZIO,
  LIGURIA,
  LOMBARDIA,
  MARCHE,
  PIEMONTE,
  PUGLIA,
  SARDEGNA,
  SICILIA,
  UMBRIA,
  VALLE_D_AOSTA,
  VENETO,
} from "./Constants";

const zonaArancione = {
  name: {
    it: "🟧 Zona Arancione",
    en: "🟧 Orange Zone",
  },
  details: [
    {
      it:
        "🍣 Bar aperti per asporto fino alle 18. Ristoranti aperti per asporto fino alle 22. E' sempre consentito il servizio di consegna a domicilio.",
      en:
        "🍣 Bars open for takeaway until 6pm. Restaurants open for takeaway until 10pm. The home-delivery service is always allowed.",
    },
    {
      it: "🛍 Negozi aperti.",
      en: "🛍 Shops are open.",
    },
    {
      it: "❌ Centri commerciali chiusi durante i festivi e prefestivi.",
      en: "❌ Shopping malls are closed on holidays and days before holidays.",
    },
    {
      it:
        "👭 Si può uscire (al massimo in coppia) per raggiungere amici e parenti una volta al giorno. Senza cambiare comune.",
      en:
        "👭 It is allowed to travel (not more than 2 people at a time) to friends and relatives once a day without changing municipality.",
    },
    {
      it: "🛏 Coprifuoco dalle 22.00 alle 05.00.",
      en: "🛏 Curfew from 10 PM to 5 AM.",
    },
    {
      it:
        "📝 Serve l'autocertificazione per gli spostamenti al di fuori del comune.",
      en:
        "📝 Self-certification is needed to justify shifts across municipalities.",
    },
    {
      it:
        "🏚 Consentito sempre il rientro alla propria residenza, domicilio o abitazione. Puoi recarti nella seconda casa, anche se fuori regione se acquistata prima del 14/01/2021.",
      en:
        "🏚 Always allowed to return to one's residence, domicile or home. You can go to the second home, even if outside the region if purchased before 14/01/2021.",
    },
    {
      it:
        "⛔️ Non si possono superare i confini della regione salvo per esigenze lavorative, situazioni di necessità o motivi di salute.",
      en:
        "⛔️ It is not allowed to cross the boundaries of the region except for work needs, mandatory necessities or health reasons.",
    },
  ],
  moreDetails: [
    {
      it:
        "👭 Si può uscire dal comune per comprovate esigenze di lavoro, di salute o situazione di necessità.",
      en:
        "👭 Shifts across municipalities are allowed for work requirements, health needs, and situations of need.",
    },
    {
      it:
        "🛒 Si può uscire dal comune per fruire di servizi altrimenti non disponibili o economicamente più convenienti.",
      en:
        "🛒 It is allowed to travel between different municipalities to access services which are not-available/more-expensive in your own municipality.",
    },
    {
      it: "⛪ Consentito l' accesso ai luoghi di culto e funzioni religiose.",
      en:
        "⛪ It is allowed to access places of worship and religious functions.",
    },
    {
      it:
        "🏃 Consentito svolgere attività sportiva e motoria all'aperto, senza uscire dal comune.",
      en:
        "🏃 It is allowed to carry out outdoor sports and motor activities, without crossing municipality boundaries.",
    },
    {
      it:
        "📚 Luoghi di cultura chiusi (musei compresi). Biblioteche aperte su prenotazione.",
      en:
        "📚 Culture-related places are closed. Libraries open by reservation.",
    },
  ],
};

export default [
  {
    ...zonaArancione,
    from: "2021/01/09 00:00:00",
    to: "2021/01/10 23:59:59",
    regions: ALL_REGIONS,
  },
  {
    ...zonaArancione,
    from: "2021/01/11 00:00:00",
    to: "2021/01/16 23:59:59",
    regions: [LOMBARDIA, VENETO, EMILIA_ROMAGNA, CALABRIA, SICILIA],
  },
  {
    ...zonaArancione,
    from: "2021/01/17 00:00:00",
    to: "2021/01/23 23:59:59",
    regions: [
      VALLE_D_AOSTA,
      PIEMONTE,
      LIGURIA,
      EMILIA_ROMAGNA,
      VENETO,
      FRIULI_VENEZIA_GIULIA,
      LAZIO,
      MARCHE,
      UMBRIA,
      ABRUZZO,
      PUGLIA,
      CALABRIA,
    ],
  },
  {
    ...zonaArancione,
    from: "2021/01/24 00:00:00",
    to: "2021/01/31 23:59:59",
    regions: [
      VALLE_D_AOSTA,
      PIEMONTE,
      LIGURIA,
      EMILIA_ROMAGNA,
      VENETO,
      FRIULI_VENEZIA_GIULIA,
      LAZIO,
      MARCHE,
      UMBRIA,
      ABRUZZO,
      PUGLIA,
      CALABRIA,
      LOMBARDIA,
      SARDEGNA,
    ],
  },
  {
    ...zonaArancione,
    from: "2021/02/01 00:00:00",
    to: "2021/02/15 23:59:59",
    regions: [PUGLIA, SICILIA, UMBRIA],
    cities: [BOLZANO],
  },
  {
    ...zonaArancione,
    from: "2021/02/15 00:00:00",
    to: "2021/02/28 23:59:59",
    regions: [],
    cities: [TRENTO],
  },
];
