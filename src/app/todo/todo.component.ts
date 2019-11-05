import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo={name:''}
  todoForm:FormGroup;
name=new FormControl('');
updateName(){
  this.name.setValue('');
}


  ngOnInit(): void {
    this.todoForm = new FormGroup({
      'name': new FormControl(this.todo.name, []),
  })
}
}




