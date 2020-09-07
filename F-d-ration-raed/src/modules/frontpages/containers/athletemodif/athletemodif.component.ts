import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { athlete, Performance, Performances } from '@modules/frontpages/models';
import { AthleteService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-athletemodif',
    templateUrl: './athletemodif.component.html',
    styleUrls: ['./athletemodif.component.scss'],
})
export class AthletemodifComponent implements OnInit {

    public Perfo = new Performances('', new Performance(0, '', '', ''));
    public athle = new athlete(
        '1',
        '1',
        'd',
        'kj',
        204578,
        'mùlmk',
        'k',
        'lkj',
        'lk',
        '',
        'lmk',
        'lkj',
        'kj',
        '',
        '',
        '',
        '',
        '',
        '',
        545457,
        '',
        '',
        45,
        this.Perfo,
        ''
    );
    constructor(private AthleteService1: AthleteService, private router: Router) {}

    ngOnInit(): void {}
}
