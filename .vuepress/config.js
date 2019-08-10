module.exports = {
    title: 'От Пчёл С Любовью | Медовые Палочки',
    description: 'Палочки с мёдом',
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
        logo: '/logo.png',
        search: false,
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'О Нас', link: '/ОНАС' },
            { text: 'О Медовых Палочках', link: '/ОМЕДОВЫХПАЛОЧКАХ' },
            { text: 'Для Покупателей', link: '/ДЛЯПОКУПАТЕЛЕЙ' },
            { text: 'Контакты', link: '/ОНАС#Контакты' },
            { text: '+79656567781', link: 'tel:+79656567781' },
        ]
    },
 plugins: ['@vuepress/back-to-top', '@vuepress/pwa'] 
   
}
