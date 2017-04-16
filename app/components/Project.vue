
<template>
	<div>
		<div class="panel-header">
			<h2 v-image-loader="'/images/icons/'+project.icon">
				<div class="project-icon" :style="'background-image:url(/images/icons/'+project.icon+')'">
				</div>
				<span>{{ project.title }}</span>
			</h2>
			<button v-if="project.url">
				<a :href="project.url" target="_blank">
					<i class="mdi mdi-link-variant"></i>
					<span>{{ displayUrl }}</span>
				</a>
			</button>
		</div>
		<div class="panel-info">
			<div v-html="project.intro" class="panel-intro"></div>		
			<div class="panel-screenshots">
				<div v-for="image in project.screenshots"
					:style="'background-image:url(/images/thumbnails/'+ image +')'"
					v-on:click="setActiveImage(image)"
					v-image-loader="'/images/thumbnails/'+image">
				</div>	
			</div>
			<div v-html="project.details" class="panel-details"></div>
		</div>
		<div v-if="nextUrl" class="panel-next">
			<button>
				<router-link :to="nextUrl">
					<span>Next Project</span>
					<i class="mdi mdi-chevron-right"></i>
				</router-link>
			</button>
		</div>
	</div>
</template>

<script>
	import projectsData from '../data/projects.json';
	import ImageLoaderDirective from '../directives/image-loader';

	export default {
		props: ['slug'],
		data: function () {
			return {
				project: this.findProject(this.slug),
				nextUrl: null
			};
		},
		watch: {
			'$route': function (to) {
				this.project = this.findProject(to.params.slug);
			}
		},
		computed: {
			displayUrl: function () {
				if (this.project.urlTitle) return this.project.urlTitle;

				return this.project.url
					? this.project.url.replace(/https?:\/\//, '')
					: '';
			}
		},
		mounted: function () {
			const nextProject = projectsData[projectsData.indexOf(this.project) + 1];
			this.nextUrl = nextProject
				? '/projects/' + nextProject.slug
				: null;
		},
		methods: {
			findProject: function (slug) {
				return projectsData.find(project => project.slug === slug);
			},
			setActiveImage: function (src) {
				this.$emit('setActiveImage', src);
			}
		},
		directives: {
			imageLoader: ImageLoaderDirective
		}
	}
</script>