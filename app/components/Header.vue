<template>
	<header>
		<div class="header-content-top">
			<slot name="logo"></slot>
			<slot name="contact"></slot>
		</div>
		<project-nav-indicator class="header-content-bottom"></project-nav-indicator>
	</header>
</template>

<script>
	import ProjectNavIndicatorComponent from './ProjectNavIndicator.vue';

	export default {
		components: {
			'project-nav-indicator': ProjectNavIndicatorComponent
		}
	}
</script>