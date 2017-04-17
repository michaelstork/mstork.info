
import '../scss/portfolio.scss';
import '../node_modules/aos/dist/aos.css';
import aos from 'aos';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import BaseComponent from './components/Base.vue';
import AboutComponent from './components/About.vue';
import ProjectComponent from './components/Project.vue';


const router = new VueRouter({
	mode: 'history',
	scrollBehavior: function (to, from, saved) {
		return saved ? saved : {x:0,y:0};
	},
	routes: [
		{
			path: '/',
			component: AboutComponent,
			name: 'home'
		},
		{
			path: '/projects/:slug',
			component: ProjectComponent,
			name: 'projects',
			props: true
		}
	]
});


new Vue({
	router: router,
	el: '.vue-mount',
	data: {},
	render: function (createElement) {
		return createElement(
			BaseComponent,
			{
				props: {}
			}
		);
	},
	mounted: function () {
		aos.init({
			disable: function () {
				return window.innerWidth <= 768;
			}
		});
	},
	components: {
		'base-component': BaseComponent,
		'project': ProjectComponent
	}
});