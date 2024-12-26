import { Component, OnInit } from '@angular/core';
import { ItemserviceService } from '../itemservice.service';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.scss']
})
export class ListOfItemsComponent implements OnInit {

  todos:any= [];

  constructor(private itemService: ItemserviceService) { }

  ngOnInit(): void {
    this.todos = this.itemService.getdata();
  }

  markAsCompleted(index: number) {
    this.itemService.CompleteList(index);
  }

  deleteTodo(index: number) {
    this.itemService.deletelist(index);
    this.todos = this.itemService.getdata();
  }

  editTodo(index: number) {
    const updatedTodo = prompt('Enter new title:', this.todos[index].title);
    if (updatedTodo !== null && updatedTodo.trim() !== '') {
      this.itemService.updatelist(index, { title: updatedTodo, description: this.todos[index].description, completed: this.todos[index].completed });
      this.todos = this.itemService.getdata();
    }
  }

}
