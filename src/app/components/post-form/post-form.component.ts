import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { PostService } from '../../services/post.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: Boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title: string, body: string) {
    if(!title || !body){
      alert("Please add post")
    }else{
      this.postService.savePost({title, body} as Post).subscribe( post => { 
        this.newPost.emit(post);
      })
      
    }
  
  }

  updatePost(){
    if(!this.currentPost.title || !this.currentPost.body){
      alert("Please add post")
    }else{
      this.postService.updatePost(this.currentPost).subscribe( post => { 
        this.isEdit = false;
        this.updatedPost.emit(post);
        
      })
      
    }
  }

}
