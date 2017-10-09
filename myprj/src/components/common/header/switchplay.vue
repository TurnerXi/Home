<template>
    <div class="head_tabbox" v-show="showPlayBox" >
        <ul class="head_tablist ssqdlt" >
            <li v-for="item in playTypes" :class="{on:currentpType == item.pType}" @click="switchPlay(item)">
                <div class="btn_tabfu" >{{item.pName}}</div> 
            </li>
        </ul>
    </div> 
</template>
<script type="text/javascript">
import Vue from 'vue'
export default {
    props: {
        playTypes: {
            type: Array,
            default: function () {
                return [];
            }
        },
        currentPlay: {
            type: Object,
            default: function () {
                return {};
            }
        },
        showPlayBox: false,
        currentPlayType: ''
    },
    methods: {
        switchPlay: function (playType) {
            this.$emit('switch-play-type', playType);
        }
    },
    computed: {
        currentpType: function () {
            return this.currentPlayType;
        }
    }
}
</script>