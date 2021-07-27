import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavartCommunityGuidelinesPage } from './savart-community-guidelines.page';

describe('SavartCommunityGuidelinesPage', () => {
  let component: SavartCommunityGuidelinesPage;
  let fixture: ComponentFixture<SavartCommunityGuidelinesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SavartCommunityGuidelinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavartCommunityGuidelinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
