import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'sb-uploadrecord',
  templateUrl: './uploadrecord.component.html',
  styleUrls: ['./uploadrecord.component.scss']
})
export class UploadrecordComponent implements OnInit {

    // @ts-ignore
    selectedFile: File = null;
    // @ts-ignore
    recForm: FormGroup;
    constructor() {}

    ngOnInit(): void {}
    onFileSelected({ event }: { event: any }) {
        this.selectedFile = event.target.files[0] as File;
    }
    onUpload() {
        const fd = new FormData();
        fd.append('file', this.selectedFile, this.selectedFile.name);
        /* this.http.post('', fd).subscribe(res => {
             console.log(res);
         });*/
    }

}
