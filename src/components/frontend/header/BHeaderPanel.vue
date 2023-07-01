<template>
<div :class="['h-panel', cls]">
	<a class="h-panel__logo" href="/#"><img src="~assets/images/logo.svg" alt=""></a>
	<div :class="['h-panel__navi', { 'opened': opened }]" ref="naviRef">
		<button class="h-panel__navi-close" @click.prevent="opened = false"></button>
		
		<nav class="h-panel__menu">
			<a class="h-panel__link" href="/#/events">События</a>
			<a class="h-panel__link" href="/#/experts">Эксперты</a>
			<a class="h-panel__link" href="/#/organizer">Предприниматели</a>
			<a class="h-panel__link" href="/#/blog">Блог</a>
		</nav>
		
		<q-input class="h-panel__search" outlined color="accent" v-model="search" label="Поиск по сайту">
			<template v-slot:prepend>
				<q-icon name="search" />
			</template>
			
			<template v-slot:append>
				<q-icon name="close" @click="search = ''" class="cursor-pointer" />
			</template>
		</q-input>
		
		<b-button cls="h-panel__login button_login button_shadow" @click="login = true">Войти</b-button>
	</div>
	
	<b-header-lang cls="h-panel__lang"/>
	<b-button cls="h-panel__navi-toggle button_menu button_shadow" @click="opened = !opened" />
</div>

<q-dialog v-model="login" transition-duration="500">
	<b-modal-login @click="register = true"/>
</q-dialog>

<q-dialog v-model="register" transition-duration="500">
	<b-modal-login register @click="login = true"/>
</q-dialog>
</template>

<script>
import { ref, onMounted } from 'vue';
import BHeaderLang from 'components/frontend/header/BHeaderLang.vue';
import BButton from 'components/frontend/BButton.vue';
import BModalLogin from 'components/frontend/modals/BModalLogin.vue';

export default {
	name: 'BHeaderPanel',
	components: { BHeaderLang, BButton, BModalLogin },
	props: {
		cls: String,
		omitToCloseMenu: {
			type: String,
			default: '.h-panel__navi-toggle, .q-dialog'
		}
	},
	setup (props, { emit }) {
		const naviRef = ref(null);
		const opened = ref(false);

		const omitToClose = (e) => {
			const omits = props.omitToCloseMenu.split(",").map((item) => item.trim());
			return omits.some(omit => !!e.target.closest(`${omit}`));
		}
		
		onMounted(() => {
			['click','touchstart'].forEach(event => {
				document.addEventListener(event, (e) => {
					const isself = e.target.closest(`.${naviRef.value?.className.split(' ')[0]}`);

					if(opened.value && !isself && !omitToClose(e)) {
						e.preventDefault();
						opened.value = false;
					}
				});
			}, { passive: false });
		});

		return {
			naviRef,
			opened,
			login: ref(false),
			register: ref(false),
			search: ref('')
		}
	}
};
</script>

<style lang="scss">
.h-panel {
	$self: &;

	&__logo {
		display: flex;
		width: 77px;
		margin-right: 18px;
		transition: width 0.2s;
		align-items: center;
		align-self: stretch;
		
		@include media('<=lg') {
			margin-right: 10px;
		}

		@include media('<=md') {
			max-width: 50px;
		}
	}

	&__navi {
		display: flex;
		align-items: center;
		box-sizing: border-box;
		flex-grow: 1;

		@include media('<=md') {
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
			background-color: rgba(255, 255, 255, 0.8);
			padding: 50px 20px 20px;
			backdrop-filter: blur(15px);
			align-items: flex-start;
			flex-flow: column nowrap;

			width: 100%;
			height: 100vh;
			height: calc(var(--vh, 1vh) * 100);
			position: fixed;
			z-index: 12;
			top: 0;
			left: -350px; 
			max-width: 350px;
			transition: left 0.2s linear;
	
			&.opened {
				left: 0;
			}
		}
	}

	&__navi-close {
		@extend %reset-button;
		display: none;
		position: absolute;
		z-index: 1;
		top: 10px;
		right: 10px;
		width: 30px;
		height: 30px;
		background: url('#{$images-path}icons-sprite.svg#icon-close-view-black') center / 20px 20px no-repeat transparent;
		opacity: 0.55;

		@include media('<=md') {
			display: block;
		}
	}

	&__menu {
		display: flex;
		align-items: center;
		box-sizing: border-box;
		position: relative;
		margin-right: 18px;
		
		@include media('<=lg') {
			margin-right: 10px;
		}

		@include media('<=md') {
			flex-flow: column nowrap;
			align-items: stretch;
			overflow: auto;
			width: 100%;
			padding-bottom: 10px;
			margin: 0 0 25px;
			border-bottom: 1px solid #bfbfbf;
		}
	}

	&__link {
		color: #4D4D4D;
		font-family: "RM", sans-serif;
		text-decoration: none;
		margin: 0 18px;
		
		@include media('<=lg') {
			margin: 0 10px;
		}
		
		@include media('<=md') {
			margin: 0;
			padding: 10px 0;
		}
		
		&:hover {
			text-decoration: underline;
		}
	}

	&__search {
		width: 100%;
		max-width: 390px;
		margin-left: auto;
		display: flex;
		align-items: center;
		border-radius: 4px;
		border: 1px solid #dedede;
		background-color: #fff;
			
		@include media('<=md') {
			margin-top: auto;
			order: 10;
		}

		/* input[type="text"] {
			@extend %reset-input;
			font-family: "RR", sans-serif;
			color: #999;
			flex-grow: 1;
			min-width: auto;
			max-width: none;
	
			&::placeholder {
				color: #999;
			}
			
			&:focus ~ input[type="reset"] {
				cursor: pointer;
				opacity: 0.4;
			}
		}
	
		input[type="submit"] {
			@extend %reset-button;
			width: 46px;
			height: 46px;
			order: -1;
			background: url('#{$images-path}icons-sprite.svg#icon-zoom-view-black') center / 20px 20px no-repeat transparent;
			opacity: 0.2;
		}
	
		input[type="reset"] {
			@extend %reset-button;
			width: 46px;
			height: 46px;
			background: url('#{$images-path}icons-sprite.svg#icon-close-view-black') center / 14px 14px no-repeat transparent;
			transition: opacity 0.3s;
			cursor: default;
			opacity: 0;
		} */
	}

	&__login {
		margin-left: 24px;
		
		&.button {
			@include media('<=md') {
				margin: 0px;
				order: 9;
				background-color: transparent;
				box-shadow: none;
				color: #4D4D4D;
				padding: 0;
				
				&::before {
					background-image: url('#{$images-path}icons-sprite.svg#icon-user-view-black');
					opacity: 0.5;
				}

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

	&__lang.lang {
		margin-left: 24px;
		
		@include media('>md') {
			transition: opacity 0.2s, width 0.2s, margin 0.2s;
			overflow: hidden;
			margin-left: 0;
			opacity: 0;
			width: 0;
		}
		
		@include media('<=md') {
			margin-left: auto;
		}
	}
	
	&__navi-toggle {
		display: none;
		
		&.button {
			@include media('<=md') {
				padding: 12px;
				margin-left: 14px;
				// border-radius: 50%;
				display: block;
			}
		}
	}
}
</style>