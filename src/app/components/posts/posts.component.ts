import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
    
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  onUpdatedPost(post: Post) {
    this.isEdit = false;
    this.posts.forEach((cur, index) =>{
      if(post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
      }
      this.currentPost = {
        id: 0,
        title: '',
        body: ''
      }
    })
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  deletePost(post: Post) {
    if(confirm('Are you sure?')) {
      this.postService.deletePost(post.id).subscribe(() => {
        this.posts.forEach((cur, index) =>{
          if(post.id === cur.id) {
            this.posts.splice(index, 1);
          }
        })
      })
    }
    this.currentPost = post;
  }
}
