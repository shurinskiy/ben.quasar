<template>
<header class="ln-header">
	<div class="ln-header__inner container">
		<div class="ln-header__top">
			<a class="ln-header__logo" href="./">
				<img src="~assets/images/logo-white.svg" alt="">
			</a>
			<div :class="['ln-header__menu', { 'opened': opened }]" ref="naviRef">
				<button class="ln-header__m-close" @click.prevent="opened = false"></button>
				<a class="ln-header__m-button ln-button ln-button_white-1 ln-button_solve" href="./">Решить задачу</a>
				<a class="ln-header__m-button ln-button ln-button_white-2 ln-button_become" href="./">Стать экспертом</a>
				<a class="ln-header__m-button ln-button ln-button_order" href="./">Оставить заявку</a>
			</div>
			<button class="ln-header__m-toggle" @click="opened = !opened"></button>
		</div>
		<div class="ln-header__content">
			<h1 class="ln-header__title ln-title ln-title_white">Возникли сложности?<br> Бесплатно подберём эксперта под ваш запрос</h1>
			<div class="ln-header__text">Оставьте заявку, и мы свяжемся с вами, чтобы сформулировать задачу, уточнить подробности и бесплатно найти для вас подходящего эксперта.</div>
			<a class="ln-header__c-button ln-button ln-button_order" href="./">Оставить заявку</a>
		</div>
	</div>
</header>

<section class="ln-choise">
	<div class="ln-choise__inner container">
		<h2 class="ln-choise__title ln-title">Что выбрать?</h2>
		<div class="ln-choise__text">Здесь вы можете найти эксперта практически в любой области и получить от него консультацию или привлечь его к реализации проекта под ключ.</div>
		<div class="ln-choise__items">
			<a class="ln-choise__item ln-choise__item_trade" href="./">увеличите продажи</a>
			<a class="ln-choise__item ln-choise__item_fin" href="./">разберётесь в финансах бизнеса</a>
			<a class="ln-choise__item ln-choise__item_reduce" href="./">сократите расходы</a>
			<a class="ln-choise__item ln-choise__item_scale" href="./">масштабируете бизнес</a>
			<a class="ln-choise__item ln-choise__item_timing" href="./">сократите время на операционную деятельность</a>
			<a class="ln-choise__item ln-choise__item_invest" href="./">привлечете инвестиции</a>
			<a class="ln-choise__item ln-choise__item_workers" href="./">наймете нужных сотрудников</a>
		</div>
	</div>
</section>

<section class="ln-how">
	<div class="ln-how__inner container">
		<h2 class="ln-how__title ln-title ln-title_white">Как это работает?</h2>
		<div class="ln-how__tab" ref="tabRef">
			<div class="ln-how__t-caps">
				<button class="ln-how__t-cap active">Диагностика</button>
				<button class="ln-how__t-cap">Консультация</button>
				<button class="ln-how__t-cap">Проекты под ключ</button>
			</div>
			<div class="ln-how__t-blocks">
				<div class="ln-how__t-block active">
					<h3 class="ln-how__t-text">Диагностическая сессия с сертифицированным бизнес-трекером</h3>
					<ul class="ln-how__t-list">
						<li class="ln-how__row">Дадим непредвзятую оценку ситуации</li>
						<li class="ln-how__row">Поможем выявить ключевые ограничения, которые мешают  достичь цели</li>
						<li class="ln-how__row">Сформулируем задачи и способы их решения</li>
						<li class="ln-how__row">Проверим жизнеспособность идеи или проекта</li>
						<li class="ln-how__row">Поможем избежать критических ошибок на этапе запуска и роста</li>
						<li class="ln-how__row">Сформируем план действий</li>
					</ul>
				</div>
				<div class="ln-how__t-block">
					<h3 class="ln-how__t-text">Быстрый и эффективный способ найти решение конкретной задачи</h3>
					<ul class="ln-how__t-list">
						<li class="ln-how__row">Дадим непредвзятую оценку ситуации</li>
						<li class="ln-how__row">Поможем выявить ключевые ограничения, которые мешают достичь цели</li>
						<li class="ln-how__row">Сформулируем задачи и способы их решения</li>
						<li class="ln-how__row">Составим план действий</li>
						<li class="ln-how__row">Предложим несколько вариантов решений</li>
						<li class="ln-how__row">Подберем ресурсы</li>
						<li class="ln-how__row">Сопроводим на всех этапах реализации</li>
					</ul>
				</div>
				<div class="ln-how__t-block">
					<h3 class="ln-how__t-text">Привлекайте экспертов для реализации задач под ключ</h3>
					<ul class="ln-how__t-list">
						<li class="ln-how__row">Выбираете интересующую услугу в каталоге услуг или в карточке конкретного Эксперта</li>
						<li class="ln-how__row">Назначаете бесплатную вводную онлайн-встречу с Экспертом</li>
						<li class="ln-how__row">На встрече обсуждаете условия, требования и дальнейшие шаги</li>
						<li class="ln-how__row">Получаете решение своей задачи от лучших профессионалов рынка</li>
					</ul>
				</div>
			</div>
		</div>
		<a class="ln-how__button ln-button ln-button_order" href="./">Оставить заявку</a>
	</div>
</section>

<section class="ln-faq">
	<div class="ln-faq__inner container">
		<h2 class="ln-faq__title ln-title">Часто задаваемые вопросы</h2>
		<div class="ln-faq__items" ref="faqRef">
			<div class="ln-faq__item">
				<h3 class="ln-faq__i-question">Зачем мне консультация эксперта?</h3>
				<div class="ln-faq__i-answer">
					<p>Чтобы ускорить решение бизнес-задачи, совершить меньше ошибок в процессе и в результате сэкономить или заработать деньги.</p>
					<p>Например, консультация с юристом на старте бизнеса с партнёром предотвратит финансовые потери при возможном «разделе» компании. А общение с профи по маркетплейсам может сэкономить деньги на возврате неправильно оформленных партий товаров.</p>
				</div>
			</div>
			<div class="ln-faq__item">
				<h3 class="ln-faq__i-question">Кто такой эксперт?</h3>
				<div class="ln-faq__i-answer">
					<p>Мы выбираем в эксперты только людей, которые владеют успешным бизнесом или являются сотрудниками таких компаний. Их опыт подтверждён успешными кейсами и отзывами.</p>
				</div>
			</div>
			<div class="ln-faq__item">
				<h3 class="ln-faq__i-question">Как проходит консультация?</h3>
				<div class="ln-faq__i-answer">
					<p>После того, как вы оставите заявку, наш менеджер поможет подобрать удобное для вас и эксперта время. Сама консультация будет проходить онлайн. Сразу после согласования времени вы получите ссылку на звонок в Zoom или Google Meet. После встречи наш менеджер позвонит вам с сформированной обратной связью и рекомендациями от эксперта.</p>
				</div>
			</div>
			<div class="ln-faq__item">
				<h3 class="ln-faq__i-question">Что можно успеть за 1 консультацию?</h3>
				<div class="ln-faq__i-answer">
					<p>Важно правильно понимать, для чего вам нужна консультация. Этот способ взаимодействия очень эффективен, если у вас вопрос формата “как делать?” или “что делать?”. То есть, если вы собираетесь решать задачу самостоятельно, но вам не хватает для этого той или иной информации, компетенций, контактов. В таком случае вы получите точечные и концентрированные знания, которые помогут вам продвинуться к цели. Но, безусловно, мы не продаём волшебных таблеток. И это нормальная ситуация, когда для решения задачи требуется несколько встреч. Если же вы хотите делегировать процесс решения и получить на выходе результат “под ключ”, то вам подойдет формат “проектной работы”.</p>
				</div>
			</div>
			<div class="ln-faq__item">
				<h3 class="ln-faq__i-question">От чего зависит стоимость консультации?</h3>
				<div class="ln-faq__i-answer">
					<p>Во-первых, рыночные факторы: опыт эксперта, его востребованность, уникальность его экспертизы. Во-вторых, мотивация эксперта. Для кого-то консалтинг - это бизнес, для кого-то - способ самореализации и возможность “отдавать”. Поэтому эксперты с, казалось бы, примерно одинаковым опытом и уровнем компетенций могут стоить очень по-разному.</p>
					<p>Главное, что вы в любом случае получите качественные ответы на свои вопросы и действительно сможете решить свою задачу.</p>					
				</div>
			</div>
			<div class="ln-faq__item">
				<h3 class="ln-faq__i-question">Я 10+ лет в бизнесе. Что нового мне расскажет эксперт?</h3>
				<div class="ln-faq__i-answer">
					<p>Безусловно, вы знаете свой бизнес лучше всех. А эксперты - лучше всех на рынке разбираются в своих областях, в их портфолио много разных проектов и решенных проблем. Они могут поделиться с вами инсайтами, о которых вы не догадывались и которые могут блокировать вас на пути к цели.</p>
				</div>
			</div>
			<div class="ln-faq__item">
				<h3 class="ln-faq__i-question">Что если консультация будет для меня бесполезной?</h3>
				<div class="ln-faq__i-answer">
					<p>За несколько сотен консультаций у нас не было подобной обратной связи от клиентов. Ведь мы тщательно отбираем экспертов для нашего сервиса, и мы уверены в их компетенциях. Также мы пристально анализируем ваш запрос и передаем необходимую информацию эксперту, которую он изучает перед встречей. Но даже если подобная ситуация произойдёт и у вас возникнут предметные претензии к качеству услуги, мы подберём для вас другого эксперта.</p>
				</div>
			</div>
			<div class="ln-faq__item">
				<h3 class="ln-faq__i-question">Я не нашёл в каталоге подходящего эксперта.</h3>
				<div class="ln-faq__i-answer">
					<p>В такой ситуации предлагаем воспользоваться формой заявки на подбор эксперта. Мы подробно обсудим с вами вашу задачу, и, если в нашей базе действительно нет никого с требуемым опытом и компетенциями, то мы найдём такого человека и привлечём его в сервис специально для вас.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="ln-buttons">
	<div class="ln-buttons__inner container">
		<a class="ln-buttons__item ln-button ln-button_solve ln-button_orange" href="./">Решить задачу</a>
		<a class="ln-buttons__item ln-button ln-button_become" href="./">Стать экспертом</a>
	</div>
</section>

<footer class="ln-footer">
	<div class="ln-footer__top container">
		<div class="ln-footer__logo">
			<a href="./"><img src="~assets/images/logo.svg" alt=""></a>
		</div>
		<nav class="ln-footer__navi">
			<a href="./">Оставить заявку</a>
			<a href="./">Стать экспертом</a>
			<a href="./">Эксперты</a>
		</nav>
		<div class="ln-footer__docs">
			<a href="./">Договор для исполнителей</a>
			<a href="./">Договор для экспертов</a>
			<a href="./">Договор оферты</a>
			<a href="./">Политика обработки персональных данных</a>
		</div>
		<div class="ln-footer__contacts">
			<a class="ln-footer__contact ln-footer__contact_tel" href="tel:+77072404040">+77072404040</a>
			<a class="ln-footer__contact ln-footer__contact_wapp" href="./">WhatsApp</a>
			<a class="ln-footer__contact ln-footer__contact_tgm" href="./">Telegram</a>
		</div>
	</div>
	<div class="ln-footer__bottom">&copy; ТОО “Business Event Network”</div>
</footer>	
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
	name: 'LandingLayout',

	components: {},

	setup () {
		const naviRef = ref(null);
		const tabRef = ref(null);
		const faqRef = ref(null);
		const opened = ref(false);
		
		onMounted(() => {
			const caps = tabRef.value.querySelectorAll('.ln-how__t-cap');
			const blocks = tabRef.value.querySelectorAll('.ln-how__t-block');
			const questions = faqRef.value.querySelectorAll('.ln-faq__item .ln-faq__i-question');

			caps.forEach((cap, i) => {
				cap.addEventListener('click', (e) => {
					if (! e.target.classList.contains('active')) {
						caps.forEach((cap, i) => {
							cap.classList.remove('active');
							blocks[i].classList.remove('active');
						});
			
						cap.classList.add('active');
						blocks[i].classList.add('active');
					}
				});
			});

			['click','touchstart'].forEach(event => {
				document.addEventListener(event, (e) => {
					const isself = e.target.closest(`.${naviRef.value?.className.split(' ')[0]}`);
					const istoggle = e.target.classList.contains('ln-header__m-toggle');

					if(opened.value && !isself && !istoggle) {
						e.preventDefault();
						opened.value = false;
					}
				});
			}, { passive: false });

			questions.forEach(question => {
				question.addEventListener('click', function(e) {
					e.stopPropagation();
					questions.forEach(question => (question != this) && question.classList.remove('active'));
				
					if (this.classList != 'active')
						this.classList.toggle('active');
				});
			});
		});

		return {
			naviRef,
			tabRef,
			faqRef,
			opened
		}
	}
})
</script>

<style lang="scss">
.ln-header {
	$self: &;
	background: url('#{$images-path}landing-background-1.png') center / cover no-repeat #16181f;

	&__inner {
		padding-top: 100px;
		padding-bottom: 120px;
		color: #fff;
		
		@include media('<=xs') {
			padding-top: 50px;
			padding-bottom: 70px;
		}
	}

	&__top {
		display: flex;
		align-items: center;
		margin-bottom: 95px;
		
		@include media('<=xxxs') {
			margin-bottom: 50px;
		}
	}

	&__logo {
		margin-right: auto;
	}

	&__m-button {
		margin-left: 24px;

		&:last-child {
			display: none;

			@include media('<=xs') {
				display: flex;
			}
		}

		@include media('<=xs') {
			display: flex !important;
			margin: 0 auto 24px;
			max-width: 205px;
		}
	}

	&__menu {
		box-sizing: border-box;

		@include media('<=xs') {
			box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.3);
			background-color: rgba(3, 3, 12, 0.8);
			padding: 70px 20px 20px;
			backdrop-filter: blur(10px);
			align-items: flex-start;
			flex-flow: column nowrap;
			overflow: auto;

			width: 100%;
			height: 100vh;
			height: calc(var(--vh, 1vh) * 100);
			position: fixed;
			z-index: 12;
			top: 0;
			right: -370px; 
			max-width: 360px;
			transition: right 0.2s linear;
	
			&.opened {
				right: 0;
			}
		}
	}

	&__m-close {
		@extend %reset-button;
		display: none;
		position: absolute;
		z-index: 1;
		top: 10px;
		left: 10px;
		width: 30px;
		height: 30px;
		background: url('#{$images-path}icons-sprite.svg#icon-close-view-white') center / 20px 20px no-repeat transparent;
		opacity: 0.55;

		@include media('<=xs') {
			display: block;
		}
	}

	&__m-toggle {
		@extend %reset-button;
		display: none;
		width: 40px;
		height: 40px;
		background: url('#{$images-path}icons-sprite.svg#icon-menu-view-white') center / 30px 23px no-repeat transparent;
		
		@include media('<=xs') {
			display: block;
		}
	}

	&__content {

	}

	&__title {
		max-width: 940px;
		border-bottom: 2px solid $accent;
		padding-bottom: 20px;
		margin-bottom: 24px;
	}

	&__text {
		line-height: 32px;
		max-width: 670px;
		font-size: 20px;
		margin-bottom: 80px;
		
		@include media('<=xs') {
			font-size: 18px;
			line-height: 28px;
		}
		
		@include media('<=xxxs') {
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 65px;
		}
	}

	&__c-button {

	}
}

.ln-choise {
	$self: &;
	
	&__inner {
		padding-top: 155px;
		padding-bottom: 165px;
		background: url('#{$images-path}ic-background-choice.svg') center right / auto no-repeat transparent;
		
		@include media('<=xs') {
			padding-top: 80px;
			padding-bottom: 100px;
		}
	}

	&__title {
		margin-bottom: 40px;
		
		@include media('<=xs') {
			margin-bottom: 20px;
		}
	}

	&__text {
		margin-bottom: 48px;
		line-height: 32px;
		max-width: 670px;
		font-size: 20px;
		
		@include media('<=xs') {
			font-size: 18px;
			line-height: 24px;
			margin-bottom: 32px;
		}
		
		@include media('<=xxxs') {
			font-size: 16px;
			line-height: 20px;
		}
	}

	&__items {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 48px 24px;
		
		@include media('<=md') {
			grid-template-columns: repeat(2, 1fr);
		}
		
		@include media('<=xs') {
			grid-template-columns: 1fr;
			grid-gap: 24px 24px;
		}
	}

	&__item {
		grid-column: 1 span;
		max-width: 320px;
		display: flex;
		font-family: "RM", sans-serif;
		align-items: center;
		text-decoration: none;
		font-size: 18px;
		color: #292A30;
		
		@include media('<=xs') {
			max-width: none;
		}
		
		@include media('<=xxxs') {
			font-size: 16px;
		}

		&:hover {
			text-decoration: underline;
		}

		&::before {
			display: block;
			content: '';
			width: 48px;
			height: 48px;
			border-radius: 50%;
			margin-right: 16px;
			flex-shrink: 0;
			box-shadow: -2px 3px 8px rgba(0, 0, 0, 0.15);
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
			background-color: #eee;
		}
		
		&_trade::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-trade-view-orange');
			background-size: 21px 19px;
		}
		
		&_fin::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-checked-view-orange');
			background-size: 20px 20px;
		}
		
		&_reduce::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-shield-view-orange');
			background-size: 18px 22px;
		}
		
		&_scale::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-grow-view-orange');
			background-size: 22px 18px;
		}

		&_timing::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-boost-view-orange');
			background-size: 20px 20px;
		}
		
		&_invest::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-wallet-view-orange');
			background-size: 19px 18px;
		}
		
		&_workers::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-worker-view-orange');
			background-size: 22px 16px;
		}
	}
}

.ln-how {
	$self: &;
	background: url('#{$images-path}landing-background-2.png') center / cover no-repeat #16181f;
	@keyframes show_fade { from { opacity: 0; } to { opacity: 1; }}

	&__inner {
		padding-top: 130px;
		padding-bottom: 110px;
		background: url('#{$images-path}ic-background-how.svg') center right 50px / auto no-repeat transparent;
		display: flex;
		flex-flow: column nowrap;
		color: #fff;
		
		@include media('<=xs') {
			padding-top: 90px;
			padding-bottom: 90px;
		}
		
		@include media('<=xxs') {
			background: none;
		}
	}

	&__title {
		margin-bottom: 100px;
		
		@include media('<=xs') {
			margin-bottom: 40px;
		}
	}

	&__tab {
		margin-bottom: 70px;
		max-width: 720px;
		
		@include media('<=xs') {
			margin-bottom: 60px;
		}
		
		@include media('<=xxs') {
			margin-bottom: 30px;
		}
	}

	&__t-caps {
		border-bottom: 1px solid #fff;
		margin-bottom: 48px;
		display: flex;
		
		@include media('<=xs') {
			flex-flow: column nowrap;
			padding-bottom: 20px;
			margin-bottom: 32px;
		}
	}

	&__t-cap {
		@extend %reset-button;
		font-family: "RR", sans-serif;
		font-size: 20px;
		padding: 24px 5px;
		width: 100%;
		max-width: 240px;
		white-space: nowrap;
		position: relative;
		
		&::before {
			display: block;
			content: '';
			position: absolute;
			bottom: -1px;
			left: 0;
			height: 6px;
			width: 0;
			background-color: $accent;
		}
		
		&.active {
			-webkit-text-stroke: 0.4px #fff;
			
			&::before {
				transition: width 0.3s;
				width: 100%;
			}
		}
		
		@include media('<=xs') {
			max-width: none;
			width: auto;
			align-self: flex-start;
			padding: 10px 20px;
			background-color: rgba(255, 255, 255, 0.5);
			border-radius: 4px;
			margin-bottom: 20px;
			font-size: 18px;

			&::before {
				display: none;
			}

			&.active {
				background-color: $accent;
			}
		}
	}

	&__t-blocks {

	}

	&__t-block {
		display: none;
		animation: show_fade 0.4s;
		
		&.active {
			display: block;
		}
	}

	&__t-text {
		font-size: 20px;
		margin-bottom: 48px;
		
		@include media('<=sm') {
			min-height: 48px;
		}
		
		@include media('<=xs') {
			margin-bottom: 32px;
		}
		
		@include media('<=xxs') {
			font-size: 18px;
		}
	}
	
	&__t-list {
		counter-reset: list_ctr;
		min-height: 350px;

		@include media('<=xxs') {
			min-height: auto;
		}
	}

	&__row {
		margin-bottom: 24px;
		display: flex;
		font-size: 17px;
		font-family: "RL", sans-serif;

		&::before {
			display: block;
			counter-increment: list_ctr;
			content: "0" counter(list_ctr);
			font-family: "RB", sans-serif;
			margin-right: 16px;
			color: #878787;
			font-size: 24px;
			margin-top: -3px;
		}
	}

	&__button {
		align-self: center;
	}
}

.ln-faq {
	$self: &;
	@keyframes show_fade { from { opacity: 0; } to { opacity: 1; }}

	&__inner {
		padding-top: 130px;
		padding-bottom: 140px;
		background: url('#{$images-path}ic-background-faq.svg') top 250px right 50px / auto no-repeat transparent;
		
		@include media('<=xs') {
			padding-top: 90px;
			padding-bottom: 80px;
		}
	}

	&__title {
		margin-bottom: 55px;
		
		@include media('<=xs') {
			margin-bottom: 20px;
		}
	}

	&__items {

	}

	&__item {
		padding: 24px 0;
		
		&:not(:last-child) {
			border-bottom: 1px solid #ccc;
		}
		
		@include media('<=xxs') {
			padding: 18px 0;
		}
	}
	
	&__i-question {
		font-size: 20px;
		cursor: pointer;
		padding: 0 0 0 35px ;
		background: url('#{$images-path}icons-sprite.svg#icon-plus-view-orange') center left / 19px 19px no-repeat transparent;
		
		&.active {
			background: url('#{$images-path}icons-sprite.svg#icon-minus-view-orange') center left / 19px 3px no-repeat transparent;
			
			& ~ #{$self}__i-answer {
				display: block;
			}
		}
		
		@include media('<=xs') {
			font-size: 18px;
			line-height: 24px;
		}
		
		@include media('<=xxs') {
			font-size: 17px;
		}
	 }
	
	&__i-answer {
		display: none;
		animation: show_fade 0.4s;
		font-size: 14px;
		margin: 24px 0 0 55px;
		padding-left: 15px;
		border-left: 1px solid $accent;
	}
}

.ln-buttons {
	$self: &;
	background: url('#{$images-path}landing-background-1.png') center top / cover no-repeat #16181f;

	&__inner {
		padding: 120px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 550px;
		
		@include media('<=xs') {
			flex-flow: column nowrap;			
			padding: 90px 20px;
		}
	}

	&__item {
		margin: 0 20px;

		&.ln-button {
			
			@include media('<=xs') {
				width: 100%;
				max-width: 200px;

				&:not(:last-child) {
					margin-bottom: 24px;
				}
			}
		}
	}
}

.ln-footer {
	$self: &;

	&__top {
		padding-top: 55px;
		padding-bottom: 55px;
		display: flex;

		@include media('<=xs') {
			display: block;			
		}
	}

	&__logo {
		box-sizing: border-box;
		padding-right: 24px;
		width: 100%;
		max-width: 200px;
		
		img, a { display: block; }

		@include media('<=xs') {
			margin-bottom: 48px;
		}
	}
	
	&__navi {
		box-sizing: border-box;
		padding-right: 24px;
		max-width: 235px;
		min-width: 140px;
		width: 100%;

		a {
			display: block;
			text-decoration: none;
			color: #292A30;
			margin-bottom: 15px;

			&:hover {
				text-decoration: underline;
			}

			@include media('<=xs') {
				margin-bottom: 10px;
				max-width: none;
				min-width: auto;
			}
		}
	}

	&__docs {
		box-sizing: border-box;
		padding-right: 24px;
		max-width: 275px;
		min-width: 185px;
		width: 100%;

		a {
			display: block;
			text-decoration: none;
			color: #292A30;
			margin-bottom: 10px;

			&:hover {
				text-decoration: underline;
			}
		}

		@include media('<=xs') {
			margin-bottom: 48px;
			max-width: none;
			min-width: auto;
		}
	}

	&__contacts {
		margin-left: auto;
	}

	&__contact {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #292A30;
		line-height: 24px;
		margin-bottom: 18px;
		white-space: nowrap;

		&:hover {
			text-decoration: underline;
		}

		&::before {
			display: block;
			content: '';
			width: 18px;
			height: 18px;
			flex-shrink: 0;
			margin-right: 14px;
			background-color: transparent;
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
		}
		
		&_tel::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-soc-phone-view-blue');			
		}
		
		&_wapp::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-soc-wapp-view-blue');			
		}
		
		&_tgm::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-tgm-view-blue');			
			background-size: 18px 16px;
		}
	}

	&__bottom {
		text-align: center;
		padding: 16px 20px;
		color: #fff;
		background: url('#{$images-path}landing-background-2.png') center / cover no-repeat #16181f;
	}
}

.ln-title {
	$self: &;
	color: $primary;
	font-family: "RB", sans-serif;
	letter-spacing: normal;
	line-height: 1.2;
	font-size: 42px;
	
	@include media('<=lg') {
		font-size: 38px;
	}
	
	@include media('<=md') {
		font-size: 36px;
	}
	
	@include media('<=sm') {
		font-size: 34px;
	}
	
	@include media('<=xs') {
		font-size: 32px;
	}
	
	@include media('<=xxs') {
		font-size: 30px;
	}
	
	@include media('<=xxxs') {
		font-size: 26px;
	}

	&_white {
		color: #fff;
	}
}

.ln-button {
	$self: &;
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	border-radius: 100px;
	text-decoration: none;
	padding: 15px 18px 15px 15px;
	font-family: "RB", sans-serif;
	white-space: nowrap;
	transition: box-shadow 0.3s;
	
	&::before {
		display: block;
		content: '';
		height: 20px;
		width: 20px;
		margin-right: 15px;
		flex-shrink: 0;
		background-color: transparent;
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
	}
	
	&_order {
		color: #fff;
		background-color: $accent;
		
		&::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-go-view-white');
		}

		&:hover {
			box-shadow: 0 0 20px $accent;
		}
	}
	
	&_solve {
		color: $accent;
		background-color: #fff;
		
		&::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-checked-view-orange');
		}

		&:hover {
			box-shadow: 0 0 20px #fff;
		}
		
		&#{$self}_orange {
			color: #fff;
			background-color: $accent;
			
			&::before {
				background-image: url('#{$images-path}icons-sprite.svg#icon-checked-view-white');
			}

			&:hover {
				box-shadow: 0 0 20px $accent;
			}
		}
	}
	
	&_become {
		color: $primary;
		background-color: #fff;

		&::before {
			background-image: url('#{$images-path}icons-sprite.svg#icon-starry-view-blue');
		}

		&:hover {
			box-shadow: 0 0 20px #fff;
		}
	}
}
</style>