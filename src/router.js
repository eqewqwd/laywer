import { createWebHashHistory, createRouter } from 'vue-router';
import Home from '@/view/Home.vue';
import DownloadPage from '@/view/DownloadPage.vue';

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
		path: '/DownloadPage',
		name: 'DownloadPage',
		component: DownloadPage,
		meta:{
			title:"טפסים להורדה",
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


