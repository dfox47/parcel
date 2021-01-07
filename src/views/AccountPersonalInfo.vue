<template>
    <div class="content">
        <div class="account">
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
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'AccountPersonalInfo',
    data: () => ({
        items: [
            {
                categories: [
                    'Категория 1',
                    'Категория 2'
                ],
                declared_value: 'Нет',
                deposit: 'Нет',
                delivery_price: '5,000 руб.',
                methods: [
                    'Личная встреча',
                    'В аэропорту'
                ],
                orders_new: '7 новых',
                orders_total: '61 заявка',
                send_before: '1 февраля',
                status: 'looking_parcel',
                size_x: '6 см',
                size_y: '15 см',
                size_z: ' 8,5 см',
                to: 'Россия, Москва - Рим, Италия',
                weight: '5 кг',
            },
            {
                categories: [
                    'Категория 1',
                    'Категория 2'
                ],
                declared_value: 'Нет',
                deposit: 'Нет',
                delivery_price: '5,000 руб.',
                methods: [
                    'Личная встреча',
                    'В аэропорту'
                ],
                orders_new: '12 новых',
                orders_total: '59 заявок',
                send_before: '1 февраля',
                status: 'looking_suitcase',
                size_x: '6 см',
                size_y: '15 см',
                size_z: ' 8,5 см',
                to: 'Турция, Стамбул - Россия, Владивосток',
                weight: '5 кг',
            }
        ]
    })
}
</script>


