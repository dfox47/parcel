<template>
    <v-autocomplete
        clearable
        solo
        :items="options"
        color="white"
        item-text="name"
        :label="$vuetify.lang.t('$vuetify.search.select_country')"
        v-model="selectedValue"
    />
</template>

<script>
export default {
    name: "CountryInput",
    data() {
        return {
            selectedValue: '101',
            options: [
                { id: '101', name: 'Россия' },
                { id: '102', name: 'Америка' },
                { id: '103', name: 'Италия' },
                { id: '104', name: 'Франция' },
                { id: '105', name: 'Аргентина' },
                { id: '106', name: 'Испания' },
                { id: '107', name: 'Украина' },
                { id: '108', name: 'Белорусь' },
            ],
        }
    }
}
</script>
