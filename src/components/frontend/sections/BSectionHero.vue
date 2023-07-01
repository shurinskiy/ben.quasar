<template>
<section class="hero">
	<div class="hero__slider swiper" ref="swiperRef">
		<div class="swiper-wrapper"><slot/></div>
		<b-navi-buttons
			cls="hero__navi container"
			@click-navi="naviHandler"
			:prev="prevDisabled"
			:next="nextDisabled"
		/>
	</div>
</section>
</template>

<script>
import { ref, onMounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/css'
import BNaviButtons from "components/frontend/BNaviButtons.vue";

export default {
	name: 'BSwiperHero',
	components: { BNaviButtons },
	setup(props, { emit }) {
		const swiperRef = ref();
		let swiper;
		let prevDisabled = ref(true);
		let nextDisabled = ref(false);

		const naviHandler = (e) => swiper[(e.target.className.includes('prev') ? 'slidePrev' : 'slideNext')]();

		onMounted(() => {
			swiper = new Swiper(swiperRef.value, {
				slidesPerView: 1,
				on: {
					slideChange: (el) => {
						prevDisabled.value = el.isBeginning;
						nextDisabled.value = el.isEnd;
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
.hero {
	$self: &;
	margin-bottom: 50px;

	&__slider {

	}

	&__slide {
		height: 475px;
		
		@include media('<=xlg') {
			height: 350px;
		}
		
		@include media('<=md') {
			height: 280px;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&__navi {
		position: absolute;
		width: 100%;
		z-index: 1;
		left: 50%;
		bottom: 24px;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
}	
</style>