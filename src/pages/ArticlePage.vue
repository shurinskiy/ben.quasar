<template>
<b-breadcrumbs>
	<a href="./">Главная страница</a>
	<a href="/#/blog">Блог</a>
	<span>Самая большая проблема Метавселенной? Никто не знает, что это значит</span>
</b-breadcrumbs>


<b-content>
	<div class="content__tags">
		<b-tag 
			v-for="(tag, index) in incomingData.tags" 
			:key="index" 
			:href="tag.href"
			cls="tag_fade tag_mid"
		>{{ tag.title }}</b-tag>
	</div>

	<b-signature 
		cls="content__signature"
		:img="incomingData.avatar.img"
		:url="incomingData.avatar.url"
		:text="incomingData.avatar.text"
		:date="incomingData.avatar.date"
		large
	/>
	
	<b-share 
		cls="content__share"
		:links="incomingData.share"
	/>

	<h1 class="content__title">Самая большая проблема Метавселенной? Никто не знает, что это значит</h1>
	<p class="content__large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

	<div class="content__image">
		<img src="src/assets/images/content-image-1.png" alt="">
	</div>

	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Ultrices dui sapien eget mi proin sed. Cras fermentum odio eu feugiat. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc. Sem viverra aliquet eget sit amet. Mi ipsum faucibus vitae aliquet. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Aenean vel elit scelerisque mauris pellentesque pulvinar. Est ultricies integer quis auctor elit sed vulputate mi sit. Nisl pretium fusce id velit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Neque egestas congue quisque egestas diam in arcu cursus. Mattis pellentesque id nibh tortor id aliquet lectus. Felis bibendum ut tristique et egestas quis ipsum.</p>

	<p>Nulla at volutpat diam ut venenatis. Neque sodales ut etiam sit amet nisl purus. Auctor augue mauris augue neque gravida. Maecenas pharetra convallis posuere morbi leo urna molestie. Sit amet aliquam id diam maecenas ultricies mi. Pretium quam vulputate dignissim suspendisse in est ante. Dictum varius duis at consectetur lorem donec. In cursus turpis massa tincidunt dui ut ornare. Sed augue lacus viverra vitae congue eu consequat. Parturient montes nascetur ridiculus mus. Nibh sed pulvinar proin gravida hendrerit. Blandit cursus risus at ultrices. Feugiat pretium nibh ipsum consequat nisl vel pretium. Ultricies leo integer malesuada nunc vel risus commodo viverra. Erat nam at lectus urna duis. Vestibulum sed arcu non odio.</p>

	<h2>Lorem ipsum dolor sit amet</h2>

	<ul>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
	</ul>

	<b-video 
		cls="content__video"
		url='https://www.youtube.com/embed/11cuatZm8K8?autoplay=1'
		background='https://i.ytimg.com/vi/11cuatZm8K8/sddefault.jpg'
	/>

	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Ultrices dui sapien eget mi proin sed. Cras fermentum odio eu feugiat. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Amet mauris commodo quis imperdiet massa tincidunt nunc. Sem viverra aliquet eget sit amet. Mi ipsum faucibus vitae aliquet. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Aenean vel elit scelerisque mauris pellentesque pulvinar. Est ultricies integer quis auctor elit sed vulputate mi sit. Nisl pretium fusce id velit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Neque egestas congue quisque egestas diam in arcu cursus. Mattis pellentesque id nibh tortor id aliquet lectus. Felis bibendum ut tristique et egestas quis ipsum.</p>

	<b-gallery cls="content__gallery" :images="incomingData.gallery"/>

	<h2>Lorem ipsum dolor sit amet</h2>

	<ul>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
		<li>2011 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum metus ut volutpat</li>
	</ul>
</b-content>


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
</template>

<script>
import { defineComponent, reactive } from 'vue'
import BSectionArticles from "components/frontend/sections/BSectionArticles.vue";
import BCardArticle from "components/frontend/cards/BCardArticle.vue";
import BBreadcrumbs from "components/frontend/BBreadcrumbs.vue";
import BSignature from "components/frontend/BSignature.vue";
import BContent from "components/frontend/BContent.vue";
import BGallery from "components/frontend/BGallery.vue";
import BShare from "components/frontend/BShare.vue";
import BVideo from "components/frontend/BVideo.vue";
import BTag from "components/frontend/BTag.vue";

const incomingData = reactive({
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
	tags: [
		{
			title: 'Онлайн',
			href: './'
		},
		{
			title: 'IT Проекты',
			href: './'
		},
		{
			title: 'Менеджмент',
			href: './'
		}
	],
	share: ['./','./'],
	avatar: {
		img: 'src/assets/images/avatar-default.png',
		url: './',
		text: 'Автор сего текста',
		date: '2 дня назад'
	},
	gallery: [
		'src/assets/images/intro-image-3.png',
		'src/assets/images/intro-image-1.png',
		'src/assets/images/intro-image-2.png',
		'src/assets/images/intro-image-4.png',
		'src/assets/images/intro-image-1.png',
		'src/assets/images/intro-image-2.png',
		'src/assets/images/intro-image-3.png',
		'src/assets/images/intro-image-4.png',
		'src/assets/images/intro-image-3.png',
		'src/assets/images/intro-image-4.png'
	]
});

export default defineComponent({
	name: 'ArticlePage',
	components: {
		BBreadcrumbs, 
		BSectionArticles, 
		BCardArticle, 
		BSignature,
		BContent,
		BGallery,
		BVideo,
		BShare,
		BTag
	},
	setup() {

		return { incomingData }
	}
})
</script>