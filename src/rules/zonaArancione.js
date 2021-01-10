import { ALL_REGIONS, CALABRIA, EMILIA_ROMAGNA, LOMBARDIA, SICILIA, VENETO } from './Constants'

const zonaArancione = {
  name: {
    'it': '🟧 Zona Arancione',
    'en': '🟧 Orange Zone',
  },
  details: [
    {
      'it': '🚫 Bar, ristoranti chiusi tranne che per asporto.',
      'en': '🚫 Bar and resturants open just for take-away service.',
    },
    {
      'it': '🛍 Negozi aperti.',
      'en': '🛍 Shops are open.',
    },
    {
      'it': '❌ Centri commerciali chiusi durante i festivi e prefestivi.',
      'en': '❌ Shopping malls are closed on holidays and days before holidays.',
    },
    {
      'it': '🛏 Coprifuoco dalle 22.00 alle 05.00.',
      'en': '🛏 Curfew from 10 PM to 5 AM.',
    },
    {
      'it': '📝 Serve l\'autocertificazione per gli spostamenti al di fuori del comune.',
      'en': '📝 Self-certification is needed to justify shifts across municipalities.',
    },
    {
      'it': '🌎 Puoi andare nella seconda casa ma solo se nella tua regione.',
      'en': '🌎 You can travel to the second home just if it is in your same region.',
    },
    {
      'it': '🚫 Non si possono superare i confini della regione.',
      'en': '🚫 It is not allowed to cross the boundaries of the region.',
    },
  ],
  moreDetails: [
    {
      'it': '👭 Si può uscire dal comune per comprovate esigenze di lavoro, di salute o situazione di necessità.',
      'en': '👭 Shifts across municipalities are allowed for work requirements, health needs, and situations of need.',
    },
    {
      'it': '🛒 Si può uscire dal comune per fruire di servizi altrimenti non disponibili o economicamente più convenienti.',
      'en': '🛒 It is allowed to travel between different municipalities to access services which are not-available/more-expensive in your own municipality.',
    },
    {
      'it': '🏚 Consentito il rientro alla propria residenza, domicilio o abitazione ad esclusione delle seconde case fuori regione.',
      'en': '🏚 The return to one\'s residence, domicile or home is allowed, with the exception of second homes outside the region.',
    },
    {
      'it': '⛪ Consentito l\' accesso ai luoghi di culto e funzioni religiose.',
      'en': '⛪ It is allowed to access places of worship and religious functions.',
    },
    {
      'it': '🏃 Consentito svolgere attività sportiva e motoria all\'aperto, senza uscire dal comune.',
      'en': '🏃 It is allowed to carry out outdoor sports and motor activities, without crossing municipality boundaries.',
    },
  ],
}

export default [
  {
    ...zonaArancione,
    from: '2021/01/09 00:00:00',
    to: '2021/01/10 23:59:59',
    regions: ALL_REGIONS,
  },
  {
    ...zonaArancione,
    from: '2021/01/11 00:00:00',
    to: '2021/01/15 23:59:59',
    regions: [LOMBARDIA, VENETO, EMILIA_ROMAGNA, CALABRIA, SICILIA],
  },
]
