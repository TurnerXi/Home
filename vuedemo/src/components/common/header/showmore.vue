<template>
    <div class="b-flex ta_r g-toprighticon" >
        <i class="i-head_more mr_10" :class="{ on: show }" @click="show = !show">
            <ul class="moreUl" >
                <li v-for="item in tools" @click="toolsEvent(item.key)">
                    <i class="i-more_wf mr_6"></i>{{item.text}}
                </li> 
            </ul>
        </i>
    </div>
</template>
<script type="text/javascript">
import { Vue, $, Common } from 'js/base'
export default {
    props: {
        tools: {
            type: Array,
            default: []
        }
    },
    data: () => {
        return {
            show: false
        }
    },
    methods: {
        toolsEvent: function (key) {
            this.$emit('tools-taped', key);
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            var tar = this;
            document.addEventListener('click', function (e) {
                if (!tar.$el.contains(e.target)) tar.show = false;
            });
        });
    }
}
</script>