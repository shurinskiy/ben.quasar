<template>
	<a v-if="link" :class="['button', cls]" :href="link"><slot/></a>
	<button v-else :class="['button', cls]" @click.prevent="clickOnButton"><slot/></button>
</template>

<script>
export default {
	name: 'BButton',
	emits: ['click'],
	props: {
		link: {
			type: Boolean,
			default: false
		},
		href: {
			type: String,
			default: '/'
		},
		cls: {
			type: String
		}
	},
	setup (props, { emit }) {
		const clickOnButton = (e) => emit('click', e);
		return { clickOnButton }
	}
}
</script>

<style lang="scss">
.button {
	$self: &;
	@extend %reset-button;
	display: inline-flex;
	align-items: center;
	padding: 12px 16px;
	border-radius: 4px;
	background-color: $primary;
	font-family: "RM", sans-serif;
	text-decoration: none;
	font-size: 16px;
	line-height: 1.5;
	color: #fff;
	flex-shrink: 0;
	
	&::before {
		display: none;
		content: '';
		width: 24px;
		height: 24px;
		margin-right: 8px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		background-color: transparent;
	}
	
	&_shadow {
		box-shadow: 0px 4px 12px rgba(52, 60, 136, 0.4);

		&#{$self}_accent {
			box-shadow: 0px 4px 12px rgba(245, 93, 62, 0.4);
		}
	}

	&_accent {
		background-color: $accent;
	}

	&_clean {
		background-color: transparent;
		color: $primary;
	}

	&_login::before {
		display: block;
		background-image: url('#{$images-path}icons-sprite.svg#icon-user-view-white');
		background-size: 18px 20px;
	}
	
	&_pending::before {
		display: block;
		background-image: url('#{$images-path}loader.svg');
	}
	
	&_menu::before {
		display: block;
		background-image: url('#{$images-path}icons-sprite.svg#icon-menu-view-white');
		background-size: 20px 16px;
		margin: 0;
	}

	
	:disabled {
		background-color: #AEB1CF !important;
		cursor: default !important;
	}

}
</style>