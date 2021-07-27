import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResearchRequestInvestmentdescriptionPage } from './research-request-investmentdescription.page';

describe('ResearchRequestInvestmentdescriptionPage', () => {
  let component: ResearchRequestInvestmentdescriptionPage;
  let fixture: ComponentFixture<ResearchRequestInvestmentdescriptionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchRequestInvestmentdescriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchRequestInvestmentdescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
