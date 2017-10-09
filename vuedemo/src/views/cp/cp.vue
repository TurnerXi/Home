<template>
<div class="pagewrap p-ssq_chooseBall">
	<lot-header :lotName="lotName" :playTypes="playTypes" :currentPlay="currentPlay"></lot-header>

	<section class="g-ball_box" id="touzhubox">
	
		<!-- <lotter-history-component></lotter-history-component> -->

        <div class="mt_10 mb_10 plr_16 ui-avc">
         <div class="flex1">至少选择<em class="red">5个红球</em>，<em class="blue">2个蓝球</em></div>
         <i class="i-delback" ontap="clearnumber()"></i>
        </div>
		<div class="plr_16" id="pt">
			<div id="redq" class="m-ball_list clearfix mb_10 redballs bor3d">
			<label name="redlabel"><i class="i-redball" name="selRed" vrq="01">01</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="02">02</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="03">03</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="04">04</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="05">05</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="06">06</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="07">07</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="08">08</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="09">09</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="10">10</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="11">11</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="12">12</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="13">13</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="14">14</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="15">15</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="16">16</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="17">17</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="18">18</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="19">19</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="20">20</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="21">21</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="22">22</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="23">23</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="24">24</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="25">25</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="26">26</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="27">27</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="28">28</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="29">29</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="30">30</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="31">31</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="32">32</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="33">33</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="34">34</i></label><label name="redlabel"><i class="i-redball" name="selRed" vrq="35">35</i></label>
			</div>
			<div id="blueq" class="m-ball_list clearfix blueballs">
				<label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="01">01</i></label><label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="02">02</i></label><label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="03">03</i></label><label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="04">04</i></label><label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="05">05</i></label><label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="06">06</i></label><label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="07">07</i></label><label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="08">08</i></label><label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="09">09</i></label><label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="10">10</i></label><label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="11">11</i></label><label name="bluelabel"><i class="i-blueball" name="selBlue" vbq="12">12</i></label>
			</div>
		</div>
	</section>
	<section class="g-submit_wrap">
		<div class="m-submit_box disabled" id="confirm_selected_div">
			<p class="buyInfos fz_14" id="select_code_id" style="display:none"></p>
			<div class="d-box btns plr_16">
				<div class="szcter">
					<div class="btn_white" id="randbtn" >机选</div>
                    <ul class="pop_notesBox" id="Mi_zs_pop" style="display:none;">
                    	<li class="Mi_btn_random" data-zs="10">10注</li>
                        <li class="Mi_btn_random" data-zs="5">5注</li>
                        <li class="Mi_btn_random randbtn" data-zs="1">1注</li>
                    </ul>
                </div>
				<a class="btn_red b-flex" id="tobuy">确认选号</a>
			</div>
		</div>
	</section>
	
	<!-- 万元加奖 -->
	<section class="i-jyhbBox mi_prize_jj" style="display:none;">
	    <div class="i-jyhb" ></div>
	</section>
	<section class="jyBox" id="g-jyddzbody" style="display:none;">
	    <div class="jyBoxfix">
	        <section class="ui-avc">
	            <i class="l_fold" ></i>
	            <div class="b-flex">
	            	<ul class="tabwytab ui-avc">
	                	<li class="b-flex on">头奖！派送2亿</li>
	                    <li class="b-flex">固定奖！派送3亿</li>
	                </ul>
	                <div class="ui-cvertical r_Box mi_jj_box">
	                    <i class="i-jyexp" ></i>
						<table class="wjpjtb">
	                    	<tbody><tr>
	                        	<td width="50%;">2元最高可中</td>
	                            <td>3元最高可中</td>
	                        </tr>
	                        <tr>
	                        	<td><em class="fz_wja">1500万</em></td>
	                            <td><em class="fz_wja">2400万</em></td>
	                        </tr>
	                    </tbody></table>
	                </div>
	                
	                <div class="ui-cvertical r_Box mi_jj_box" style="display:none;">
	                    <i class="i-jyexp"></i>
						<table class="wjpjtb">
	                    	<tbody><tr>
	                        	<td>四等奖</td>
	                            <td>五等奖</td>
	                            <td>六等奖</td>
	                        </tr>
	                        <tr>
	                        	<td>300+<em class="red">100元</em></td>
	                            <td>15+<em class="red">5元</em></td>
	                            <td>5+<em class="red">5元</em></td>
	                        </tr>
	                    </tbody></table>
	                    <p class="fz_10 ta_c">注: 固定奖派奖仅限追加投注</p>
	                </div>
	                
	            </div>
	        </section>
	    </div> 
	</section>
	<!-- 万元加奖END -->
</div>

<!--清空END-->
</template>

<script type="text/javascript">
import LotHeader from '../../components/common/header/LotHeader.vue'
import store from '../../vuex/store'
import {mapState} from 'vuex'
var playTypes = [{pType: 1001, pName: '普通投注'}, {pType: 1002, pName: '胆拖投注'}];
export default{
    data: () => {
        return {
            playTypes: playTypes,
            showNav: false,
            lotId: 1,
            lotName: '大乐透',
            currentPlay: playTypes[0]
        }
    },
    components: {
        'lot-header': LotHeader
    },
    computed: {
    	currentPlay: function(){
    		return 
    	}
    }
}
</script>