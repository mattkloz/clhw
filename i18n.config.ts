export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            favorite_quote: 'Favorite Quote',
            learn_more: 'Learn More',
            nationality: "Where I'm From",
            no_results: 'No results found, please try again.'
        },
        sp: {
            favorite_quote: 'Cita Favorita',
            learn_more: 'Aprende Más',
            nationality: 'De donde soy',
            no_results: 'No se encontraron resultados, por favor intente de nuevo.'
        }
    }
}))