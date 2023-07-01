<template>
<b-breadcrumbs>
	<a href="/#/">Главная страница</a>
	<a href="/#/experts">Эксперты</a>
	<span>Эксперт</span>
</b-breadcrumbs>


<b-section-intro
	:title="incomingData.intro.title"
	:imageUrl="incomingData.intro.imageUrl"
	:info="incomingData.intro.info"
	:text="incomingData.intro.text"
	:price="incomingData.intro.price"
	:labels="incomingData.intro.labels"
	:barButtons="incomingData.intro.barButtons"
	:share="incomingData.intro.share"
	@barButtonClick="introBarButtonHandler"
>
	<template #tags>
		<b-tag 
			v-for="(tag, index) in incomingData.intro.tags" 
			:key="index" 
			:href="tag.href"
			cls="tag_fade tag_mid"
		>{{ tag.title }}</b-tag>
	</template>
</b-section-intro>


<b-content>
	<h3>О себе</h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat elementum. Cras posuere faucibus eros, at pulvinar felis ultrices quis. Quisque varius, dui eget facilisis porttitor, nisi enim sollicitudin quam, eget tempor turpis purus condimentum diam. Aenean ultricies tellus quis nunc tincidunt, ac tincidunt nibh blandit. Donec ac dolor mauris. Praesent tristique congue diam, ac bibendum sapien ornare condimentum. Quisque elit nunc, tincidunt vitae accumsan ac, scelerisque a nisi. Aliquam imperdiet lorem ligula, non vestibulum augue sollicitudin in. Proin euismod justo erat, ut porta eros auctor ut. Nunc tincidunt ornare est, eu eleifend enim fringilla vitae. Nam vestibulum elit quis dolor fermentum, eu sodales massa dapibus. Nunc et mattis dui.</p>
	<p>Duis id dignissim dolor, vel eleifend mi. Donec laoreet, sapien euismod venenatis fermentum, arcu nisi fringilla elit, in dapibus quam mi nec quam. Phasellus convallis arcu eu urna pellentesque maximus. Suspendisse potenti. Pellentesque ac erat justo. Sed lacinia ultrices tortor, in laoreet massa tempor ac. Donec orci neque, posuere nec ante sed, rutrum faucibus felis. Suspendisse non orci velit.</p>

	<h3>Образование</h3>
	<ul>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
	</ul>

	<h3>Опыт работы</h3>
	<ul>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
	</ul>

	<h3>Клиенты</h3>
	<ul>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
	</ul>

	<h3>Проекты</h3>
	<ul>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
	</ul>
</b-content>


<b-section-videos :title="incomingData.videos.title" >
	<template #slides>
		<div 
			class="videos__slide swiper-slide"
			v-for="(slide, index) in incomingData.videos.slides" 
			:key="index" 
		>
			<b-video 
				cls="videos__box"
				:url="slide.url"
				:playing="slide.play"
				:background="slide.background"
				@click="videosToggle(index)"
			/>
			<div class="videos__text">{{ slide.text }}</div>
		</div>
	</template>
</b-section-videos>


<b-section-photos :title="incomingData.photos.title">
	<template #slides>
		<div 
			class="photos__slide swiper-slide"
			v-for="(slide, index) in incomingData.photos.slides" 
			:key="index"
			@click="carouselOpen(index)"			
		><img :src="slide" alt=""></div>
	</template>
</b-section-photos>


<b-section-reviews 
	:title="incomingData.reviews.title.name" 
	:title_link_url="incomingData.reviews.title.link" 
	:title_link_text="incomingData.reviews.title.text"
	>
	<template #slides>
		<b-card-review
			cls="reviews__slide swiper-slide"
			v-for="(slide, index) in incomingData.reviews.slides" 
			:key="index"
			:title="slide.title"
			:rate="slide.rate"
			:aprove="slide.aprove"
			:rows="slide.rows"
			@click="reviewAdviceToggle(index)"
		/>
	</template>
</b-section-reviews>


<b-section-articles 
	:title="incomingData.articles.title.name" 
	:title_link_url="incomingData.articles.title.link"
>
	<template #cards>
		<b-card-article
			v-for="(card, index) in incomingData.articles.cards" 
			:key="index"
			:title="card.title"
			:image="card.image"
			:imageUrl="card.imageUrl"
			:text="card.text"
			:tags="card.tags"
			:avatar="card.avatar"
			:avatarText="card.avatarText"
			:avatarUrl="card.avatarUrl"
			:date="card.date"
			:moreUrl="card.moreUrl"
		/>
	</template>
</b-section-articles>


<b-section-feed 
	:title="incomingData.feedExperts.title.name" 
	:title_link_url="incomingData.feedExperts.title.link"
>
	<template #slides>
		<b-card-expert
			v-for="(slide, index) in incomingData.feedExperts.slides"
			cls="feed__slide swiper-slide"
			:key="index"
			:imageUrl="slide.imageUrl"
			:image="slide.image"
			:label="slide.label"
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


<q-dialog v-model="carousel" transition-duration="500">
	<b-carousel
		:slides="incomingData.photos.slides"
		:current="activeSlide"
	/>
</q-dialog>


<q-dialog v-model="appoint" transition-duration="500">
	<b-modal-appoint
		:date="incomingData.appoint.date"
		:time="incomingData.appoint.time"
		v-model:date="incomingData.appoint.date"
		v-model:time="incomingData.appoint.time"
	/>
</q-dialog>
</template>

<script>
import { ref, reactive, defineComponent } from 'vue'
import BContent from "components/frontend/BContent.vue";
import BCardExpert from "components/frontend/cards/BCardExpert.vue";
import BSectionFeed from "components/frontend/sections/BSectionFeed.vue";
import BSectionVideos from "components/frontend/sections/BSectionVideos.vue";
import BSectionReviews from "components/frontend/sections/BSectionReviews.vue";
import BSectionArticles from "components/frontend/sections/BSectionArticles.vue";
import BSectionPhotos from "components/frontend/sections/BSectionPhotos.vue";
import BSectionIntro from "components/frontend/sections/BSectionIntro.vue";
import BModalAppoint from "components/frontend/modals/BModalAppoint.vue";
import BCardArticle from "components/frontend/cards/BCardArticle.vue";
import BCardReview from "components/frontend/cards/BCardReview.vue";
import BBreadcrumbs from "components/frontend/BBreadcrumbs.vue";
import BCarousel from "components/frontend/BCarousel.vue";
import BVideo from "components/frontend/BVideo.vue";
import BTag from "components/frontend/BTag.vue";

const incomingData = reactive({
	intro: {
		title: "Акпантокпантурар&shy;кожа Аккарагозайымсулу",
		imageUrl: "src/assets/images/intro-image-1.png",
		info: {
			rate: 4.1,
			address: {
				text: "Алматы, Казахстан",
				href: "./"
			},
		},
		tags: [
			{
				title: 'Онлайн',
				href: './'
			},
			{
				title: 'IT проекты',
				href: './'
			},
			{
				title: 'Менеджмент',
				href: './'
			}
		],
		barButtons: [
			{ 
				title: 'Записаться'
			},
			{ 
				title: 'Связаться', 
				cls: 'button_clean'
			}
		],
		labels: [ 'Бесплатная консультация'],
		text: "<p>Серийный предприниматель в сфере IT, строительства. Автоматизация бизнеса. Оборот 350+ млн. тг/год. Серийный предприниматель в сфере IT, строительства. Автоматизация бизнеса. Оборот 350+ млн. тг/год.</p>",
		price: "Бесплатно",
		share: ['./', './']
	},
	videos: {
		title: 'Видео эксперта',
		slides: [
			{
				url: 'https://www.youtube.com/embed/11cuatZm8K8?autoplay=1',
				background: 'https://i.ytimg.com/vi/11cuatZm8K8/sddefault.jpg',
				play: false,
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat'
			},
			{
				url: 'https://www.youtube.com/embed/11cuatZm8K8?autoplay=1',
				background: 'https://i.ytimg.com/vi/11cuatZm8K8/sddefault.jpg',
				play: false,
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat'
			},
			{
				url: 'https://www.youtube.com/embed/11cuatZm8K8?autoplay=1',
				background: 'https://i.ytimg.com/vi/11cuatZm8K8/sddefault.jpg',
				play: false,
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat'
			},
			{
				url: 'https://www.youtube.com/embed/11cuatZm8K8?autoplay=1',
				background: 'https://i.ytimg.com/vi/11cuatZm8K8/sddefault.jpg',
				play: false,
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat'
			},
			{
				url: 'https://www.youtube.com/embed/11cuatZm8K8?autoplay=1',
				background: 'https://i.ytimg.com/vi/11cuatZm8K8/sddefault.jpg',
				play: false,
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat'
			}
		]
	},
	photos: {
		title: 'Фотографии эксперта',
		slides: [
			'src/assets/images/intro-image-1.png',
			'src/assets/images/intro-image-3.png',
			'src/assets/images/intro-image-4.png',
			'src/assets/images/intro-image-1.png',
			'src/assets/images/intro-image-3.png',
			'src/assets/images/intro-image-4.png'
		]
	},
	feedExperts: {
		title: {
			name: 'Похожие эксперты',
			link: '/#/experts'
		},
		slides: [
			{
				image: 'src/assets/images/intro-image-1.png',
				imageUrl: '/#/expert',
				label: 'Бесплатная консультация',
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
				label: 'Бесплатная консультация',
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
				label: 'Бесплатная консультация',
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
				label: 'Бесплатная консультация',
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
				label: 'Бесплатная консультация',
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
	reviews: {
		title: {
			name: 'Отзывы',
			link: './',
			text: 'оставить свой...'
		},
		slides: [
			{
				title: 'Акпантокпантурар&shy;кожа Аккарагозайымсулу',
				aprove: true,
				rate: 3.8,
				rows: [
					{
						title: 'Какой запрос',
						text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit at</p>'
					},
					{
						title: 'Какой результат',
						text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>'
					},
					{
						title: 'Комментарий',
						text: '<p>Aenean condimentum metus ut volutpat elementum. Cras posuere faucibus eros, at pulvinar felis ultrices quis.</p>'
					}
				]
			},
			{
				title: 'Акпантокпантурар&shy;кожа Аккарагозайымсулу',
				aprove: true,
				rate: 4.8,
				rows: [
					{
						title: 'Какой запрос',
						text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit at</p>'
					},
					{
						title: 'Какой результат',
						text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>'
					},
					{
						title: 'Комментарий',
						text: '<p>Aenean condimentum metus ut volutpat elementum. Cras posuere faucibus eros, at pulvinar felis ultrices quis.</p>'
					}
				]
			},
			{
				title: 'Акпантокпантурар&shy;кожа Аккарагозайымсулу',
				aprove: true,
				rate: 3.2,
				rows: [
					{
						title: 'Какой запрос',
						text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit at</p>'
					},
					{
						title: 'Какой результат',
						text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>'
					}
				]
			},
			{
				title: 'Акпантокпантурар&shy;кожа Аккарагозайымсулу',
				aprove: false,
				rate: 2.4,
				rows: [
					{
						title: 'Какой запрос',
						text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit at</p>'
					},
					{
						title: 'Какой результат',
						text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>'
					},
					{
						title: 'Комментарий',
						text: '<p>Aenean condimentum metus ut volutpat elementum. Cras posuere faucibus eros, at pulvinar felis ultrices quis.</p>'
					}
				]
			},
			{
				title: 'Акпантокпантурар&shy;кожа Аккарагозайымсулу',
				aprove: false,
				rate: 1.8,
				rows: [
					{
						title: 'Какой запрос',
						text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit at</p>'
					},
					{
						title: 'Какой результат',
						text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>'
					}
				]
			}

		]
	},
	articles: {
		title: {
			name: 'Статьи эксперта',
			link: './',
		},
		cards: [
			{
				title: 'Длинный заголовок максимум в две строки Длинный заголовок',
				image: 'src/assets/images/teaser-image-1.jpg',
				imageUrl: './',
				avatar: 'src/assets/images/avatar-default.png',
				avatarUrl: './',
				avatarText: 'Название компании',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
				date: '2 дня назад',
				tags: [
					{
						name: 'Кейс',
						href: './'
					}
				],
				moreUrl: './'
			},
			{
				title: 'Длинный заголовок максимум в две строки Длинный заголовок',
				image: 'src/assets/images/teaser-image-2.jpg',
				imageUrl: './',
				avatar: 'src/assets/images/avatar-default.png',
				avatarUrl: './',
				avatarText: 'Название компании',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
				date: '2 дня назад',
				tags: [
					{
						name: 'Статья',
						href: './'
					}
				],
				moreUrl: './'
			}
		]
	},
	appoint: {
		date: '',
		time: 900
	}
});

export default defineComponent({
	name: 'ExpertPage',
	components: { 
		BContent, 
		BCardExpert, 
		BCardReview,
		BBreadcrumbs, 
		BSectionFeed, 
		BSectionIntro, 
		BSectionVideos, 
		BSectionReviews,
		BSectionArticles,
		BSectionPhotos,
		BModalAppoint,
		BCardArticle,
		BCarousel,
		BVideo,
		BTag, 
	},
	setup() {
		const activeSlide = ref(0);
		const carousel = ref(false);
		const appoint = ref(false);

		const introBarButtonHandler = (idx) => {
			switch (idx) {
				case 0: appoint.value = true;
					break;
			
				case 1: console.log(idx);
					break;
			
				default: break;
			}
		}

		const reviewAdviceToggle = (i) => {
			let slides = incomingData.reviews.slides;
			slides[i].aprove = !slides[i].aprove;
		}

		const videosToggle = (i) => {
			let slides = incomingData.videos.slides;
			
			slides.forEach(slide => slide.play = false);
			slides[i].play = true;
		}

		const carouselOpen = (i) => {
			activeSlide.value = i;
			carousel.value = true;
		}

		return { 
			incomingData,
			videosToggle,
			reviewAdviceToggle,
			introBarButtonHandler,
			carouselOpen,
			activeSlide,
			carousel,
			appoint
		}
	}
})
</script>