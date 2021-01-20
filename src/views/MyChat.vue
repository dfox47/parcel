<template>
    <div class="chat">
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

            <div
                v-for="item in items"
                :key="item.message"
                class="chat__item"
            >
                <div class="chat__persone">
                    <div class="chat__photo_wrap">
                        <img
                            :src="item.img"
                            alt="person's photo"
                            class="chat__photo"
                        >

                        <div class="counter">
                            {{ item.counter }}
                        </div>
                    </div>

                    <div class="chat__info_wrap">
                        <div class="chat__names">
                            <span>{{ item.name }}</span>&nbsp;
                            <span>{{ item.surname }}</span>
                        </div>
                        <span class="person_rating">{{ item.rating }}</span>
                        <div class="chat__person_info">
                            <span><strong>{{ $vuetify.lang.t('$vuetify.from') }}</strong> {{ item.from }}</span>
                            <span><strong>{{ $vuetify.lang.t('$vuetify.where_to') }}  </strong> {{ item.to }}  </span>
                        </div>
                    </div>
                </div>

                <div class="chat__btns_wrap">
                    <div
                        class="chat_btn chat_btn__phone"
                    />

                    <div class="chat__btn_wrap">
                        <v-btn
                            color="secondary"
                            block
                        >
                            {{ $vuetify.lang.t('$vuetify.reconcile_data') }}
                        </v-btn>

                        <div class="chat__decline">
                            {{ $vuetify.lang.t('$vuetify.or_decline') }}
                        </div>
                    </div>

                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <div
                                class="tooltip_sign"
                                v-bind="attrs"
                                v-on="on"
                            />
                        </template>
                        <span>Lorem ipsum dolor sit amet.</span>
                    </v-tooltip>
                </div>
            </div>

            <div class="chat__agreement">
                <div class="chat__agreement_btn">
                    {{ $vuetify.lang.t('$vuetify.reconcile_data') }}
                </div>

                <div class="chat__agreement_title">
                    {{ $vuetify.lang.t('$vuetify.check_the_box_if_you_agree_with_the_conditions') }}
                </div>

                <div class="chat__agreement_section">
                    <div class="popup_two_columns__two">
                        <div>
                            <div
                                class="popup_title"
                            >
                                {{ $vuetify.lang.t('$vuetify.delivery_method_to_courier') }}
                            </div>

                            <v-select
                                class="take_destinations__select"
                                :label="$vuetify.lang.t('$vuetify.how')"
                                outlined
                            />

                            <div
                                class="popup_title"
                            >
                                {{ $vuetify.lang.t('$vuetify.delivery_date') }}
                            </div>

                            <v-select
                                class="take_destinations__select"
                                :label="$vuetify.lang.t('$vuetify.calendar')"
                                outlined
                            />

                            <div
                                class="popup_title"
                            >
                                {{ $vuetify.lang.t('$vuetify.delivery_time') }}
                            </div>

                            <v-select
                                class="take_destinations__select"
                                :label="$vuetify.lang.t('$vuetify.calendar')"
                                outlined
                            />
                        </div>

                        <div>
                            <div
                                class="popup_title"
                            >
                                Адрес получения курьером:
                            </div>

                            <v-text-field
                                class="take_destinations__select"
                                label="Город"
                                outlined
                            />
                            <v-text-field
                                class="take_destinations__select"
                                label="Улица"
                                outlined
                            />

                            <div class="two_inputs">
                                <v-text-field
                                    class="take_destinations__select"
                                    label="Корпус/строение"
                                    outlined
                                />

                                <v-text-field
                                    class="take_destinations__select"
                                    label="Дом"
                                    outlined
                                />
                            </div>

                            <v-text-field
                                class="take_destinations__select"
                                label="Коментарий к адресу"
                                outlined
                            />
                        </div>
                    </div>

                    <div class="agreement_checkbox">
                        <v-checkbox
                            v-model="checkRu"
                            class="v-checkbox_v3"
                            label="Вы"
                        />

                        <v-checkbox
                            v-model="checkRub"
                            class="v-checkbox_v3"
                            label="Александр Константиновский"
                        />
                    </div>
                </div>

                <div class="chat__agreement_section">
                    <div class="popup_two_columns__two">
                        <div>
                            <div
                                class="popup_title"
                            >
                                {{ $vuetify.lang.t('$vuetify.delivery_method_to_recipient') }}
                            </div>

                            <v-select
                                class="take_destinations__select"
                                :label="$vuetify.lang.t('$vuetify.how')"
                                outlined
                            />

                            <div
                                class="popup_title"
                            >
                                {{ $vuetify.lang.t('$vuetify.recipient_data') }}
                            </div>

                            <v-text-field
                                class="take_destinations__select"
                                :label="$vuetify.lang.t('$vuetify.name')"
                                outlined
                            />

                            <v-text-field
                                class="take_destinations__select"
                                :label="$vuetify.lang.t('$vuetify.phone_number')"
                                outlined
                            />
                        </div>

                        <div>
                            <div
                                class="popup_title"
                            >
                                {{ $vuetify.lang.t('$vuetify.pick_up_address') }}
                            </div>

                            <v-text-field
                                class="take_destinations__select"
                                label="Город"
                                outlined
                            />
                            <v-text-field
                                class="take_destinations__select"
                                label="Улица"
                                outlined
                            />

                            <div class="two_inputs">
                                <v-text-field
                                    class="take_destinations__select"
                                    label="Корпус/строение"
                                    outlined
                                />

                                <v-text-field
                                    class="take_destinations__select"
                                    label="Дом"
                                    outlined
                                />
                            </div>

                            <v-text-field
                                class="take_destinations__select"
                                label="Коментарий к адресу"
                                outlined
                            />
                        </div>
                    </div>

                    <div class="popup_two_columns__two">
                        <div>
                            <div
                                class="popup_title"
                            >
                                {{ $vuetify.lang.t('$vuetify.delivery_date') }}
                            </div>

                            <v-select
                                class="take_destinations__select"
                                :label="$vuetify.lang.t('$vuetify.calendar')"
                                outlined
                            />
                        </div>

                        <div>
                            <div
                                class="popup_title"
                            >
                                {{ $vuetify.lang.t('$vuetify.delivery_time') }}
                            </div>

                            <v-text-field
                                class="take_destinations__select"
                                :label="$vuetify.lang.t('$vuetify.name')"
                                outlined
                            />
                        </div>
                    </div>

                    <div class="agreement_checkbox">
                        <v-checkbox
                            v-model="checkRu"
                            class="v-checkbox_v3"
                            label="Вы"
                        />

                        <v-checkbox
                            v-model="checkRub"
                            class="v-checkbox_v3"
                            label="Александр Константиновский"
                        />
                    </div>
                </div>

                <div class="chat__agreement_section">
                    <div class="popup_two_columns__two">
                        <div>
                            <div
                                class="popup_title"
                            >
                                {{ $vuetify.lang.t('$vuetify.delivery_method_to_recipient') }}
                            </div>

                            <v-radio-group
                                v-model="row"
                                row
                            >
                                <v-radio
                                    label="Нет"
                                    value="radio-1"
                                />

                                <v-radio
                                    label="Да"
                                    value="radio-2"
                                />
                            </v-radio-group>

                            <div class="input_n_select_wrap">
                                <v-text-field
                                    :label="$vuetify.lang.t('$vuetify.sum')"
                                    v-focus
                                />

                                <v-select
                                    class="take_destinations__select"
                                    :items="currency"
                                    :label="currency[0]"
                                />
                            </div>
                        </div>

                        <div>
                            <div
                                class="popup_title"
                            >
                                {{ $vuetify.lang.t('$vuetify.pick_up_address') }}
                            </div>

                            <v-text-field
                                class="take_destinations__select"
                                label="Город"
                                outlined
                            />
                        </div>
                    </div>

                    <div class="agreement_checkbox">
                        <v-checkbox
                            v-model="checkRu"
                            class="v-checkbox_v3"
                            label="Вы"
                        />

                        <v-checkbox
                            v-model="checkRub"
                            class="v-checkbox_v3"
                            label="Александр Константиновский"
                        />
                    </div>
                </div>
            </div>

            <div class="chat__messages">
                <div
                    class="chat__messages_wrap"
                    id="chat__messages_wrap-js"
                >
                    <div
                        to="/my-chat"
                        v-for="msg in messages"
                        :key="msg.from"
                        :class="'chat__msg chat__msg_' + msg.from"
                    >
                        <div
                            class="chat__msg_date"
                            v-if="msg.date"
                        >
                            {{ msg.date }}
                        </div>

                        <div
                            class="chat__msg_title"
                            v-if="msg.name"
                        >
                            {{ msg.name }}
                        </div>

                        <div
                            class="chat__msg_text"
                            v-if="msg.text"
                        >
                            {{ msg.text }}
                        </div>

                        <div
                            class="chat__msg_system_text"
                            v-if="msg.system_text"
                        >
                            {{ msg.system_text }}
                        </div>

                        <div
                            v-for="info_item in msg.info_items"
                            :key="info_item.title"
                        >
                            <strong>{{ info_item.title }}</strong>&#160; {{ info_item.text }}
                        </div>
                    </div>
                </div>

                <div class="chat__messages_textarea">
                    <v-textarea
                        rows="4"
                        clear-icon
                        id="textarea-js"
                    />

                    <v-btn
                        medium
                        color="primary"
                        @click="this.sendMessage"
                    >
                        {{ $vuetify.lang.t('$vuetify.send') }}
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        currency: ['rub', 'eur'],
        btn_more: "Открыть ",
        items: [
            {
                counter: 55,
                from: 'Россия, Москва',
                img: require('@/assets/i/photo.png'),
                name: 'Анастасия ',
                rating: 4.5,
                surname: 'Серебрянникова',
                to: 'Италия, Рим',
            },
        ],
        messages: [
            {
                from: 'system',
                name: '',
                system_text: 'Пожалуйста общайтесь только в этом чате, иначе мы не сможем помочь Вам в разрешении конфликтов',
            },
            {
                from: 'info',
                info_items: [
                    {
                        title: 'Откуда:',
                        text: 'Россия, Москва'
                    },
                    {
                        title: 'Куда:',
                        text: 'Россия, Москва'
                    },
                    {
                        title: 'Срок:',
                        text: 'Россия, Москва'
                    },
                    {
                        title: 'Вес:',
                        text: 'Россия, Москва'
                    },
                    {
                        title: 'Способ передачи:',
                        text: 'Россия, Москва'
                    },
                    {
                        title: 'Стоимость:',
                        text: 'Россия, Москва'
                    },
                    {
                        text: 'Без депозита'
                    },
                ]
            },
            {
                date: '15 октября 12:10',
                from: 'user',
                name: 'Анна Серебрянникова',
                text: 'Здравствуйте! Я бы хотела передать с вами свою посылку.',
            },
            {
                date: '15 октября 13:05',
                from: 'me',
                name: 'Александр Константиновский',
                text: 'Добрый день с удовольствием захвачу посылку. Давайте уточним детали. По какому адресу я могу забрать вашу посылку?',
            },
        ]
    }),
    methods: {
        sendMessage() {
            var text = document.querySelector("#textarea-js").value;

            if (text) {
                var time = '';
                var d = new Date();

                time += d.getDate() + " январь ";
                time += d.getHours()+":";
                time += d.getMinutes();

                this.messages.push({date: time, from: 'me',name: 'Александр Константиновский' ,text: text});

                var messageBody = document.querySelector('#chat__messages_wrap-js');

                messageBody.addEventListener("DOMNodeInserted",function (){
                    messageBody.scrollTop = messageBody.scrollHeight;
                });
            }
        },
    }
}
</script>

























