
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
		<div class="panel-info"
			data-aos="fade-left"
			data-aos-easing="ease-out-sine"
			data-aos-duration="500"
			data-aos-once="true"
			data-aos-offset="48"
			data-aos-delay="100">
		
			<div v-html="project.intro" class="panel-intro"></div>
		
			<div class="panel-screenshots">
				<div v-for="image in project.screenshots"
					:style="'background-image:url(/images/thumbnails/'+ image +')'"
					v-image-loader="'/images/thumbnails/'+image">
				</div>	
			</div>
			
			<div v-html="project.details" class="panel-details"></div>

		</div>
	</div>
</template>

<script>
	import projects from '../projects.json';
	import ImageLoaderDirective from '../directives/image-loader';

	export default {
		props: ['slug'],
		data: function () {
			return {
				project: this.findProject(this.slug)
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
		methods: {
			findProject: function (slug) {
				return projects.find(project => project.slug === slug);
			}
		},
		directives: {
			imageLoader: ImageLoaderDirective
		}
	}
</script>