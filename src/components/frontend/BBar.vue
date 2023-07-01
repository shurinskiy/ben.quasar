<template>
	<div :class="['bar', cls, { 'bar_panel': panel, 'showed': showed, 'opened': opened}]">
		<button v-if="panel" class="bar__toggle" @click.prevent="$emit('click')"></button>
		<div class="bar__buttons">
	
			<template v-for="(button, index) in barButtons" :key="index">
				<a
					v-if="button.link"
					:class="['bar__button button', button.cls]"
					:href="button.link"
				>{{ button.title }}</a>
	
				<button
					v-else
					:class="['bar__button button', button.cls, button.mod && `bar__button_${button.mod}` ]"
					@click.prevent="$emit('buttonClick', index)"
					:disabled="disabled"
				>{{ button.title }}</button>
			</template>
	
		</div>
		<b-share cls="bar__share" :links="share" v-if="share"/>
	</div>
</template>

<script>
import { ref } from 'vue'
import BShare from "components/frontend/BShare.vue";

export default {
	name: 'BBar',
	emits: ['click','buttonClick'],
	components: { BShare },
	props: {
		cls: String,
		panel: Boolean,
		showed: Boolean,
		opened: Boolean,
		disabled: Boolean,
		buttons: Array,
		share: Array
	},
	setup (props) {
		const barButtons = ref(props.buttons?.slice(0, 2));
		return { barButtons }
	}
}
</script>

<style lang="scss">
.bar {
	$self: &;
	display: flex;
	background-color: #fff;
	
	&_panel {
		padding: 8px 16px;
		border-radius: 4px;
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.16);

		@include media('<=sm') {
			flex-flow: column nowrap;
			box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
			padding: 16px;
			border-radius: 4px 0 0 4px;
		
			#{$self}__buttons {
				flex-flow: column nowrap;
				margin: 0;
			}
	
			#{$self}__share {
				margin: 0 auto;
			}
	
			#{$self}__button.button {
				max-width: none;
				margin: 0 0 10px;
			}

			#{$self}__toggle {
				display: block;
			}
		}
	}

	&__buttons {
		display: flex;
		margin-right: 24px;
		flex-grow: 1;
	}

	&__button {
		box-sizing: border-box;
		justify-content: center;
		flex-shrink: 1;
		width: 100%;
		max-width: 185px;

		&:not(:last-child) {
			margin-right: 24px;
		}

		&_long {
			width: 100%;
			max-width: 300px;
		}

		&:disabled {
			opacity: 1 !important;
			cursor: default !important;
			background-color: #AEB1CF !important;
		}
	}

	&__share {

	}

	&__toggle {
		@extend %reset-button;
		display: none;
		position: absolute;
		top: 50%;
		left: 0;
		z-index: 2;
		transform: translate(-100%,-50%);
		width: 40px;
		height: 50px;
		box-shadow: -7px 0 7px rgba(0,0,0,.1);
		border-radius: 100px 0 0 100px;
		background: url('#{$images-path}icons-sprite.svg#icon-side-view-blue') left 20px center/6px 24px no-repeat #fff;
	}
}	
</style>