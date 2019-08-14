import VueRouter from 'vue-router'
import VueYandexMetrika from 'vue-yandex-metrika' 

const router = new VueRouter({
	                    path: '/',
	                    path: '/ОНАС',
	                    path: '/ОМЕДОВЫХПАЛОЧКАХ',
	                    path: '/ДЛЯПОКУПАТЕЛЕЙ',
	                    path: '/ОНАС#Контакты',
                            path: '/en/',
	                    path: '/en/ABOUTUS',
	                    path: '/en/ABOUTHONEYSTICKS',
	                    path: '/en/FORBUYERS',
	                    path: '/en/ABOUTUS#Contacts',
	                    path: 'tel:+79656567781'
})

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {	 
	if (typeof process === 'undefined') { // process is undefined in a browser
        Vue.use(VueYandexMetrika, {
        id: 54895831,
        router: router,
        env: process.env.NODE_ENV
    // other options
})
    }
  // ...apply enhancements to the app
}
