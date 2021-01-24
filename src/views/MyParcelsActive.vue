<template>
    <div class="content">
        <div class="tasks_completed">
            <div class="wrap">
                <ul class="breadcrumbs">
                    <li>
                        <router-link to="/">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.home') }}
                        </router-link>
                    </li>

                    <li>
                        <router-link to="/">
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.my_parcels') }}
                        </router-link>
                    </li>

                    <li>
                        <span>
                            {{ $vuetify.lang.t('$vuetify.breadcrumbs.completed') }}
                        </span>
                    </li>
                </ul>

                <div class="title_with_btn">
                    <a
                        href="/"
                        class="link_back"
                    >
                        {{ $vuetify.lang.t('$vuetify.back') }}
                    </a>

                    <h1>Мои посылки</h1>
                </div>

                <ul class="submenu">
                    <li class="submenu__item active">
                        <router-link to="/my-parcels-active">
                            {{ $vuetify.lang.t('$vuetify.tasks.active') }}
                        </router-link>
                    </li>

                    <li class="submenu__item">
                        <router-link to="/my-parcels-completed">
                            {{ $vuetify.lang.t('$vuetify.tasks.completed') }}
                        </router-link>
                    </li>
                </ul>

                <div class="tasks_list">
                    <router-link
                        tag="div"
                        to="/parcel-overview"
                        v-for="item in items"
                        :key="item.name"
                        class="tasks_list__item"
                    >
                        <div class="tasks_status__active">
                            <div :class="'tasks_status__img tasks_status__img__' + item.status" />

                            <div class="tasks_status__desc_active">
                                {{ $vuetify.lang.t('$vuetify.status.' + item.status) }}
                            </div>
                        </div>

                        <div class="tasks_desc_active">
                            <div class="tasks_desc__name">
                                <span>{{ item.name }}</span>
                                <span>{{ item.lastname }}</span>
                            </div>

                            <span class="person_rating">{{ item.rating }}</span>

                            <ul class="tasks_desc__list">
                                <li>
                                    <span>{{ $vuetify.lang.t('$vuetify.search.from') }}:</span> <em>{{ item.from }}</em>
                                </li>

                                <li>
                                    <span>{{ $vuetify.lang.t('$vuetify.search.to') }}:</span> <em>{{ item.to }}</em>
                                </li>

                                <li>
                                    <span>{{ $vuetify.lang.t('$vuetify.send_before') }}:</span> <em>{{ item.send_before }}</em>
                                </li>

                                <li>
                                    <span>{{ $vuetify.lang.t('$vuetify.weight') }}:</span> <em>{{ item.weight }}</em>
                                </li>
                            </ul>

                            <a
                                class="tasks_desc__more"
                                href="/"
                            >{{ $vuetify.lang.t('$vuetify.readmore') }}</a>

                            <v-btn
                                small
                                color="primary"
                                class="tasks_desc__btn"
                            >
                                {{ $vuetify.lang.t('$vuetify.edit') }}
                            </v-btn>
                        </div>

                        <div class="tasks_search">
                            <div :class="'tasks_search__img tasks_search__img__' + item.status" />

                            <div class="tasks_search__items">
                                <div class="tasks_search__item">
                                    <span class="tasks_search__info">{{ $vuetify.lang.t('$vuetify.we_found') }}</span>
                                    <a
                                        class="tasks_desc__more"
                                        href="/"
                                    >{{ item.found }}</a>
                                </div>
                                <div class="tasks_search__item">
                                    <span class="tasks_search__info">{{ $vuetify.lang.t('$vuetify.answered') }}</span>
                                    <a
                                        class="tasks_desc__more"
                                        href="/"
                                    >{{ item.answered }}</a>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyParcelsCompleted',
    data: () => ({
        items: [
            {
                answered: "1 человек",
                from: 'Северная Ирландия, Каррикфергус',
                found: '5 посылок',
                name: 'Александр',
                rating: '3.5',
                send_before: '1 февраля',
                status: 'deliver',
                lastname: 'Константиновский',
                to: 'Багамские Острова, Санто-Доминго',
                weight: '10 кг'
            },
            {
                answered: "1 человек",
                from: 'Северная Ирландия, Каррикфергус',
                found: '5 посылок',
                name: 'Александр',
                rating: '3.5',
                send_before: '1 февраля',
                status: 'deliver',
                lastname: 'Константиновский',
                to: 'Багамские Острова, Санто-Доминго',
                weight: '10 кг'
            },
            {
                answered: "1 человек",
                from: 'Северная Ирландия, Каррикфергус',
                found: '5 посылок',
                name: 'Александр',
                rating: '3.5',
                send_before: '1 февраля',
                status: 'send',
                lastname: 'Константиновский',
                to: 'Багамские Острова, Санто-Доминго',
                weight: '10 кг'
            }
        ]
    })
}
</script>


