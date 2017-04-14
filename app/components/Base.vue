
<template>
	<div class="wrapper">
		<main-header>
			<router-link tag="h1" :to="'/'">
				<span class="name">Michael Stork</span>
				<span class="title">Developer</span>
			</router-link>
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