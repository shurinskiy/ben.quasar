<template>
	<div class="carousel">
		<q-btn class="carousel__close" icon="close" flat round dense v-close-popup />
		<img
			v-for="(slide, index) in slides" 
			:key="index"
			:src="slide"
			:class="{ 'active':index == active }"
			@click="move(1)"
		/>
		<b-navi-buttons
			cls="carousel__navigation"
			@click-navi="naviHandler"
		/>

	</div>
</template>

<script>
import { ref } from 'vue';
import BNaviButtons from "components/frontend/BNaviButtons.vue";

export default {
	name: 'BCarousel',
	components: { BNaviButtons },
	props: {
		slides: Array,
		current: Number
	},
	setup (props) {
		const active = ref(props.current);

		const move = (direction = 1) => {
			active.value += direction;

			if (active.value < 0) { 
				active.value = props.slides.length - 1; 
			}
			else if (active.value >= props.slides.length) { 
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
.carousel {
	width: 100%;
	position: relative;
	background-color: #fff;
	max-width: 800px !important;
	overflow: visible !important;
	@keyframes show_fade {from { opacity: 0; } to { opacity: 1; }}

	img {
		border-radius: 4px;
		min-height: 400px;
		width: 100%;
		object-fit: cover;
		display: none;
		animation: show_fade 0.3s;

		&.active { display: block; }
	}

	&__close {
		color: #fff;
		font-size: 1.1em;
		position: absolute;
		top: 15px; right: 15px;
		z-index: 1;
	}

	&__navigation {
		
		button {
			margin: 0;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			&.navi-bt__prev {
				left: -12px;
			}

			&.navi-bt__next {
				right: -12px;
			}
		}
	}
}	
</style>