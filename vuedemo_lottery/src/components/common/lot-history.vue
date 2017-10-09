<template>
<article class="histroy_wrap">
	<div  class="m-lottery_history plr_16" @click="show_history();">
			<span class="i-slide" ></span>
				<div >上期开奖:{{open_code}}</div>		
			<span class="i-slide"><em class="i-arrowD"></em>点此展开历史开奖</span>	
 	</div>
	<section class="m-lottery_zs" v-show="is_show_history" >
		<ul class="zslstable ssq">
            <li class="th">
                <div class="td" style="width:4rem;">期号</div>
                <div class="td">开奖号码</div>
                <div class="td">大/小比</div>
                <div class="td">区间比</div>
                <div class="td">奇偶比</div>
            </li>
            <template v-for="(issue, index) in history.data" v-if="index>history.data.length-6">
                <li class="tr">
                    <div class="td" style="width:4rem;">{{issue.child_issue_code}}</div>
                    <div class="td"><i class="red">{{each issue.open_codes_red as open_code_red index_open_code_red}}{{open_code_red}} {{/each}}</i> <i class="blue">{{each issue.open_codes_blue as open_code_blue index_open_code_blue}}{{open_code_blue}} {{/each}}</i></div>
                    <div class="td">{{issue.ratio_big_small}}</div>
                    <div class="td">{{issue.ratio_ranges}}</div>
                    <div class="td">{{issue.ratio_odd_even}}</div>
                </li>
           </template>
        </ul>
      <div class="zsprompt gray"> 点击以上区域查看更多（数据源自近50期统计结果）</div>           
	</section>
</article>
</template>
<script type="text/javascript">
	
</script>