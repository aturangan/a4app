import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran');
  }

  ngOnInit() {
    console.log('ngOnInit ran');

    this.name = 'Alana';
    this.age = 23;
    this.email = 'alana.turangan@gmail.com';
    this.address = {
      street: 'main st',
      city: 'san francisco',
      state: 'CA'
    }
    this.hobbies = ['art', 'music', 'code'];
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })

  }

  onClick() {
    if (this.name === 'Alana') {
      this.name = 'Alana Turangan'
    } else {
      this.name = 'Alana';
    }
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false; 
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Post {
  id:number,
  title:string,
  body:string
  userId:number
}
