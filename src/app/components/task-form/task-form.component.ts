import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  @ViewChild('label') label!: ElementRef<HTMLInputElement>;

  addTask(text: string): void {
    console.log(text);
    this.label.nativeElement.value = '';
  }
}
