<template>
<div :class="['tab', cls]">
	<div class="tab__buttons">
		<template v-for="(button, index) of Object.keys(buttons)" :key="index">
			<button 
				:class="['tab__button', { 'active': index == active }]" 
				:ref="(el) => updateBlockRefs(el, index)"
				@click="active = index"
			>
				<slot :name="button"></slot>
			</button>
		</template>
	</div>
	<div class="tab__blocks">
		<template v-for="(block, index) of Object.keys(blocks)" :key="index">
			<div v-if="index == active"
				class="tab__block" 
				:ref="(el) => updateBlockRefs(el, index)"
			>
				<slot :name="block"></slot>
			</div>
		</template>
	</div>
</div>	
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	name: 'BTabs',
	props: {
		cls: String,
		start: {
			type: [Number, String],
			default: 0
		}

	},
	setup (props, { slots }) {
		const blockRefs = reactive([]);
		const buttonRefs = reactive([]);
		const active = ref(props.start);

		const updateBlockRefs = (el, index) =>  blockRefs[index] = el;
		const updateButtonRefs = (el, index) =>  buttonRefs[index] = el;

		const slotFilter = (slots, name) => {
			return Object.keys(slots)
				.filter((key) => key.includes(name))
				.reduce((acc, key) => { return Object.assign(acc, { [key]: slots[key] })}, {});
		}
		
		const buttons = computed(() => slotFilter(slots, "button"));
		const blocks = computed(() => slotFilter(slots, "block"));

		return {
			blocks,
			buttons,
			updateBlockRefs,
			updateButtonRefs,
			active
		}
	}
}
</script>

<style lang="scss">
.tab {
	$self: &;

	&__buttons {
		
	}

	&__button {

	}

	&__blocks {

	}

	&__block {
		
	}
}	
</style>