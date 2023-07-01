<template>
<section :class="['feed', cls]">
	<div class="feed__inner container">
		<b-title cls="feed__title" :title="title" :link_url="title_link_url" />
		<div v-if="hasSlot('tags')" class="feed__tags"><slot name="tags"/></div>
		<div class="feed__slider swiper" ref="swiperRef">
			<div class="swiper-wrapper">
				<slot name="slides"/>
			</div>
			<b-navi-buttons
				cls="feed__navigation"
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
	name: 'BSectionFeed',
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
.feed {
	$self: &;

	&__inner {

	}

	&__title {
		margin-bottom: 24px;
	}
	
	&__tags {
		margin-bottom: 18px;
		display: flex;
		flex-flow: row wrap;
		margin-left: -8px;
		margin-right: -8px;
		
		@include media('<=md') {
			margin-left: -4px;
			margin-right: -4px;
		}
	}

	&__tag {
		margin: 0 8px 16px;
		
		@include media('<=md') {
			margin: 0 4px 8px;
		}
	}

	&__slider {
		padding-bottom: 140px;
		
		@include media('<=xs') {
			padding-bottom: 100px;
		}
		
		@include media('<=xxs') {
			padding-bottom: 60px;
			// margin-bottom: -20px;
		}
	
		.swiper-wrapper {
			z-index: 2;
		}
	}
	&__slide {
		height: auto;

		&_last {
			box-sizing: border-box;
			background-color: $primary;
			border-radius: 4px;
			padding: 50px 24px;
			text-decoration: none;
			text-transform: uppercase;
			font-family: "RB", sans-serif;
			font-size: 40px;
			color: #fff;
			
			@include media('<=xlg') {
				font-size: 36px;
			}
			
			@include media('<=md') {
				font-size: 32px;
			}
			
			@include media('<=xxs') {
				font-size: 28px;
			}

			&::after {
				display: block;
				content: '';
				width: 80px;
				height: 70px;
				background: url('#{$images-path}icons-sprite.svg#icon-arr-right-view-white') center / contain no-repeat transparent;
				
				@include media('<=xxs') {
					width: 70px;
					height: 60px;
				}
			}

			span {
				display: block;
				margin-bottom: 16px;
			}
		}
	}

	&__navigation {
		position: absolute;
		bottom: 80px;
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