<template>
    <div class="backtitle">
        <div class="backtitlefix ui-cvertical" >
            <a href="javascript:;" class="return" @click="cp_back();"></a>
            <div class="tabplay ui-chorizontal">
                <p class="play_f">玩<br>法</p>  
                <div class="tabplayBox" :class="{ fold: isShowPlay }" @click="isShowPlay = !isShowPlay">
                    <span :play_type="currentPlay.pType">{{currentPlayText}}</span><i class="i-sj"></i>
                </div>
            </div> 
            <show-more :tools="tools" @tools-taped="toolsTaped"></show-more> 
            <switch-play :showPlayBox="isShowPlay" :playTypes="playTypes" :currentPlayType="currentPlay.pType" @switch-play-type="switchPlayType"></switch-play>
        </div>
    </div> 
</template>
<script>
import Vue from 'vue'
import ShowMore from './showmore.vue'
import SwitchPlay from './switchplay.vue'
export default {
    props: {
        lotName: '',
        playTypes: {
            Type: Array,
            default: function () {
                return [];
            }
        },
        currentPlay: {
            Type: Object,
            default: function () {
                return {};
            }
        }
    },
    data: () => {
        return {
            isShowPlay: false,
            tools: [{key: 'header_explain', text: '玩法说明'},
                    {key: 'history', text: '历史走势'},
                    {key: 'choose_random', text: '多期机选'}
            ]
        }
    },
    components: {
        'show-more': ShowMore,
        'switch-play': SwitchPlay
    },
    methods: {
        toolsTaped: function (key) {
            console.log(key);
        },
        switchPlayType: function (playType) {
            this.$store.dispatch('switchPlay', playType);
            this.isShowPlay = !this.isShowPlay;
        }
    },
    computed: {
        currentPlayText: function () {
            if (this.currentPlay && this.currentPlay.pName) {
                return this.lotName + '-' + this.currentPlay.pName.substring(0, 2);
            }
        }
    }
}
</script>