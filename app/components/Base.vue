
<template>
	<div class="wrapper">
		<main-header>
			<router-link tag="h1" :to="'/'" slot="logo">
				<span class="name">Michael Stork</span>
				<span class="title">Developer</span>
			</router-link>
			<div class="contact-info" slot="contact">
				<a class="email" href="mailto:michael@mstork.info">
					<i class="mdi mdi-email"></i>
					<span>michael@mstork.info</span>
				</a>
				<a class="phone" href="tel:2162238715">
					<i class="mdi mdi-cellphone-iphone"></i>
					<span>216.223.8715</span>
				</a>
			</div>
		</main-header>
		<div class="page-content">
			<projects-list></projects-list>
			<div class="panel-container">
				<div class="panel-content">
					<transition name="panel" mode="out-in" appear>
						<router-view v-on:setActiveImage="setActiveImage" :key="$route.fullPath"></router-view>
					</transition>
				</div>
			</div>
		</div>
		<transition name="fade">
			<image-viewer v-if="activeImage"
				:image="activeImage"
				v-on:close="setActiveImage(null)">
			</image-viewer>
		</transition>
	</div>
</template>

<script>
	import HeaderComponent from './Header.vue';
	import ProjectsListComponent from './ProjectsList.vue';
	import ImageViewerComponent from './ImageViewer.vue';

	export default {
		data: function () {
			return {
				activeImage: null
			};
		},
		methods: {
			setActiveImage: function (src) {
				this.activeImage = src;
			}
		},
		components: {
			'main-header': HeaderComponent,
			'projects-list': ProjectsListComponent,
			'image-viewer': ImageViewerComponent
		}
	}
</script>