<template>
	<div :class="['gallery', cls]">
		<div class="gallery__frame" @click="move(1)">
			<div 
				v-for="(image, index) in images" 
				:class="['gallery__image', {'active':index == active}]"
				:key="index"
			>
				<img :src="image" alt="">
			</div>
		</div>
		<div class="gallery__thumbs">
			<span 
				v-for="(image, index) in images" 
				:class="['gallery__thumb', {'active':index == active}]"
				:style="`background-image: url('${image}')`"
				:key="index"
				@click="active = index"
			></span>
		</div>
		<b-navi-buttons
			cls="gallery__navi"
			@click-navi="naviHandler"
		/>
	</div>
</template>

<script>
import { ref } from 'vue';
import BNaviButtons from "components/frontend/BNaviButtons.vue";

export default {
	name: 'BGallery',
	components: { BNaviButtons },
	props: {
		cls: String,
		images: Array
	},
	setup (props) {
		const active = ref(0);

		const move = (direction = 1) => {
			active.value += direction;

			if (active.value < 0) { 
				active.value = props.images.length - 1; 
			}
			else if (active.value >= props.images.length) { 
				active.value = 0; 
			}
		}

		const naviHandler = (e) => {
			e.target.className.includes('prev') ? move(-1) : move();
		}

		return { 
			naviHandler, 
			active,
			move
		}
	}
}
</script>

<style lang="scss">
.gallery {
	$self: &;
	padding: 0 100px;
	position: relative;
	
	@include media('<=md') {
		padding: 0 60px;
	}
	
	@include media('<=xs') {
		padding: 0px;
	}

	&__frame {
		@include aspect-ratio(1.75, 1);
		overflow: hidden;
		margin-bottom: 12px;
		
		@include media('<=md') {
			@include aspect-ratio(1.4, 1);
		}
		
		@include media('<=xxs') {
			margin-bottom: 8px;
		}
		
		@include media('<=xxxs') {
			@include aspect-ratio(1.2, 1);
		}
	}

	&__image {
		box-sizing: border-box;
		position: absolute;
		top: 0; left: 0;
		height: 100%;
		opacity: 0;
		transition: opacity 0.3s;
		
		&.active {
			opacity: 1;
		}

		img {
			border-radius: 4px;
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&__thumbs {
		display: grid;
		grid-template: auto / repeat(auto-fit, minmax(70px, auto));
		grid-gap: 12px;
		
		@include media('<=md') {
			grid-template: auto / repeat(auto-fit, minmax(55px, auto));
		}
		
		@include media('<=xxs') {
			grid-template: auto / repeat(auto-fit, minmax(45px, auto));
			grid-gap: 8px;
		}
	}

	&__thumb {
		grid-column: 1 span;
		@include aspect-ratio(1, 1);
		position: relative;
		flex-grow: 1;
		border: 1px solid #dedede;
		box-shadow: inset 0px 0px 1px 2px #fff;
		background-size: cover;
		border-radius: 4px;
		cursor: pointer;
		
		@include media('<=xs') {
			box-shadow: inset 0px 0px 1px 1px #fff;
		}
		
		&.active {
			z-index: 1;
			border-color: $accent;
		}
	}

	&__navi {
		.navi-bt {
			&__prev, &__next {
				margin: 0;
				position: absolute;
				top: 40%;
				
				@include media('<=xs') {
					top: 35%;
				}
				
				@include media('<=xxs') {
					top: 30%;
				}
			}

			&__prev {
				left: 20px;
				
				@include media('<=md') {
					left: 0px;
				}
	
				@include media('<=xs') {
					left: -10px;
				}
			}

			&__next {
				right: 20px;
				
				@include media('<=md') {
					right: 0px;
				}
	
				@include media('<=xs') {
					right: -10px;
				}
			}
		}
	}
}	
</style>