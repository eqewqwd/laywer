import { createWebHashHistory, createRouter } from 'vue-router';
import Home from '@/view/Home.vue';
import DownloadPage from '@/view/DownloadPage.vue';
import yipuyKoach from '@/view/yipuyKoach.vue';
import tzavaha from '@/view/tzavaha.vue'
import ContactUs from '@/view/ContactUs.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		meta:{
			title:"עמוד הבית",
		},
	},	
	{
		path: '/Files-Download',
		name: 'DownloadPage',
		component: DownloadPage,
		meta:{
			title:"טפסים להורדה",
		},
	},	
	{
		path: '/yipuy-Koach',
		name: 'yipuyKoach',
		component: yipuyKoach,
		meta:{
			title:"ייפוי כוח מתמשך",
		},
	},	
	{
		path: '/tzavaha',
		name: 'tzavaha',
		component: tzavaha,
		meta:{
			title:"צוואות",
		},
	},	
	{
		path: '/ContactUs',
		name: 'ContactUs',
		component: ContactUs,
		meta:{
			title:"צרו קשר",
		},
	},	
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	
});



router.beforeEach((to, from, next)=>{
	document.title = `${to.meta.title}`;
	next();
});



export default router;


