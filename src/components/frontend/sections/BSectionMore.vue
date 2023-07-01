<template>
	<section class="more">
		<div class="more__inner container">
			<div class="more__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie.</div>
		<div class="more__links">
			<a class="more__link more__link_more" href="./">Узнать подробнее</a>
			<b-button cls="more__link more__link_register button_accent button_shadow" href="./" link>Зарегистрироваться</b-button>
		</div>
	</div>
</section>
</template>

<script>
import BButton from 'components/frontend/BButton.vue';

export default {
	name: 'BSectionMore',
	components: { BButton },
	setup () {
		return {}
	}
}
</script>

<style lang="scss">
.more {
	$self: &;
	background: linear-gradient(45deg, #D9DDFF 0%, #F6F6F6 50%, #FCCCC3 100%);
	margin-top: auto;

	&__inner {
		padding-top: 24px;
		padding-bottom: 24px;
		display: flex;
		align-items: center;

		@include media('<=lg') {
			flex-wrap: wrap;
		}
	}

	&__text {
		box-sizing: border-box;
		color: #4d4d4d;
		font-family: "RM", sans-serif;
		line-height: 1.5;
		flex-grow: 100;
		max-width: 720px;
		padding-right: 20px;
		
		@include media('<=lg') {
			padding: 0;
			margin: 0 auto 20px;
		}
	}
	
	&__links {
		display: flex;
		align-items: center;
		flex-grow: 1;
		justify-content: flex-end;
		
		@include media('<=lg') {
			justify-content: center;
		}
		
		@include media('<=xxs') {
			flex-wrap: wrap;
		}
	}

	&__link {
		
		&_more {
			font-family: "RM", sans-serif;
			margin-right: 40px;
			white-space: nowrap;
			text-align: center;
			color: #4d4d4d;

			@include media('<=xxs') {
				margin: 0;
				width: 100%;
				order: 1;
			}
		}

		&_register {

			@include media('<=xxs') {
				margin-bottom: 20px;
			}
			
		}
	}
}	
</style>