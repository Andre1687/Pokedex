import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonPokedexComponent } from './skeleton-pokedex.component';

describe('SkeletonPokedexComponent', () => {
  let component: SkeletonPokedexComponent;
  let fixture: ComponentFixture<SkeletonPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonPokedexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
