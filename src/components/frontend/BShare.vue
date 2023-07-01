<template>
<div :class="['share', cls]">
	<a class="share__button share__button_share" :href="links[0]" v-if="links[0]"></a>
	<a class="share__button share__button_mark" :href="links[1]" v-if="links[1]"></a>
</div>
</template>

<script>
export default {
	name: 'BShare',
	props: {
		cls: String,
		links: Array
	},
	setup (props) {
		return {}
	}
}
</script>

<style lang="scss">
.share {
	$self: &;
	display: flex;

	&__button {
		display: block;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		height: 48px;
		width: 48px;
		background-repeat: no-repeat;
		background-position: center;
		background-color: #fff;

		&:not(:last-child) {
			margin-right: 16px;
		}

		&_share {
			background-image: url('#{$images-path}icons-sprite.svg#icon-share-view-blue');
			background-size: 19px 20px;
		}
		
		&_mark {
			background-image: url('#{$images-path}icons-sprite.svg#icon-flag-view-blue');			
			background-size: 15px 17px;
		}
	}
}
</style>