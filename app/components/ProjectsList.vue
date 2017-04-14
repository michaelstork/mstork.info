<template>
	<div class="projects-list">
		<div class="project-item"
			v-for="(project, p) in projects"
			:key="project.title"
			data-aos="fade-up"
			data-aos-easing="ease-out-sine"
			data-aos-duration="500"
			data-aos-once="true"
			:data-aos-delay="p * 100">
			<router-link tag="div" class="project-item-content"
				:to="'/projects/' + project.slug">
				<h2>{{ project.title }}</h2>
				<p class="project-item-tech">{{ project.tech.join(', ') }}</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	import data from '../projects.json';

	export default {
		data: function () {
			return {
				projects: data
			};
		}
	}
</script>