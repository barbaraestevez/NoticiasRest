import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavBarComponent } from './search-nav-bar.component';

describe('SearchNavBarComponent', () => {
  let component: SearchNavBarComponent;
  let fixture: ComponentFixture<SearchNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchNavBarComponent]
    });
    fixture = TestBed.createComponent(SearchNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
