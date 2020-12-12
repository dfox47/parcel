<template>
    <div class="content">
        <div class="wrap">
            <ul class="breadcrumbs">
                <li>
                    <router-link to="/">
                        {{ $vuetify.lang.t('$vuetify.breadcrumbs.home') }}
                    </router-link>
                </li>

                <li>
                    <span>
                        {{ $vuetify.lang.t('$vuetify.breadcrumbs.search_parcel') }}
                    </span>
                </li>
            </ul>

            <div class="take_menu__wrap">
                <ul class="take_menu">
                    <li>
                        <span class="take_menu__item active">
                            {{ $vuetify.lang.t('$vuetify.take.parcel_search') }}
                        </span>
                    </li>

                    <li>
                        <span class="take_menu__item">
                            {{ $vuetify.lang.t('$vuetify.take.add_new_order') }}

                        </span>
                    </li>
                </ul>
            </div>

            <form
                class="take_destinations_search"
                action="/"
                method="post"
            >
                <div class="take_destinations">
                    <div class="take_destinations__item">
                        <div class="take_destinations__title">
                            {{ $vuetify.lang.t('$vuetify.take.from') }}
                        </div>

                        <v-select
                            class="take_destinations__select"
                            :items="fromCountry"
                            :label="fromCountry[0]"
                            outlined
                        />

                        <v-select
                            class="take_destinations__select"
                            :items="fromCity"
                            :label="fromCity[0]"
                            outlined
                        />
                    </div>

                    <div class="take_destinations__item">
                        <div class="take_destinations__title">
                            {{ $vuetify.lang.t('$vuetify.take.to') }}
                        </div>

                        <v-select
                            class="take_destinations__select"
                            :items="toCountry"
                            :label="toCountry[0]"
                            outlined
                        />

                        <v-select
                            class="take_destinations__select"
                            :items="toCity"
                            :label="toCity[0]"
                            outlined
                        />
                    </div>
                </div>

                <div class="text-center">
                    <label class="btn btn_submit">
                        <input type="submit">
                        <span>{{ $vuetify.lang.t('$vuetify.take.search') }}</span>
                    </label>
                </div>

                <div class="take_destinations__link_additional">
                    <router-link to="/">
                        {{ $vuetify.lang.t('$vuetify.take.additional_search') }}
                    </router-link>
                </div>
            </form>

            <div class="take_results">
                <div class="take_results__title">
                    {{ $vuetify.lang.t('$vuetify.take.results_title_1') }}&nbsp;<span>25</span>&nbsp;{{ $vuetify.lang.t('$vuetify.take.results_title_2') }}
                </div>

                <div class="take_results__destination">
                    <span>{{ $vuetify.lang.t('$vuetify.take.from') }}:</span> Северная Ирландия, Каррикфергус
                </div>

                <div class="take_results__destination">
                    <span>{{ $vuetify.lang.t('$vuetify.take.to') }}:</span> Россия, Москва
                </div>



                <div class="take_results_items">
                    <div class="take_results_item">
                        <div class="take_results_item__img_wrap">
                            <img
                                class="take_results_item__img"
                                src="../assets/i/photo2.png"
                                alt=""
                            >

                            <div class="take_results_item__name_wrap">
                                <div class="take_results_item__name">
                                    Валентина<br>
                                    Афанасьева
                                </div>

                                <div class="take_results_item__rating">
                                    2.5
                                </div>
                            </div>
                        </div>

                        <div class="take_results_item__info">
                            <div class="take_results_item__list">
                                <p>
                                    <span>Срок:</span> до 31 фефвраля
                                </p>

                                <p>
                                    <span>Вес:</span> 0,5 кг
                                </p>

                                <p>
                                    <span>Депозит:</span> 5000 руб.
                                </p>
                            </div>

                            <div class="take_results_item__category">
                                <p>
                                    <span>Категория</span>
                                </p>

                                <p>
                                    Категория 1,
                                </p>

                                <p>
                                    Категория 2,
                                </p>

                                <p>
                                    Категория 3,
                                </p>

                                <p>
                                    Ещё 3 категории
                                </p>
                            </div>

                            <div class="take_results_item__link">
                                <a
                                    class="btn btn_primary btn_size_l"
                                    href="#"
                                >Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div class="take_results_item">
                        <div class="take_results_item__img_wrap">
                            <img
                                class="take_results_item__img"
                                src="../assets/i/photo2.png"
                                alt=""
                            >

                            <div class="take_results_item__name_wrap">
                                <div class="take_results_item__name">
                                    Александр<br>
                                    Константиновский
                                </div>

                                <div class="take_results_item__rating">
                                    2.5
                                </div>
                            </div>
                        </div>

                        <div class="take_results_item__info">
                            <div class="take_results_item__list">
                                <p>
                                    <span>Срок:</span> до 31 фефвраля
                                </p>

                                <p>
                                    <span>Вес:</span> 0,5 кг
                                </p>

                                <p>
                                    <span>Депозит:</span> 5000 руб.
                                </p>
                            </div>

                            <div class="take_results_item__category">
                                <p>
                                    <span>Категория</span>
                                </p>

                                <p>
                                    Категория 1,
                                </p>

                                <p>
                                    Категория 2,
                                </p>

                                <p>
                                    Категория 3,
                                </p>

                                <p>
                                    Ещё 3 категории
                                </p>
                            </div>

                            <div class="take_results_item__link">
                                <a
                                    class="btn btn_primary btn_size_l"
                                    href="#"
                                >Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div class="take_results_item">
                        <div class="take_results_item__img_wrap">
                            <img
                                class="take_results_item__img"
                                src="../assets/i/photo2.png"
                                alt=""
                            >

                            <div class="take_results_item__name_wrap">
                                <div class="take_results_item__name">
                                    Анастасия<br>
                                    Серебрянникова
                                </div>

                                <div class="take_results_item__rating">
                                    2.5
                                </div>
                            </div>
                        </div>

                        <div class="take_results_item__info">
                            <div class="take_results_item__list">
                                <p>
                                    <span>Срок:</span> до 31 фефвраля
                                </p>

                                <p>
                                    <span>Вес:</span> 0,5 кг
                                </p>

                                <p>
                                    <span>Депозит:</span> 5000 руб.
                                </p>
                            </div>

                            <div class="take_results_item__category">
                                <p>
                                    <span>Категория</span>
                                </p>

                                <p>
                                    Категория 1,
                                </p>

                                <p>
                                    Категория 2,
                                </p>

                                <p>
                                    Категория 3,
                                </p>

                                <p>
                                    Ещё 3 категории
                                </p>
                            </div>

                            <div class="take_results_item__link">
                                <a
                                    class="btn btn_primary btn_size_l"
                                    href="#"
                                >Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div class="take_results_item">
                        <div class="take_results_item__img_wrap">
                            <img
                                class="take_results_item__img"
                                src="../assets/i/photo2.png"
                                alt=""
                            >

                            <div class="take_results_item__name_wrap">
                                <div class="take_results_item__name">
                                    Сергей<br>
                                    Иванов
                                </div>

                                <div class="take_results_item__rating">
                                    2.5
                                </div>
                            </div>
                        </div>

                        <div class="take_results_item__info">
                            <div class="take_results_item__list">
                                <p>
                                    <span>Срок:</span> до 31 фефвраля
                                </p>

                                <p>
                                    <span>Вес:</span> 0,5 кг
                                </p>

                                <p>
                                    <span>Депозит:</span> 5000 руб.
                                </p>
                            </div>

                            <div class="take_results_item__category">
                                <p>
                                    <span>Категория</span>
                                </p>

                                <p>
                                    Категория 1,
                                </p>

                                <p>
                                    Категория 2,
                                </p>

                                <p>
                                    Категория 3,
                                </p>

                                <p>
                                    Ещё 3 категории
                                </p>
                            </div>

                            <div class="take_results_item__link">
                                <a
                                    class="btn btn_primary btn_size_l"
                                    href="#"
                                >Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div class="take_results_item">
                        <div class="take_results_item__img_wrap">
                            <img
                                class="take_results_item__img"
                                src="../assets/i/photo2.png"
                                alt=""
                            >

                            <div class="take_results_item__name_wrap">
                                <div class="take_results_item__name">
                                    Валентина<br>
                                    Афанасьева
                                </div>

                                <div class="take_results_item__rating">
                                    2.5
                                </div>
                            </div>
                        </div>

                        <div class="take_results_item__info">
                            <div class="take_results_item__list">
                                <p>
                                    <span>Срок:</span> до 31 фефвраля
                                </p>

                                <p>
                                    <span>Вес:</span> 0,5 кг
                                </p>

                                <p>
                                    <span>Депозит:</span> 5000 руб.
                                </p>
                            </div>

                            <div class="take_results_item__category">
                                <p>
                                    <span>Категория</span>
                                </p>

                                <p>
                                    Категория 1,
                                </p>

                                <p>
                                    Категория 2,
                                </p>

                                <p>
                                    Категория 3,
                                </p>

                                <p>
                                    Ещё 3 категории
                                </p>
                            </div>

                            <div class="take_results_item__link">
                                <a
                                    class="btn btn_primary btn_size_l"
                                    href="#"
                                >Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div class="take_results_item">
                        <div class="take_results_item__img_wrap">
                            <img
                                class="take_results_item__img"
                                src="../assets/i/photo2.png"
                                alt=""
                            >

                            <div class="take_results_item__name_wrap">
                                <div class="take_results_item__name">
                                    Александр<br>
                                    Константиновский
                                </div>

                                <div class="take_results_item__rating">
                                    2.5
                                </div>
                            </div>
                        </div>

                        <div class="take_results_item__info">
                            <div class="take_results_item__list">
                                <p>
                                    <span>Срок:</span> до 31 фефвраля
                                </p>

                                <p>
                                    <span>Вес:</span> 0,5 кг
                                </p>

                                <p>
                                    <span>Депозит:</span> 5000 руб.
                                </p>
                            </div>

                            <div class="take_results_item__category">
                                <p>
                                    <span>Категория</span>
                                </p>

                                <p>
                                    Категория 1,
                                </p>

                                <p>
                                    Категория 2,
                                </p>

                                <p>
                                    Категория 3,
                                </p>

                                <p>
                                    Ещё 3 категории
                                </p>
                            </div>

                            <div class="take_results_item__link">
                                <a
                                    class="btn btn_primary btn_size_l"
                                    href="#"
                                >Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div class="take_results_item">
                        <div class="take_results_item__img_wrap">
                            <img
                                class="take_results_item__img"
                                src="../assets/i/photo2.png"
                                alt=""
                            >

                            <div class="take_results_item__name_wrap">
                                <div class="take_results_item__name">
                                    Анастасия<br>
                                    Серебрянникова
                                </div>

                                <div class="take_results_item__rating">
                                    2.5
                                </div>
                            </div>
                        </div>

                        <div class="take_results_item__info">
                            <div class="take_results_item__list">
                                <p>
                                    <span>Срок:</span> до 31 фефвраля
                                </p>

                                <p>
                                    <span>Вес:</span> 0,5 кг
                                </p>

                                <p>
                                    <span>Депозит:</span> 5000 руб.
                                </p>
                            </div>

                            <div class="take_results_item__category">
                                <p>
                                    <span>Категория</span>
                                </p>

                                <p>
                                    Категория 1,
                                </p>

                                <p>
                                    Категория 2,
                                </p>

                                <p>
                                    Категория 3,
                                </p>

                                <p>
                                    Ещё 3 категории
                                </p>
                            </div>

                            <div class="take_results_item__link">
                                <a
                                    class="btn btn_primary btn_size_l"
                                    href="#"
                                >Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div class="take_results_item">
                        <div class="take_results_item__img_wrap">
                            <img
                                class="take_results_item__img"
                                src="../assets/i/photo2.png"
                                alt=""
                            >

                            <div class="take_results_item__name_wrap">
                                <div class="take_results_item__name">
                                    Сергей<br>
                                    Иванов
                                </div>

                                <div class="take_results_item__rating">
                                    2.5
                                </div>
                            </div>
                        </div>

                        <div class="take_results_item__info">
                            <div class="take_results_item__list">
                                <p>
                                    <span>Срок:</span> до 31 фефвраля
                                </p>

                                <p>
                                    <span>Вес:</span> 0,5 кг
                                </p>

                                <p>
                                    <span>Депозит:</span> 5000 руб.
                                </p>
                            </div>

                            <div class="take_results_item__category">
                                <p>
                                    <span>Категория</span>
                                </p>

                                <p>
                                    Категория 1,
                                </p>

                                <p>
                                    Категория 2,
                                </p>

                                <p>
                                    Категория 3,
                                </p>

                                <p>
                                    Ещё 3 категории
                                </p>
                            </div>

                            <div class="take_results_item__link">
                                <a
                                    class="btn btn_primary btn_size_l"
                                    href="#"
                                >Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div class="take_results_item">
                        <div class="take_results_item__img_wrap">
                            <img
                                class="take_results_item__img"
                                src="../assets/i/photo2.png"
                                alt=""
                            >

                            <div class="take_results_item__name_wrap">
                                <div class="take_results_item__name">
                                    Анастасия<br>
                                    Серебрянникова
                                </div>

                                <div class="take_results_item__rating">
                                    2.5
                                </div>
                            </div>
                        </div>

                        <div class="take_results_item__info">
                            <div class="take_results_item__list">
                                <p>
                                    <span>Срок:</span> до 31 фефвраля
                                </p>

                                <p>
                                    <span>Вес:</span> 0,5 кг
                                </p>

                                <p>
                                    <span>Депозит:</span> 5000 руб.
                                </p>
                            </div>

                            <div class="take_results_item__category">
                                <p>
                                    <span>Категория</span>
                                </p>

                                <p>
                                    Категория 1,
                                </p>

                                <p>
                                    Категория 2,
                                </p>

                                <p>
                                    Категория 3,
                                </p>

                                <p>
                                    Ещё 3 категории
                                </p>
                            </div>

                            <div class="take_results_item__link">
                                <a
                                    class="btn btn_primary btn_size_l"
                                    href="#"
                                >Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div class="take_results_item">
                        <div class="take_results_item__img_wrap">
                            <img
                                class="take_results_item__img"
                                src="../assets/i/photo2.png"
                                alt=""
                            >

                            <div class="take_results_item__name_wrap">
                                <div class="take_results_item__name">
                                    Сергей<br>
                                    Иванов
                                </div>

                                <div class="take_results_item__rating">
                                    2.5
                                </div>
                            </div>
                        </div>

                        <div class="take_results_item__info">
                            <div class="take_results_item__list">
                                <p>
                                    <span>Срок:</span> до 31 фефвраля
                                </p>

                                <p>
                                    <span>Вес:</span> 0,5 кг
                                </p>

                                <p>
                                    <span>Депозит:</span> 5000 руб.
                                </p>
                            </div>

                            <div class="take_results_item__category">
                                <p>
                                    <span>Категория</span>
                                </p>

                                <p>
                                    Категория 1,
                                </p>

                                <p>
                                    Категория 2,
                                </p>

                                <p>
                                    Категория 3,
                                </p>

                                <p>
                                    Ещё 3 категории
                                </p>
                            </div>

                            <div class="take_results_item__link">
                                <a
                                    class="btn btn_primary btn_size_l"
                                    href="#"
                                >Подробнее</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'ParcelTake',
    data: () => ({
        fromCity: [
            'Любой город',
            'Москва',
            'Нижний Новгород'
        ],
        fromCountry: [
            'Выберите страну',
            'Россия',
            'США'
        ],
        toCity: [
            'Любой город',
            'Москва',
            'Нижний Новгород'
        ],
        toCountry: [
            'Выберите страну',
            'Россия',
            'США'
        ]
    }),
}
</script>


