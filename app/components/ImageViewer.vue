
<template>
	<div class="image-viewer" v-on:click="close">
		<img :src="src" :style="style" v-on:load="onLoaded" />
		<a :href="src" target="_blank">
			<i class="mdi mdi-open-in-new"></i>
			<span>Open in New Tab</span>
		</a>
		<i class="image-viewer-close mdi mdi-close"></i>
	</div>
</template>

<script>

	export default {
		props: ['image'],
		data: function () {
			return {
				src: '/images/' + this.image,
				style: 'opacity:0'
			};
		},
		methods: {
			close: function () {
				this.$emit('close');
			},
			onLoaded: function () {
				this.style = 'opacity:1';
			}
		}
	}
</script>