
<template>
	<div class="page-wrapper" :class="{'menu-active':menuActive}">
		<main-header>
			<menu-target slot="menu-target"
				:active="menuActive"
				v-on:toggle="menuActive = !menuActive"></menu-target>
			<router-link tag="h1" :to="'/'" slot="logo">
				<span class="name">{{ contact.name }}</span>
				<span class="title">{{ contact.title }}</span>
			</router-link>
			<div class="contact-info" slot="contact">
				<a class="email" :href="'mailto:'+contact.email">
					<i class="mdi mdi-email"></i>
					<span>{{ contact.email }}</span>
				</a>
				<a class="phone">
					<i class="mdi mdi-cellphone-iphone"></i>
					<span>{{ contact.phone }}</span>
				</a>
			</div>
		</main-header>
		<div class="page-content">
			<nav>
				<div class="nav-header-item">
					<span>Projects:</span>
				</div>
				<projects-list></projects-list>
			</nav>
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
	import MenuTargetComponent from './MenuTarget.vue';
	import contact from '../contact.json';

	export default {
		data: function () {
			return {
				contact: contact,
				activeImage: null,
				menuActive: false
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
			'image-viewer': ImageViewerComponent,
			'menu-target': MenuTargetComponent
		}
	}
</script>