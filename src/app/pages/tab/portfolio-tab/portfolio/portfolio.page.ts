import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BankDetailsComponent } from 'src/app/components/bank-details/bank-details.component';
import { ModalController } from '@ionic/angular';
import * as  Highcharts from 'highcharts';
import  More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
import  Tree from 'highcharts/modules/treemap';
Tree(Highcharts);
import Exporting from 'highcharts/modules/exporting';
Exporting(Highcharts);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss']
})
export class PortfolioPage implements OnInit {
  getdata: {
    option: string;
  } [];
  modal: boolean;
  array: {
    id: string;
  } [];
  videoPlayStatus: boolean;
  savartBenefits: any[];
  investments: any[];
  constructor(private navCtrl: NavController, private modalCtrl: ModalController) {
    this.getdata = [{
      option: 'all'
    }]
    this.modal = false;
    this.array = [{
      id: 'all'
    }, {
      id: 'all'
    }, {
      id: 'all'
    }]
  }

  ngOnInit() {
    this.videoPlayStatus = true;
    this.investments = [{
        "investment_name": "HDFC Bank Ltd.",
        "current_value": "₹3,000"
      },
      {
        "investment_name": "Avanti Feeds",
        "current_value": "₹3,000"
      },
      {
        "investment_name": "Parag Parikh",
        "current_value": "₹3,000"
      }
    ]
    this.savartBenefits = [{
        "image": "../../../../../assets/icon/Group26632.svg",
        "div1": "Wide Coverage",
        "div2": "Stock, Mutual Funds, IPO, Gold & Bonda"
      },
      {
        "image": "../../../../../assets/icon/Group26633.svg",
        "div1": "Globe Advice",
        "div2": "India, U.S.A, Canada"
      },
      {
        "image": "../../../../../assets/icon/Group26632.svg",
        "div1": "Wide Coverage",
        "div2": "Stock, Mutual Funds, IPO, Gold & Bonda"
      },
      {
        "image": "../../../../../assets/icon/Group26633.svg",
        "div1": "Globe Advice",
        "div2": "India, U.S.A, Canada"
      }
    ]

    setTimeout(() => {
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
              click: function (event) {
                console.log("point.events.click() " + this.name);
              }
            }
          },
          levels: [{
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

  async bankdetails(event: any) {
    const popover = await this.modalCtrl.create({
      component: BankDetailsComponent,
      cssClass: 'bankdetails-modal-class',
    });
    return await popover.present();
  }
  open() {
    this.modal = true;
  }

  close() {
    this.modal = false;
  }
  edit() {
    // this.navCtrl.navigateForward(['/tab/goal-manager'])
  }
  ionViewWillLeave() {
    let listaFrames = document.getElementsByTagName("iframe");

    for (var index = 0; index < listaFrames.length; index++) {
      let iframe = listaFrames[index].contentWindow;
      iframe.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    }
  }

  onScroll() {
    if (this.isElementInViewport(document.getElementById('videoTag'))) {
      this.videoPlayStatus = false;
      // if(this.videoPlayStatus){
      //   let listaFrames = document.getElementsByTagName("iframe");
      //   for (var index = 0; index < listaFrames.length; index++) {
      //     let iframe = listaFrames[index].contentWindow;
      //     iframe.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      //   }
      // }
    } else {
      if (!this.videoPlayStatus) {
        this.videoPlayStatus = true;
        let listaFrames = document.getElementsByTagName("iframe");
        for (var index = 0; index < listaFrames.length; index++) {
          let iframe = listaFrames[index].contentWindow;
          iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      }
    }
  }

  isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }
}