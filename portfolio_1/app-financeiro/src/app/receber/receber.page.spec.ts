import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceberPage } from './receber.page';

describe('ReceberPage', () => {
  let component: ReceberPage;
  let fixture: ComponentFixture<ReceberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
