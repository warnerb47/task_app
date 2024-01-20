import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {

  @Output() handleDelete: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  onDelete(value: boolean): void {
    this.handleDelete.emit(value);
  }
}
