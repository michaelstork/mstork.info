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
			<router-link tag="div" class="project-item-content" :to="project.url">
				<h2>{{ project.title }}</h2>
				<p class="project-item-tech">{{ project.tech }}</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	import projectsData from '../data/projects.json';

	export default {
		data: function () {
			const projects = projectsData.map(project => {
				return {
					title: project.title,
					tech: project.tech.join(', '),
					url: '/projects/' + project.slug
				};
			});
			return {
				projects: projects
			};
		}
	}
</script>