import { Component } from '@angular/core';
import { ItemserviceService } from './itemservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTodo = { title: '', description: '' };

  constructor(private itemService: ItemserviceService) { }

  addTodo() {
    if (this.newTodo.title.trim() !== '') {
      this.itemService.addList({ ...this.newTodo, completed: false });
      this.newTodo = { title: '', description: '' };
    }else{
      alert('Please enter title');
    }
  }
}
