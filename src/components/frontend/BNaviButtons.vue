<template>
<div :class="['navi-bt', cls]">
	<slot/>
	<button class="navi-bt__prev" @click="handlerClick" :disabled="prev"></button>
	<button class="navi-bt__next" @click="handlerClick" :disabled="next"></button>
</div>
</template>

<script>
export default {
	name: 'BNaviButtons',
	emits: ['clickNavi'],
	props: {
		cls: {
			type: String
		},
		prev: {
			type: Boolean
		},
		next: {
			type: Boolean
		}
	},
	setup (props, { emit }) {
		const handlerClick = (e) =>  emit('clickNavi', e);
		return { handlerClick }
	}
}
</script>

<style lang="scss">
.navi-bt {
	$self: &;

	&__prev, &__next {
		@extend %reset-button;
		width: 36px;
		height: 36px;
		margin: 0 8px;
		border-radius: 50%;
		box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.4);
		background-repeat: no-repeat;
		background-position: center;
		background-size: 16px 14px;
		background-color: #fff;
		border: 1px solid rgba(170, 170, 170, 0);
		transition: box-shadow 0.3s, opacity 0.3s, border-color 0.3s;
		flex-shrink: 0;
		
		&:disabled {
			box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
			border-color: #aaa;
			opacity: 0.5 !important;
			cursor: default !important;
		}
	}

	&__prev {
		background-image: url('#{$images-path}icons-sprite.svg#icon-arr-left-view-orange');
	}
	
	&__next {
		background-image: url('#{$images-path}icons-sprite.svg#icon-arr-right-view-orange');
	}
}
</style>