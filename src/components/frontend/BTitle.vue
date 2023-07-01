<template>
	<h2 :class="['title', cls]">
		<span>{{ title }}</span>
		<a v-if="link_url" :href="link_url">{{ link_text }}</a>
	</h2>
</template>

<script>
export default {
	name: 'BTitle',
	props: {
		cls: {
			type: String
		},
		title: {
			type: String
		},
		link_url: {
			type: String
		},
		link_text: {
			type: String,
			default: 'смотреть все...'
		}
	},
	setup () {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.title {
	$self: &;
	font-family: "RB", sans-serif;
	font-size: 32px;
	line-height: 1.2;
	letter-spacing: normal;
	color: #4d4d4d;
	display: flex;
	flex-flow: row wrap;
	
	@include media('<=md') {
		font-size: 28px;
	}
	
	@include media('<=xs') {
		font-size: 24px;
	}

	span {
		margin-right: 10px;
	}

	a {
		color: $accent;
		text-decoration-thickness: 2px;
		text-underline-offset: 3px;
	}
}	
</style>