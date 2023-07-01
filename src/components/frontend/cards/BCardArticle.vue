<template>
<div :class="['card-ar', cls, { 'card-ar_reverse': reverse }]">
	<a class="card-ar__image" :href="imageUrl">
		<img :src="image" alt="">
	</a>
	<div class="card-ar__content">
		<div class="card-ar__tags">
			<b-tag
				v-for="(tag, index) in tags" 
				:key="index"
				:href="tag.href"
				cls="tag_fade tag_small"
			>{{ tag.name }}</b-tag>
		</div>
		<h3 class="card-ar__title" v-html="title"></h3>
		<div class="card-ar__text">{{ text }} <a :href="moreUrl" v-if="moreUrl">{{ moreText }}</a></div>
		<b-signature
			cls="card-ar__s-bottom"
			:url="avatarUrl"
			:img="avatar"
			:text="avatarText"
			:date="date"
		/>
	</div>
</div>
</template>

<script>
import BTag from "components/frontend/BTag.vue";
import BSignature from "components/frontend/BSignature.vue";

export default {
	name: 'BCardArticle',
	components: { BTag, BSignature },
	props: {
		cls: String,
		title: String,
		image: String,
		imageUrl: String,
		tags: Array,
		avatar: String,
		avatarUrl: String,
		avatarText: String,
		date: String,
		text: String,
		moreUrl: String,
		moreText: {
			type: String,
			default: 'Читать далее...'
		},
		reverse: Boolean
	},
	setup () {
		return {}
	}
}
</script>

<style lang="scss">
.card-ar {
	$self: &;
	display: flex;

	@include media('<=xxs') {
		flex-flow: column nowrap;
	}

	&_reverse {

		#{$self}__title {
			margin-bottom: 8px;
		}

		#{$self}__image {
			max-width: 360px;
			order: 1;
			margin: 0;

			@include media('<=xxs') {
				max-width: none;
				order: unset;
			}

			img {
				border-radius:  0 4px 4px 0;
				
				@include media('<=xxs') {
					border-radius:  4px 4px 0 0;
				}
			}
		}
		
		#{$self}__content {
			border: 1px solid #dedede;
			border-radius:  4px 0 0 4px;
			padding: 16px;
				
			@include media('<=xxs') {
				border-radius: 0 0 4px 4px;
			}
		}

		#{$self}__text {
			line-height: 1.5;
			color: #999;
		}
	}

	&__image {
		display: block;
		margin-right: 24px;
		min-height: 185px;
		max-width: 210px;
		min-width: 160px;
		height: 100%;
		width: 100%;

		@include media('<=xxs') {
			min-height: auto;
			max-height: none;
			min-width: auto;
			max-width: none;
			height: 200px;
		}
	
		img {
			border-radius: 4px;
			object-fit: cover;
			height: 100%;
			width: 100%;
			
			@include media('<=xxs') {
				border-radius: 4px 4px 0 0;
			}
		}
	}

	&__content {
		box-sizing: border-box;
		display: flex;
		flex-flow: column nowrap;

		@include media('<=xxs') {
			padding: 16px;
			border: 1px solid #dedede;
			border-top: none;
			border-radius: 0 0 4px 4px;
		}
	}

	&__tags {
		margin-bottom: 10px;

		@include media('<=xxs') {
			margin-bottom: 5px;
		}

		.tag {
			margin: 0 6px 6px 0;
		}
	}

	&__title {
		margin-bottom: 14px;
		color: #4d4d4d;
		font-size: 20px;
		font-family: "RM", sans-serif;
		line-height: 1.2;
	}

	&__text {
		margin-bottom: 12px;

		a { color: $primary; }
		
		@include media('<=xxxs') {
			font-size: 14px;
		}
	}

	&__s-bottom {
		margin-top: auto;
	}
}	
</style>