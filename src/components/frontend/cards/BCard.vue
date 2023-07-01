<template>
<div :class="['card', cls]">
	<a class="card__image" :href="url">
		<img :src="image" alt="">
	</a>
	<div class="card__tags" v-if="tags">
		<b-tag
			v-for="(tag, index) in tags" 
			:key="index"
			:href="tag.href"
			cls="tag_fade tag_small"
		>{{ tag.name }}</b-tag>
	</div>
	<h3 class="card__title">{{ title }}</h3>
	<div class="card__text" v-html="text"></div>
	<b-signature
		cls="card__sign"
		v-if="sign"
		:url="sign.url"
		:img="sign.img"
		:text="sign.text"
		:date="sign.date"
	/>
</div>
</template>

<script>
import BSignature from "components/frontend/BSignature.vue";
import BTag from "components/frontend/BTag.vue";

export default {
	name: 'BCard',
	components: {
		BSignature,
		BTag
	},
	props: {
		cls: String,
		image: String,
		url: String,
		tags: Array,
		sign: Object,
		title: String,
		text: String
	},
	setup () {
		return {}
	}
}
</script>

<style lang="scss">
.card {
	$self: &;

	&__image {
		display: block;
		margin-bottom: 20px;
		height: 180px;

		img {
			display: block;
			object-fit: cover;
			height: 100%;
			width: 100%;
		}
	}

	&__tags {
		margin-bottom: 8px;

		.tag {
			margin: 0 8px 8px 0;
		}
	}

	h2#{&}__title, h3#{&}__title {
		font-family: "RB", sans-serif;
		font-size: 24px;
		line-height: 1.1;
		margin-bottom: 12px;
	}

	&__text {
		font-size: 16px;
		line-height: 1.4;
		margin-bottom: 16px;

		a { color: $primary; }
		p { margin-bottom: 16px !important; }
	}

	&__sign {

	}
}	
</style>