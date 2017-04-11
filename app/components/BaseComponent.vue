
<template>
	<div class="wrapper">
		<main-header>
			<h1 v-on:click="activeProjectIndex = null">
				<span class="name">Michael Stork</span>
				<span class="title">Developer</span>
			</h1>
		</main-header>
		<div class="page-content">
			<projects-list
				:projects="projects"
				:active-project-index="activeProjectIndex"
				v-on:setActiveProject="setActiveProject">
			</projects-list>
			<project
				v-if="activeProjectIndex !== null"
				:project="projects[activeProjectIndex]"
				v-on:setActiveImage="setActiveImage">
			</project>			
			<div v-else class="project-content-container">
				<div class="project-content">
					<div class="project-header">
						<h2>About</h2>
					</div>
					<div class="project-info">
						<div class="project-intro">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
						<div class="project-details">
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<transition name="fade">
			<image-viewer v-if="activeImage" :image="activeImage" v-on:close="setActiveImage(null)"></image-viewer>
		</transition>
	</div>
</template>

<script>
	import HeaderComponent from './Header.vue';
	import ProjectsListComponent from './ProjectsList.vue';
	import ProjectComponent from './Project.vue';
	import ImageViewerComponent from './ImageViewer.vue';
	import data from '../projects.json';

	export default {
		data: function () {
			return {
				projects: data,
				activeProjectIndex: null,
				activeImage: null
			};
		},
		methods: {
			setActiveProject: function (index) {
				this.activeProjectIndex = index;
			},
			setActiveImage: function (src) {
				this.activeImage = src;
			}
		},
		components: {
			'main-header': HeaderComponent,
			'projects-list': ProjectsListComponent,
			'project': ProjectComponent,
			'image-viewer': ImageViewerComponent
		}
	}
</script>