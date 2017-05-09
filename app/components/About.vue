<template>
	<div>
		<div class="panel-header">
			<h2>About</h2>
			<a v-if="contact.linkedin" :href="contact.linkedin" target="_blank" class="button">
				<i class="mdi mdi-linkedin-box"></i>
				<span>LinkedIn</span>
			</a>
		</div>
		<div class="panel-info">
			<div class="panel-intro" v-html="about"></div>
		</div>
		<div class="panel-header">
			<h2>Technical Skills</h2>
			<a v-if="contact.github" :href="contact.github" target="_blank" class="button">
				<i class="mdi mdi-github-face"></i>
				<span>GitHub</span>
			</a>
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
		<div class="panel-header">
			<h2>Recommendations</h2>
		</div>
		<div class="panel-info">
			<div class="panel-recommendations">
				<ul>
					<li v-for="item in recommendations">
						<a :href="item.url" class="recommendation-item" target="_blank">
							<span class="name">{{ item.name }}</span>
							<span class="title">{{ item.title }}</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import infoData from '../data/info.json';
	import contactData from '../data/contact.json';

	export default {
		data: function () {
			return {
				contact: contactData,
				about: infoData.about,
				skills: infoData.skills,
				recommendations: infoData.recommendations
			};
		}
	}
</script>