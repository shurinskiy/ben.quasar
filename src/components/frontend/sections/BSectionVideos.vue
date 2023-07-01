<template>
<section class="videos">
	<div class="videos__inner container">
		<b-title cls="videos__title" :title="title" />
		<div class="videos__slider swiper" ref="swiperRef">
			<div class="swiper-wrapper">
				<slot name="slides"/>
			</div>
			<b-navi-buttons
				cls="videos__navigation"
				@click-navi="naviHandler"
				:prev="prevDisabled"
				:next="nextDisabled"
			/>
		</div>
	</div>
</section>
</template>

<script>
import { ref, onMounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/css'
import BNaviButtons from "components/frontend/BNaviButtons.vue";
import BTitle from "components/frontend/BTitle.vue";

export default {
	name: 'BSectionVideos',
	props: {
		title: String
	},
	components: { BTitle, BNaviButtons },
	setup (props, { slots }) {
		const swiperRef = ref();
		let swiper;
		let prevDisabled = ref(true);
		let nextDisabled = ref(false);
		
		const hasSlot = (name) => !!slots[name];
		const naviHandler = (e) => swiper[(e.target.className.includes('prev') ? 'slidePrev' : 'slideNext')]();

		onMounted(() => {
			swiper = new Swiper(swiperRef.value, {
				on: {
					slideChange: (el) => {
						prevDisabled.value = el.isBeginning;
						nextDisabled.value = el.isEnd;
					}
				},
				breakpoints: {
					0: {
						spaceBetween: 12,
						slidesPerView: 1.2
					},
					480: {
						spaceBetween: 14,
						slidesPerView: 1.7
					},
					640: {
						spaceBetween: 14,
						slidesPerView: 2
					},
					1100: {
						spaceBetween: 16,
						slidesPerView: 3
					},
					1280: {
						spaceBetween: 24,
						slidesPerView: 3
					}
				}
			});
		});
	
		return {
			hasSlot,
			swiperRef,
			naviHandler,
			prevDisabled,
			nextDisabled
		}
	}
}
</script>

<style lang="scss">
.videos {
	$self: &;
	margin-bottom: 32px;

	&__inner {

	}

	&__title {
		margin-bottom: 24px;
	}

	&__slider {
		padding-bottom: 70px;
		
		@include media('<=xs') {
			padding-bottom: 0;
		}
	
		.swiper-wrapper {
			z-index: 2;
		}
	}

	&__slide {

	}

	&__box {
		margin-bottom: 16px;
	}

	&__text {
		@include media('<=xxs') {
			font-size: 14px;
			line-height: 1.4;
		}
	}

	&__navigation {
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;

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
