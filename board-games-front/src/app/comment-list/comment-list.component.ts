import { Component, OnInit } from '@angular/core';
import { CommentService } from '../api/comment-service';
import { Comment } from '../api/comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  comments: Comment[] = [];
  
  comment!: Comment;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    
      this.commentService.getComments().subscribe(
        (data: Comment[]) => {
          this.comments = data;
        },
        (error) => {
          console.error('Wystąpił błąd podczas pobierania komentarzy!', error);
        }
      );
  
  }
}