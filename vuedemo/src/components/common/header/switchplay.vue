<template>
    <div class="head_tabbox" v-show="showPlayBox" >
        <ul class="head_tablist ssqdlt" >
            <li v-for="item in playTypes" :class="{on:isCurrentPlayType(item.pType)}" @click="switchPlay(item)">
                <div class="btn_tabfu" >{{item.pName}}</div> 
            </li>
        </ul>
    </div> 
</template>
<script type="text/javascript">
import { Vue, $, Common } from 'js/base'
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
        currentPlayPype: false
    },
    methods: {
        switchPlay: function (playType) {
            this.$emit('switch-play-type', playType);
        },
        isCurrentPlayType: function (playType) {
            return this.currentPlayType === playType;
        }
    }
}
</script>