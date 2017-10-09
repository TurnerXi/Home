<template>
    <div class="plr_16 m-lottery_win" >
        <span >第{{issue_code}}期  {{end_time}}截止</span>
        <span class="red ml_6" v-show="accmulate_prize">奖池{{accmulate_prize}}</span>
    </div>
</template> 

<script type="text/javascript">
import { Vue, $, Common } from 'js/base'
export default {
    data: function () {
        var data2004 = {
            'current': {
                'lot_code': '1',
                'issue_code': '17109',
                'main_issue': '',
                'issue_id': '199941',
                'opend_code': '',
                'open_time': '2017/09/18 20:30:00',
                'luck_balls': '',
                'accmulate_prize': '4268598636',
                'start_time': '2017/09/16 20:00:00',
                'end_time': '2017/09/18 20:00:00',
                'stop_time': '2017/09/18 19:20:00',
                'try_code': ''
            },
            'next': {
                'lot_code': '4',
                'issue_code': '17110',
                'issue_id': '200203',
                'opend_code': '',
                'open_time': '2017/09/19 20:30:00',
                'luck_balls': '',
                'accmulate_prize': '',
                'start_time': '2017/09/17 20:00:00',
                'end_time': '2017/09/19 20:00:00'
            },
            'previous': {
                'lot_code': '1',
                'issue_code': '17108',
                'issue_id': '198535',
                'opend_code': '01,04,15,21,22|04,09',
                'open_time': '2017/09/16 20:30:00',
                'luck_balls': '',
                'accmulate_prize': '4268598636',
                'try_code': ''
            }
        };

        var currentIssue = data2004.current;
        setInterval(function () {
            currentIssue.accmulate_prize++
        }, 1000);
        return currentIssue;
    }
}
</script>