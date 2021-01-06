<template>
    <div class="content">
        <div class="auto_search">
            <div class="wrap">
                <ul class="breadcrumbs">
                    <li>
                        <router-link to="/">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.home') }}
                        </router-link>
                    </li>

                    <li>
                        <span>
                            {{ $vuetify.lang.t('$vuetify.auto_search') }}
                        </span>
                    </li>
                </ul>

                <h1>{{ $vuetify.lang.t('$vuetify.auto_search') }}</h1>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'AutoSearch',
    data: () => ({
        items: [
            {
                client_img: require('@/assets/i/photo2.png'),
                client_lastname: 'Афанасьева',
                client_name: 'Валентина',
                client_rating: '2.5',
                from: 'Северная Ирландия, Каррикфергус',
                name: 'Александр',
                rating: '3.5',
                send_before: '1 февраля',
                status: 'delivered',
                lastname: 'Константиновский',
                to: 'Багамские Острова, Санто-Доминго',
                weight: '10 кг'
            },
            {
                client_img: require('@/assets/i/photo2.png'),
                client_lastname: 'Афанасьева',
                client_name: 'Валентина',
                client_rating: '2.5',
                from: 'Северная Ирландия, Каррикфергус',
                name: 'Александр',
                rating: '3.5',
                send_before: '1 февраля',
                status: 'delivered',
                lastname: 'Константиновский',
                to: 'Багамские Острова, Санто-Доминго',
                weight: '10 кг'
            }
        ]
    })
}
</script>


