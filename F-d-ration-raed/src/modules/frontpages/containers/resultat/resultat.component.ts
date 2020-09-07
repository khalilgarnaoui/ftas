import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { resultat } from '@modules/frontpages/models';
import { ResultatService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-resultat',
    templateUrl: './resultat.component.html',
    styleUrls: ['./resultat.component.scss'],
})
export class ResultatComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    resultatForm: FormGroup;
    // @ts-ignore
    res = new resultat();
    json: any;
    // @ts-ignore
    selectedFile: File = null;
    constructor(private resultatService1: ResultatService, private router: Router) {}
    ngOnInit() {
        this.resultatForm = new FormGroup({
            idcompetition: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            date: new FormControl(null, Validators.required),
            lieu: new FormControl(null, Validators.required),
        });
        this.resultatForm.setValue({
            idcompetition: this.res.idcompetition,
            nom: this.res.nom,
            date: this.res.date,
            lieu: this.res.lieu,
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
        this.json = JSON.stringify(this.resultatForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.resultatForm.reset();
    }

    /* addresultat(formulaire: NgForm) {
        /*this.resultatService1.addresultat(formulaire.value).subscribe(
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
