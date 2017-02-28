
<template>
	<header>
        <menu-target :active="menuActive" v-on:toggle="menuActive = !menuActive"></menu-target>
        <slot></slot>
	</header>
</template>

<script>
	import MenuTarget from './MenuTarget.vue';

	export default {
		data: function () {
			return {
				menuActive: false
			};
		},
		components: {
			'menu-target': MenuTarget
		}
	}
</script>