import { Component, OnInit } from '@angular/core';
import { CommentService } from '../api/comment-service';
import { Comment } from '../api/comment';
import { UserService } from '../api/user-service';
import { User } from '../api/user';
import { NgModel } from '@angular/forms';
import { TokenStorageService } from '../token-storage.service';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  showUsersPanel = true;
  actualUser : any | null = null;
  comments: Comment[] = [];
  users: User[] = [];
  newComment: string = '';

  constructor(private commentService: CommentService, private userService: UserService, private tokenStorageService: TokenStorageService) {}

  ngOnInit() {
    this.actualUser = this.tokenStorageService.getUserDataFromStorage();

    this.commentService.getComments().subscribe(
      (data: Comment[]) => {
        this.comments = data;
      },
      (error) => {
        console.error('Wystąpił błąd podczas pobierania komentarzy!', error);
      }
    );

    /*this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Wystąpił błąd podczas pobierania użytkowników!', error);
      }
    );*/
  }

  userHasComments(userId: number | null | undefined): boolean {
    return userId !== null && userId !== undefined && this.comments.some(comment => comment.idUsers === userId);
  }

  getUserComments(userId: number | null | undefined): Comment[] {
    return userId !== null && userId !== undefined ? this.comments.filter(comment => comment.idUsers === userId) : [];
  }

  addComment(userId: number | null | undefined): void {
    if (userId !== null && userId !== undefined && this.newComment.trim() !== '') {
      const newCommentObj: Comment = {
        id: null,
        idUsers: userId,
        comment: this.newComment,
        idGames: 1
      };

      this.commentService.addComment(newCommentObj).subscribe(
        (data: Comment) => {
          this.comments.push(data);
          this.newComment = '';
        },
        (error) => {
          console.error('Wystąpił błąd podczas dodawania komentarza!', error);
        }
      );
    }
  }
}
