<template>
	<div :class="['layout container', {'layout_aside-blind' : blind}]">
		<aside :class="['layout__aside', { 'opened': opened }]" ref="aside">
			<button class="layout__a-toggle" @click.prevent="opened = !opened"></button>
			<button class="layout__a-close" @click.prevent="opened = false"></button>
			<div class="layout__a-inner">
				<slot name="sidebar"/>
			</div>
		</aside>
		<main class="layout__main">
			<slot name="content"/>
		</main>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
	name: 'BLayoutPage',
	props: {
		blind: Boolean,
		omitToClose: String
	},
	setup (props) {
		const aside = ref(null);
		const opened = ref(false);

		const omitToClose = (e) => {
			const omits = props.omitToClose.split(",").map((item) => item.trim());
			return omits.some(omit => !!e.target.closest(`${omit}`));
		}

		onMounted(() => {
			['click','touchstart'].forEach(event => {
				document.addEventListener(event, (e) => {
					const isself = e.target.closest(`.${aside.value?.className.split(' ')[0]}`);

					if(opened.value && !isself && !omitToClose(e)) {
						e.preventDefault();
						opened.value = false;
					}
				});
			}, { passive: false });
		});

		return {
			aside,
			opened
		}
	}
}
</script>

<style lang="scss">
.layout {
	$self: &;
	display: grid;
	grid-template-columns: 290px 1fr;
	grid-gap: 24px;

	&_aside-blind {
		@include media('<=md') {
			display: block;

			#{$self}__a-toggle {
				display: block;
			}

			#{$self}__aside {
				box-sizing: border-box;
				padding: 60px 0 20px;
				background-color: #fff;		
				box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
				padding: 50px 20px 20px;
				transition: right 0.3s ease-out;
				position: fixed;
				height: 100vh;
				height: calc(var(--vh, 1vh) * 100);
				z-index: 10;
				right: -360px; top: 0;
				max-width: 360px;
				width: 100%;

				@include media('<=xxs') {
					right: -320px; top: 0;
					max-width: 320px;

				}
					
				#{$self}__a-toggle {
					display: block;
				}
				
				#{$self}__a-close {
					display: block;
				}
					
				&.opened {
					right: 0;
				}
			}
		}
	}

	&__aside {
		grid-column: span 1;
	}

	&__a-toggle {
		@extend %reset-button;
		display: none;
		position: absolute;
		top: 50%;
		left: 0;
		z-index: 2;
		transform: translate(-100%,-50%);
		width: 40px;
		height: 50px;
		box-shadow: -7px 0 7px rgba(0,0,0,.1);
		border-radius: 100px 0 0 100px;
		background: url('#{$images-path}icons-sprite.svg#icon-side-view-blue') left 20px center/6px 24px no-repeat #fff;
	}

	&__a-close {
		@extend %reset-button;
		display: none;
		position: absolute;
		top: 10px;
		left: 10px;
		width: 30px;
		height: 30px;
		background: url('#{$images-path}icons-sprite.svg#icon-close-view-black') center / 20px 20px no-repeat transparent;
		opacity: 0.55;
	}

	&__a-inner {
		
		@include media('<=md') {
			overflow: auto;
			max-height: 100%;
		}
	}
	
	&__main {
		grid-column: span 1;
	}
}	
</style>