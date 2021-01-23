<template>
    <div class="content">
        <h1 class="text-center py-4">
            {{ $vuetify.lang.t('$vuetify.search.title') }}
        </h1>

        <div class="row px-5 pb-3">
            <div class="col-6 pt-3">
                <h3>{{ $vuetify.lang.t('$vuetify.search.from') }}</h3>
                <country-input />
            </div>

            <div class="col-6 pt-3">
                <h3>{{ $vuetify.lang.t('$vuetify.search.to') }}</h3>
                <country-input />
            </div>

            <div class="col-12 pt-3 text-center">
                <v-btn
                    color="primary"
                    @click="loadOrders"
                    :disabled="loading"
                    :loading="loading"
                >
                    {{ $vuetify.lang.t('$vuetify.search.find') }}
                </v-btn>
            </div>
        </div>

        <div class="row">
            <div
                class="col-12 py-2 my-2 border border-primary rounded-0"
                v-for="order of orders"
                :key="order.id"
            >
                <div class="row no-gutters">
                    <div class="col-3 text-left">
                        <fa-icon
                            class="plane_icon mr-2"
                            icon="plane-departure"
                        />

                        <span class="order_target order_target_from">{{ order.from }}</span>
                    </div>

                    <div class="col-1 text-center">
                        <fa-icon
                            class="order_right_arrow"
                            icon="long-arrow-alt-right"
                        />
                    </div>

                    <div class="col-3 text-right">
                        <span class="order_target order_target_to">{{ order.to }}</span>

                        <fa-icon
                            class="plane_icon ml-2"
                            icon="plane-arrival"
                        />
                    </div>

                    <div class="col-2 text-center">
                        <fa-icon
                            class="order_type_icons"
                            icon="weight-hanging"
                        />

                        <span class="order_type_text">{{ order.weight }} {{ $vuetify.lang.t('$vuetify.search.weight') }}.</span>
                    </div>

                    <div class="col-3 text-center">
                        <fa-icon
                            v-if="checkTypeOrder(order.package_type)"
                            class="order_type_icons"
                            icon="box"
                        />

                        <fa-icon
                            v-else
                            class="order_type_icons"
                            icon="envelope"
                        />

                        <span class="order_type_text">{{ order.size_length }} <b>X</b> {{ order.size_height }} <b>X</b> {{ order.size_width }}</span>
                    </div>

                    <div class="col-8">
                        {{ order.pickup_address }}
                    </div>

                    <div class="col-2">
                        {{ order.price }}
                        &#8381;
                    </div>

                    <div class="col-2">
                        {{ order.package_cost }}
                        &#8381;
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CountryInput from "../components/CountryInput.vue";
import axios from "axios";

export default {
    name: "SendSearch",
    data() {
        return {
            orders: []
        }
    },
    components: {
        'country-input': CountryInput
    },
    computed: {
        loading () {
            return this.$store.getters.loading;
        }
    },
    methods: {
        loadOrders () {
            this.$store.dispatch('clearError');
            this.$store.dispatch('setLoading', true);

            setTimeout(() => {
                axios.get(`https://api.wwprcl.ru/api/delivery/offer/list`)
                    .then(response => {
                        this.orders = response.data;
                        this.$store.dispatch('setLoading', false);
                    }, error => {
                        //console.log(error);
                        this.$store.dispatch('setLoading', false);

                        if (error.toJSON().message === '') {
                            this.$store.dispatch('setError', 'Неизвестная ошибка запроса к серверу');
                        }
                        else {
                            this.$store.dispatch('setError', error.toJSON().message);
                        }
                        throw error;
                    });
            }, 1000);


        },
        checkTypeOrder(type) {
            return type === 0 || type === 1 || type === 2;
        }
    }
}
</script>


