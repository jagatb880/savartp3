import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdviceInvestmentAdvicePage } from './advice-investment-advice.page';

describe('AdviceInvestmentAdvicePage', () => {
  let component: AdviceInvestmentAdvicePage;
  let fixture: ComponentFixture<AdviceInvestmentAdvicePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceInvestmentAdvicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdviceInvestmentAdvicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
