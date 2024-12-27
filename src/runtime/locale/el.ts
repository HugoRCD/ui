import { defineLocale } from '../composables/defineLocale'

export default defineLocale({
  name: 'Ελληνικά',
  code: 'el',
  messages: {
    inputMenu: {
      noMatch: 'Δεν βρέθηκαν δεδομένα',
      noData: 'Δεν υπάρχουν δεδομένα',
      create: 'Δημιουργία "{label}"'
    },
    calendar: {
      prevYear: 'Προηγούμενο έτος',
      nextYear: 'Επόμενο έτος',
      prevMonth: 'Προηγούμενος μήνας',
      nextMonth: 'Επόμενος μήνας'
    },
    inputNumber: {
      increment: 'Αύξηση',
      decrement: 'Μείωση'
    },
    commandPalette: {
      noMatch: 'Δεν βρέθηκαν δεδομένα',
      noData: 'Δεν υπάρχουν δεδομένα',
      close: 'Κλείσιμο'
    },
    selectMenu: {
      noMatch: 'Δεν βρέθηκαν δεδομένα',
      noData: 'Δεν υπάρχουν δεδομένα',
      create: 'Δημιουργία "{label}"'
    },
    toast: {
      close: 'Κλείσιμο'
    },
    carousel: {
      prev: 'Προηγούμενο',
      next: 'Επόμενο',
      goto: 'Μετάβαση στη διαφάνεια {slide}'
    },
    modal: {
      close: 'Κλείσιμο'
    },
    slideover: {
      close: 'Κλείσιμο'
    },
    alert: {
      close: 'Κλείσιμο'
    },
    table: {
      noData: 'Δεν υπάρχουν δεδομένα'
    }
  }
})