<template>
<b-breadcrumbs>
	<a href="./">Главная страница</a>
	<span>Блог</span>
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
			<div class="catalog__feed">
				<b-card-article
					v-for="(card, index) in incomingData.atricles"
					cls="catalog__item"
					:key="index"
					:image="card.image.img"
					:imageUrl="card.image.url"
					:tags="card.tags"
					:title="card.title"
					:text="card.text"
					:avatar="card.avatar.image"
					:avatarUrl="card.avatar.url"
					:avatarText="card.avatar.text"
					:date="card.avatar.date"
					reverse
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
import BCardArticle from "components/frontend/cards/BCardArticle.vue";
import BBreadcrumbs from "components/frontend/BBreadcrumbs.vue";
import BAsideFilter from "components/frontend/BAsideFilter.vue";
import BNaviButtons from "components/frontend/BNaviButtons.vue";

const incomingData = reactive({
	filters: [
		{
			title: 'Формат',
			hidden: 5,
			buttons: [
				{
					name: 'Новости',
					value: 'news',
					active: false
				},
				{
					name: 'Статьи',
					value: 'articles',
					active: false
				},
				{
					name: 'Кейсы',
					value: 'cases',
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
	atricles: [
		{
			title: 'Самая большая проблема Метавселенной? Никто не знает, что это значит',
			image: {
				img: 'src/assets/images/intro-image-3.png',
				url: '/#/article'
			},
			tags: [
				{
					href: './',
					name: 'Статьи'
				},
				{
					href: './',
					name: 'Дополненная реальность'
				}
			],
			text: 'Тенденции на рынке труда, Новые требования к аналитикам, личный опыт, реальные примеры',
			avatar: {
				image: 'src/assets/images/avatar-default.png',
				url: './',
				text: 'Автор сего текста',
				date: '2 дня назад'
			},
		},
		{
			title: 'Самая большая проблема Метавселенной? Никто не знает, что это значит',
			image: {
				img: 'src/assets/images/intro-image-3.png',
				url: '/#/article'
			},
			tags: [
				{
					href: './',
					name: 'Статьи'
				},
				{
					href: './',
					name: 'Дополненная реальность'
				}
			],
			text: 'Тенденции на рынке труда, Новые требования к аналитикам, личный опыт, реальные примеры',
			avatar: {
				image: 'src/assets/images/avatar-default.png',
				url: './',
				text: 'Автор сего текста',
				date: '2 дня назад'
			},
		},
		{
			title: 'Самая большая проблема Метавселенной? Никто не знает, что это значит',
			image: {
				img: 'src/assets/images/intro-image-4.png',
				url: '/#/article'
			},
			tags: [
				{
					href: './',
					name: 'Статьи'
				},
				{
					href: './',
					name: 'Дополненная реальность'
				}
			],
			text: 'Тенденции на рынке труда, Новые требования к аналитикам, личный опыт, реальные примеры',
			avatar: {
				image: 'src/assets/images/avatar-default.png',
				url: './',
				text: 'Автор сего текста',
				date: '2 дня назад'
			},
		},
		{
			title: 'Самая большая проблема Метавселенной? Никто не знает, что это значит',
			image: {
				img: 'src/assets/images/intro-image-4.png',
				url: '/#/article'
			},
			tags: [
				{
					href: './',
					name: 'Статьи'
				},
				{
					href: './',
					name: 'Дополненная реальность'
				}
			],
			text: 'Тенденции на рынке труда, Новые требования к аналитикам, личный опыт, реальные примеры',
			avatar: {
				image: 'src/assets/images/avatar-default.png',
				url: './',
				text: 'Автор сего текста',
				date: '2 дня назад'
			},
		},
		{
			title: 'Самая большая проблема Метавселенной? Никто не знает, что это значит',
			image: {
				img: 'src/assets/images/intro-image-4.png',
				url: '/#/article'
			},
			tags: [
				{
					href: './',
					name: 'Статьи'
				},
				{
					href: './',
					name: 'Дополненная реальность'
				}
			],
			text: 'Тенденции на рынке труда, Новые требования к аналитикам, личный опыт, реальные примеры',
			avatar: {
				image: 'src/assets/images/avatar-default.png',
				url: './',
				text: 'Автор сего текста',
				date: '2 дня назад'
			},
		},
		{
			title: 'Самая большая проблема Метавселенной? Никто не знает, что это значит',
			image: {
				img: 'src/assets/images/intro-image-4.png',
				url: '/#/article'
			},
			tags: [
				{
					href: './',
					name: 'Статьи'
				},
				{
					href: './',
					name: 'Дополненная реальность'
				}
			],
			text: 'Тенденции на рынке труда, Новые требования к аналитикам, личный опыт, реальные примеры',
			avatar: {
				image: 'src/assets/images/avatar-default.png',
				url: './',
				text: 'Автор сего текста',
				date: '2 дня назад'
			},
		},
		{
			title: 'Самая большая проблема Метавселенной? Никто не знает, что это значит',
			image: {
				img: 'src/assets/images/intro-image-4.png',
				url: '/#/article'
			},
			tags: [
				{
					href: './',
					name: 'Статьи'
				},
				{
					href: './',
					name: 'Дополненная реальность'
				}
			],
			text: 'Тенденции на рынке труда, Новые требования к аналитикам, личный опыт, реальные примеры',
			avatar: {
				image: 'src/assets/images/avatar-default.png',
				url: './',
				text: 'Автор сего текста',
				date: '2 дня назад'
			},
		}
	]
});

export default defineComponent({
	name: 'BlogPage',
	components: { 
		BBreadcrumbs, 
		BLayoutPage, 
		BAsideFilter, 
		BNaviButtons, 
		BCardArticle
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