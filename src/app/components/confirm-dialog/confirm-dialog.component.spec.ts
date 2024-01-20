import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogComponent } from './confirm-dialog.component';

// npm run ng test -- --include src\app\components\confirm-dialog\confirm-dialog.component.spec.ts
describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConfirmDialogComponent ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ConfirmDialogComponent);
      component = fixture.componentInstance;
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should emit handleDelete with value false', async () => {
  //   spyOn(component, 'onDelete');
  //   const fixture = TestBed.createComponent(ConfirmDialogComponent);
  //   let button = fixture.debugElement.nativeElement.querySelector('#cancel') as HTMLButtonElement;
  //   button?.click();
  //   fixture.whenStable().then(() => {
  //     expect(component.onDelete).toHaveBeenCalledWith(false);
  //   });
  // });

});
