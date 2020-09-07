import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from '@modules/frontpages/services/categorie.service';

@Component({
    selector: 'sb-categorie',
    templateUrl: './categorie.component.html',
    styleUrls: ['./categorie.component.scss'],
})
export class CategorieComponent implements OnInit {
    // @ts-ignore
    catForm: FormGroup;
    // @ts-ignore
    selectedFile: File = null;
    constructor() {}

    ngOnInit() {}
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
