<template>
	<div :class="['video', cls]" :style="`background-image: url('${background}')`">
		<iframe 
			class="video__frame" 
			:src="source" 
			frameborder="0" 
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
			allowfullscreen></iframe>
		<span v-if="!source" class="video__play" @click="playHandler" ></span>
	</div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
	name: 'BVideo',
	emits: ['click'],
	props: {
		cls: String,
		url: String,
		background: String,
		slide: Boolean,
		playing: {
			type: Boolean,
			default: undefined
		}
	},
	setup (props, { emit }) {
		const play = ref(false);
		const source = computed(() => (props.playing || play.value) ? props.url : '');
		const playHandler = (e) => (props.playing !== undefined) ? emit('click', e) : play.value = true;

		return { 
			source,
			playHandler
		}
	}
}
</script>

<style lang="scss">
.video {
	$self: &;
	@include aspect-ratio(1.777, 1);
	border-radius: 4px;
	overflow: hidden;
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	@keyframes show_fade { from { opacity: 0; } to { opacity: 1; }}
	

	iframe#{&}__frame {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}

	&__play {
		@extend %reset-button;
		display: block;
		position: absolute;
		z-index: 3;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.05);
		transition: background-color 0.3s ease;
		animation: show_fade 0.4s;
		
		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 110px;
			height: 75px;
			border-radius: 25% / 25%;
			background: url('#{$images-path}icons-sprite.svg#icon-play-view-white') right 45% center / 28px 31px no-repeat #d80000;
			transition: background-color 0.3s ease;
			
			@include media('<=xs') {
				width: 90px;
				height: 62px;
				background-size: 25px 25px;
			}
		}

		&:hover::before {
			background-color: #f00;
		}

		&:hover {
			background-color: transparent;
		}
	}
}	
</style>
