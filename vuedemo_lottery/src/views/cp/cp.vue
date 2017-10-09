<template>
<div class="pagewrap p-ssq_chooseBall">
	<lot-header :lotName="lotName" :playTypes="playTypes" :currentPlay="currentPlay"></lot-header>

	<section class="g-ball_box" id="touzhubox">
	   <lot-open></lot-open>
		<!-- <lotter-history-component></lotter-history-component> -->

        <div class="mt_10 mb_10 plr_16 ui-avc">
            <div class="flex1">至少选择<em class="red">5个红球</em>，<em class="blue">2个蓝球</em></div>
            <i class="i-delback" @click="clearnumber"></i>
        </div>

		<div class="plr_16" id="pt">
			<red-ball :ballLen="redlength" :selected="redballs" @choose-num="chooseRed"></red-ball>
			<blue-ball :ballLen="bluelength" :selected="blueballs" @choose-num="chooseBlue"></blue-ball>
		</div>
	</section>

	<section class="g-submit_wrap">
		<div class="m-submit_box" :class="{disabled: !canBuy}">
			<p class="buyInfos fz_14" v-show="canBuy">{{note}}注<strong class="red">共{{money}}元</strong></p>
			<div class="d-box btns plr_16">
				<div class="szcter">
					<div class="btn_white" @click="showRandom = !showRandom">机选</div>
                    <ul class="pop_notesBox" v-show="showRandom">
                    	<li @click="select_random(10)">10注</li>
                        <li @click="select_random(5)">5注</li>
                        <li @click="select_random(1)">1注</li>
                    </ul>
                </div>
				<a class="btn_red b-flex" @click="confirmChoose">确认选号</a>
			</div>
		</div>
	</section>
</div>
<!--清空END-->
</template>

<script type="text/javascript">
import LotHeader from '../../components/common/header/LotHeader.vue'
import redball from '../../components/common/lottery/redball.vue'
import blueball from '../../components/common/lottery/blueball.vue'
import lotopen from '../../components/common/lotopen.vue'
import store from '../../vuex/store'
import {mapGetters} from 'vuex'
var playTypes = [{pType: 1001, pName: '普通投注'}, {pType: 1002, pName: '胆拖投注'}];
export default{
    data: () => {
        return {
            playTypes: playTypes,
            showNav: false,
            showRandom: false,
            lotId: 1,
            lotName: '大乐透',
            redlength: 35,
            bluelength: 12,
            redballs: [],
            blueballs: []
        }
    },
    components: {
        'lot-header': LotHeader,
        'red-ball': redball,
        'blue-ball': blueball,
        'lot-open': lotopen
    },
    methods: {
        chooseRed (num) {
            this.redballs = toggleItemInArr(this.redballs, num);
        },
        chooseBlue (num) {
            this.blueballs = toggleItemInArr(this.blueballs, num);
        },
        clearnumber () {
            this.redballs = [];
            this.blueballs = [];
        },
        select_random (count) {
            this.showRandom = false;
            if (count > 1) {
                console.log('机选' + count + '注号码');
            } else {
                this.redballs = getRandomNumber(buildBallsArr(35, 1), 5);
                this.blueballs = getRandomNumber(buildBallsArr(12, 1), 2);
            }
        },
        confirmChoose () {
            if (this.canBuy) {
                this.$store.commit('chooseNums', {
                    lotId: this.lotId,
                    playType: this.currentPlay.pType,
                    ballsList: [this.redballs, this.blueballs],
                    note: this.note,
                    money: this.money
                });
                this.clearnumber();
                console.log(this.$store.state.cp.numbers);
            }
        }
    },
    computed: {
        ...mapGetters({
            currentPlay: 'getCurrentPlay'
        }),
        canBuy () {
            return this.redballs.length >= 5 && this.blueballs.length >= 2;
        },
        note () {
            var redzs = Math.c(this.redballs.length, 5);
            var bluzs = Math.c(this.blueballs.length, 2);
            return redzs * bluzs;
        },
        money () {
            return this.note * 2;
        }
    },
    watch: {
        currentPlay () {
            this.redballs = [];
            this.blueballs = [];
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.$store.dispatch('switchPlay', playTypes[0]);
        });
    }
}

Math.c = function (r, t) {
    return (function (r, n, e, o) {
        for (; t >= e;) {
            n *= e++;
            r *= o--;
        }
        return r / n;
    })(1, 1, 1, r, r);
};

function toggleItemInArr (arr, item) {
    if (arr.indexOf(item) > -1) {
        arr.splice(arr.indexOf(item), 1);
    } else {
        arr.push(item);
    }
    return arr;
}

function getRandomNumber (startArray, N, HaveChosen) {
    if (N <= 0) {
        return [];
    }
    var resultArray = [];// 结果存放在里面
    var booleanArr = [];
    HaveChosen = HaveChosen || [];
    for (var i = 0; i < startArray.length; i++) {
        if (HaveChosen.indexOf('' + startArray[i]) > -1) {
            booleanArr.push(true);
        } else {
            booleanArr.push(false);
        }
    }
    for (;true;) {
        var seed = Math.floor(Math.random() * (startArray.length));// Math.random(0, startArray.length - i);//从剩下的随机数里生成
        if (booleanArr[seed]) {
            continue;
        }
        booleanArr[seed] = true;
        resultArray.push(startArray[seed]);
        if (resultArray.length === N) {
            break;
        }
    }
    resultArray.sort(function (a, b) {
        return a - b;
    });
    return resultArray;
}

function buildBallsArr (len, beginIndex) {
    let arr = [];
    for (let i = 0; i < len; i++) {
        let idx = beginIndex + i;
        if (idx < 10) {
            arr.push('0' + idx);
        } else {
            arr.push(idx.toString());
        }
    }
    return arr;
}

</script>