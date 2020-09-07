import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AthleteService} from '@modules/frontpages/services';

import {athlete} from '../../models/athlete.model';

@Component({
    selector: 'sb-athlete',
    templateUrl: './athlete.component.html',
    styleUrls: ['./athlete.component.scss'],
})
export class AthleteComponent implements OnInit {
    errorMessage = '';
    // @ts-ignore
    athleteForm: FormGroup;
    athle = new athlete();
    json: any;

    // formulaire: NgForm;
    constructor(private AthleteService1: AthleteService, private router: Router) {
    }

    ngOnInit() {
        this.athleteForm = new FormGroup({
            id: new FormControl(null, Validators.required),
            nom: new FormControl(null, Validators.required),
            prenom: new FormControl(null, Validators.required),
            sexe: new FormControl(null, Validators.required),
            ddn: new FormControl(null, Validators.required),
            lieu: new FormControl(null, Validators.required),
            club: new FormControl(null, Validators.required),
            clubetranger: new FormControl(null, Validators.required),
            discipline1: new FormControl(null, Validators.required),
            discipline2: new FormControl(null, Validators.required),
            Meilleurperfo1: new FormControl(null, Validators.required),
            Meilleurperfo2: new FormControl(null, Validators.required),
            classe: new FormControl(null, Validators.required),
            etablissement: new FormControl(null, Validators.required),
            encadreurtech: new FormControl(null, Validators.required),
            Npasseport: new FormControl(null, Validators.required),
            validite: new FormControl(null, Validators.required),
            telephone: new FormControl(null, Validators.required),
            adremail: new FormControl(null, Validators.required),
            adresse: new FormControl(null, Validators.required),
            pointure: new FormControl(null, Validators.required),
            Performances: new FormControl(null, Validators.required),
            PathPerformanceCopiePDF: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        this.json = JSON.stringify(this.athleteForm.value);
        console.log(this.json);
        // this.http.put('http://localhost:3000/api/athlete/' +  this.athle.id, this.json, {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json'
        //     })
        // })
        //     .subscribe(responseData => {
        //         console.log(responseData);
        //     });
        this.athleteForm.reset();
    }

    /*addathlete(formulaire: NgForm) {
        /*this.AthleteService1.addAthlete(formulaire.value).subscribe(
            reponse => {
                const link = ['form'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );
    }*/
}
