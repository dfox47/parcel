<template id="modal-template">
    <div>
        <transition name="fade" appear>
            <div class="popup_overlay" v-if="showLoginPopup" @click="showLoginPopup = false"></div>
        </transition>
        <transition name="fade" appear>
            <div class="modal" v-if="showLoginPopup">
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident explicabo accusamus laudantium voluptatum nobis sed nesciunt neque possimus molestiae?</p>
                <button class="button" @click="showLoginPopup = false">
                    Close Modal
                </button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return { showLoginPopup: true }
    },
    methods: {
        show () { //accessing the child component instance through $refs
            this.showLoginPopup = true //execute the method belongs to the child component
        }
    }
}
</script>
