import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeatmapPage } from './heatmap.page';

describe('HeatmapPage', () => {
  let component: HeatmapPage;
  let fixture: ComponentFixture<HeatmapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatmapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeatmapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
