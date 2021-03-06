import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sr-control-status',
  templateUrl: './sr-control-status.component.html',
  styleUrls: ['./sr-control-status.component.scss']
})
export class SrControlStatusComponent implements OnInit {

  public itemTypeList: Array<object> = [
    {title: '物理危害', content: '噪音、震动、容易碰撞设备、设施有缺陷的设备....', num: 52},
    {title: '化学危害', content: 'SF6气体及其分解物、强酸、强碱、甲醛气体.....', num: 23},
    {title: '生物危害', content: '细菌、有毒的植物、昆虫(蜜蜂等)、狗、蛇、霉菌、病毒...', num: 12},
    {title: '人机工效危害', content: '设计差、不便使用的工具、狭小的作业空间、重复....', num: 12},
    {title: '其他危害', content: '社会- 心里危害、行为危害、环境危害、能源危害....', num: 10}
  ];
  public lineData = [
    {name: '一', value1: 22, value2: 24},
    {name: '二', value1: 32, value2: 42},
    {name: '三', value1: 33, value2: 21},
    {name: '四', value1: 44, value2: 35},
    {name: '五', value1: 34, value2: 41}
  ];
  public lineTilte: any = '风险等级数量统计';
  constructor() { }

  ngOnInit() {
  }

}
