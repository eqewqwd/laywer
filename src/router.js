import { createWebHashHistory, createRouter } from 'vue-router';
import Home from '@/view/Home.vue';
import DownloadPage from '@/view/DownloadPage.vue';
import PostForms from '@/view/PostForms.vue';
import login from '@/view/login.vue';
import FormsContainer from '@/view/FormsContainer.vue';
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
		path: '/Admin/PostForms',
		name: 'PostForms',
		component: PostForms,
		meta:{
			title:"הוספת פורומים",
		},
	},
	{
		path: '/Forms/:name',
		name: 'FormsContainer',
		component: FormsContainer,
		meta:{
			title:"FormsContainer",
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
	{
		path: '/login',
		name: 'login',
		component: login,
		meta:{
			title:"כניסה",
		},
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	
});



router.beforeEach((to, from, next)=>{
	document.title = `${to.meta.title}`;
	next()

	
});



export default router;

