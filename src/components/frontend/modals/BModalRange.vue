<template>
	<div class="m-range">
		<q-btn class="m-range__close" icon="close" flat round dense v-close-popup />
		<h2 class="m-range__title">Укажите период</h2>
		<q-date
			class="m-range__datepicker"
			:model-value="range"
			@update:model-value="$emit('update:range', $event)"
			mask="MM.DD.YYYY"
			minimal
			range
			flat
		/>
		<b-button class="m-range__button button_noshadow" v-close-popup>Продолжить</b-button>
	</div>
</template>

<script>
import BButton from 'components/frontend/BButton.vue';

export default {
	name: 'BModalRange',
	components: { BButton },
	emits: ['update:range'],
	props: {
		range: [Object, String],
	},
	setup (props) {

		return {}
	}
}
</script>

<style lang="scss">
.m-range {
	$self: &;
	box-sizing: border-box;
	max-width: 480px !important;
	background-color: #fff;
	position: relative;
	padding: 32px;
	width: 100%;
	@keyframes show_fade { from { opacity: 0; } to { opacity: 1; }}
	
	@include media('<=xxs') {
		padding: 20px;
	}

	&__close {
		position: absolute;
		top: 15px; right: 15px;
	}

	&__title {
		font-family: "RM", sans-serif;
		text-align: center;
		margin-bottom: 32px;
		line-height: 1.2;
		color: #4d4d4d;
		font-size: 24px;
	}

	&__datepicker {
		display: flex;
		margin: 0 auto;

		.q-date__view {
			padding: 0;
		}

		.q-date__navigation {
			font-family: "RB", sans-serif;
			color: $accent;
		}
	}

	&__button.button {
		width: 100%;
		justify-content: center;
	}
}	
</style>