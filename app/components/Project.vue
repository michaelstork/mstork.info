
<template>
	<div>
		<div class="panel-header">
			<h2>
				<div class="project-icon"
					v-image-loader="'/images/'+project.icon"
					:style="'background-image:url(/images/'+project.icon+')'">
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
		
			<div v-html="project.intro"
				class="panel-intro"
				data-aos="fade-left"
				data-aos-easing="ease-out-sine"
				data-aos-duration="500"
				data-aos-once="true"
				data-aos-delay="100"></div>
		
			<div class="panel-screenshots"
				data-aos="fade-left"
				data-aos-easing="ease-out-sine"
				data-aos-duration="500"
				data-aos-once="true"
				data-aos-delay="200">
				<div v-for="image in project.screenshots"
					:style="'background-image:url(/images/'+ image +')'"
					v-image-loader="'/images/'+image">
				</div>	
			</div>
			
			<div v-html="project.details"
				class="panel-details"
				data-aos="fade-left"
				data-aos-easing="ease-out-sine"
				data-aos-duration="500"
				data-aos-once="true"
				data-aos-delay="300">
			</div>

		</div>
	</div>
</template>

<script>
	import projects from '../projects.json';
	import aos from 'aos';
	import ImageLoaderDirective from '../directives/image-loader';

	export default {
		props: ['slug'],
		data: function () {
			return {
				project: this.findProject(this.slug)
			};
		},
		mounted: function () {
			aos.init();
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