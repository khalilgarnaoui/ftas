export class Performances {
    Type: string;
    Perfor: Performance;
    constructor(Type = '', Perfor = new Performance(0, '', '', '')) {
        this.Type = Type;
        this.Perfor = Perfor;
    }
}
export class Performance {
    Annee: number;
    PERFORMANCE: string;
    PLACE: string;
    DATE: string;
    constructor(Annee = 2019, PERFORMANCE = '', PLACE = '', DATE = '') {
        this.Annee = Annee;
        this.DATE = DATE;
        this.PERFORMANCE = PERFORMANCE;
        this.PLACE = PLACE;
    }
}

export class athlete {
    id: string;
    nom: string;
    prenom: string;
    sexe: string;
    ddn: string;
    lieu: string;
    club: string;
    clubetranger: string;
    discipline1: string;
    discipline2: string;
    Meilleurperfo1: string;
    Meilleurperfo2: string;
    classe: string;
    etablissement: string;
    encadreurtech: string;
    Npasseport: string;
    validite: string;
    telephone: number;
    adremail: string;
    adresse: string;
    pointure: number;
    Performances: Performances;
    PathPerformanceCopiePDF: string;

    constructor(
        id = '',
        nom = '',
        prenom = '',
        email = '',
        tel = 0,
        ddn = '',
        sexe = '',
        lieu = '',
        club = '',
        clubetranger = '',
        discipline1 = '',
        discipline2 = '',
        Meilleurperfo1 = '',
        Meilleurperfo2 = '',
        classe = '',
        etablissement = '',
        encadreurtech = '',
        Npasseport = '',
        validite = '',
        telephone = 25,
        adremail = '',
        adresse = '',
        pointure = 25,
        Perfo = new Performances('', new Performance(0, '', '', '')),
        PathPerformanceCopiePDF=''
    ) {
        this.id = id;
        this.adremail = adremail;
        this.adresse = adresse;
        this.classe = classe;
        this.club = club;
        this.clubetranger = clubetranger;
        this.ddn = ddn;
        this.discipline1 = discipline1;
        this.discipline2 = discipline2;
        this.encadreurtech = encadreurtech;
        this.etablissement = etablissement;
        this.lieu = lieu;
        this.Meilleurperfo1 = Meilleurperfo1;
        this.Meilleurperfo2 = Meilleurperfo2;
        this.nom = nom;
        this.Npasseport = Npasseport;
        this.Performances = Perfo;
        this.pointure = pointure;
        this.prenom = prenom;
        this.sexe = sexe;
        this.telephone = telephone;
        this.validite = validite;
        this.PathPerformanceCopiePDF = PathPerformanceCopiePDF;
    }
}
