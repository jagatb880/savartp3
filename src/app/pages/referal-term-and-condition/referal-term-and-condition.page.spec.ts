import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferalTermAndConditionPage } from './referal-term-and-condition.page';

describe('ReferalTermAndConditionPage', () => {
  let component: ReferalTermAndConditionPage;
  let fixture: ComponentFixture<ReferalTermAndConditionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferalTermAndConditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferalTermAndConditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
