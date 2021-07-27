import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceRequestSuccessfulPage } from './service-request-successful.page';

describe('ServiceRequestSuccessfulPage', () => {
  let component: ServiceRequestSuccessfulPage;
  let fixture: ComponentFixture<ServiceRequestSuccessfulPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRequestSuccessfulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceRequestSuccessfulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
