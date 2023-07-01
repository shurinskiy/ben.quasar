<template>
<div class="intro">
	<div class="intro__inner container">
		<div class="intro__side">
			<div class="intro__tags" v-if="hasSlot('tags')">
				<slot name="tags"/>
			</div>
			<h1 class="intro__title title" v-html="title"></h1>
			<div class="intro__info" v-if="info">
				<div class="intro__rating">
					<b-rating :rate="info.rate" cls="intro__rating-stars"/>
					<div class="intro__rating-count">Рейтинг {{ info.rate }}</div>
				</div>
				<a class="intro__address" :href="info.address.href">{{ info.address.text }}</a>
			</div>
			<div class="intro__text" v-html="text"></div>
			<b-signature
				cls="intro__sign"
				v-if="avatar"
				:url="avatar.link"
				:img="avatar.img"
				:text="avatar.name"
			/>
			<div class="intro__price" v-if="price">{{ price }}</div>
			<b-bar 
				class="intro__bar" 
				:buttons="barButtons"
				:share="share"
				@button-click="$emit('barButtonClick', $event)"
				ref="bar"
			/>
		</div>
		<div class="intro__image">
			<img :src="imageUrl" alt="">
			<div class="intro__labels" v-if="labels">
				<span 
					class="intro__label" 
					v-for="(label, index) in labels" 
					:key="index"
				>{{ label }}</span>
			</div>
		</div>
	</div>
	<div class="intro__bottom container" v-if="bottom">
		<div class="intro__b-inner">
			<div
				v-for="(item, index) in bottom" :key="index"
				:class="['intro__b-block', item.icon && `intro__b-block_${item.icon}`]"
			>
				<span>{{ item.title }}</span>
				<a :href="item.href">{{ item.link }}</a>
			</div>
		</div>
	</div>
	<b-bar 
		class='intro__panel'
		:opened="opened"
		:showed="showed"
		:buttons="barButtons"
		:share="share"
		@button-click="$emit('barButtonClick', $event)"
		@click="opened = !opened"
		panel
		ref="panel"
	/>
</div>
</template>

<script>
import { ref, onMounted } from 'vue'
import BSignature from "components/frontend/BSignature.vue";
import BRating from "components/frontend/BRating.vue";
import BBar from "components/frontend/BBar.vue";

export default {
	name: 'BSectionIntro',
	components: { BRating, BBar, BSignature },
	emits: ['barButtonClick'],
	props: {
		title: String,
		imageUrl: String,
		info: Object,
		avatar: Object,
		bottom: Array,
		text: String,
		price: [String, Number],
		labels: Array,
		barButtons: Array,
		share: Array
	},
	setup (props, {slots}) {
		const bar = ref(null);
		const panel = ref(null);
		const showed = ref(false);
		const opened = ref(false);
		const hasSlot = (name) => !!slots[name];

		onMounted(() => {
			const classToggle = (bar) => {
				const box = bar.value?.$el;
				showed.value = box && box.getBoundingClientRect().bottom < 0;
			};
			
			window.addEventListener('scroll', () => classToggle(bar));
			classToggle(bar);

			['click','touchstart'].forEach(event => {
				document.addEventListener(event, (e) => {
					const isself = e.target.closest(`.${panel.value?.$el?.className.split(' ')[0]}`);

					if(opened.value && !isself) {
						e.preventDefault();
						opened.value = false;
					}
				});
			}, { passive: false });

		});

		return {
			bar,
			panel,
			showed,
			opened,
			hasSlot
		}
	}
}
</script>

<style lang="scss">
.intro {
	$self: &;
	@keyframes show_fade { from { opacity: 0; } to { opacity: 1; }}
	
	&__inner {
		margin-bottom: 32px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 24px;

		@include media('<=sm') {
			display: block;
		}
	}

	&__side {
		grid-column: span 1;
		display: flex;
		flex-flow: column nowrap;

		@include media('<=sm') {
			margin-bottom: 16px;
		}
	}

	&__tags {
		margin-bottom: 16px;

		.tag {
			margin-bottom: 8px;

			&:not(:last-child) {
				margin-right: 9px;
			}
		}
	}

	&__title {
		font-family: "RB", sans-serif;
		color: #4d4d4d;
		font-size: 32px;
		margin-bottom: 24px;
		line-height: 1.2;
		letter-spacing: normal;

		@include media('<=md') {
			font-size: 28px;
		}
		
		@include media('<=xs') {
			font-size: 24px;
		}
	}

	&__info {
		display: flex;
		margin-bottom: 24px;

		@include media('<=xxs') {
			display: block;			
		}
	}

	&__rating {
		display: flex;
		align-items: center;
		margin-right: 40px;

		@include media('<=xxs') {
			margin: 0 0 16px;			
		}
	}

	&__rating-stars {
		margin-right: 20px;
	}
	
	&__rating-count {
		padding-top: 4px;
		font-family: "RM", sans-serif;
		font-size: 14px;
		line-height: 1.1;
	}

	&__address {
		color: #000;
		text-decoration: none;
		display: flex;
		align-items: center;
		
		&::before {
			display: block;
			content: '';
			width: 14px;
			height: 18px;
			background: url('#{$images-path}icons-sprite.svg#icon-geo-view-orange') center / contain no-repeat transparent;
			flex-shrink: 0;
			margin-right: 16px;
		}
	}

	&__text {
		margin-bottom: auto;
		line-height: 1.5;
		
		@include media('<=xxxs') {
			font-size: 14px;
		}
	}

	&__sign {
		margin-bottom: 12px;
	}

	&__price {
		color: $accent;
		font-family: "RB", sans-serif;
		font-size: 24px;
		margin-bottom: 24px;
	}

	&__bar {
		width: 100%;
		max-width: 530px;

		@include media('<=sm') {
			display: none;
		}
	}

	&__image {
		grid-column: span 1;
		position: relative;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 4px;
		}
	}

	&__labels {
		position: absolute;
		left: 8px;
		top: 8px;
		width: calc(100% - 16px);
	}

	&__label {
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

	&__bottom {
		margin-bottom: 32px;
	}
	
	&__b-inner {
		box-sizing: border-box;
		background-color: #F6F7F8;
		padding: 0 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		
		@include media('<=lg') {
			padding: 0 40px;
		}
		
		@include media('<=md') {
			padding: 0;
		}
		
		@include media('<=sm') {
			flex-flow: column nowrap;
			align-items: flex-start;
		}
		
		@include media('<=xxs') {
			padding: 0;
		}
	}

	&__b-block {
		color: #000;
		// flex-grow: 1;
		// max-width: 50%;
		padding: 16px 20px 16px 50px;
		background-color: transparent;
		background-repeat: no-repeat;
		background-position: center left 16px;

		&_location {
			background-image: url('#{$images-path}icons-sprite.svg#icon-geo-view-orange');
			background-size: 16px 22px;
		}
		
		&_date {
			background-image: url('#{$images-path}icons-sprite.svg#icon-timer-view-orange');
			background-size: 20px 20px;
		}

		span {
			display: block;
			margin-bottom: 4px;
			font-family: "RB", sans-serif;
			font-size: 20px;
			
			@include media('<=xxs') {
				font-size: 16px;
			}
		}
		
		a {
			display: block;
			color: inherit;
			
			@include media('<=xxs') {
				font-size: 14px;
			}
		}
			
		@include media('<=xxs') {
			padding: 16px 20px 16px 50px;
		}
	}

	&__panel {
		display: none;
		box-sizing: border-box;
		animation: show_fade 0.4s;
		position: fixed;
		z-index: 2;
		max-width: 550px;
		width: 100%;
		top: 105px;
		right: calc((100vw - 1280px) / 2);

		&.showed {
			display: flex;
		}

		@include media('<=1320px') {
			right: 20px;
		}

		@include media('<=md') {
			top: 90px;
		}

		@include media('<=sm') {
			display: flex;
			transition: right 0.2s linear;
			position: fixed;
			z-index: 10;
			width: 100%;
			max-width: 250px;
			right: -250px;
			top: 50%;
			transform: translateY(-50%);
				
			&.opened {
				right: 0;
			}
		}
	}
}	
</style>