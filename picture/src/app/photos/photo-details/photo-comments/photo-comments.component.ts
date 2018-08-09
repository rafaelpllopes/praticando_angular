import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from './../../photo/photo.service';
import { PhotoComment } from './../../photo/photo-comment';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;
  commentForm: FormGroup;

  comments$: Observable<PhotoComment[]>

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);
    this.commentForm = this.formBuilder.group({
      comment: ['', [Validators.maxLength(300), Validators.required]]
    });
  }

}
