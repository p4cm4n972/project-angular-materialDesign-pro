import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitSellerComponent } from './produit-seller.component';

describe('ProduitSellerComponent', () => {
  let component: ProduitSellerComponent;
  let fixture: ComponentFixture<ProduitSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
