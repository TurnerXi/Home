<template>
<div class="m-ball_list clearfix mb_10 redballs bor3d">
    <label v-for="item in balls" @click="selectnum(item)"><i class="i-redball" :class="{on:selected.indexOf(item)>-1}" >{{item}}</i></label>
</div>
</template>
<script>
import Vue from 'vue'
export default {
    props: {
        ballLen: {
            type: Number,
            default: () => {
                return 0;
            }
        },
        beginIndex: {
            type: Number,
            default: () => {
                return 1;
            }
        },
        selected: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    methods: {
        selectnum (item) {
            this.$emit('choose-num', item);
        }
    },
    computed: {
        balls () {
            let arr = [];
            for (let i = 0; i < this.ballLen; i++) {
                let idx = this.beginIndex + i;
                if (idx < 10) {
                    arr.push('0' + idx);
                } else {
                    arr.push(idx.toString());
                }
            }
            return arr;
        }
    }
}
</script>