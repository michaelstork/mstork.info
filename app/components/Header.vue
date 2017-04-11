<template>
	<header>
		<h1 v-on:click="activeProjectIndex = null">
			<span class="name">Michael Stork</span>
			<span class="title">Developer</span>
		</h1>
		<div class="contact-info">
			<a class="email" href="mailto:michael@mstork.info">
				<i class="mdi mdi-email"></i>
				<span>michael@mstork.info</span>
			</a>
			<a class="phone" href="tel:2162238715">
				<i class="mdi mdi-cellphone-iphone"></i>
				<span>216.223.8715</span>
			</a>
		</div>
	</header>
</template>

<script>
	export default {
		
	}
</script>