<template>
<header class="header" ref="header">
	<div class="header__inner container">
		<div class="header__top">
			<div class="header__contact">
				<a class="header__link header__link_phone" href="tel:+7 7072404040">+7 707 240 40 40</a>
				<a class="header__link header__link_email" href="mail:info@benhub.kz">info@benhub.kz</a>
			</div>
			<b-header-lang cls="header__lang"/>
		</div>
		<b-header-panel cls="header__panel" />
	</div>
</header>
</template>

<script>
import { ref, onMounted } from 'vue';
import BHeaderPanel from 'components/frontend/header/BHeaderPanel.vue';
import BHeaderLang from 'components/frontend/header/BHeaderLang.vue';

// решение проблемы 100vh для меню на мобильных устройствах
const vh = window.visualViewport.height * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.visualViewport.addEventListener('resize', (e) => {
	requestAnimationFrame(() => {
		document.documentElement.style.setProperty('--vh', `${e.target.height * 0.01}px`);
	});
});


export default {
	name: 'BLayoutHeader',
	components: { BHeaderPanel, BHeaderLang },
	setup () {
		const header = ref();
		
		onMounted(() => {
			document.addEventListener("scroll", (e) => {
				header.value?.classList[(e.target.documentElement.scrollTop > 30) ? 'add':'remove']('header_scrolled');
			});
		});

		return {
			header,
		}
	}
}
</script>

<style lang="scss">
.header {
	$self: &;
	top: -42px;
	left: 0;
	z-index: 9;
	position: sticky;
	background-color: #fff;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0);
	transition: box-shadow 0.4s;
	
	@include media('<=md') {
		top: 0;
	}

	&_scrolled {
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

		@include media('>md') {
			#{$self}__top {
				opacity: 0;
			}
	
			.h-panel__logo {
				width: 50px;
			}
	
			.h-panel__lang.lang {
				margin-left: 30px;
				width: 105px;
				opacity: 1;
				overflow: visible;
			}
		}

	}

	&__inner {
		padding-top: 20px;
		padding-bottom: 20px;
		
		@include media('<=md') {
			padding-top: 12px;
			padding-bottom: 12px;
		}
	}
	
	&__top {
		box-sizing: border-box;
		display: flex;
		margin-bottom: 16px;
		opacity: 1;

		@include media('<=md') {
			display: none;
		}
	}

	&__contact {
		display: flex;
		align-items: center;
	}

	&__link {
		color: #999;
		text-decoration: none;
		font-family: "RM", sans-serif;
		display: flex;
		align-items: center;

		&:first-child {
			margin-right: 50px;
		}
		
		&::before {
			display: block;
			content: '';
			width: 18px;
			height: 18px;
			margin-right: 10px;
			background-color: transparent;
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
			opacity: 0.4;
		}
		
		&_phone::before {
			background-size: 18px 18px;
			background-image: url('#{$images-path}icons-sprite.svg#icon-phone-view-black');
		}
		
		&_email::before {
			background-size: 18px 14px;
			background-image: url('#{$images-path}icons-sprite.svg#icon-email-view-black');
		}
	}

	&__lang {
		margin-left: auto;
	}

	&__panel {
		display: flex;
		align-items: center;
		width: 100%;
	}
}
</style>