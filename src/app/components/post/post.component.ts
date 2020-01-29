import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from 'src/app/ipost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() posts: IPost;
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.deleted.emit();
  }

}
