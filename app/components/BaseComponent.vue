
<template>
	<div class="wrapper">
		<header-component>
			<h1>
				<span class="name">Michael Stork</span>
				<span class="title">Developer</span>
			</h1>
			<div class="contact-info">
				<a class="email" href="mailto:michael@mstork.info">
					<i class="mdi mdi-email"></i>
					<span>michael@mstork.info</span>
				</a>
				<a class="phone" href="tel:2162238715">
					<i class="mdi mdi-cellphone-iphone"></i>
					<span>216.223.8715</span>
				</a>
			</div>
		</header-component>
		<div class="page-content">
			<projects-list :projects="projects" :active-project-index="activeProjectIndex" v-on:setActiveProject="setActiveProject"></projects-list>
			<project v-if="activeProjectIndex !== null" :project="projects[activeProjectIndex]"></project>
		</div>
	</div>
</template>

<script>
	import HeaderComponent from './HeaderComponent.vue';
	import ProjectsListComponent from './ProjectsList.vue';
	import ProjectComponent from './Project.vue';
	import projectsData from '../projects.json';

	export default {
		data: function () {
			return {
				projects: projectsData,
				activeProjectIndex: null
			};
		},
		methods: {
			setActiveProject: function (index) {
				this.activeProjectIndex = index;
			}
		},
		components: {
			'header-component': HeaderComponent,
			'projects-list': ProjectsListComponent,
			'project': ProjectComponent
		}
	}
</script>