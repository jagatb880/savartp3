import { Component, OnInit,ViewChild ,HostListener, ElementRef, AfterViewInit} from '@angular/core';
import SignaturePad from 'signature_pad';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Location } from '@angular/common';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.page.html',
  styleUrls: ['./signature.page.scss'],
})
export class SignaturePage implements OnInit {
  @ViewChild('canvas', { static: true }) signaturePadElement;
  signaturePad: any;
  canvasWidth: number;
  canvasHeight: number;
  data: { title: string; };
  constructor(private base64ToGallery: Base64ToGallery,private elementRef: ElementRef,
    private location: Location,private navCtrl: NavController) {
        this.data={'title':'This Terms of Use is drafted in conformity with the Information Technology (Intermediaries Guidelines) Rules, 2011 specified under the Information Technology Act, 2000 in order to regulate the terms and conditions of usage and access to Website (defined hereinafter) and App (defined hereinafter) and the Services (defined hereinafter). No physical or digital signature, acceptance is necessitated in order to validate this Terms. Svobodha Infinity Private Limited (hereinafter referred to as “Company”, “Savart”, “we”, “us” or “our”) is engaged into investment advisory services and distribution services and focuses in bringing people close to the market and making it simple and affordable to invest. Savart is a Corporate Registered Investment Adviser. Please read these Terms and Conditions (“Terms”) carefully before using the “Website”, www.Savart.in and Savart mobile application (“App”), collectively referred as “Platform”. Savart would offer investment advisory services (“Advisory Service”) referred as the “Service” or “Services”).'}
   }

  ngOnInit() {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }
  init() {
    const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 140;
    if (this.signaturePad) {
      this.signaturePad.clear(); // Clear the pad on init
    }
  }

  public ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
    this.signaturePad.clear();
    // this.signaturePad.penColor = 'rgb(56,128,255)';
  }

  save(): void {
    console.log(this.signaturePad.toDataURL())
    const img = this.signaturePad.toDataURL();
    this.base64ToGallery.base64ToGallery(img).then(
      res => console.log('Saved image to gallery ', res),
      err => console.log('Error saving image to gallery ', err)
    );
  }

  isCanvasBlank(): boolean {
    if (this.signaturePad) {
      return this.signaturePad.isEmpty() ? true : false;
    }
  }

  clear() {
    this.signaturePad.clear();
  }

  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }
  signup(){
    this.navCtrl.navigateRoot(['investment-summary'])
  }
  backBtn(){
    this.location.back();
  }
}
