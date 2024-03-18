import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnChanges {
  // @Input() chartTitle: string = ''; 
  @Input() chartData: any[] = []; // 没有用到，但没有图标就不自动刷新了
  @Input() chartLabel: any[] = [];
  @Input() chartType: 'line' | 'bar' | 'pie' | 'doughnut' | 'barMulti' = 'line';
  // @Input() pTotalTimeList: any[] = [];
  // @Input() chartOptionsBar: any;
  // @Input() chartOptionsLine: any;
  // @Input() chartOptionsPie: any;
  // @Input() chartOptionsDoughnut: any;
  @Input() dataBar: any;
  @Input() dataLine: any;
  @Input() dataPie: any;
  @Input() dataDoughnut: any;
  @Input() dataBarMulti: any;

  @Input() titlePie !: string;
  @Input() titleDoughnut !: string;

  @Input() titleBar !: string;
  @Input() xTitleBar !: string;
  @Input() yTitleBar !: string;

  @Input() titleBarMulti !: string;
  @Input() xTitleBarMulti !: string;
  @Input() yTitleBarMulti !: string;

  @Input() titleLine !: string;
  @Input() xTitleLine !: string;
  @Input() yTitleLine !: string;
  

  @ViewChild(BaseChartDirective) chart!: BaseChartDirective; // 使用非空断言

  chartOptionsLine: any;
  chartOptionsBar: any;
  chartOptionsPie: any;
  chartOptionsDoughnut: any;
  chartOptionsBarMulti: any;


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {

    this.chart.update(); // 手动触发图表更新

  }

  ngOnInit(): void {
    //########## BarMulti Chart options#########
    this.chartOptionsBarMulti = {
      responsive: true,
      plugins: {
        
        // datalabels: {
        //   color: '#000000',
        //   display: function(context) {
        //     return context.dataset.data[context.dataIndex] !== 0;
        //   },
        //   formatter: function(value, context) {
        //     return Math.round(value * 100) / 100;
        //   },
        //   anchor: 'start',
        //   align: 'end',
        //   offset: 4, 
        // }
        title: {
          display: true,
          text: this.titleBarMulti,
          color: 'green',
          font: {
            size: 16,
            weight: 'bold',
            family: 'Arial, sans-serif',

          }
        },
        legend: {
          display: true,
          position: "top"
        },
      },
      scales: {
        x: {stacked: true, //控制堆叠
          ticks: { color: 'white', }, title: {
            display: true,
            text: this.xTitleBarMulti,
            color: 'white',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial, sans-serif',
            }
          },
        },
        y: {stacked: true, //控制堆叠
          ticks: { color: 'white', },
          title: {
            display: true,
            text: this.yTitleBarMulti,
            color: 'white',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial, sans-serif',
            }
          },
          grid: { color: 'rgba(255, 255, 255, 0.2)' }
        }
      }
    };

    //###### Line Options ################################
    this.chartOptionsLine = {
      responsive: true,
      // maintainAspectRatio: false, // 禁用纵横比维持
      //   aspectRatio: 1.5, // 设置宽高比例，只在 maintainAspectRatio 为 false 时生效

      plugins: {
        title: {
          display: true,
          text: this.titleLine,
          color: 'green',
          font: {
            size: 16,
            weight: 'bold',
            family: 'Arial, sans-serif',

          }


        },
        legend: {
          display: false,
          position: "bottom"
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },

      },
      scales: {
        x: {
          title: {
            display: true,
            text: this.xTitleLine,
            color: 'white',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial, sans-serif',
            }
          },
          ticks: {
            color: 'white',

          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)'
          }

        },
        y: {
          title: {
            display: true,
            text: this.yTitleLine,
            color: 'white',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial, sans-serif',
            }
          },
          ticks: {
            color: 'white',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)'
          },
          // suggestedMin: 0.322, // 设置 y 轴的最小值
          // suggestedMax: 0.325, // 设置 y 轴的最大值
        }
      }
    };




    //###### Bar Options ################################
    this.chartOptionsBar = {
      responsive: true,

      plugins: {
        title: {
          display: true,
          text: this.titleBar,
          color: 'green',
          font: {
            size: 16,
            weight: 'bold',
            family: 'Arial, sans-serif',

          }
        },
        legend: {
          display: false,
          position: "bottom"
        },

      },
      scales: {
        x: {
          ticks: { color: 'white', }, title: {
            display: true,
            text: this.xTitleBar,
            color: 'white',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial, sans-serif',
            }
          },
        },
        y: {
          ticks: { color: 'white', },
          title: {
            display: true,
            text: this.yTitleBar,
            color: 'white',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Arial, sans-serif',
            }
          },
          grid: { color: 'rgba(255, 255, 255, 0.2)' }
        }
      }
    };

    //###### pie Options ################################
    this.chartOptionsPie = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: this.titlePie,
          color: 'green',
          font: {
            size: 16,
            weight: 'bold',
            family: 'Arial, sans-serif',
          }
        },

        legend: {
          display: true,
          position: 'right',
          labels: {
            color: 'white',
            font: {
              size: 10,
              // weight: 'bold',
              family: 'Arial, sans-serif',
            }
          }
        },
      }
    };

    //doughnut Options################################
    this.chartOptionsDoughnut = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: this.titleDoughnut,
          color: 'green',
          font: {
            size: 16,
            weight: 'bold',
            family: 'Arial, sans-serif',

          }

        },

        legend: {
          display: true,
          position: 'right',
          labels: {
            color: 'white',
            font: {
              size: 10,
              // weight: 'bold',
              family: 'Arial, sans-serif',
            }
          }
        },
      }
    };





  }
}




