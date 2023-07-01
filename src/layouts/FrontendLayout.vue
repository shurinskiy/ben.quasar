<template>
	<b-layout-header/>
	<router-view />
	<b-section-more/>
	<b-layout-footer/>
</template>

<script>
import { defineComponent, ref } from 'vue'
import BLayoutHeader from 'components/frontend/header/BLayoutHeader.vue'
import BLayoutFooter from 'components/frontend/footer/BLayoutFooter.vue'
import BSectionMore from 'components/frontend/sections/BSectionMore.vue'

export default defineComponent({
	name: 'MainLayout',

	components: { BLayoutHeader, BLayoutFooter, BSectionMore },

	setup () {
		return {}
	}
})
</script>