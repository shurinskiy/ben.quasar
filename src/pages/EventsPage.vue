<template>
<b-breadcrumbs>
	<a href="./">Главная страница</a>
	<span>События</span>
</b-breadcrumbs>


<b-layout-page blind omitToClose=".filter__showall, .q-dialog">
	<template #sidebar>
		<b-aside-filter 
			:filters="incomingData.filters" 
			@click="filterClickHander" 
			@input="filterInputHander"
			@clear="filterClear"
		/>
	</template>
	<template #content>
		<b-tabs cls="catalog catalog_tabs">
			<template #button-1>Предстоящие</template>
			<template #button-2>Прошедшие</template>

			<template #block-1>
				<div class="catalog__items">
					<b-card-event
						v-for="(card, index) in incomingData.cards.coming"
						cls="catalog__item"
						:key="index"
						:image="card.image"
						:imageUrl="card.imageUrl"
						:labels="card.labels"
						:date="card.date"
						:title="card.title"
						:price="card.price"
						:name="card.name"
						:nameAvatar="card.nameAvatar"
						:nameUrl="card.nameUrl"
						:text="card.hiddenText"
						:address="card.hiddenAddress"
					/>
				</div>
				<b-navi-buttons cls="catalog__navi">
					<div class="catalog__navi-count">События <span>1</span> - <span>12</span> из <span>124</span></div>
				</b-navi-buttons>
			</template>
			<template #block-2>
				<div class="catalog__items">
					<b-card-event
						v-for="(card, index) in incomingData.cards.past"
						cls="catalog__item"
						:key="index"
						:image="card.image"
						:imageUrl="card.imageUrl"
						:labels="card.labels"
						:date="card.date"
						:title="card.title"
						:price="card.price"
						:name="card.name"
						:nameAvatar="card.nameAvatar"
						:nameUrl="card.nameUrl"
						:text="card.hiddenText"
						:address="card.hiddenAddress"
					/>
				</div>
				<b-navi-buttons cls="catalog__navi">
					<div class="catalog__navi-count">События <span>1</span> - <span>12</span> из <span>124</span></div>
				</b-navi-buttons>
			</template>
		</b-tabs>
	</template>
</b-layout-page>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import BLayoutPage from "components/frontend/layouts/BLayoutPage.vue";
import BCardEvent from "components/frontend/cards/BCardEvent.vue";
import BBreadcrumbs from "components/frontend/BBreadcrumbs.vue";
import BAsideFilter from "components/frontend/BAsideFilter.vue";
import BNaviButtons from "components/frontend/BNaviButtons.vue";
import BTabs from "components/frontend/BTabs.vue";

const incomingData = reactive({
	filters: [
		{
			title: 'Участие',
			hidden: 5,
			buttons: [
				{
					name: 'Онлайн',
					value: 'online',
					active: false
				},
				{
					name: 'Офлайн',
					value: 'offline',
					active: false
				}
			]
		},
		{
			title: 'Языки',
			hidden: 5,
			buttons: [
				{
					name: 'Казахский',
					value: 'kazakh',
					active: false
				},
				{
					name: 'Русский',
					value: 'russian',
					active: false
				},
				{
					name: 'Английский',
					value: 'english',
					active: false
				}
			]
		},
		{
			title: 'Формат',
			hidden: 5,
			buttons: [
				{
					name: 'Платные',
					value: 'free',
					active: false
				},
				{
					name: 'Бесплатные',
					value: 'paid',
					active: false
				},
				{
					name: 'Скидки',
					value: 'discount',
					active: false
				}
			]
		},
		{
			title: 'Город',
			hidden: 6,
			buttons: [
				{
					name: 'Алматы',
					value: 'almaty',
					active: false
				},
				{
					name: 'Астана',
					value: 'astana',
					active: false
				},
				{
					name: 'Шымкент',
					value: 'chimkent',
					active: false
				},
				{
					name: 'Актобе',
					value: 'aktobe',
					active: false
				},
				{
					name: 'Караганда',
					value: 'karaganda',
					active: false
				},
				{
					name: 'Тараз',
					value: 'taraz',
					active: false
				},
				{
					name: 'Талдыкурган',
					value: 'taldykurgan',
					active: false
				},
				{
					name: 'Оскемен',
					value: 'oskemen',
					active: false
				},
				{
					name: 'Семей',
					value: 'semey',
					active: false
				},
				{
					name: 'Павлодар',
					value: 'pavlodar',
					active: false
				}
			]
		},
		{
			title: 'Дата',
			hidden: 5,
			range: '',
			buttons: [
				{
					name: 'Сегодня',
					value: 'now',
					active: false
				},
				{
					name: 'На этой неделе',
					value: 'week',
					active: false
				},
				{
					name: 'В этом месяце',
					value: 'month',
					active: false
				}
			]
		},
		{
			title: 'Направление',
			hidden: 5,
			search: '',
			buttons: [
				{
					name: 'Маркетинг',
					value: 'market',
					active: false
				},
				{
					name: 'IT',
					value: 'it',
					active: false
				},
				{
					name: 'Управление',
					value: 'upravlenie',
					active: false
				},
				{
					name: 'Экономика',
					value: 'economika',
					active: false
				},
				{
					name: 'Финансы',
					value: 'finansy',
					active: false
				},
				{
					name: 'Продажи',
					value: 'prodazhi',
					active: false
				},
				{
					name: 'Дизайн',
					value: 'desigh',
					active: false
				},
				{
					name: 'Медиа',
					value: 'media',
					active: false
				},
				{
					name: 'Менеджмент',
					value: 'managment',
					active: false
				},
				{
					name: 'Трудоустройство',
					value: 'hr',
					active: false
				}
			]
		}
	],
	cards: {
		coming: [
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Онлайн','Идёт сейчас'],
				title: 'Ярмарка вакансий<br> ASTANA HUB JOB FAIR 2...',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 2 000 тг',
				name: 'Название компании',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>',
				hiddenAddress: 'г. Алматы, Байтурсынова 124'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Онлайн','Идёт сейчас'],
				title: 'Ярмарка вакансий<br> ASTANA HUB JOB FAIR 2...',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 2 000 тг',
				name: 'Название компании',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>',
				hiddenAddress: 'г. Алматы, Байтурсынова 124'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Оффлайн'],
				title: 'Ярмарка вакансий<br> ASTANA HUB JOB FAIR 2...',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 2 000 тг',
				name: 'Название компании',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>',
				hiddenAddress: 'г. Алматы, Байтурсынова 124'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Онлайн','Идёт сейчас'],
				title: 'Ярмарка вакансий<br> ASTANA HUB JOB FAIR 2...',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 2 000 тг',
				name: 'Название компании',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>',
				hiddenAddress: 'г. Алматы, Байтурсынова 124'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Онлайн','Идёт сейчас'],
				title: 'Ярмарка вакансий<br> ASTANA HUB JOB FAIR 2...',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 2 000 тг',
				name: 'Название компании',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>',
				hiddenAddress: 'г. Алматы, Байтурсынова 124'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Оффлайн'],
				title: 'Ярмарка вакансий<br> ASTANA HUB JOB FAIR 2...',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 2 000 тг',
				name: 'Название компании',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>',
				hiddenAddress: 'г. Алматы, Байтурсынова 124'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Онлайн','Идёт сейчас'],
				title: 'Ярмарка вакансий<br> ASTANA HUB JOB FAIR 2...',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 2 000 тг',
				name: 'Название компании',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>',
				hiddenAddress: 'г. Алматы, Байтурсынова 124'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Онлайн','Идёт сейчас'],
				title: 'Ярмарка вакансий<br> ASTANA HUB JOB FAIR 2...',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 2 000 тг',
				name: 'Название компании',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>',
				hiddenAddress: 'г. Алматы, Байтурсынова 124'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Оффлайн'],
				title: 'Ярмарка вакансий<br> ASTANA HUB JOB FAIR 2...',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 2 000 тг',
				name: 'Название компании',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>',
				hiddenAddress: 'г. Алматы, Байтурсынова 124'
			}
		],
		past: [
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Офлайн'],
				title: 'Consectetur adipisicing elit eum, veniam',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 3 000 тг',
				name: 'Новая компания',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Amet consectetur adipisicing elit. Vitae a officiis nulla ex ab repellendus quidem fugit aliquid distinctio asperiores</p>',
				hiddenAddress: 'г. Алматы, Калинина 15'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Офлайн'],
				title: 'Consectetur adipisicing elit eum, veniam',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 3 000 тг',
				name: 'Новая компания',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Amet consectetur adipisicing elit. Vitae a officiis nulla ex ab repellendus quidem fugit aliquid distinctio asperiores</p>',
				hiddenAddress: 'г. Алматы, Калинина 15'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Офлайн'],
				title: 'Consectetur adipisicing elit eum, veniam',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 3 000 тг',
				name: 'Новая компания',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Amet consectetur adipisicing elit. Vitae a officiis nulla ex ab repellendus quidem fugit aliquid distinctio asperiores</p>',
				hiddenAddress: 'г. Алматы, Калинина 15'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Офлайн'],
				title: 'Consectetur adipisicing elit eum, veniam',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 3 000 тг',
				name: 'Новая компания',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Amet consectetur adipisicing elit. Vitae a officiis nulla ex ab repellendus quidem fugit aliquid distinctio asperiores</p>',
				hiddenAddress: 'г. Алматы, Калинина 15'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Офлайн'],
				title: 'Consectetur adipisicing elit eum, veniam',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 3 000 тг',
				name: 'Новая компания',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Amet consectetur adipisicing elit. Vitae a officiis nulla ex ab repellendus quidem fugit aliquid distinctio asperiores</p>',
				hiddenAddress: 'г. Алматы, Калинина 15'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Офлайн'],
				title: 'Consectetur adipisicing elit eum, veniam',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 3 000 тг',
				name: 'Новая компания',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Amet consectetur adipisicing elit. Vitae a officiis nulla ex ab repellendus quidem fugit aliquid distinctio asperiores</p>',
				hiddenAddress: 'г. Алматы, Калинина 15'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Офлайн'],
				title: 'Consectetur adipisicing elit eum, veniam',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 3 000 тг',
				name: 'Новая компания',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Amet consectetur adipisicing elit. Vitae a officiis nulla ex ab repellendus quidem fugit aliquid distinctio asperiores</p>',
				hiddenAddress: 'г. Алматы, Калинина 15'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Офлайн'],
				title: 'Consectetur adipisicing elit eum, veniam',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 3 000 тг',
				name: 'Новая компания',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Amet consectetur adipisicing elit. Vitae a officiis nulla ex ab repellendus quidem fugit aliquid distinctio asperiores</p>',
				hiddenAddress: 'г. Алматы, Калинина 15'
			},
			{
				image: 'src/assets/images/intro-image-3.png',
				imageUrl: '/#/event',
				labels: ['Офлайн'],
				title: 'Consectetur adipisicing elit eum, veniam',
				date: '28 июля 2022, 16:00 - 20:00',
				price: 'От 3 000 тг',
				name: 'Новая компания',
				nameUrl: './',
				nameAvatar: 'src/assets/images/avatar-default.png',
				hiddenText: '<p>Amet consectetur adipisicing elit. Vitae a officiis nulla ex ab repellendus quidem fugit aliquid distinctio asperiores</p>',
				hiddenAddress: 'г. Алматы, Калинина 15'
			}
		]
	}
});

export default defineComponent({
	name: 'EventsPage',
	components: { BBreadcrumbs, BLayoutPage, BAsideFilter, BNaviButtons, BCardEvent, BTabs },
	setup() {
		const filterClickHander = (e) => {
			let current = incomingData.filters[e.block]['buttons'][e.button];
			current.active = !current.active;
		}

		const filterInputHander = (e) => {
			incomingData.filters[e.block]['search'] = e.search;
		}

		const filterClear = (e) => {
			incomingData.filters.forEach(block => {
				if ('search' in block) block.search = '';
				if ('range' in block) block.range = {};
				block.buttons.forEach(button => button.active = false);
			});
		}

		return { 
			incomingData,
			filterClickHander,
			filterInputHander,
			filterClear
		}
	}
})
</script>