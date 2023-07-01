<template>
<b-section-hero>
	<a
		v-for="(slide, index) in incomingData.heroSlides" 
		class="hero__slide swiper-slide" 
		:href="slide.href"
		:key="index"
	>
		<img :src="slide.image" alt="">
	</a>
</b-section-hero>


<b-section-feed 
	:title="incomingData.feedEvents.title.name" 
	:title_link_url="incomingData.feedEvents.title.href"
>
	<template #tags>
		<b-tag
			v-for="(tag, index) in incomingData.feedEvents.tags" 
			:class="['feed__tag tag_base tag_hovered', { 'active': tag.active }]"
			:key="index"
			:href="tag.href"
		>{{ tag.title }}</b-tag>
	</template>

	<template #slides>
		<b-card-event
			v-for="(slide, index) in incomingData.feedEvents.slides"
			cls="feed__slide swiper-slide"
			:key="index"
			:image="slide.image"
			:imageUrl="slide.imageUrl"
			:labels="slide.labels"
			:date="slide.date"
			:title="slide.title"
			:price="slide.price"
			:name="slide.name"
			:nameAvatar="slide.nameAvatar"
			:nameUrl="slide.nameUrl"
			:text="slide.hiddenText"
			:address="slide.hiddenAddress"
		/>
		<a class="card feed__slide feed__slide_last swiper-slide" href="./">
			<span>Смотреть<br> все события</span>
		</a>
	</template>
</b-section-feed>


<b-section-feed :title="incomingData.feedExperts.title.name" :title_link_url="incomingData.feedExperts.title.href">
	<template #tags>
		<b-tag
			v-for="(tag, index) in incomingData.feedExperts.tags" 
			:class="['feed__tag tag_base tag_hovered', { 'active': tag.active }]"
			:key="index"
			:href="tag.href"
		>{{ tag.title }}</b-tag>
	</template>

	<template #slides>
		<b-card-expert
			v-for="(slide, index) in incomingData.feedExperts.slides"
			cls="feed__slide swiper-slide"
			:key="index"
			:imageUrl="slide.imageUrl"
			:image="slide.image"
			:labels="slide.labels"
			:tags="slide.tags"
			:title="slide.title"
			:reviews="slide.reviews"
			:rate="slide.rate"
			:address="slide.address"
			:text="slide.hiddenText"
		/>
		<a class="card feed__slide feed__slide_last swiper-slide" href="./">
			<span>Смотреть<br> всеx экспертов</span>
		</a>
	</template>
</b-section-feed>


<b-section-partners :title="incomingData.feedPartners.title">
	<a 
		v-for="(slide, index) in incomingData.feedPartners.slides" 
		class="partners__slide swiper-slide" 
		:href="slide.href"
		:key="index" 
	>
		<img :src="slide.image" alt="">
	</a>
</b-section-partners>

</template>

<script>
import { defineComponent } from 'vue'
import BSectionPartners from "components/frontend/sections/BSectionPartners.vue";
import BSectionHero from "components/frontend/sections/BSectionHero.vue";
import BSectionFeed from "components/frontend/sections/BSectionFeed.vue";
import BCardExpert from "components/frontend/cards/BCardExpert.vue";
import BCardEvent from "components/frontend/cards/BCardEvent.vue";
import BTag from "components/frontend/BTag.vue";

const incomingData = {
	heroSlides: [
		{
			image: 'src/assets/images/hero-image-1.png',
			href: './'
		},
		{
			image: 'src/assets/images/hero-image-2.png',
			href: './'
		}
	],
	feedEvents: {
		title: {
			name: 'События',
			href: './'
		},
		tags: [
			{
				title: 'Ближайшие',
				active: true,
				href: './',
			},
			{
				title: 'В Алматы',
				href: './',
			},
			{
				title: 'В Астане',
				href: './',
			},
			{
				title: 'Онлайн',
				href: './',
			},
			{
				title: 'Оффлайн',
				href: './',
			},
			{
				title: 'Бесплатные',
				href: './',
			},
			{
				title: 'Платные',
				href: './',
			}
		],
		slides: [
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
		]
	},
	feedExperts: {
		title: {
			name: 'Эксперты',
			href: '/#/experts'
		},
		tags: [
			{
				title: 'IT проекты',
				active: true,
				href: './',
			},
			{
				title: 'Маркетинг',
				href: './',
			},
			{
				title: 'Ритейл',
				href: './',
			},
			{
				title: 'Продажи',
				href: './',
			},
			{
				title: 'Менеджмент',
				href: './',
			},
			{
				title: 'Консалтинг',
				href: './',
			},
			{
				title: 'Финансы',
				href: './',
			}
		],
		slides: [
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
			}
		]
	},
	feedPartners: {
		title: 'С нами работают:',
		slides: [
			{ image: 'src/assets/images/partner-image-1.png', href: './'},
			{ image: 'src/assets/images/partner-image-5.png', href: './'},
			{ image: 'src/assets/images/partner-image-2.png', href: './'},
			{ image: 'src/assets/images/partner-image-6.png', href: './'},
			{ image: 'src/assets/images/partner-image-3.png', href: './'},
			{ image: 'src/assets/images/partner-image-1.png', href: './'},
			{ image: 'src/assets/images/partner-image-4.png', href: './'},
			{ image: 'src/assets/images/partner-image-2.png', href: './'},
			{ image: 'src/assets/images/partner-image-3.png', href: './'},
			{ image: 'src/assets/images/partner-image-4.png', href: './'},
			{ image: 'src/assets/images/partner-image-5.png', href: './'},
			{ image: 'src/assets/images/partner-image-6.png', href: './'}
		]
	}
};

export default defineComponent({
	name: 'IndexPage',
	components: { BSectionHero, BSectionFeed, BCardEvent, BCardExpert, BSectionPartners, BTag },
	setup() {
		return { incomingData }
	}
})
</script>