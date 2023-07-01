<template>
<div :class="['sign', cls, { 'sign_large': large }]">
	<a class="sign__avatar" :href="url">
		<div class="sign__image"><img :src="img" alt=""/></div>
		<span class="sign__text">{{ text }}</span>
	</a>
	<div class="sign__date" v-if="date">{{ date }}</div>	
</div>
</template>

<script>
export default {
	name: 'BSignature',
	props: {
		cls: String,
		url: String,
		img: String,
		text: String,
		date: String,
		large: Boolean
	},
	setup () {
		return {}
	}
}
</script>

<style lang="scss">
.sign {
	$self: &;
	display: flex;
	align-items: center;
	font-size: 12px;

	&_large {
		font-size: 16px;

		#{$self}__avatar {
			text-decoration: none;
		}
		
		@include media('<=xs') {
			font-size: 14px;
		}
		
		@include media('<=xxs') {
			font-size: 12px;
		}
	}

	&__avatar {
		display: flex;
		align-items: center;
	}

	&__image {
		border: 1px solid #dedede;
		box-sizing: border-box;
		border-radius: 50%;
		margin-right: 8px;
		overflow: hidden;
		flex-shrink: 0;
		height: 24px;
		width: 24px;

		img { display: block; }
	}

	&__text {
		color: #000;
	}
	
	&__date {
		color: #999;
		margin-left: 16px;
	}
}	
</style>