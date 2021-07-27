import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvicePortfolioReviewPage } from './advice-portfolio-review.page';

describe('AdvicePortfolioReviewPage', () => {
  let component: AdvicePortfolioReviewPage;
  let fixture: ComponentFixture<AdvicePortfolioReviewPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvicePortfolioReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvicePortfolioReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
