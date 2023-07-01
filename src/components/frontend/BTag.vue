<template>
	<button v-if="button" :class="['tag', cls]" @click="clickOnButton"><slot/></button>
	<a v-else :class="['tag', cls]" :href="href"><slot/></a>
</template>

<script>
export default {
	name: 'BTag',
	emits: ['click'],
	props: {
		cls: [Object, String],
		href: String,
		button: Boolean,
	},
	setup (props, { emit }) {
		const clickOnButton = (e) => emit('click', e);
		return { clickOnButton }
	}
}
</script>

<style lang="scss">
.tag {
	$self: &;
	@extend %reset-button;
	display: inline-block;
	box-sizing: border-box;
	font-family: "RM", sans-serif;
	text-decoration: none;
	border-radius: 50px;
	padding: 12px 16px;
	line-height: 1.0;
	font-size: 16px;
		
	@include media('<=md') {
		padding: 10px 14px;
	}
		
	@include media('<=sm') {
		padding: 8px 12px;
		font-size: 14px;
	}
		
	@include media('<=xxs') {
		padding: 6px 12px;
		font-size: 12px;
	}

	&_hovered {
		transition: background-color 0.3s;
		
		&#{$self}_base:hover {
			background-color: $primary;
			color: #fff;
		}
	}

	&_mid {
		padding: 8px 12px;
		
		@include media('<=lg') {
			font-size: 14px;
		}
		
		@include media('<=xxs') {
			padding: 6px 12px;
			font-size: 12px;
		}
	}

	&_small {
		padding: 5px 12px;
		font-size: 12px;
	}

	&_base {
		border: 1px solid $primary;
		color: $primary;
		transition: background-color 0.2s;
	
		&.active {
			background-color: $primary;
			color: #fff;
		}
	}

	&_label {
		font-family: "RM", sans-serif;
		color: #fff;
		background-color: $accent;
		border-radius: 50px;
	}

	&_fade {
		font-family: "RM", sans-serif;
		color: $accent;
		border-radius: 50px;
		border: 1px solid $accent;
		background-color: rgba($accent, 0.1);
	}
}
</style>