import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterInvestmentAdviceComponent } from './filter-investment-advice.component';

describe('FilterInvestmentAdviceComponent', () => {
  let component: FilterInvestmentAdviceComponent;
  let fixture: ComponentFixture<FilterInvestmentAdviceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterInvestmentAdviceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterInvestmentAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
