import { Component, OnInit, Renderer2 } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import * as  Highcharts from 'highcharts';
import  More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
import  Tree from 'highcharts/modules/treemap';
Tree(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
Exporting(Highcharts);



@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {

  // @ViewChild("container", { read: ElementRef }) container: ElementRef;
  // @ViewChild("container") container: ElementRef;

  datas: any;
  constructor(private renderer: Renderer2) { 
  }

  ngOnInit() {
    this.datas = [
      {
        "name":"All",
        "status":false
      },
      {
        "name":"Jagat",
        "status":false
      },
      {
        "name":"Surahaya",
        "status":false
      },
      {
        "name":"Sanjuta",
        "status":false
      },
      {
        "name":"Rajat",
        "status":false
      },
      {
        "name":"Sumi",
        "status":false
      },
      {
        "name":"Sanghamitra",
        "status":false
      },
      {
        "name":"Jagat",
        "status":false
      },
    ]
    setTimeout(() => {
      var myChart = Highcharts.chart("container", {
        // Created pie chart using Highchart
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
         //   plotOptions: {
      //     pie: {
      //         size:'50%',
      //          height: '50%',
      //         dataLabels: {
      //             enabled: false
      //         }
      //     }
      // },
        title: {
          text: 'Contents using Pie chart'
        },
        subtitle: {
          text: '3D donut in Highcharts'
        },
        plotOptions: {
          pie: {
            innerSize: 0,
            depth: 45
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        series: [{
          name: 'Operating Systems',
          data: [
            {
              name: 'Windows',
              y: 88.19,
              drilldown: 'windows-versions'
            },
            ['MacOSX', 9.22],
            ['Linux', 1.58],
            ['Others', 1.01]
          ]
        }],
        drilldown: {
          series: [{
            name: 'Windows versions',
            id: 'windows-versions',
            data: [
              ['Win 7', 55.03],
              ['Win XP', 15.83],
              ['Win Vista', 3.59],
              ['Win 8', 7.56],
              ['Win 8.1', 6.18]
            ]
          }]
        }
      })

      Highcharts.chart('container1', {
        colorAxis: {
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors[0]
  },
  series: [{
      type: 'treemap',
      //layoutAlgorithm: 'squarified',
      point: {
        events: {
          click: function(event) {
            console.log("point.events.click() " + this.name);
          }
        }
      },
      levels: [
        {
          level: 1,
          layoutAlgorithm: "suarified",
          dataLabels: {
            enabled: true,
            verticalAlign: "top",
            style: {
              fontSize: "15px",
              fontWeight: "bold"
            }
          }
        },
        {
          level: 2,
          layoutAlgorithm: "suarified",
          dataLabels: {
            enabled: true
          },
          color: "blue"
        }
      ],
      data: [{
          name: 'AA',
          value: 6,
          colorValue: 1,
          drilldown: 'wAA'
      }, {
          name: 'BB',
          value: 6,
          colorValue: 2,
          drilldown: 'wBB'
      }, {
          name: 'CC',
          value: 4,
          colorValue: 3,
          drilldown: 'wCC'
      }, {
          name: 'D',
          value: 3,
          colorValue: 4
      }, {
          name: 'E',
          value: 2,
          colorValue: 5
      }, {
          name: 'F',
          value: 2,
          colorValue: 6
      }, {
          name: 'G',
          value: 1,
          colorValue: 7
      }]
  }],
  title: {
      text: 'Highcharts Treemap'
  },
  drilldown: {
    series: [{
            name: 'Col 1',
            id: 'wAA',
            type: 'treemap',
            data: [{
                    name: 'A',
                    value: 6,
                    colorValue: 1
                },
                {
                    name: 'B',
                    value: 4,
                    colorValue: 2
                },
                {
                    name: 'C',
                    value: 4,
                    colorValue: 3
                },
                {
                  name: 'D',
                  value: 2,
                  colorValue: 4
                },
                {
                  name: 'E',
                  value: 3,
                  colorValue: 5
                }
            ]
        },
        {
            name: 'Col 2',
            id: 'wBB',
            type: 'treemap',
            data: [{
                    name: 'A',
                    value: 250,
                    colorValue: 1
                },
                {
                    name: 'B',
                    value: 160,
                    colorValue: 2
                },
                {
                    name: 'C',
                    value: 220,
                    colorValue: 3
                }
            ]
        },
        {
            name: 'Col 3',
            id: 'wCC',
            type: 'treemap',
            data: [{
                    name: 'A',
                    value: 40,
                    colorValue: 1
                },
                {
                    name: 'B',
                    value: 60,
                    colorValue: 2
                },
                {
                    name: 'C',
                    value: 50,
                    colorValue: 3
                }
            ]
        }
    ]
}
  })
    }, 1000);
    
  }

  onClick(event){
    if(event.detail.checked){	
      this.renderer.setAttribute(document.body,'data-theme', 'dark')	
    } else {
      this.renderer.setAttribute(document.body,'data-theme', 'light')
    }
  }

  chipEvent(data){
    if(data.status){
      if(data.name == 'All'){
        this.datas.forEach(data => {
          data.status = false
        });
      }else{
        data.status = false;
      }
    }else{
      if(data.name == 'All'){
        this.datas.forEach(data => {
          data.status = true
        });
      }else{
        data.status = true
      }
    }
  }

}
