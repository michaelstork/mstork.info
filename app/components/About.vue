<template>
	<div>
		<div class="panel-header">
			<h2>About</h2>
		</div>
		<div class="panel-info">
			<div class="panel-intro">
				<p>I'm a web developer living in Denver, Colorado, looking for local opportunities to build awesome things. Currently I have a project in the works for <a href="https://stream9.net">Stream 9</a>, with whom I've worked since 2014. Some of the larger projects I've worked on recently are listed <span class="mobile-only">above</span><span class="desktop-only">to the left</span>; take a look and feel free to get in contact if you have any questions or would like to see references or code samples.</p>
				<p>My skills are mostly centered around front-end development (HTML, CSS, Javscript), although I have extensive experience with PHP and SQL as well. I'm excited about the current trends in front-end development, from build tools to module systems to the seemingly endless train of new Javascript frameworks. Most recently I've been building things with <a href="https://vuejs.org">VueJs</a>, and I have a few year's worth of experience with <a href="https://angularjs.org">Angular</a> v1 as well. For styling I generally use <a href="http://sass-lang.com/">Sass</a> and <a href="https://github.com/postcss/postcss">PostCSS</a>. For build tools, I'm a huge fan of <a href="https://webpack.github.io/">Webpack</a>.</p>
			</div>
		</div>
		<div class="panel-header">
			<h2>Technical Skills</h2>
		</div>
		<div class="panel-info">
			<div class="skills-table">
				<div v-for="section in skills.sections" class="skills-table-section">
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
	import skills from '../skills.json';

	export default {
		data: function () {
			return {
				skills: skills
			};
		}
	}
</script>