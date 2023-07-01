<template>
<section :class="['program', cls]">
	<div class="program__inner container">
		<b-title cls="program__title" :title="title" />
		<div class="program__items">
			<div class="program__item" v-for="(event, index) in events" :key="index">
				<div class="program__body">
					<div class="program__time">{{ event.time }}</div>
					<div class="program__row">
						<strong class="program__r-title">Тема:</strong>
						<div class="program__r-text" v-html="event.theme"></div>
					</div>
					<div class="program__row">
						<strong class="program__r-title">Спикер:</strong>
						<div class="program__r-text" v-html="event.speaker"></div>
					</div>
				</div>
				<div class="program__bottom" v-if="event.bottom" v-html="event.bottom"></div>
			</div>
		</div>
	</div>
</section>
</template>

<script>
import BTitle from "components/frontend/BTitle.vue";

export default {
	name: 'BSectionProgram',
	components: { BTitle },
	props: {
		cls: String,
		title: String,
		events: Array
	},
	setup () {
		return {}
	}
}
</script>

<style lang="scss">
.program {
	$self: &;

	&__inner {
		margin-bottom: 32px;
	}

	&__title {
		margin-bottom: 24px;
	}

	&__items {

	}

	&__item {

	}
	
	&__body {
		box-sizing: border-box;
		background-color: #F6F7F8;
		padding: 16px 16px 1px;

		p {
			margin-bottom: 8px;
		}
		
		ul {
			margin-bottom: 8px;
			line-height: 1.2;

			li {
				padding-left: 15px;
				position: relative;
				margin-bottom: 8px;

				&::before {
					display: block;
					content: '\02022';
					color: $accent;
					position: absolute;
					left: 0;
					top: 0;
				}
			}
		}
	}

	&__time {
		font-family: "RB", sans-serif;
		margin-bottom: 16px;
		font-size: 20px;
		color: $accent;
	}

	&__row {
		display: flex;
		margin-bottom: 16px;

		@include media('<=xxs') {
			display: block;
		}
	}

	&__r-title {
		display: block;
		margin-right: 8px;
		
		@include media('<=xxs') {
			margin: 0 0 8px;
		}
	}

	&__r-text {

	}

	&__bottom {
		box-sizing: border-box;
		padding: 16px 16px 8px;
	}
}	
</style>