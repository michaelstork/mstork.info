<template>
	<div>
		<div class="panel-header">
			<h2>About</h2>
		</div>
		<div class="panel-info">
			<div class="panel-intro" v-html="about"></div>
		</div>
		<div class="panel-header">
			<h2>Technical Skills</h2>
		</div>
		<div class="panel-info">
			<div class="skills-table">
				<div v-for="section in skills" class="skills-table-section">
					<template v-for="list in section">
						<p>{{ list.title }}</p>
						<ul class="skills-table-list">
							<li v-for="skill in list.skills">
								<a v-if="skill.url" :href="skill.url" target="_blank">{{ skill.title }}</a>
								<span v-else>{{ skill.title }}</span>
							</li>
						</ul>
					</template>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import infoData from '../data/info.json';

	export default {
		data: function () {
			return {
				about: infoData.about,
				skills: infoData.skills
			};
		}
	}
</script>