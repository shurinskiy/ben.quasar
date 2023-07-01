<template>
<b-breadcrumbs>
	<a href="/#/">Главная страница</a>
	<a href="/#/events">События</a>
	<span>Событие</span>
</b-breadcrumbs>


<b-section-intro
	:title="incomingData.intro.title"
	:imageUrl="incomingData.intro.imageUrl"
	:text="incomingData.intro.text"
	:avatar="incomingData.intro.avatar"
	:price="incomingData.intro.price"
	:labels="incomingData.intro.labels"
	:barButtons="incomingData.intro.barButtons"
	:bottom="incomingData.intro.bottom"
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
	<h2 class="content__title">Описание</h2>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat elementum. Cras posuere faucibus eros, at pulvinar felis ultrices quis. Quisque varius, dui eget facilisis porttitor, nisi enim sollicitudin quam, eget tempor turpis purus condimentum diam. Aenean ultricies tellus quis nunc tincidunt, ac tincidunt nibh blandit. Donec ac dolor mauris. Praesent tristique congue diam, ac bibendum sapien ornare condimentum. Quisque elit nunc, tincidunt vitae accumsan ac, scelerisque a nisi. Praesent tristique congue diam, ac bibendum sapien ornare condimentum. Quisque elit nunc, tincidunt vitae accumsan ac, scelerisque a nisi. Praesent tristique congue diam, ac bibendum sapien ornare condimentum.</p>

	<div class="content__cols">
		<div class="content__col">
			<h2 class="content__title">Для кого?</h2>
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.</li>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.</li>
			</ul>
		</div>
		<div class="content__col">
			<h2 class="content__title">Что получите?</h2>
			<ul>
				<li>Consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
				<li>Consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
				<li>Consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
				<li>Consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
			</ul>
		</div>
	</div>
</b-content>


<b-section-feed 
	:title="incomingData.feedSpeakers.title.name" 
>
	<template #slides>
		<b-card-speaker
			v-for="(slide, index) in incomingData.feedSpeakers.slides"
			cls="feed__slide swiper-slide"
			:key="index"
			:url="slide.url"
			:text="slide.text"
			:image="slide.image"
			:name="slide.name"
		/>
	</template>
</b-section-feed>


<b-section-program
	:title="incomingData.program.title"
	:events="incomingData.program.events"
></b-section-program>


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


<b-cashbox
	cls="cashbox_page"
	:title="incomingData.cashbox.title"
	:date="incomingData.cashbox.date"
	:price="incomingData.cashbox.price"
	:count="incomingData.cashbox.count"
	:max="incomingData.cashbox.max"
	v-model:count="incomingData.cashbox.count"
/>


<b-section-feed 
	:title="incomingData.feedEvents.title.name" 
	:title_link_url="incomingData.feedEvents.title.href"
>

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


<b-section-articles 
	:title="incomingData.articles.title.name" 
	:title_link_url="incomingData.articles.title.link"
>
	<template #cards>
		<b-card-article
			v-for="(card, index) in incomingData.articles.cards" 
			:key="index"
			:tags="card.tags"
			:text="card.text"
			:title="card.title"
			:image="card.image"
			:imageUrl="card.imageUrl"
			:avatarUrl="card.avatarUrl"
			:avatarText="card.avatarText"
			:moreUrl="card.moreUrl"
			:avatar="card.avatar"
			:date="card.date"
		/>
	</template>
</b-section-articles>


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
import BCardEvent from "components/frontend/cards/BCardEvent.vue";
import BSectionFeed from "components/frontend/sections/BSectionFeed.vue";
import BSectionArticles from "components/frontend/sections/BSectionArticles.vue";
import BSectionProgram from "components/frontend/sections/BSectionProgram.vue";
import BSectionPhotos from "components/frontend/sections/BSectionPhotos.vue";
import BSectionIntro from "components/frontend/sections/BSectionIntro.vue";
import BModalAppoint from "components/frontend/modals/BModalAppoint.vue";
import BCardArticle from "components/frontend/cards/BCardArticle.vue";
import BCardSpeaker from "components/frontend/cards/BCardSpeaker.vue";
import BBreadcrumbs from "components/frontend/BBreadcrumbs.vue";
import BCarousel from "components/frontend/BCarousel.vue";
import BCashbox from "components/frontend/BCashbox.vue";
import BTag from "components/frontend/BTag.vue";

const incomingData = reactive({
	intro: {
		title: "Выставка Kazcomak 2022",
		imageUrl: "src/assets/images/intro-image-3.png",
		tags: [
			{
				title: 'ЖКХ',
				href: './'
			},
			{
				title: 'Бесплатно',
				href: './'
			},
			{
				title: 'Строительство',
				href: './'
			},
			{
				title: 'Выставки',
				href: './'
			}
		],
		avatar: {
			img: 'src/assets/images/avatar-default.png',
			name: 'ООО "Организатор"',
			link: './'
		},
		barButtons: [
			{ 
				title: 'Записаться',
				mod: 'long'
			}
		],
		labels: [ 'Оффлайн', 'Завтра'],
		text: "<p>Казахстанская международная выставка &ldquo;Дорожное и промышленное строительство, коммунальная техника&rdquo;. Казахстанская международная выставка &ldquo;Дорожное и промышленное строительство, коммунальная техника&rdquo;</p>",
		price: "Бесплатно",
		share: ['./', './'],
		bottom: [
			{
				title: 'г. Алматы, ул. Тимирязева 42, КЦДС Атакент',
				link: 'Открыть карту',
				href: './',
				icon: 'location'
			},
			{
				title: '20 сентября 2022, 10:00 - 16:00',
				link: 'Открыть календарь',
				href: './',
				icon: 'date'
			}
		],
	},
	program: {
		title: 'Программа мероприятия',
		events: [
			{
				time: '10:00 - 11:00',
				theme: '<p>Оборудование и технологии Rolls Royce для нефтегазового сектора.</p>',
				speaker: '<p>Олжас Лукманов, Александр Малышев</p>',
				bottom: '<p>Кофебрейк (1 час)</p>'
			},
			{
				time: '12:00 - 13:00',
				theme: '<p>Оборудование и технологии Rolls Royce для нефтегазового сектора</p>',
				speaker: '<p>Олжас Лукманов, Александр Малышев</p>',
				bottom: '<p>Обед (2 часа)</p>'
			},
			{
				time: '14:00 - 15:30',
				theme: '<p>Оборудование и технологии Rolls Royce для нефтегазового сектора</p><ul><li>Оборудование и технологии Rolls Royce для нефтегазового сектора</li><li>Оборудование и технологии Rolls Royce для нефтегазового сектора</li><li>Оборудование и технологии Rolls Royce для нефтегазового сектора</li><li>Оборудование и технологии Rolls Royce для нефтегазового сектора</li><li>Оборудование и технологии Rolls Royce для нефтегазового сектора</li></ul>',
				speaker: '<p>Олжас Лукманов, Александр Малышев</p>',
			},
			{
				time: '15:30 - 16:00',
				theme: '<p>Оборудование и технологии Rolls Royce для нефтегазового сектора.</p>',
				speaker: '<p>Олжас Лукманов, Александр Малышев</p>',
			}
		]
	},
	photos: {
		title: 'Галерея события',
		slides: [
			'src/assets/images/intro-image-1.png',
			'src/assets/images/intro-image-3.png',
			'src/assets/images/intro-image-4.png',
			'src/assets/images/intro-image-1.png',
			'src/assets/images/intro-image-3.png',
			'src/assets/images/intro-image-4.png'
		]
	},
	feedSpeakers: {
		title: {
			name: 'Спикеры:',
		},
		slides: [
			{
				image: 'src/assets/images/speaker-image-1.png',
				url: './',
				name: 'Акпантокпантура&shy;ркожа Аккарагозайымсулу',
				text: '<p>Серийный предприниматель в сфере IT, строительства. Автоматизация бизнеса.</p>'
			},
			{
				image: 'src/assets/images/speaker-image-2.png',
				url: './',
				name: 'Алёна Пак',
				text: '<p>Серийный предприниматель в сфере IT, строительства. Автоматизация бизнеса.</p>'
			},
			{
				image: 'src/assets/images/speaker-image-3.png',
				url: './',
				name: 'Александр Петров',
				text: '<p>Серийный предприниматель в сфере IT, строительства. Автоматизация бизнеса.</p>'
			},
			{
				image: 'src/assets/images/speaker-image-4.png',
				url: './',
				name: 'Руслан Боширов',
				text: '<p>Серийный предприниматель в сфере IT, строительства. Автоматизация бизнеса.</p>'
			},
			{
				image: 'src/assets/images/speaker-image-1.png',
				url: './',
				name: 'Акпантокпантура&shy;ркожа Аккарагозайымсулу',
				text: '<p>Серийный предприниматель в сфере IT, строительства. Автоматизация бизнеса.</p>'
			},
			{
				image: 'src/assets/images/speaker-image-2.png',
				url: './',
				name: 'Алёна Пак',
				text: '<p>Серийный предприниматель в сфере IT, строительства. Автоматизация бизнеса.</p>'
			}
		]
	},
	feedEvents: {
		title: {
			name: 'События',
			href: './'
		},
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
	cashbox: {
		title: 'Выберите билеты',
		date: '20 сентября, 10:00 - 16:00',
		price: 'Бесплатно',
		max: 10,
		count: 1
	},
	articles: {
		title: {
			name: 'Материалы по теме',
			link: './',
		},
		cards: [
			{
				title: 'Длинный заголовок максимум в две строки Длинный заголовок',
				image: 'src/assets/images/teaser-image-1.jpg',
				imageUrl: './',
				avatar: 'src/assets/images/avatar-default.png',
				avatarUrl: './',
				avatarText: 'Автор сего текста',
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
				avatarText: 'Автор сего текста',
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
	name: 'EventPage',
	components: { 
		BContent, 
		BCardEvent, 
		BBreadcrumbs, 
		BSectionFeed, 
		BSectionIntro, 
		BSectionArticles,
		BSectionProgram,
		BSectionPhotos,
		BModalAppoint,
		BCardArticle,
		BCardSpeaker,
		BCarousel,
		BCashbox,
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