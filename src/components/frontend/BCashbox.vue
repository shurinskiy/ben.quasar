<template>
	<div :class="['cashbox', cls]">
		<div class="cashbox__inner">
			<h3 class="cashbox__title" v-html="title"></h3>
			<div class="cashbox__date" v-html="date"></div>
			<div class="cashbox__bar">
				<div class="cashbox__price">{{ price }}</div>
				<div class="cashbox__controls">
					<button 
						class="cashbox__control cashbox__control_remove"
						@click="setCount(-1)"
					></button>
					<div class="cashbox__count">{{ count }}</div>
					<button 
						class="cashbox__control cashbox__control_add"
						@click="setCount(1)"
					></button>
				</div>
			</div>
			<b-button class="cashbox__button button_noshadow">Выбрать билеты</b-button>
		</div>
	</div>
</template>

<script>
import BButton from 'components/frontend/BButton.vue';

export default {
	name: 'BCashbox',
	emits: ['update:count'],
	components: { BButton },
	props: {
		cls: String,
		date: String,
		title: String,
		price: String,
		max: Number,
		count: {
			type: Number,
			default: 1
		}
	},
	setup (props, {emit}) {
		const setCount = (num) => emit('update:count', Math.min(Math.max(1, props.count + num), props.max));
		return { setCount }
	}
}
</script>

<style lang="scss">
.cashbox {
	$self: &;
	box-sizing: border-box;
	
	&_page {
		padding: 40px 20px;
		width: 600px;
		max-width: calc(100% - 40px);
		margin: 0 auto 48px;
		background-color: #F6F7F8;

		#{$self}__title {
	
			@include media('<=md') {
				font-size: 28px;
			}
			
			@include media('<=xs') {
				font-size: 24px;
			}
		}

		#{$self}__price {
						
			@include media('<=xs') {
				font-size: 20px;
			}
		}
		
		@include media('<=xs') {
			max-width: calc(100% - 30px);
		}
	}

	&__inner {
		max-width: 400px;
		margin: 0 auto;
		width: 100%;
	}

	&__title {
		line-height: 1.3;
		color: #4D4D4D;
		font-family: "RB", sans-serif;
		margin-bottom: 20px;
		text-align: center;
		font-size: 32px;
	}
	
	&__date {
		font-family: "RB", sans-serif;
		font-size: 20px;
		color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 24px;

		&::before {
			display: block;
			content: '';
			flex-shrink: 0;
			height: 20px;
			width: 20px;
			background: url('#{$images-path}icons-sprite.svg#icon-timer-view-orange') center / contain no-repeat transparent;
			margin-right: 12px;
		}
	}

	&__bar {
		margin-bottom: 32px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__price {
		font-family: "RB", sans-serif;
		font-size: 24px;
		color: $accent;
		margin-right: 20px;
	}

	&__controls {
		display: flex;
		align-items: center;
	}

	&__control {
		@extend %reset-button;
		display: block;
		height: 35px;
		width: 35px;
		flex-shrink: 0;
		border-radius: 50%;
		border: 1px solid #dedede;
		background-repeat: no-repeat;
		background-position: center;
		background-color: #fff;
		cursor: pointer;

		&_add {
			background-image: url('#{$images-path}icons-sprite.svg#icon-plus-view-orange');
			background-size: 17px 17px;
		}
		
		&_remove {
			background-image: url('#{$images-path}icons-sprite.svg#icon-minus-view-orange');
			background-size: 17px 3px;
		}
	}

	&__count {
		font-family: "RB", sans-serif;
		font-size: 24px;
		padding: 0 16px;
		
		@include media('<=xs') {
			padding: 0 8px;
			font-size: 20px;
		}
	}

	&__button {
		width: 100%;
		justify-content: center;		
	}
}	
</style>