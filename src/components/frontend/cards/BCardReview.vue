<template>
<div :class="['card-rw', cls]">
	<h3 class="card-rw__title" v-html="title"></h3>
	<b-rating cls="card-rw__rating" :rate="rate" />
	<div class="card-rw__row" v-for="(row, index) in rows" :key="index">
		<h4>{{ row.title }}</h4>
		<div class="card-rw__r-text" v-html="row.text"></div>
	</div>
	<button 
		v-if="aprove" 
		class="card-rw__reaction card-rw__reaction_advise" 
		@click.prevent="clickOnButton"
	>Рекомендую</button>
	<button 
		v-else 
		class="card-rw__reaction card-rw__reaction_condemn" 
		@click.prevent="clickOnButton"
	>Не рекомендую</button>
</div>
</template>

<script>
import BRating from "components/frontend/BRating.vue";

export default {
	name: 'BCardReview',
	components: { BRating },
	props: {
		cls: String,
		rate: Number,
		title: String,
		aprove: Boolean,
		rows: Array
	},
	emits: ['click'],
	setup (props, { emit }) {
		const clickOnButton = (e) => emit('click', e);
		return { clickOnButton }
	}
}
</script>

<style lang="scss">
.card-rw {
	$self: &;
	padding: 16px;
	box-sizing: border-box;
	border: 1px solid #dedede;
	border-radius: 4px;
	display: flex;
	flex-flow: column nowrap;
	height: auto;

	&__title {
		font-family: "RM", sans-serif;
		font-size: 20px;
		margin-bottom: 12px;
		line-height: 1.2;
	}
	
	&__rating {
		margin-bottom: 12px;
	}
	
	&__row {
		margin-bottom: 8px;
		
		h4 {
			font-family: "RM", sans-serif;
			line-height: 1.2;
			font-size: 12px;
			color: #999;
			margin-bottom: 4px;
		}
	}

	&__r-text {

	}
	
	&__reaction {
		@extend %reset-button;
		font-family: "RM", sans-serif;
		font-size: 16px;
		display: flex;
		align-items: center;
		margin-top: auto;

		&::before {
			display: block;
			content: '';
			width: 20px;
			height: 20px;
			background-color: transparent;
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
			margin-right: 8px;
		}

		&_advise {
			color: #8ED15A;

			&::before {
				background-image: url('#{$images-path}ic-smile-happy.svg');
			}
		}
		
		&_condemn {
			color: #EC0000;

			&::before {
				background-image: url('#{$images-path}ic-smile-sad.svg');
			}
		}
	}
}	
</style>