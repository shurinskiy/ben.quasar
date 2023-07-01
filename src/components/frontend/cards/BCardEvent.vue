<template>
<div :class="['card-ev', cls]" ref="cardRef">
	<div class="card-ev__body">
		<a class="card-ev__image" :href="imageUrl">
			<img :src="image" alt="">
			<div class="card-ev__i-labels">
				<span 
					class="card-ev__i-label"
					v-for="(label, index) in labels" 
					:key="index"
				>{{ label }}</span>
			</div>
		</a>
		<div class="card-ev__content">
			<div class="card-ev__small card-ev__small_top">{{ date }}</div>
			<h3 class="card-ev__title" v-html="title"></h3>
			<div class="card-ev__price">{{ price }}</div>
			<b-signature
				cls="card-ev__sign"
				:url="nameUrl"
				:img="nameAvatar"
				:text="name"
			/>
			<div class="card-ev__hidden">
				<div class="card-ev__h-text" v-html="text"></div>
				<div class="card-ev__small">{{ address }}</div>
			</div>
		</div>
	</div>
</div>			
</template>

<script>
import { ref, onMounted } from 'vue'
import enquire from 'enquire.js';
import BSignature from "components/frontend/BSignature.vue";

export default {
	name: 'BCardEvent',
	components: { BSignature },
	props: {
		cls: String,
		image: String,
		imageUrl: String,
		labels: Array,
		date: String,
		title: String,
		price: String,
		name: String,
		nameAvatar: String,
		nameUrl: String,
		text: String,
		address: String
	},
	setup () {
		const cardRef = ref(null);
		
		onMounted(() => {
			const mouseOver = (e) => {
				let height = e.target.querySelector(':first-child').offsetHeight - 1;
				e.target.style.height = `${height}px`;
				e.target.classList.add('hover');
			}

			const mouseOut = (e) => {
				e.target.style.height = '';
				e.target.classList.remove('hover');
			}

			enquire.register("screen and (min-width: 480px)", {
				match : function() {
					cardRef.value?.addEventListener('mouseenter', mouseOver);
					cardRef.value?.addEventListener('mouseleave', mouseOut);
				},
				unmatch : function() {
					cardRef.value?.removeEventListener('mouseenter', mouseOver);
					cardRef.value?.removeEventListener('mouseleave', mouseOut);
				}
			});
		});
	
		return { cardRef }
	}
}
</script>

<style lang="scss">
.card-ev {
	$self: &;
	box-sizing: border-box;
	position: relative;

	@keyframes fullHeight {
		from { max-height: 0; }
		to { max-height: 200px; }
	}
	
	&.hover {
		#{$self}__body {
			border-color: $accent;
			position: absolute;
			z-index: 2;
			width: 100%;
			top: 0;
		}

		#{$self}__hidden {
			animation: fullHeight 0.5s;
			animation-fill-mode: forwards;
		}
	}

	&__body {
		box-sizing: border-box;
		border: 1px solid #dedede;
		background-color: #fff;
		border-radius: 4px;
		transition: border-color 0.4s;
	}

	&__image {
		border-radius: 4px 4px 0 0;
		text-decoration: none;
		position: relative;
		overflow: hidden;
		display: block;
		height: 140px;
		margin: -1px -1px 0;

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&__i-labels {
		position: absolute;
		left: 8px;
		top: 8px;
		width: calc(100% - 16px);
	}

	&__i-label {
		box-sizing: border-box;
		display: inline-block;
		max-width: calc(100% - 16px);
		font-family: "RM", sans-serif;
		font-size: 12px;
		line-height: 1.0;
		color: #fff;
		background-color: $accent;
		border-radius: 50px;
		padding: 5px 16px;
		white-space: nowrap;
		margin: 0 8px 8px 0;
	}

	&__content {
		box-sizing: border-box;
		padding: 16px;
	}

	&__small {
		font-family: "RB", sans-serif;
		font-size: 12px;
		color: $primary;

		&_top {
			margin-bottom: 12px;
		}
	}

	&__title {
		color: #4d4d4d;
		font-family: "RM", sans-serif;
		font-size: 20px;
		line-height: 1.5;
		margin-bottom: 12px;
		
		@include media('<=xs') {
			font-size: 18px;
			line-height: 1.4;
		}
	}

	&__price {
		font-family: "RM", sans-serif;
		font-size: 20px;
		line-height: 1.0;
		color: $accent;
		margin-bottom: 15px;
	}

	&__sign {

	}

	&__hidden {

		@include media('>xxs') {
			max-height: 0;
			overflow: hidden;
		}
		
		&::before {
			display: block;
			content: '';
			height: 12px;
			width: 100%;
		}

		p {
			line-height: 1.5;
			
			@include media('<=md') {
				font-size: 15px;
				line-height: 1.4;
			}
			
			@include media('<=xs') {
				font-size: 14px;
			}
		}
	}
}
</style>