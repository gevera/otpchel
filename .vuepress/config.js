module.exports = {
    locales: {
    '/': {
      lang: 'ru-RU',
      title: 'Медовые Палочки | От Пчёл С Любовью',
      description: '100% натуральный башкирский мёд в удобных соломинках всегда с собой. Мёд можно взять на работу, в поход или дать полезную сладость детям'
    },
    '/en/': {
      lang: 'en-EN',
      title: 'Honey Sticks | От Пчёл С Любовью',
      description: '100% natural Bashkir honey in comfortable straws is always with you. Honey can be taken to work, on a hike or to give healthy sweets to children.'
    }
  },
  head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Ruslan+Display&display=swap'
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css'
        }]
    ],
    themeConfig: {
       search: false,
       logo: '/logo.png',
       locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Языки/Languages',
        label: 'Русский',
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'О Нас', link: '/ОНАС' },
            { text: 'О Медовых Палочках', link: '/ОМЕДОВЫХПАЛОЧКАХ' },
            { text: 'Для Покупателей', link: '/ДЛЯПОКУПАТЕЛЕЙ' },
            { text: 'Контакты', link: '/ОНАС#Контакты' },
            { text: '+79656567781', link: 'tel:+79656567781' },
        ]
      },
      '/en/': {
        selectText: 'Языки/Languages',
        label: 'English',
        nav: [
            { text: 'Home', link: '/en/' },
            { text: 'About Us', link: '/en/ABOUTUS' },
            { text: 'About Honey Sticks', link: '/en/ABOUTHONEYSTICKS' },
            { text: 'For Buyers', link: '/en/FORBUYERS' },
            { text: 'Contacts', link: '/en/ABOUTUS#Contacts' },
            { text: '+79656567781', link: 'tel:+79656567781' },
        ],
        
      }
     }
    },
 plugins: ['@vuepress/back-to-top', '@vuepress/pwa'] 
   
}
