import {
  Component,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  HttpService
} from 'wacom';


@Component({
  selector: 'files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  @Input() not_modal = true;
  @Input() show_files = true;
  @Input() show_folders = true;
  @Input() show_picture = false;
  @Input() base = '';
 
  // @Output() newBase = '';
  public name = '';
  public picture: any = [];
  public folders: any = [];
  public files: any = [];


  upload(files) {
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append('file', files[i])
      formData.append('base', this.base)
      this.http.post('/api/folder/upload', formData, () => {
        this.ngOnInit();
      })
    };

  };

  delete(file) {
    this.http.post('/api/folder/delete', {
      file
    })
  };

  create(name) {
    this.http.post('/api/folder/create', {
      base:this.base,
      name
    })

  };


  constructor(
    private http: HttpService,

  ) {}
  
  ngOnInit(): void {
    this.http.post('/api/folder/list', {
      base: this.base
    }, resp => {
      this.files = resp.files;
      this.folders = resp.folders;
     
    });
  }

}
