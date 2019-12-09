import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildonePage } from './childone.page';

describe('ChildonePage', () => {
  let component: ChildonePage;
  let fixture: ComponentFixture<ChildonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
