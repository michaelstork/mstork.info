
import '../scss/portfolio.scss';
import Vue from 'vue';

import BaseComponent from './components/BaseComponent.vue';

window.app = new Vue({
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
	components: {
		'base-component': BaseComponent
	}
});