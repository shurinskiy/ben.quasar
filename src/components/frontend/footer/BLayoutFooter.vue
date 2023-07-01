<template>
<footer class="footer"> 
	<div class="footer__inner container">
		<div class="footer__main">
			<a class="footer__logo" href="./"><img src="~assets/images/logo-white.svg" alt=""></a>
			<div class="footer__m-text">Мы объединяем организаторов, экспертов и заинтересованных участников в одном месте</div>
			<div class="footer__navi">
				<a class="footer__n-link" href="./">Предпринимателю</a>
				<a class="footer__n-link" href="./">Организатору</a>
				<a class="footer__n-link" href="./">Эксперту</a>
			</div>
		</div>
		<div class="footer__links">
			<a class="footer__l-link" href="./">Политика конфиденциальности</a>
			<a class="footer__l-link" href="./">Условия пользования</a>
			<a class="footer__l-link" href="./">Публичная оферта</a>
			<a class="footer__l-link" href="./">Информация об онлайн-платежах</a>
			<a class="footer__l-link" href="./">О проекте</a>
			<span class="footer__l-copy">© ТОО “Business Event Network”</span>
		</div>
		<div class="footer__contact">
			<a class="footer__c-link footer__c-link_email" href="mailto:info@benhub.kz">
				<span>info@benhub.kz</span>
				<span>Ежедневно с 9:00 до 23:00</span>
			</a>
			<a class="footer__c-link footer__c-link_phone" href="tel:+77072404040">
				<span>+7 707 240 40 40</span>
				<span>Ежедневно с 9:00 до 23:00</span>
			</a>
			<b-social cls="footer__social"/>
		</div>
	</div>
	<div class="footer__copy container">© ТОО “Business Event Network”</div>
</footer> 
</template>

<script>
import BSocial from 'components/frontend/BSocial.vue';

export default {
	name: 'BLayoutFooter',
	components: { BSocial },
	setup () {
		return {}
	}
}
</script>

<style lang="scss">
.footer {
	$self: &;
	background-color: #292A30;
	color: #fff;

	&__inner {
		padding-top: 32px;
		display: flex;

		@include media('<=md') {
			flex-wrap: wrap;
		}
	}

	&__main {
		box-sizing: border-box;
		padding-right: 20px;
		max-width: 490px;
		width: 100%;
		margin-bottom: 32px;
		
		@include media('<=md') {
			max-width: none;
			padding: 0;
		}
	}

	&__logo {
		display: block;
		margin-bottom: 24px;
	}

	&__m-text {
		line-height: 1.5;
		max-width: 330px;
		margin-bottom: 10px;
	}

	&__navi {
		display: flex;
		flex-flow: row wrap;
	}

	&__n-link {
		text-decoration: none;
		margin-bottom: 8px;
		color: $accent;

		&:not(:last-child) {
			margin-right: 20px;
		}

		&:hover {
			text-decoration: underline;
		}
	}

	&__links {
		box-sizing: border-box;
		padding-right: 20px;
		max-width: 440px;
		width: 100%;
		margin-bottom: 32px;
		
		@include media('<=md') {
			max-width: none;
			padding: 0;
		}
	}

	&__l-link {
		display: block;
		text-decoration: none;
		color: #fff;
		line-height: 1.5;
		padding-bottom: 18px;
		font-family: "RM", sans-serif;

		&:hover {
			text-decoration: underline;
		}
	}

	&__l-copy {
		@include media('<=md') {
			display: none;
		}
	}

	&__contact {
		margin-bottom: 60px;
	}

	&__c-link {
		display: block;
		color: #fff;
		text-decoration: none;
		margin-bottom: 24px;
		padding-left: 32px;
		background-position: top 5px left;
		background-color: transparent;
		background-repeat: no-repeat;
		background-size: contain;
		
		span {
			white-space: nowrap;
			font-size: 16px;
			display: block;
			
			&:last-child {
				padding-top: 2px;
				font-size: 12px;
				color: #dedede;
			}
		}
		
		&_email {
			background-image: url('#{$images-path}icons-sprite.svg#icon-email-view-white');
			background-size: 20px 16px;
		}
		
		&_phone {
			background-image: url('#{$images-path}icons-sprite.svg#icon-phone-view-white');
			background-size: 20px 20px;
		}
	}

	&__social {

	}

	&__copy {
		display: none;
		padding-bottom: 32px;

		@include media('<=md') {
			display: block;
		}
	}
}	
</style>