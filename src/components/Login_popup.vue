<template id="modal-template">
    <div>
        <button class="button" @click="showLoginPopup = true">
            Show Modal
        </button>
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showLoginPopup" @click="showLoginPopup = false"></div>
        </transition>
        <transition name="slide" appear>
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

