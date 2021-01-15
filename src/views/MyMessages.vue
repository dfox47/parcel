<template>
    <div class="messages">
        <div class="wrap">
            <ul class="breadcrumbs">
                <li>
                    <router-link to="/">
                        {{ $vuetify.lang.t('$vuetify.breadcrumbs.home') }}
                    </router-link>
                </li>

                <li>
                    <span>
                        ?
                    </span>
                </li>
            </ul>

            <h1>{{ $vuetify.lang.t('$vuetify.messages') }}</h1>

            <div class="messages__items">
                <router-link
                    tag="div"
                    to="/my-chat"
                    v-for="item in items"
                    :key="item.message"
                    class="messages__item"
                >
                    <div class="messages__persone">
                        <div class="messages__photo_wrap">
                            <img
                                :src="item.img"
                                alt="person's photo"
                                class="messages__photo"
                            >

                            <div class="counter">
                                {{ item.counter }}
                            </div>
                        </div>

                        <div>
                            <div class="messages__name">
                                <span>{{ item.name }}</span>&nbsp;
                                <span>{{ item.surname }}</span>
                            </div>
                            <span class="person_rating">{{ item.rating }}</span>
                            <div class="messages__info">
                                <span><strong>{{ $vuetify.lang.t('$vuetify.messages.from') }}</strong> {{ item.from }}</span>
                                <span><strong>{{ $vuetify.lang.t('$vuetify.messages.to') }}  </strong> {{ item.to }}  </span>
                            </div>
                        </div>
                    </div>

                    <div class="messages__btn_wrap">
                        <v-btn
                            block
                            color="primary"
                        >
                            {{ $vuetify.lang.t('$vuetify.connect') }}
                        </v-btn>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                counter: 55,
                from: 'Россия, Москва',
                img: require('@/assets/i/photo.png'),
                name: 'Александр ',
                rating: 4.5,
                surname: 'Константиновский',
                to: 'Италия, Рим',
            },
            {
                counter: 12,
                from: 'Россия, Москва',
                img: require('@/assets/i/photo.png'),
                name: 'Анастасия',
                rating: 2.5,
                surname: 'Серебрянникова',
                to: 'Италия, Рим',
            },
            {
                counter: 12,
                from: 'Россия, Москва',
                img: require('@/assets/i/photo.png'),
                name: 'Анастасия',
                rating: 2.5,
                surname: 'Серебрянникова',
                to: 'Италия, Рим',
            },
            {
                counter: 12,
                from: 'Россия, Москва',
                img: require('@/assets/i/photo.png'),
                name: 'Анастасия',
                rating: 2.5,
                surname: 'Серебрянникова',
                to: 'Италия, Рим',
            },
            {
                counter: 12,
                from: 'Россия, Москва',
                img: require('@/assets/i/photo.png'),
                name: 'Анастасия',
                rating: 2.5,
                surname: 'Серебрянникова',
                to: 'Италия, Рим',
            },
            {
                counter: 12,
                from: 'Россия, Москва',
                img: require('@/assets/i/photo.png'),
                name: 'Анастасия',
                rating: 2.5,
                surname: 'Серебрянникова',
                to: 'Италия, Рим',
            },
            {
                counter: 12,
                from: 'Россия, Москва',
                img: require('@/assets/i/photo.png'),
                name: 'Анастасия',
                rating: 2.5,
                surname: 'Серебрянникова',
                to: 'Италия, Рим',
            },
        ]
    }),
}
</script>
