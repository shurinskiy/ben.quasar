<template>
<div :class="['social', cls]">
	<a class="social__link social__link_fb" href="./"></a>
	<a class="social__link social__link_inst" href="./"></a>
	<a class="social__link social__link_tgm" href="./"></a>
</div>
</template>

<script>
export default {
	name: 'BSocial',
	props: {
		cls: {
			type: String
		}
	},
	setup (props, { emit }) {
		return {}
	}
}
</script>

<style lang="scss">
.social {
	$self: &;
	display: flex;
	justify-content: flex-start;

	&__link {
		display: block;
		background-color: transparent;
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		height: 24px;
		width: 24px;

		&:not(:last-child) {
			margin-right: 24px;
		}

		&_fb {
			background-image: url('#{$images-path}icons-sprite.svg#icon-soc-fb-view-white');
		}
		
		&_inst {
			background-image: url('#{$images-path}icons-sprite.svg#icon-soc-inst-view-white');
		}
		
		&_tgm {
			background-image: url('#{$images-path}icons-sprite.svg#icon-soc-tgm-view-white');
		}
	}
}	
</style>