
<template>
	<div class="project-content-container">
		<div class="project-content">
			<div class="project-header">
				<h2>{{ project.title }}</h2>
				<button v-if="project.url">
					<a :href="project.url" target="_blank">
						<i class="mdi mdi-link-variant"></i>
						<span>{{ displayUrl }}</span>
					</a>
				</button>
			</div>
			<div class="project-info">
				<div v-html="project.intro" class="project-intro"></div>
				<div class="project-screenshots">
					<div v-for="image in project.screenshots" :style="'background-image:url(/images/'+ image +')'"></div>
				</div>
				<div v-html="project.details" class="project-details"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['project'],
		computed: {
			displayUrl: function () {
				if (this.project.urlTitle) return this.project.urlTitle;

				return this.project.url
					? this.project.url.replace(/https?:\/\//, '')
					: '';
			}
		},
		mounted: function () {

		}
	}
</script>