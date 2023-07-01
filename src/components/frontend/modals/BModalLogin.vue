<template>
	<div class="m-login">
		<q-btn class="m-login__close" icon="close" flat round dense v-close-popup />
		<template v-if="!register">
			<h2 class="m-login__title">Войти</h2>
			<div class="m-login__t-text">
				<span>Новый пользователь</span>
				<a href="./" @click.prevent="openModal" v-close-popup>Создать учетную запись</a>
			</div>
			<div class="m-login__form">
				<q-input 
					class="m-login__field" 
					color="accent" 
					v-model="email" 
					label="E-mail" 
					outlined 
				/>
				<q-input 
					class="m-login__field" 
					:type="isPwd ? 'password' : 'text'" 
					color="accent" 
					v-model="password" 
					label="Пароль"
					outlined 
				>
					<template v-slot:append>
						<q-icon
							:name="isPwd ? 'visibility_off' : 'visibility'"
							class="cursor-pointer"
							@click="isPwd = !isPwd"
						/>
					</template>
				</q-input>
				<b-button class="m-login__button button_noshadow">Войти</b-button>
			</div>
		</template>
		<template v-else>
			<h2 class="m-login__title">Регистрация</h2>
			<div class="m-login__t-text">
				<span>У вас уже есть учетная запись?</span>
				<a href="./" @click.prevent="openModal" v-close-popup>Войти</a>
			</div>
			<div class="m-login__t-note">На указанный e-mail будет выслано письмо для подтверждения регистрации</div>
			<div class="m-login__form">
				<q-input 
					class="m-login__field" 
					color="accent" 
					v-model="email" 
					label="E-mail" 
					outlined 
				/>
				<q-input 
					class="m-login__field" 
					color="accent" 
					v-model="tel" 
					label="Телефон" 
					outlined 
				/>
				<q-input 
					class="m-login__field" 
					:type="isPwd ? 'password' : 'text'" 
					color="accent" 
					v-model="passNew" 
					label="Придумайте пароль"
					outlined 
				>
					<template v-slot:append>
						<q-icon
							:name="isPwd ? 'visibility_off' : 'visibility'"
							class="cursor-pointer"
							@click="isPwd = !isPwd"
						/>
					</template>
				</q-input>
				<q-input 
					class="m-login__field" 
					:type="isCfmPwd ? 'password' : 'text'" 
					color="accent" 
					v-model="passConfirm" 
					label="Подтвердите пароль"
					outlined 
				>
					<template v-slot:append>
						<q-icon
							:name="isCfmPwd ? 'visibility_off' : 'visibility'"
							class="cursor-pointer"
							@click="isCfmPwd = !isCfmPwd"
						/>
					</template>
				</q-input>
				<b-button class="m-login__button button_noshadow">Зарегистрироваться</b-button>
			</div>
		</template>
		<div class="m-login__socials">
			<div class="m-login__separator"><span>Или</span></div>
			<a class="m-login__social m-login__social_gl" href="./">Войти с помощью Google</a>
			<a class="m-login__social m-login__social_fb" href="./">Войти с помощью Facebook</a>
			<a class="m-login__social m-login__social_in" href="./">Войти с помощью Linkedin</a>
		</div>
	</div>
</template>

<script>
import BButton from 'components/frontend/BButton.vue';
import { ref } from 'vue';

export default {
	name: 'BModalLogin',
	emits: ['click'],
	components: { BButton },
	props: {
		register: {
			type: Boolean,
			required: false
		}
	},
	setup (props, { emit }) {
		const openModal = (e) => emit('click', e);
		return { 
			openModal,
			email: ref(''),
			isPwd: ref(true),
			isCfmPwd: ref(true),
			password: ref(''),
			passConfirm: ref(''),
			passNew: ref(''),
			tel: ref('')
		}
	}
}
</script>

<style lang="scss">
.m-login {
	$self: &;
	box-sizing: border-box;
	background-color: #fff;
	position: relative;
	padding: 40px;
	width: 100%;
	max-width: 450px !important;
	
	@include media('<=xxs') {
		padding: 20px;
	}

	&__close {
		position: absolute;
		top: 15px; right: 15px;
	}

	&__title {
		font-family: "RM", sans-serif;
		color: #4d4d4d;
		font-size: 24px;
		text-align: center;
		margin-bottom: 12px;
		line-height: 1.2;
	}
	
	&__t-text {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 32px;
		
		span {
			margin-right: 10px;
		}
		
		a {
			font-family: "RM", sans-serif;
			color: $accent;
		}
	}
	
	&__t-note {
		color: #999;
		font-size: 12px;
		max-width: 250px;
		text-align: center;
		margin: 0 auto 20px;
	}
	
	&__form {
		
	}
	
	&__field {
		margin-bottom: 24px;
	}
	
	&__button {
		width: 100%;
		margin-bottom: 30px;
		justify-content: center;
	}

	&__forget {
		display: block;
		text-align: center;
		font-family: "RM", sans-serif;
		margin-bottom: 30px;
		color: $primary;
	}
	
	&__separator {
		display: flex;
		align-items: center;
		margin-bottom: 30px;

		&::before, &::after {
			display: block;
			content: '';
			flex-grow: 1;
			height: 1px;
			background-color: #dedede;
		}

		span {
			margin: 0 12px;
		}
	}

	&__socials {

	}

	&__social {
		display: flex;
		align-items: center;
		box-sizing: border-box;
		border: 1px solid #dedede;
		font-family: "RM", sans-serif;
		text-decoration: none;
		border-radius: 4px;
		padding: 0 16px;
		color: #000;
		height: 48px;

		&::before {
			display: block;
			content: '';
			width: 24px;
			height: 24px;
			margin-right: 16px;
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			background-color: transparent;
		}

		&:hover {
			text-decoration: underline;
		}

		&:not(:last-child) {
			margin-bottom: 16px;
		}

		&_gl::before { background-image: url('#{$images-path}ic-soc-gl.svg'); }
		&_fb::before { background-image: url('#{$images-path}ic-soc-fb.svg'); }
		&_in::before { background-image: url('#{$images-path}ic-soc-in.svg'); }
	}
}
</style>