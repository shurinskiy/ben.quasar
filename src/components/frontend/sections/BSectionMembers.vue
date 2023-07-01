<template>
<section :class="['members', cls]">
	<div class="members__inner container">
		<h2 class="members__title" v-if="title" v-html="title"></h2>
		<div class="members__text" v-if="text" v-html="text"></div>
		<div class="members__cards">
			<div class="members__card card-mr" 
				:class="{ 'active': index == active }"
				v-for="(card, index) in cards" 
				@click="active = index"
				:key="index"
			>
				<div class="card-mr__front" :style="`background: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)),url('${card.front.image}') center top/cover no-repeat transparent`">
					<h3 class="card-mr__front-title" v-html="card.front.title"></h3>
					<div class="card-mr__front-text" v-html="card.front.text"></div>
				</div>
				<div class="card-mr__back">
					<h3 class="card-mr__back-title" v-html="card.back.title"></h3>
					<div class="card-mr__back-text" v-html="card.back.text"></div>
					<div class="card-mr__back-note" v-html="card.back.note"></div>
					<a class="card-mr__back-link" :href="card.back.link.href">
						{{ card.back.link.name }}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

</template>

<script>
import { ref } from 'vue'

export default {
	name: 'BSectionMembers',
	props: {
		cls: String,
		title: String,
		text: String,
		cards: Array
	},
	setup (props) {
		const active = ref(0);
		return { active }
	}
}
</script>

<style lang="scss">
.members {
	$self: &;
	box-sizing: border-box;
	margin-bottom: 32px;

	&__inner {

	}

	&__title {
		font-family: "RB", sans-serif;
		font-size: 32px;
		line-height: 1.2;
		letter-spacing: normal;
		color: #4d4d4d;
		margin-bottom: 24px;
		
		@include media('<=md') {
			font-size: 28px;
		}
		
		@include media('<=xs') {
			font-size: 24px;
		}
	}

	&__text {
		font-size: 18px;
		line-height: 1.4;
		color: #4d4d4d;
		margin-bottom: 32px;
	}

	&__cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 24px;
		
		@include media('<=lg') {
			grid-template-columns: repeat(24, 1fr);
			grid-gap: 16px;
		}
		
		@include media('<=md') {
			grid-template-columns: repeat(3, 1fr);
		}
		
		@include media('<=sm') {
			grid-template-columns: repeat(2, 1fr);
		}
		
		@include media('<=xs') {
			grid-template-columns: 1fr;
			max-width: 430px;
			margin-left: auto;
			margin-right: auto;
		}
	}
	
	&__card {
		width: 100%;
		grid-column: 1 span;
		
		@include media('<=lg') {
			grid-column: 7 span;
		}
			
		@include media('<=md') {
			grid-column: 1 span;
		}
		
		&.active {
			grid-column: 2 span;
			
			@include media('<=lg') {
				grid-column: 10 span;
			}
			
			@include media('<=md') {
				grid-column: 1 span;
			}
		}
	}
}	

.card-mr {
	$self: &;
	box-sizing: border-box;
	position: relative;
	overflow: hidden;
	height: 440px;
	
	@include media('<=xs') {
		height: auto;
		min-height: 440px;
	}

	&.active {
		#{$self}__front {
			display: none;
		}

		#{$self}__back {
			opacity: 1;
		}
	}
	
	&:hover {
		#{$self}__front-text {
			max-height: 200px;
		}
	}

	&__front {
		box-sizing: border-box;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		background-color: transparent;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		border-radius: 4px;
		padding: 24px 16px;
		color: #fff;
		display: flex;
		flex-flow: column nowrap;
		cursor: pointer;

		&::after {
			display: block;
			content: '';
			width: 40px;
			height: 36px;
			background: url('#{$images-path}icons-sprite.svg#icon-arr-right-view-white') center / auto no-repeat transparent;
			flex-shrink: 0;
		}
	}

	&__front-title {
		font-family: "RB", sans-serif;
		text-transform: uppercase;
		font-size: 24px;
		line-height: 1.2;
		margin: auto 0 16px;
	}

	&__front-text {
		box-sizing: border-box;
		transition: max-height 0.8s;
		margin-bottom: 12px;
		line-height: 1.5;
		overflow: hidden;
		max-height: 0;
	}

	&__back {
		box-sizing: border-box;
		opacity: 0;
		transition: opacity 0.5s ease-out;
		display: flex;
		flex-flow: column nowrap;
		height: 100%;
		padding: 24px;
		border: 1px solid #dedede;
		border-radius: 4px;
		
		@include media('<=md') {
			padding: 24px 16px 16px;
		}
	}

	&__back-title {
		font-family: "RB", sans-serif;
		text-transform: uppercase;
		font-size: 24px;
		line-height: 1.2;
		color: $accent;
		display: flex;
		align-items: center;
		margin-bottom: 32px;
		
		@include media('<=md') {
			font-size: 18px;
		}

		&::before {
			margin-right: 16px;
			display: block;
			content: '';
			width: 40px;
			height: 36px;
			background: url('#{$images-path}icons-sprite.svg#icon-arr-right-view-orange') center / contain no-repeat transparent;
			flex-shrink: 0;
			
			@include media('<=md') {
				height: 30px;
				width: 32px;
			}
		}
	}

	&__back-text {

		ul {
			margin-bottom: 24px;
			line-height: 1.3;

			li {
				padding-left: 15px;
				position: relative;
				margin-bottom: 8px;

				&::before {
					display: block;
					content: '\02022';
					color: #4d4d4d;
					position: absolute;
					left: 0;
					top: 0;
				}
			}
		}

		@include media('<=md') {
			font-size: 15px;
		}
	}

	&__back-note {
		font-family: "RB", sans-serif;
		margin-bottom: 16px;
		font-size: 20px;
		color: $primary;
		
		@include media('<=md') {
			font-size: 16px;
		}
	}
	
	&__back-link {
		font-family: "RB", sans-serif;
		text-align: center;
		margin-top: auto;
		color: $accent;
	}
}	
</style>
