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

            <div class="messages_items">
                <router-link
                    tag="div"
                    to="/chat"
                    v-for="item in items"
                    :key="item.message"
                    class="messages_item"
                >
                    <div class="persone">
                        <div class="photo_wrap">
                            <img
                                :src="item.img"
                                alt="person's photo"
                                class="photo"
                            >

                            <div class="counter">
                                {{ item.counter }}
                            </div>
                        </div>

                        <div>
                            <div class="name">
                                <span>{{ item.name }}</span>&nbsp;
                                <span>{{ item.surname }}</span>
                            </div>
                            <span class="person_rating">{{ item.rating }}</span>
                            <div class="name_info">
                                <span><strong>{{ $vuetify.lang.t('$vuetify.messages.from') }}</strong> {{ item.from }}</span>
                                <span><strong>{{ $vuetify.lang.t('$vuetify.messages.to') }}  </strong> {{ item.to }}  </span>
                            </div>
                        </div>
                    </div>

                    <div class="messages_btn_wrap">
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
    methods: {
        showRegistrationPopup () {
            this.$store.dispatch('showRegistrationPopup')
        },
        showSendOrGrubPopup () {
            this.$store.dispatch('showSendOrGrubPopup')
        },
        showRequestSendPopup_1 () {
            this.$store.dispatch('showRequestSendPopup_1')
        }
    }
}
</script>
