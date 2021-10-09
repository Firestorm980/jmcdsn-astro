<template>
	<nav class="navigation navigation--social">
		<ul>
			<li v-for="(network, index) in networks" :key="index">
				<a :href="network.url">
					<span class="sr-only">Visit me on {{ network.name }}</span>
					<svg class="icon" aria-hidden="true">
						<use :xlink:href="`#icon-${network.slug}`"></use>
					</svg>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
import siteData from './../data/site.json';

const {networks} = siteData;

export default {
	name: 'navigation-social',
	data() {
		return {
			networks
		}
	}
}
</script>
