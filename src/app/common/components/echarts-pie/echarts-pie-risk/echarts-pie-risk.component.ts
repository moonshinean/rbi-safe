import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echarts-pie-risk',
  templateUrl: './echarts-pie-risk.component.html',
  styleUrls: ['./echarts-pie-risk.component.scss']
})
export class EchartsPieRiskComponent implements OnInit {

  public colorList: Array<any> = ['#F1B74B ', '#65C4C2', '#7B9FF4', '#E8747C'];
  public name: any = '化学危害';
  public option: any;
  public data = [
    {name: '人生安全', value: 100},
    {name: '设备安全', value: 100},
    {name: '健康安全', value: 100},
    {name: '环境安全', value: 100},
  ];
  constructor() { }

  ngOnInit() {
    this.option = {
      title: {
        text: this.name,
        subtext: '30%',
        textStyle: {
          fontSize: 16,
          color: '#545663',
          lineHeight: 20
        },
        subtextStyle: {
          fontSize: 28,
          color: '#65C4C2'
        },
        textAlign: 'center',
        left: '50%',
        top: '45%'
      },
      tooltip: {
        trigger: 'item',
        // formatter: (params) => {
        //   this.name = params.name;
        // }
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',
        bottom: '0',
        // top: 'center',
        itemGap: 30,
        selectedMode: false,
        icon: 'pin',
        textStyle: {
          color: '#77899c',
          rich: {
            uname: {
              width: 50
            },
            unum: {
              color: '#4ed139',
              width: 40,
              align: 'right'
            }
          }
        },
        formatter: (name) => {
          let value =  0;
          this.data.forEach(v => {
            if (name === v.name) {
              value = v.value;
            }
          });
          return `{uname|${name}}{unum|${value}}`;
        }
      },
      color: this.colorList,
      series: [
        {
          name: '风险分类',
          type: 'pie',
          radius: [100, 140],
          center: ['50%', '50%'],
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
