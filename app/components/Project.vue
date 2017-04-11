
<template>
	<div class="project-content-container">
		<div class="project-content" :class="{updating:updating}">
			<div class="project-header">
				<h2>
					<img v-if="project.icon" :src="iconSrc" />
					<span>{{ project.title }}</span>
				</h2>
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
					<div v-for="image in project.screenshots"
						:style="'background-image:url(/images/'+ image +')'"
						v-on:click="setActiveImage(image)">
					</div>
				</div>
				<div v-html="project.details" class="project-details"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['project'],
		data: function () {
			return {
				updating: true
			};
		},
		computed: {
			displayUrl: function () {
				if (this.project.urlTitle) return this.project.urlTitle;

				return this.project.url
					? this.project.url.replace(/https?:\/\//, '')
					: '';
			},
			iconSrc: function () {
				return '/images/' + this.project.icon;
			}
		},
		watch: {
			project: function () {
				this.updating = true;
				setTimeout(() => {
					this.updating = false;
				}, 10);
			}
		},
		mounted: function () {
			setTimeout(() => {
				this.updating = false;
			}, 10);
		},
		methods: {
			setActiveImage: function (src) {
				this.$emit('setActiveImage', src);
			}
		}
	}
</script>