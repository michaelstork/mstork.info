<template>
	<div class="projects-list">
		<div class="project-item"
			v-for="(project, p) in projects"
			:key="project.title"
			v-on:click="setActiveProject(p)"
			data-aos="fade-up"
			data-aos-easing="ease-out-sine"
			data-aos-duration="500"
			data-aos-once="true"
			:data-aos-delay="p * 100">
			<div class="project-item-content">
				<a v-on:click.prevent="setActiveProject(p)">{{ project.title }}</a>
				<p class="project-item-tech">{{ project.tech.join(', ') }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import aos from 'aos';
	import aosStyles from '../../node_modules/aos/dist/aos.css';
	
	export default {
		props: ['projects', 'active-project-index'],
		mounted: function () {
			aos.init({
				disable: 'mobile'
			});
		},
		methods: {
			setActiveProject: function (p) {
				this.$emit('setActiveProject', p);
			}
		}
	}
</script>