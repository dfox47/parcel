<template>
	<div class="wrap">
		<header class="header">
			<router-link class="logo" to="/">
				<img class="logo__img" src="../assets/i/logo.svg" alt="" />
				<img class="logo__text" src="../assets/i/logo_text.svg" alt="" />
			</router-link>

			<div class="header_right">
				<ul class="header_nav">
					<li class="header_nav__item"><router-link to="/parcel-send">Хочу отправить</router-link></li>

					<li class="header_nav__item"><router-link to="/parcel-take">Могу захватить</router-link></li>

					<li class="header_nav__item"><router-link to="/registration">Русский, ₽</router-link></li>
				</ul>

				<ul class="login_nav">
					<li class="login_nav__item"><router-link class="btn btn_main" to="/registration">Вход</router-link></li>
				</ul>
			</div>
		</header>
	</div>

	<router-view />
</template>



<script>
export default {
	name: 'Header'
}
</script>


