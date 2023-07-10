import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliciesPage } from './policies.page';

describe('PrivacyPoliciesPage', () => {
  let component: PoliciesPage;
  let fixture: ComponentFixture<PoliciesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PoliciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
