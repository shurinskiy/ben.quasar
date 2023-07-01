<template>
<b-breadcrumbs>
	<a href="./">Главная страница</a>
	<span>О проекте</span>
</b-breadcrumbs>


<b-section-members 
	:cards="incomingData.members.cards"
	:title="incomingData.members.title"
	:text="incomingData.members.text"
/>


<b-content>
	<h2 class="content__title">Ознакомьтесь с материалом, который поможет вам взаимодействовать с BEN</h2>
	<p>Все события: от выставок, конференций, марафонов, форумов, коммерческих и бесплатных мастер-классов до индивидуальных встреч и консалтинга от бизнес-экспертов со всех уголков мира теперь доступны внутри одного ресурса.</p>
	<div class="content__cards">
		<b-card
			cls="content__card"
			v-for="(card, index) in incomingData.cards" :key="index"
			:image="card.image"
			:tags="card.tags"
			:url="card.url"
			:sign="card.sign"
			:title="card.title"
			:text="card.text"
		/>
	</div>
</b-content>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import BSectionMembers from "components/frontend/sections/BSectionMembers.vue";
import BBreadcrumbs from "components/frontend/BBreadcrumbs.vue";
import BCard from "components/frontend/cards/BCard.vue";
import BContent from "components/frontend/BContent.vue";

const incomingData = reactive({
	cards: [
		{
			image: 'src/assets/images/intro-image-1.png',
			url: '/#/event',
			tags: [
				{
					name: 'О BEN',
					href: './'
				},
				{
					name: 'Полезно знать',
					href: './'
				}
			],
			title: 'Как создать событие и начать продавать билеты?',
			text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Etiam eu turpis molestie, dictum <a href="./">Читать далее...</a></p>',
			sign: {
				url: './',
				img: 'src/assets/images/avatar-default.png',
				text: 'Автор сего текста',
				date: '2 дня назад'
			}
		},
		{
			image: 'src/assets/images/intro-image-3.png',
			url: '/#/event',
			tags: [
				{
					name: 'О BEN',
					href: './'
				},
				{
					name: 'Полезно знать',
					href: './'
				}
			],
			title: 'Как создать событие и начать продавать билеты?',
			text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Etiam eu turpis molestie, dictum <a href="./">Читать далее...</a></p>',
			sign: {
				url: './',
				img: 'src/assets/images/avatar-default.png',
				text: 'Автор сего текста',
				date: '2 дня назад'
			}
		},
		{
			image: 'src/assets/images/intro-image-4.png',
			url: '/#/event',
			tags: [
				{
					name: 'О BEN',
					href: './'
				},
				{
					name: 'Полезно знать',
					href: './'
				}
			],
			title: 'Как создать событие и начать продавать билеты?',
			text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Etiam eu turpis molestie, dictum <a href="./">Читать далее...</a></p>',
			sign: {
				url: './',
				img: 'src/assets/images/avatar-default.png',
				text: 'Автор сего текста',
				date: '2 дня назад'
			}
		}
	],
	members: {
		title: 'Развиваем  бизнес и его владельцев через деловые события',
		text: '<p><strong>Проект BUSINESS EVENT NETWORK (BEN)</strong> – это глобальная платформа для продвижения и продажи билетов на деловые события. BEN позволяет каждому создавать, делиться, находить и посещать мероприятия, которые помогают развивать бизнес, находить партнеров и экспертов. Мы стремимся создать комьюнити для тех, кто испытывает потребность в новой информации, следит за трендами развития бизнеса и нуждается в постоянном повышении профессиональной квалификации. Наша миссия  - помочь предпринимателям увидеть новые возможности и ресурсы для своих компаний, получить доступ к опыту экспертов и исполнить свои мечты.</p>',
		cards: [
			{
				front: {
					image: 'src/assets/images/members-image-1.png',
					title: 'Участникам деловых событий',
					text: 'Пройдите стандартную регистрацию и получайте сведения о деловых событиях первыми'
				},
				back: {
					title: 'Участникам деловых событий',
					text: '<ul><li>Находите события по вашей тематике и быстро решайте бизнес задачи</li><li>Записывайтесь на бесплатные консультации к бизнес-экспертам</li><li>Получите кратный рост бизнеса за счет опыта и знаний практиков</li></ul>',
					note: 'Более 3 000 мероприятий на площадке',
					link: {
						name: 'Стать участником',
						href: './'
					}
				}
			},
			{
				front: {
					image: 'src/assets/images/members-image-2.png',
					title: 'Организа&shy;торам событий',
					text: 'Пройдите стандартную регистрацию и получайте сведения о деловых событиях первыми'
				},
				back: {
					title: 'Организаторам событий',
					text: '<ul><li>Привлекайте реальных участников деловых мероприятий</li><li>Находите и приглашайте надёжных и проверенных экспертов на ваши события</li><li>Повышайте узнаваемость бренда и экономьте на маркетинге</li></ul>',
					note: 'Более 40 000 реальных предпринимателей из 6 стран',
					link: {
						name: 'Стать организатором',
						href: './'
					}
				}
			},
			{
				front: {
					image: 'src/assets/images/members-image-3.png',
					title: 'Экспертам',
					text: 'Пройдите стандартную регистрацию и получайте сведения о деловых событиях первыми'
				},
				back: {
					title: 'Экспертам',
					text: '<ul><li>Получайте запись на консультации от реальных клиентов</li><li>Становитесь участниками и приглашёнными спикерами на мероприятиях</li><li>Размещайте свои мастер-классы и тренинги на площадке для бизнес активной аудитории</li></ul>',
					note: 'Более 2 000 экспертов из 11 стран',
					link: {
						name: 'Стать участником',
						href: './'
					}
				}
			}
		]
	}
});

export default defineComponent({
	name: 'AboutPage',
	components: {
		BSectionMembers, 
		BBreadcrumbs, 
		BContent,
		BCard
	},
	setup() {
		return { incomingData }
	}
})
</script>