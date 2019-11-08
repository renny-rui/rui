import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo = { name: '' }
  today = new Date();
  weeekday = this.today.getDay();
  weekToday: string;
  items = [];
  completeditems = [];
  completed = 0;
  todoItems = 0;
  showComplete = true;
  todoForm: FormGroup;
  name = new FormControl('');
  updateName() {
    this.name.setValue('');
  }

  constructor(
  ) {
    this.todoForm = new FormGroup({
      item: new FormControl(''),
    });
    switch (this.weeekday) {

      case 1:

        this.weekToday = '星期一';

        break;

      case 2:

        this.weekToday = '星期二';

        break;

      case 3:

        this.weekToday = '星期三';

        break;

      case 4:

        this.weekToday = '星期四';

        break;

      case 5:

        this.weekToday = '星期五';

        break;

      case 6:

        this.weekToday = '星期六';

        break;

      case 0:

        this.weekToday = '星期日';

        break;



    }
  }

  ngOnInit(): void {
  }
  addItem(): void {
    if (this.todoForm.get('item').value) {
      this.items.push(this.todoForm.get('item').value);
    }
    this.todoItems = this.items.length;
    this.completed = Math.floor((this.completeditems.length / (this.items.length + this.completeditems.length)) * 100) / 100 * 100;
  }
  toItem(item): void {
    this.completeditems.splice(this.completeditems.indexOf(item), 1);
    this.items.push(item);

    this.todoItems = this.items.length;
    this.completed = Math.floor((this.completeditems.length / (this.items.length + this.completeditems.length)) * 100) / 100 * 100;
  }
  completeItem(item): void {
    this.items.splice(this.items.indexOf(item), 1);
    this.completeditems.push(item);

    this.todoItems = this.items.length;
    this.completed = Math.floor((this.completeditems.length / (this.items.length + this.completeditems.length)) * 100) / 100 * 100;
  }
  delItem(item): void {
    this.items.splice(this.items.indexOf(item), 1);

    this.todoItems = this.items.length;
    this.completed = Math.floor((this.completeditems.length / (this.items.length + this.completeditems.length)) * 100) / 100 * 100;
  }
  delCompletedItem(item): void {

    this.completeditems.splice(this.completeditems.indexOf(item), 1);

    this.completed = Math.floor((this.completeditems.length / (this.items.length + this.completeditems.length)) * 100) / 100 * 100;
  }
  clear(): void {
    this.items = [];
    this.completeditems = [];
    this.completed = 0;
    this.todoItems = 0;
  }

}




