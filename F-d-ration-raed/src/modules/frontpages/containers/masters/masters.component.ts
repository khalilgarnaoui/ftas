import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MastersService } from '@modules/frontpages/services';
import { masters } from '@modules/frontpages/models';

@Component({
    selector: 'sb-masters',
    templateUrl: './masters.component.html',
    styleUrls: ['./masters.component.scss'],
})
export class MastersComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    masterForm: FormGroup;
    master = new masters();
    json: any;
    // @ts-ignore
    selectedFile: File = null;
    constructor(private mastersService1: MastersService, private router: Router) {}

    ngOnInit() {
        this.masterForm = new FormGroup({
            idmas: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            nbrpatrtietr: new FormControl(null, Validators.required),
            nbrtotal: new FormControl(null, Validators.required),
        });
        this.masterForm.setValue({
            idmas: this.master.idmas,
            description: this.master.description,
            nbrpatrtietr: this.master.nbrpatrtietr,
            nbrtotal: this.master.nbrtotal,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.masterForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.masterForm.reset();
    }
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
