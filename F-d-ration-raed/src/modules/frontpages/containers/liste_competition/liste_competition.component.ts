import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitionsService } from '@modules/frontpages/services';
import { competitions } from '@modules/frontpages/models';

@Component({
    selector: 'sb-listecompetition',
    templateUrl: './liste_competition.component.html',
    styleUrls: ['./liste_competition.component.scss'],
})
export class ListecompetitionComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    compForm: FormGroup;
    competition = new competitions();
    json: any;
    // @ts-ignore
    selectedFile: File = null;
    constructor(private listecompetitionService1: CompetitionsService, private router: Router) {}

    ngOnInit() {
        this.compForm = new FormGroup({
            idcompetition: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            organisateur: new FormControl(null, Validators.required),
        });
        this.compForm.setValue({
            idcompetition: this.competition.idcompetition,
            nom: this.competition.nom,
            organisateur: this.competition.organisateur,
        });
    }
    onSubmit() {
        this.json = JSON.stringify(this.compForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.compForm.reset();
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
    /*
     addcompetition(formulaire: NgForm) {
        /*this.competitionService1.addcompetition(formulaire.value).subscribe(
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
