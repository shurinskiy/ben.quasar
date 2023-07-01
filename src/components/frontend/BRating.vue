<template>
	<div :class="['rating', cls]">
		<span
			v-for="(star, index) in stars" 
			class="rating__star"
			:key="index"
			:ref="(el) => updateStarRefs(el, index)"
		></span>
	</div>
</template>

<script>
import { reactive, onMounted } from 'vue'

export default {
	name: 'BRating',
	props: ['cls','rate'],
	setup (props) {
		let stars = [1, 2, 3, 4, 5];
		let starRefs = reactive([]);

		const updateStarRefs = (el, index) =>  starRefs[index] = el;

		onMounted(() => {
			starRefs.forEach((star, i) => {
				if (i < Math.round(props.rate))
					star.classList.add('active');
			});
		});

		return {
			stars,
			updateStarRefs
		}
	}
}
</script>

<style lang="scss">
.rating {
	$self: &;
	display: flex;

	&_small {
		#{$self}__star {
			width: 13px;
			height: 12px;

			&:not(:last-child) {
				margin-right: 4px;
			}
		}
	}

	&__star {
		width: 19px;
		height: 18px;
		background: url('#{$images-path}icons-sprite.svg#icon-star-view-orange') center / contain no-repeat transparent;
		
		&.active {
			background-image: url('#{$images-path}icons-sprite.svg#icon-star-fill-view-orange');
		}

		&:not(:last-child) {
			margin-right: 7px;
		}
	}
}	
</style>