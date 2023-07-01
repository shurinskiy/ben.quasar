<template>
<div :class="['card-ex', cls]" ref="cardRef">
	<div class="card-ex__body">
		<a class="card-ex__image" :href="imageUrl">
			<img :src="image" alt="">
			<div class="card-ex__i-labels">
				<span 
					class="card-ex__i-label"
					v-for="(label, index) in labels" 
					:key="index"
				>{{ label }}</span>
			</div>
		</a>
		<div class="card-ex__content">
			<div class="card-ex__tags">
				<b-tag
					v-for="(tag, index) in tags" 
					:key="index"
					:href="tag.href"
					cls="tag_fade tag_small"
				>{{ tag.name }}</b-tag>
			</div>
			<h3 class="card-ex__title" v-html="title"></h3>
			<div class="card-ex__range">
				<b-rating cls="card-ex__rating rating_small" :rate="rate" />
				<div class="card-ex__r-reviews" v-html="reviews"></div>
			</div>
			<div class="card-ex__small">{{ address }}</div>
			<div class="card-ex__hidden" v-html="text"></div>
		</div>
	</div>
</div>			
</template>

<script>
import { ref, onMounted } from 'vue'
import BRating from "components/frontend/BRating.vue";
import enquire from 'enquire.js';
import BTag from "components/frontend/BTag.vue";

export default {
	name: 'BCardExpert',
	props: {
		cls: String,
		imageUrl: String,
		image: String,
		labels: Array,
		tags: Array,
		title: String,
		reviews: String,
		rate: Number,
		address: String,
		text: String
	},
	components: { BRating, BTag },
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
	
		return {
			cardRef,
		}
	}
}
</script>

<style lang="scss">
.card-ex {
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
			top: 0px;
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
		height: 200px;
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

	&__tags {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		margin: 0 -4px;

		a {
			margin: 0 4px 8px;
		}
	}

	&__title {
		color: #4d4d4d;
		font-family: "RM", sans-serif;
		font-size: 20px;
		line-height: 1.5;
		margin-bottom: 5px;
		
		@include media('<=xs') {
			font-size: 18px;
			line-height: 1.4;
		}
	}

	&__range {
		display: flex;
		margin-bottom: 15px;
	}

	&__rating {
		margin-right: 10px;
	}

	&__r-reviews {
		font-family: "RM", sans-serif;
		font-size: 12px;
		color: #999;
		align-self: flex-end;
	}

	&__small {
		font-family: "RB", sans-serif;
		font-size: 12px;
		color: $primary;
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