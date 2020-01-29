import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/ipost';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts: IPost[];

  constructor() { }

  ngOnInit() {
    this.posts = [
      {
        title: "I'm going to be a dad",
        thought:"This May",
      },
      {
        title: 'Vote Andrew Yang',
        thought:"Because he is the most well prepared and data driven candidate",
      },
      {
        title: 'My monkey is an uncle',
        thought:"Because he scratches himself",
      },
    ]
  }

  removePost(i) {
    this.posts.splice(i,1)
  }

  onSubmit(post) {
    console.log('post');
    this.posts.unshift(post);
  }

  // form: boolean = false;

  // clickEvent() {
  //     // this.form = !this.form;      
  //     console.log('i function');
  // }

}
