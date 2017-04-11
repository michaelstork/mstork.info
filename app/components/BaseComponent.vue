
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
							<p>I'm a web developer living in Denver, Colorado, looking for local opportunities to build awesome things. Currently I have a project in the works for <a href="https://stream9.net">Stream 9</a>, with whom I've worked since 2014. Some of the larger projects I've worked on recently are listed <span class="mobile-only">above</span><span class="desktop-only">to the left</span>; take a look and feel free to get in contact if you have any questions or would like to see references or code samples.</p>
							<p>My skills are mostly centered around front-end development (HTML, CSS, Javscript), although I have extensive experience with PHP and SQL as well. I'm excited about the current trends in front-end development, from build tools to module systems to the seemingly endless train of new Javascript frameworks. Most recently I've been building things with <a href="https://vuejs.org">VueJs</a>, and I have a few year's worth of experience with <a href="https://angularjs.org">Angular</a> v1 as well. For styling I generally use <a href="http://sass-lang.com/">Sass</a> and <a href="https://github.com/postcss/postcss">PostCSS</a>. For build tools, I'm a huge fan of <a href="https://webpack.github.io/">Webpack</a>.</p>
						</div>
						<div class="project-details">
	
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