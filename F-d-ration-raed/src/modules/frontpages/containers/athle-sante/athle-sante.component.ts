import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { athlesante } from '@modules/frontpages/models';
import { athlesanteService } from '@modules/frontpages/services/athlesante.service';

@Component({
    selector: 'sb-athle-sante',
    templateUrl: './athle-sante.component.html',
    styleUrls: ['./athle-sante.component.scss'],
})
export class AthleSanteComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    athlesanteForm: FormGroup;
    athles = new athlesante();
    json: any;
    // @ts-ignore
    selectedFile: File = null;
    constructor(
        private athlesanteService1: athlesanteService,
        private router: Router,
        private http: HttpClient
    ) {}

    ngOnInit() {
        this.athlesanteForm = new FormGroup({
            id: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            programme: new FormControl(null, Validators.required),
        });
        this.athles.id = 0;
        this.athlesanteForm.setValue({
            id: this.athles.id,
            description: this.athles.description,
            programme: this.athles.programme,
        });
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
    onSubmit() {
        this.json = JSON.stringify(this.athlesanteForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api//' +  this.athles.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.athlesanteForm.reset();
    }
    /*addAthlesante(formulaire: NgForm) {
        this.athlesanteService1.addathlesante(formulaire.value).subscribe(
            reponse => {
                const link = ['ath'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );
    }*/
}
