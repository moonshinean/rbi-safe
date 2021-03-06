import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-echarts-pie-trouble',
  templateUrl: './echarts-pie-trouble.component.html',
  styleUrls: ['./echarts-pie-trouble.component.scss']
})
export class EchartsPieTroubleComponent implements OnInit {

  public colorList: Array<any> = ['#226AD5', '#3B86FF', '#63DCAF', '#FCCF4F', '#94F6D2'];
  @Input() public name: any = '物的隐患';
  public option: any;
  @Input() public data = [
    {name: '物的隐患', value: 200},
    {name: '人的隐患', value: 50},
    {name: '管理的隐患', value: 50},
  ];
  constructor() { }

  ngOnInit() {
    this.option = {
      title: {
        text: this.name,
        subtext: '30%',
        textStyle: {
          fontSize: 14,
          color: '#545663',
          lineHeight: 20
        },
        subtextStyle: {
          fontSize: 20,
          color: '#5797FF'
        },
        textAlign: 'center',
        left: '33%',
        top: '50%'
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: '15%',
        top: '45%',
        itemGap: 20,
        selectedMode: false,
        icon: 'pin',
        textStyle: {
          color: '#77899c',
          rich: {
            uname: {
              width: 20
            },
            // unum: {
            //   color: '#4ed139',
            //   width: 40,
            //   align: 'right'
            // }
          }
        },
        formatter: (name) => {
          // let value =  0;
          // this.data.forEach(v => {
          //   if (name === v.name) {
          //     value = v.value;
          //   }
          // });
          // return `{uname|${name}}{unum|${value}}`;
          return `{uname|${name}}`;
        }
      },
      color: this.colorList,
      series: [
        {
          name: '隐患类型',
          type: 'pie',
          radius: ['45%', '60%'],
          center: ['35%', '60%'],
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          data: this.data,
        }
      ]
    };
  }
}
