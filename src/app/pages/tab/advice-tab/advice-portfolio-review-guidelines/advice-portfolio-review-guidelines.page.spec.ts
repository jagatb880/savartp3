import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvicePortfolioReviewGuidelinesPage } from './advice-portfolio-review-guidelines.page';

describe('AdvicePortfolioReviewGuidelinesPage', () => {
  let component: AdvicePortfolioReviewGuidelinesPage;
  let fixture: ComponentFixture<AdvicePortfolioReviewGuidelinesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvicePortfolioReviewGuidelinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvicePortfolioReviewGuidelinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
