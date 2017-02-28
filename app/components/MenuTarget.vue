<template>
	<svg class="menu-target"
		v-bind:class="{active:active}"
		v-on:click="toggle"
		x="0px" y="0px"
		viewBox="0 0 50 50">
	    <g>
	        <line x1="0" y1="0" x2="50" y2="50" />
	        <line x1="0" y1="24" x2="50" y2="24" />
	        <line x1="50" y1="0" x2="0" y2="50" />
	    </g>
	</svg>
</template>

<script>
	export default {
		props: ['active'],
		methods: {
			toggle: function () {
				this.$emit('toggle');
			}
		}
	}
</script>