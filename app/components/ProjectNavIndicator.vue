<template>
	<div class="project-nav-indicator">
		<ul>
			<router-link tag="li" :to="'/'" class="home-item" :class="{active:$route.name === 'home'}">
				<i class="mdi mdi-account-box-outline"></i>
				<span>About</span>
			</router-link>
			<router-link tag="li"
				v-for="(slug, s) in projectSlugs"
				:to="'/projects/'+slug"
				:key="slug"
				:class="{active:s == activeIndex}">
				{{ padString(s+1) }}
			</router-link>
		</ul>
		<i :style="indicatorStyle" class="indicator-underline"></i>
	</div>
</template>

<script>
	import projects from '../projects.json';

	export default {
		data: function () {
			return {
				projectSlugs: projects.map(project => project.slug),
				activeIndex: null
			};
		},
		computed: {
			indicatorStyle: function () {
				if (this.activeIndex === null) return 'opacity:0';
				
				return {
					transform: 'translateX('+ (100 * this.activeIndex) +'%)'
				};
			}
		},
		mounted: function () {
			this.activeIndex = this.getProjectIndex(this.$route.params.slug);
		},
		watch: {
			'$route': function (to) {
				if (!to.params.slug) {
					this.activeIndex = null;
					return;
				}

				this.activeIndex = this.getProjectIndex(to.params.slug);
			}
		},
		methods: {
			getProjectIndex: function (slug) {
				const index = this.projectSlugs.indexOf(slug);
				return index >= 0 ? index : null;
			},
			padString: function (str) {
				return ('00' + str).substr(-2, 2);
			}
		}
	}
</script>