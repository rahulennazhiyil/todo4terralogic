import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  private listofItems: any[] = [];

  constructor() {
    this.getList();
  }

  getList(){
    const savedList = localStorage.getItem('listsOfItems');
    savedList ? this.listofItems = JSON.parse(savedList) : '';
  }

  savelist(){
    localStorage.setItem('listsOfItems',JSON.stringify(this.listofItems))
  }

  getdata() {
    return this.listofItems;
  }

  addList(todo: any) {
    this.listofItems.push(todo);
    this.savelist();
  }

  updatelist(index: number, updatedTodo: any) {
    this.listofItems[index] = updatedTodo;
    this.savelist();
  }

  deletelist(index: number) {
    this.listofItems.splice(index, 1);
    this.savelist();
  }

  CompleteList(index: number) {
    this.listofItems[index].completed = true;
    this.savelist();
  }

}
