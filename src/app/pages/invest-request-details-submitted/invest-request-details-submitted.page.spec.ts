import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvestRequestDetailsSubmittedPage } from './invest-request-details-submitted.page';

describe('InvestRequestDetailsSubmittedPage', () => {
  let component: InvestRequestDetailsSubmittedPage;
  let fixture: ComponentFixture<InvestRequestDetailsSubmittedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestRequestDetailsSubmittedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestRequestDetailsSubmittedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
