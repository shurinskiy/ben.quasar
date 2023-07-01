<template>
<section class="partners">
	<div class="partners__inner container">
		<b-title cls="partners__title" :title="title" />
		<div class="partners__slider swiper" ref="swiperRef">
			<div class="swiper-wrapper"><slot/></div>
			<b-navi-buttons
				cls="partners__navi container"
				@click="naviHandler"
				:prev="prevDisabled"
				:next="nextDisabled"
			/>
		</div>
	</div>
</section>
</template>

<script>
import { ref, onMounted } from 'vue'
import Swiper, { Grid } from 'swiper'
import 'swiper/css'
import BNaviButtons from "components/frontend/BNaviButtons.vue";
import BTitle from "components/frontend/BTitle.vue";

export default {
	name: 'BSectionPartners',
	props: ['title'],
	components: { BNaviButtons, BTitle },
	setup(props, { emit }) {
		const swiperRef = ref();
		let swiper;
		let prevDisabled = ref(true);
		let nextDisabled = ref(false);
		const naviHandler = (e) => swiper[(e.target.className.includes('prev') ? 'slidePrev' : 'slideNext')]();

 		onMounted(() => {
			swiper = new Swiper(swiperRef.value, {
				modules: [ Grid ],
				grid: { 
					rows: 2
				},
				on: {
					slideChange: (el) => {
						prevDisabled.value = el.isBeginning;
						nextDisabled.value = el.isEnd;
					}
				},
				breakpoints: {
					0: {
						slidesPerView: 1.3,
					},
					480: {
						slidesPerView: 1.5,
					},
					640: {
						slidesPerView: 2,
					},
					780: {
						slidesPerView: 3,
					},
					1100: {
						slidesPerView: 4,
					}
				}
			});
		});

		return {
			swiperRef,
			naviHandler,
			prevDisabled,
			nextDisabled
		}
	}
}
</script>

<style lang="scss">
.partners {
	$self: &;

	&__inner {

	}

	&__title {

	}

	&__slider {
		box-sizing: border-box;
		height: 440px;
		padding-bottom: 120px;
		
		.swiper-wrapper {
			display: flex;
			flex-flow: column wrap;
		}
		
		@include media('<=xs') {
			padding-bottom: 50px;
		}
	}

	&__slide {
		box-sizing: border-box;
		height: 50% !important;
		display: flex;
		justify-content: center;
		align-items: center;
		filter: saturate(0%) brightness(120%);
		transition: filter 0.5s;
		padding: 0 20px;

		&:hover {
			filter: none;
		}
	}

	&__navi {
		position: absolute;
		bottom: 60px;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		@include media('<=xs') {
			display: none;
		}
	}

	&__prev {

	}
	
	&__next {

	}
}	
</style>