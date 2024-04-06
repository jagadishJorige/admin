import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Editor, Validators, } from 'ngx-editor';
import { Table } from 'primeng/table';
import { PostService } from './posts.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss',],
  providers: [MessageService]
})
export class PostsComponent implements OnInit, OnDestroy {
  uploadedFiles: any[] = [];
  editorValue = ''; // Variable to store CKEditor content
  editor!: Editor
  removedPlugins: any
  newsList: any[] = [
    { name: 'Main News', value: 'Main News' },
    { name: 'Headlines', value: 'Headlines' },
    { name: 'Trending', value: 'Trending' }
  ]
  sportsList: any[] = [
    { name: 'Tennis', value: 'Tennis' },
    { name: 'Cricket', value: 'Cricket' },
    { name: 'FootBall', value: 'FootBall' },
    { name: 'Hockey', value: 'Hockey' },
  ]
  componentState: 'table' | 'form' = 'table'
  form!: FormGroup;
  selectedPosts: any[] = []
  posts: any[] = [];
  selectedPostId!: number;
  submitType: string = 'save'
  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    public postService: PostService,) {
    this.removedPlugins = {
      uiColor: '#F0F3F4',
      height: '350',
      allowedContent: true,
      toolbarGroups: [
        { name: "document", groups: ["mode", "document"] },
        { name: "editing", groups: ["find", "selection", "spellchecker", "editing"] },
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
        { name: 'styles', groups: ['styles'] },
        { name: 'colors', groups: ['colors'] },
        { name: "tools", groups: ["Maximize"] },
      ],
      removeButtons: "Save,Templates,Find,Replace,Scayt,SelectAll,NewPage,Print",
    };
    this.form = this.fb.group({
      title: [''],
      authorName: [''],
      newsType: [[]],
      sportsType: [[]],
      uploads: [''],
      description: ['']
    })
  }

  ngOnInit(): void {
    this.editor = new Editor()
    this.getArticles();
  }

  getArticles() {
    this.postService.getArticle().subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.posts = response;
      }
    });
  }
  ngOnDestroy(): void {
    this.editor.destroy()
  }

  onSubmit(form: FormGroup, type: string) {
    console.log('formValue ', form.value);
    console.log(this.uploadedFiles)
    if (form.valid) {
      this.postService.saveArticle(this.form.value)
        .subscribe({
          next: response => {
            if (response) {
              if (this.uploadedFiles.length > 0) {
                this.uploadFiles(response);
              } else {
                this.getArticles();
              }
              this.componentState = 'table';
              this.form.reset();
              this.selectedPostId = -1;
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Article Saved Successfully',
              });
            }
          },
          error: (error: any) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
          }
        })
      // if(type === 'save'){
      //   this.posts.push(form.value);
      // } else {
      //   if(this.selectedPostId){
      //     this.posts[this.selectedPostId] = form.value
      //   }
      // }
      // localStorage.setItem('posts',JSON.stringify(this.posts));
    }
  }

  uploadFiles(resp: any) {
    const formData: any = new FormData();
    const files: Array<File> = this.uploadedFiles;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i], files[i]['name']);
    }
    formData.append('articleId', resp._id);
    this.postService.uploadArticle(formData)
      .subscribe(
        response => {
          console.log(response);
          this.getArticles();
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
        });
  }

  addNewPost() {
    this.componentState = 'form';
  }
  editPost(postId: any) {
    console.log(postId)
    this.componentState = 'form';
    this.submitType = 'edit';
    this.form.patchValue(this.posts[postId])
  }
  deletePost(postId: number) {
    this.posts.splice(postId, 1);
    localStorage.setItem('posts', JSON.stringify(this.posts))
  }
  backToTable() {
    this.componentState = 'table'
    this.form.reset();
    this.submitType = 'save'
  }
  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default: return 'success'
    }
  }
  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
}
