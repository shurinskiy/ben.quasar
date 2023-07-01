<template>
	<div class="m-appoint">
		<q-btn class="m-appoint__close" icon="close" flat round dense v-close-popup />
		<h2 class="m-appoint__title">Запись на консультацию</h2>
		<b-tabs cls="m-appoint__tab">
			<template #button-1>Предстоящие</template>
			<template #button-2>Прошедшие</template>
			<template #block-1>
				<h3 class="m-appoint__subtitle">Выберите длительность консультации</h3>
				<q-option-group
					class="m-appoint__time"
					:model-value="time"
					:options="options"
					@update:model-value="$emit('update:time', $event)"
					color="primary"
				/>
				
				<h3 class="m-appoint__subtitle">Выберите дату</h3>
				<q-date
					class="m-appoint__datepicker"
					:model-value="date"
					@update:model-value="$emit('update:date', $event)"
					minimal
					flat
				/>
				
				<q-input 
					debounce="500"
					class="m-appoint__date"
					label="Введите желаемое время консультации"
					:model-value="date"
					@update:model-value="$emit('update:date', $event)"
					color="accent" 
					outlined
				></q-input>

				<b-button class="m-appoint__button button_noshadow">Продолжить</b-button>
			</template>
			<template #block-2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa, tempore cumque repellat perferendis dolor fugiat magnam, vel nemo aliquam tenetur adipisci iste ipsam magni aperiam in dolorem alias. Repellendus, error voluptates itaque quo consectetur, alias placeat est enim dolorem quisquam ipsam ad excepturi tempore?</p>
				<p>Ullam animi amet totam minus, adipisci vel possimus. Eius impedit voluptatibus ut incidunt voluptates numquam, quae eveniet fugiat neque adipisci fugit blanditiis assumenda accusantium, minus sit dolores libero deserunt dolorum. Iure ut optio et eveniet doloribus asperiores, libero nam aspernatur, qui sequi porro error modi.</p>
				<p>Numquam ab repellat assumenda aperiam aliquid praesentium reprehenderit enim quam! Consequuntur omnis dolorem suscipit ipsum recusandae accusantium distinctio corporis veritatis aperiam, a, ipsam pariatur illum atque velit modi nobis nisi temporibus quos quisquam tenetur officia, illo ea? Dicta cupiditate consectetur debitis maiores earum voluptatum totam.</p>
			</template>
		</b-tabs>
	</div>
</template>

<script>
import BTabs from "components/frontend/BTabs.vue";
import BButton from 'components/frontend/BButton.vue';

export default {
	name: 'BModalAppoint',
	components: { BTabs, BButton },
	emits: ['update:date', 'update:time'],
	props: {
		date: String,
		time: Number
	},
	setup (props) {
		const options = [
			{ label: '15 минут', value: 900 },
			{ label: '30 минут', value: 1800 },
			{ label: '1 час', value: 3600 },
			{ label: '2 часа', value: 7200 }
		]

		return { options }
	}
}
</script>

<style lang="scss">
.m-appoint {
	$self: &;
	box-sizing: border-box;
	max-width: 480px !important;
	background-color: #fff;
	position: relative;
	padding: 32px;
	width: 100%;
	@keyframes show_fade { from { opacity: 0; } to { opacity: 1; }}
	
	@include media('<=xxs') {
		padding: 20px;
	}

	&__close {
		position: absolute;
		top: 15px; right: 15px;
	}

	&__title {
		font-family: "RM", sans-serif;
		text-align: center;
		margin-bottom: 32px;
		line-height: 1.2;
		color: #4d4d4d;
		font-size: 24px;
	}
	
	&__subtitle {
		margin-bottom: 5px;
		text-align: center;
		line-height: 1.2;
	}

	&__tab.tab {
		// margin-bottom: 40px;

		.tab__buttons {
			display: flex;
			border: 1px solid #dedede;
			border-radius: 4px;
			padding: 1px;
			margin-bottom: 32px;
		}

		.tab__button {
			@extend %reset-button;
			width: 50%;
			padding: 13px 10px;
			color: #4d4d4d;
			font-family: "RM", sans-serif;

			&.active {
				color: #fff;
				background-color: $accent;
			}
			
			@include media('<=xxs') {
				font-size: 14px;
				padding: 10px;
			}
		}

		.tab__blocks {

		}

		.tab__block {
			animation: show_fade 0.4s;
		}
	}

	&__time {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 24px;

		> div {
			margin: 0;
		}

		.q-radio__label {
			white-space: nowrap;
		}
	}

	&__datepicker {
		display: flex;
		margin: 0 auto;

		.q-date__view {
			padding: 0;
		}

		.q-date__navigation {
			font-family: "RB", sans-serif;
			color: $accent;
		}
	}

	&__date {
		margin-bottom: 24px;
	}

	&__button.button {
		width: 100%;
		justify-content: center;
	}
}	
</style>