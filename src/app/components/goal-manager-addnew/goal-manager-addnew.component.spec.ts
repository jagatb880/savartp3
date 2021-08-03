import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoalManagerAddnewComponent } from './goal-manager-addnew.component';

describe('GoalManagerAddnewComponent', () => {
  let component: GoalManagerAddnewComponent;
  let fixture: ComponentFixture<GoalManagerAddnewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalManagerAddnewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoalManagerAddnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
