<template>
<section :class="['reviews', cls]">
	<div class="reviews__inner container">
		<b-title cls="reviews__title" :title="title" :link_url="title_link_url" :link_text="title_link_text" />
		<div class="reviews__slider swiper" ref="swiperRef">
			<div class="swiper-wrapper">
				<slot name="slides"/>
			</div>
			<b-navi-buttons
				cls="reviews__navigation"
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
	name: 'BSectionReviews',
	components: { BTitle, BNaviButtons },
	props: {
		cls: {
			type: String
		},
		title: {
			type: String
		},
		title_link_url: {
			type: String
		},
		title_link_text: {
			type: String
		},
	},
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
					780: {
						spaceBetween: 16,
						slidesPerView: 3
					},
					1100: {
						spaceBetween: 16,
						slidesPerView: 4
					},
					1280: {
						spaceBetween: 24,
						slidesPerView: 4
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
.reviews {
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