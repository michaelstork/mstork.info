
<template>
	<div class="wrapper">
		<header>
			<h1 v-on:click="activeProjectIndex = null">
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
		</header>
		<div class="page-content" :class="{navigating:navigating}">
			<projects-list :projects="projects" :active-project-index="activeProjectIndex" v-on:setActiveProject="setActiveProject"></projects-list>
			
			<project v-if="activeProjectIndex !== null" :project="projects[activeProjectIndex]"></project>
			
			<div v-else class="project-content-container">
				<div class="project-content">
					<div class="project-header">
						<h2>About</h2>
					</div>
					<div class="project-info">
						<div class="project-intro">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
						<div class="project-screenshots">
							<div v-for="image in project.screenshots" :style="'background-image:url(/images/'+ image +')'"></div>
						</div>
						<div class="project-details">
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import ProjectsListComponent from './ProjectsList.vue';
	import ProjectComponent from './Project.vue';
	import data from '../projects.json';

	export default {
		data: function () {
			return {
				projects: data,
				// activeProjectIndex: null,
				activeProjectIndex: 0,
				navigating: false
			};
		},
		methods: {
			setActiveProject: function (index) {
				this.activeProjectIndex = index;
			}
		},
		components: {
			'projects-list': ProjectsListComponent,
			'project': ProjectComponent
		}
	}
</script>