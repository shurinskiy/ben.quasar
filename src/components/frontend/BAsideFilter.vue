<template>
<div class="filter">
	<div class="filter__block"
		v-for="(filter, blockIdx) in filters" 
		:ref="(el) => updateBlockRefs(el, blockIdx)"
		:data-hidden="filter.hidden"
		:key="blockIdx"
	>
		<h3 class="filter__title">{{ filter.title }}</h3>

		<q-input 
			v-if="'search' in filter" 
			debounce="500"
			class="filter__search" 
			label="Поиск по направлениям"
			color="accent" 
			outlined
			:model-value="filter.search"
			@update:model-value="inputHandler($event, blockIdx)"
		>
			<template v-slot:prepend><q-icon name="search" /></template>
			<template v-slot:append>
				<q-icon 
					name="close" 
					class="cursor-pointer" 
					@click="inputHandler('', blockIdx)" 
				/>
			</template>
		</q-input>

		<q-input 
			v-if="'range' in filter" 
			:model-value="rangeValue(filter.range)"
			@click="rangeModal = true"
			class="filter__range" 
			label="Укажите период"
			debounce="500"
			color="accent"
			outlined
			readonly
		>
			<template v-slot:prepend><q-icon name="event"/></template>
		</q-input>

		<q-dialog v-if="'range' in filter" v-model="rangeModal" transition-duration="500">
			<b-modal-range
				:range="filter.range" 
				v-model:range="filter.range"
			/>
		</q-dialog>
		
		<div class="filter__items">
			<b-tag
				v-for="(button, buttonIdx) in filter.buttons" 
				:key="buttonIdx"
				:cls="['filter__item tag_base tag_mid', { 'active' : button.active }]"
				@click="clickHandler(e, blockIdx, buttonIdx)"
				button
			>{{ button.name }}</b-tag>
		</div>
	</div>
	<button class="filter__clear" @click="clearHandler" :disabled="!disabled">Очистить</button>
</div>
</template>

<script>
import { computed, ref, reactive, onMounted } from 'vue'
import BModalRange from "components/frontend/modals/BModalRange.vue";
import BTag from "components/frontend/BTag.vue";

export default {
	name: 'BAsideFilter',
	emits: ['click', 'input', 'clear'],
	components: { BTag, BModalRange },
	props: {
		filters: {
			type: Array,
			required: true
		},
		moreText: {
			type: String,
			default: "Показать все"
		}
	},
	setup (props, { emit }) {
		const blockRefs = reactive([]);
		const clearHandler = (e) => emit('clear');
		const updateBlockRefs = (el, index) =>  blockRefs[index] = el;
		const clickHandler = (e, blockIdx, buttonIdx) =>  emit('click', { block: blockIdx, button: buttonIdx });
		const inputHandler = (value, blockIdx) => emit('input', { block: blockIdx, search: value });

		const rangeValue = (range) => {
			let output = '';

			if (typeof range == 'string') {
				output = range;
			} else if(range && Object.keys(range).length) {
				output = `от ${range.from} до ${range.to}`;
			}

			return output;
		}

		const disabled = computed(() => {
			for (const filter in props.filters) {
				let { search, range, buttons } = props.filters[filter];
				let active = buttons.some(button => button.active);

				if(!!search || !!(range && Object.keys(range).length) || !!active) return true;
			}
			return false;
		});

		onMounted(() => {

			blockRefs.forEach((block, i) => {
				const count = +block.dataset.hidden;
				const items = block.querySelectorAll('.filter__item');
				const more = document.createElement('button');

				more.innerText = props.moreText;
				more.className = 'filter__showall';

				items.forEach((item, i) => {
					if (i >= count) 
						item.style.display = 'none';
				});

				if (items.length > count) {
					block.append(more);
				
					more.addEventListener('click', (e) => {
						items.forEach((item, i) => item.removeAttribute('style'));
						more.remove();
					});
				}
			});
		});

		return {
			rangeModal: ref(false),
			updateBlockRefs,
			clickHandler,
			inputHandler,
			clearHandler,
			rangeValue,
			disabled,
		}
	}
}
</script>

<style lang="scss">
.filter {
	$self: &;
	background-color: #F6F7F8;
	box-sizing: border-box;
	border-radius: 4px;
	padding: 24px 16px;
	margin-bottom: 24px;
	@keyframes show_fade { from { opacity: 0; } to { opacity: 1; }}
	
	&__block {
		margin-bottom: 24px;
	}

	&__title {
		font-family: "RB", sans-serif;
		margin-bottom: 16px;
		line-height: 1.2;
	}

	&__items {

	}

	&__item {
		margin: 0 8px 8px 0;
		animation: show_fade 0.3s;

		&.tag {
			@include media('<=xxs') {
				padding: 6px 12px;
				font-size: 12px;
			}
		}
	}
	
	&__showall {
		@extend %reset-button;
		font-size: 15px;
		color: #4d4d4d;
		text-decoration: underline;
		font-family: "RM", sans-serif;
		padding-top: 8px;
	}

	&__search {
		background-color: #fff;
		margin-bottom: 16px;
		border-radius: 4px;
		display: flex;
		height: 48px;
	}

	&__range {
		background-color: #fff;
		margin-bottom: 16px;
		border-radius: 4px;
		display: flex;
		height: 48px;
		
		.q-field__native {
			cursor: pointer !important;
		}
	}

	&__clear {
		@extend %reset-button;
		display: block;
		position: sticky;
		position: -webkit-sticky;
		bottom: 20px;
		background-color: $primary;
		color: #fff;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		width: 100%;
		border-radius: 4px;
		font-family: "RM", sans-serif;
		font-size: 16px;
		transition: background-color 0.3s;

		@include media('<=md') {
			position: static;
		}

		&:disabled {
			opacity: 1 !important;
			cursor: default !important;
			background-color: lighten($primary, 40%);
		}

		&::before {
			display: block;
			content: '';
			width: 18px;
			height: 20px;
			background: url('#{$images-path}icons-sprite.svg#icon-trash-view-white') center / contain no-repeat transparent;
			margin-right: 12px;
		}
	}
}	
</style>