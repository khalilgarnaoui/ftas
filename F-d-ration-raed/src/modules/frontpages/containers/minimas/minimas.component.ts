import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'sb-minimas',
    templateUrl: './minimas.component.html',
    styleUrls: ['./minimas.component.scss'],
})
export class MinimasComponent implements OnInit {
    // @ts-ignore
    selectedFile: File = null;
    // @ts-ignore
    MinForm: FormGroup;
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
