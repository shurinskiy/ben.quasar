<template>
<section :class="['articles', cls]">
	<div class="articles__inner container">
		<b-title cls="articles__title" :title="title" :link_url="title_link_url" />
		<div class="articles__items">
			<slot name="cards"/>
		</div>
	</div>
</section>
</template>

<script>
import BTitle from "components/frontend/BTitle.vue";

export default {
	name: 'BSectionArticles',
	components: { BTitle },
	props: {
		cls: {
			type: String
		},
		title: {
			type: String
		},
		title_link_url: {
			type: String
		},
		title_link_text: {
			type: String
		}
	},
	setup () {
		return {}
	}
}
</script>

<style lang="scss">
.articles {
	$self: &;
	margin-bottom: 48px;

	&__inner {

	}

	&__title {
		margin-bottom: 24px;
	}

	&__items {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 24px;
		
		@include media('<=sm') {
			grid-template-columns: 1fr;
		}
	}

	&__item {
		grid-column: 1 span;
	}
}	
</style>