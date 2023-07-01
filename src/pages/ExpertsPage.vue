<template>
<b-breadcrumbs>
	<a href="./">Главная страница</a>
	<span>Эксперты</span>
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
		<div class="catalog">
			<div class="catalog__items">
				<b-card-expert
					v-for="(card, index) in incomingData.cards"
					cls="catalog__item"
					:key="index"
					:imageUrl="card.imageUrl"
					:image="card.image"
					:labels="card.labels"
					:tags="card.tags"
					:title="card.title"
					:reviews="card.reviews"
					:rate="card.rate"
					:address="card.address"
					:text="card.hiddenText"
				/>
			</div>
			<b-navi-buttons cls="catalog__navi">
				<div class="catalog__navi-count">Эксперты <span>1</span> - <span>12</span> из <span>124</span></div>
			</b-navi-buttons>
		</div>
	</template>
</b-layout-page>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import BLayoutPage from "components/frontend/layouts/BLayoutPage.vue";
import BCardExpert from "components/frontend/cards/BCardExpert.vue";
import BBreadcrumbs from "components/frontend/BBreadcrumbs.vue";
import BAsideFilter from "components/frontend/BAsideFilter.vue";
import BNaviButtons from "components/frontend/BNaviButtons.vue";

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
	cards: [
		{
			image: 'src/assets/images/intro-image-1.png',
			imageUrl: '/#/expert',
			labels: ['Бесплатная консультация'],
			tags: [
				{ name: 'Онлайн', href: './' },
				{ name: 'IT проекты', href: './' },
				{ name: 'Менеджмент', href: './' }
			],
			title: 'Акпантокпантура­р&shy;кожа Аккарагозайымсулу',
			rate: 2.2,
			reviews: '<span>25</span> отзывов',
			address: 'Алматы, Казахстан',
			hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>'
		},
		{
			image: 'src/assets/images/intro-image-1.png',
			imageUrl: '/#/expert',
			labels: ['Бесплатная консультация'],
			tags: [
				{ name: 'Онлайн', href: './' },
				{ name: 'IT проекты', href: './' },
				{ name: 'Менеджмент', href: './' }
			],
			title: 'Акпантокпантура­р&shy;кожа Аккарагозайымсулу',
			rate: 3.7,
			reviews: '<span>35</span> отзывов',
			address: 'Алматы, Казахстан',
			hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>'
		},
		{
			image: 'src/assets/images/intro-image-1.png',
			imageUrl: '/#/expert',
			labels: ['Бесплатная консультация'],
			tags: [
				{ name: 'Онлайн', href: './' },
				{ name: 'IT проекты', href: './' },
				{ name: 'Менеджмент', href: './' }

			],
			title: 'Акпантокпантура­р&shy;кожа Аккарагозайымсулу',
			rate: 2.6,
			reviews: '<span>30</span> отзывов',
			address: 'Алматы, Казахстан',
			hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>'
		},
		{
			image: 'src/assets/images/intro-image-1.png',
			imageUrl: '/#/expert',
			labels: ['Бесплатная консультация'],
			tags: [
				{ name: 'Онлайн', href: './' },
				{ name: 'IT проекты', href: './' },
				{ name: 'Менеджмент', href: './' }

			],
			title: 'Акпантокпантура­р&shy;кожа Аккарагозайымсулу',
			rate: 3.4,
			reviews: '<span>11</span> отзывов',
			address: 'Алматы, Казахстан',
			hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>'
		},
		{
			image: 'src/assets/images/intro-image-1.png',
			imageUrl: '/#/expert',
			labels: ['Бесплатная консультация'],
			tags: [
				{ name: 'Онлайн', href: './' },
				{ name: 'IT проекты', href: './' },
				{ name: 'Менеджмент', href: './' }
			],
			title: 'Акпантокпантура­р&shy;кожа Аккарагозайымсулу',
			rate: 4.8,
			reviews: '<span>15</span> отзывов',
			address: 'Алматы, Казахстан',
			hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>'
		},
		{
			image: 'src/assets/images/intro-image-1.png',
			imageUrl: '/#/expert',
			labels: ['Бесплатная консультация'],
			tags: [
				{ name: 'Онлайн', href: './' },
				{ name: 'IT проекты', href: './' },
				{ name: 'Менеджмент', href: './' }
			],
			title: 'Акпантокпантура­р&shy;кожа Аккарагозайымсулу',
			rate: 4.8,
			reviews: '<span>15</span> отзывов',
			address: 'Алматы, Казахстан',
			hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>'
		},
		{
			image: 'src/assets/images/intro-image-1.png',
			imageUrl: '/#/expert',
			labels: ['Бесплатная консультация'],
			tags: [
				{ name: 'Онлайн', href: './' },
				{ name: 'IT проекты', href: './' },
				{ name: 'Менеджмент', href: './' }
			],
			title: 'Акпантокпантура­р&shy;кожа Аккарагозайымсулу',
			rate: 4.8,
			reviews: '<span>15</span> отзывов',
			address: 'Алматы, Казахстан',
			hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>'
		},
		{
			image: 'src/assets/images/intro-image-1.png',
			imageUrl: '/#/expert',
			labels: ['Бесплатная консультация'],
			tags: [
				{ name: 'Онлайн', href: './' },
				{ name: 'IT проекты', href: './' },
				{ name: 'Менеджмент', href: './' }
			],
			title: 'Акпантокпантура­р&shy;кожа Аккарагозайымсулу',
			rate: 4.8,
			reviews: '<span>15</span> отзывов',
			address: 'Алматы, Казахстан',
			hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>'
		},
		{
			image: 'src/assets/images/intro-image-1.png',
			imageUrl: '/#/expert',
			labels: ['Бесплатная консультация'],
			tags: [
				{ name: 'Онлайн', href: './' },
				{ name: 'IT проекты', href: './' },
				{ name: 'Менеджмент', href: './' }
			],
			title: 'Акпантокпантура­р&shy;кожа Аккарагозайымсулу',
			rate: 4.8,
			reviews: '<span>15</span> отзывов',
			address: 'Алматы, Казахстан',
			hiddenText: '<p>Тенденции на рынке труда, Новые требования к аналитикам, Личный опыт, Реальные приме...</p>'
		}
	]
});

export default defineComponent({
	name: 'ExpertsPage',
	components: {
		BBreadcrumbs, 
		BLayoutPage, 
		BAsideFilter, 
		BNaviButtons, 
		BCardExpert
	},
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
				if ('range' in block) block.range = {};
				if ('search' in block) block.search = '';
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