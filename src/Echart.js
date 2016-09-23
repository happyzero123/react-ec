import React from 'react';
import echarts from 'echarts';

class Echart extends React.Component {
  componentDidMount(){
    // 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data:[
              {value:400, name:'搜索引擎'},
              {value:335, name:'直接访问'},
              {value:310, name:'邮件营销'},
              {value:274, name:'联盟广告'},
              {value:235, name:'视频广告'}
          ]

      }]
    })
    myChart.on('click', function (params) {
        // 控制台打印数据的名称
        console.log(params.name);
    });
  }

  render () {
    return(
      <div>
        <div id="main" style={{width: '600px',height:'400px'}}></div>
      </div>
    )
  }
}

export default Echart;
