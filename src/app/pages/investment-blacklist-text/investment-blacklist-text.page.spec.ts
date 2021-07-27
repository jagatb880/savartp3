import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvestmentBlacklistTextPage } from './investment-blacklist-text.page';

describe('InvestmentBlacklistTextPage', () => {
  let component: InvestmentBlacklistTextPage;
  let fixture: ComponentFixture<InvestmentBlacklistTextPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentBlacklistTextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentBlacklistTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
