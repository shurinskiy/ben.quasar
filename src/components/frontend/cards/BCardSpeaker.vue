<template>
<div :class="['card-sp', cls]">
	<a class="card-sp__image" :href="url">
		<img :src="image" alt="">
	</a>
	<h4 class="card-sp__name" v-html="name"></h4>
	<div class="card-sp__text" v-html="text"></div>
</div>
</template>

<script>
export default {
	name: 'BCardSpeaker',
	props: {
		cls: String,
		image: String,
		url: String,
		name: String,
		text: String
	},
	setup () {
		return {}
	}
}
</script>

<style lang="scss">
.card-sp {
	$self: &;
	box-sizing: border-box;
	padding: 16px;

	&__image {
		display: block;
		overflow: hidden;
		border-radius: 50%;
		height: 185px;
		width: 185px;
		margin: 0 auto 16px;
		border: 1px solid #fff;
		box-shadow: 0px 4px 22px 0px rgba(245, 93, 62, 0.45);

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&__name {
		display: block;
		font-family: "RB", sans-serif;
		font-size: 20px;
		text-align: center;
		max-width: 280px;
		margin: 0 auto 8px;
		line-height: 1.4;
		color: #4d4d4d;
		
		@include media('<=xxs') {
			line-height: 1.2;
			font-size: 16px;
		}
	}
	
	&__text {
		display: block;
		text-align: center;
		line-height: 1.5;
		max-width: 280px;
		margin: 0 auto;
		color: #999;
		
		@include media('<=xxs') {
			line-height: 1.2;
			font-size: 14px;
		}
	}
}	
</style>
