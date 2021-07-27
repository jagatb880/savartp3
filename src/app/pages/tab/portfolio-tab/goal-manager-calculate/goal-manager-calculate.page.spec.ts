import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalManagerCalculatePage } from './goal-manager-calculate.page';

describe('GoalManagerCalculatePage', () => {
  let component: GoalManagerCalculatePage;
  let fixture: ComponentFixture<GoalManagerCalculatePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalManagerCalculatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalManagerCalculatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
