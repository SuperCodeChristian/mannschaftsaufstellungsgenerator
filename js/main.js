let Mannschaft = {
    name: '1. FC SuperCode',
    mannschaft: [],
    abwehr: 4,
    mittelfeld: 4,
    sturm: 2,
    aufstellung(eTarget) {
        if(eTarget){
            if(eTarget.id == 'abwehr') {
                this.generiereAbwehr();
                this.abwehr = Number(eTarget.value);
            }
            if(eTarget.id == 'mittelfeld') {
                this.generiereMittelfeld();
                this.mittelfeld = Number(eTarget.value);
            }
            if(eTarget.id == 'sturm') {
                this.generiereSturm();
                this.sturm = Number(eTarget.value);
            }

            if ((this.abwehr + this.mittelfeld + this.sturm) === 10) {
                document.getElementById('error').innerHTML = 'Kann losgehen!';
            } else {
                document.getElementById('error').innerHTML = 'Die Mannschaft muss ELF Spieler haben!';
            }
        }
        
        this.generiereTorwart();
        this.generiereAbwehr();
        this.generiereMittelfeld();
        this.generiereSturm();
    },
    generiereTorwart(){
        let torwartContainer = document.getElementById('torwartContainer');

        torwartContainer.innerHTML = '';
        this.mannschaft.forEach((spieler) => {
            if (spieler.position == 'Torwart') {
                torwartContainer.innerHTML = `<div>${spieler.name}</div>`;
            }
        })
    },
    generiereAbwehr() {
        let anzahlAbwehr = 0;
        let abwehrContainer = document.getElementById('abwehrContainer');

        abwehrContainer.innerHTML = '';
        this.mannschaft.forEach((spieler) => {
            if (spieler.position == 'Abwehr' && anzahlAbwehr < this.abwehr) {
                abwehrContainer.innerHTML += `<div>${spieler.name}</div>`;
                anzahlAbwehr++;
            }
        })
    },
    generiereMittelfeld () {
        let anzahlMittelfeld = 0;
        let mittelfeldContainer = document.getElementById('mittelfeldContainer');

        mittelfeldContainer.innerHTML = '';
        this.mannschaft.forEach((spieler) => {
            if (spieler.position == 'Mittelfeld' && anzahlMittelfeld < this.mittelfeld) {
                mittelfeldContainer.innerHTML += `<div>${spieler.name}</div>`;
                anzahlMittelfeld++;
            }
        })
    },
    generiereSturm () {
        let anzahlSturm = 0;
        let sturmContainer = document.getElementById('sturmContainer');

        sturmContainer.innerHTML = '';
        this.mannschaft.forEach((spieler) => {
            if (spieler.position == 'Sturm' && anzahlSturm < this.sturm) {
                sturmContainer.innerHTML += `<div>${spieler.name}</div>`;
                anzahlSturm++;
            }
        })
    }
}
Mannschaft.mannschaft = [
    {name: 'Micha', position: 'Torwart'},
    {name: 'Eric', position: 'Abwehr'},
    {name: 'Anass', position: 'Abwehr'},
    {name: 'Richie', position: 'Abwehr'},
    {name: 'Klaus', position: 'Abwehr'},
    {name: 'Christian', position: 'Abwehr'},
    {name: 'Sergio', position: 'Abwehr'},
    {name: 'Anton', position: 'Mittelfeld'},
    {name: 'Michal', position: 'Mittelfeld'},
    {name: 'Navid', position: 'Mittelfeld'},
    {name: 'Georg', position: 'Mittelfeld'},
    {name: 'Rihab', position: 'Mittelfeld'},
    {name: 'Ali', position: 'Mittelfeld'},
    {name: 'Mustafa', position: 'Sturm'},
    {name: 'Shapour', position: 'Sturm'},
    {name: 'Sam', position: 'Sturm'},
    {name: 'Kim', position: 'Sturm'},
    {name: 'Rezan', position: 'Sturm'},
    {name: 'Waeel', position: 'Sturm'}
]
document.getElementById('eingabe').addEventListener('change', function(e){
    Mannschaft.aufstellung(e.target);
})
Mannschaft.aufstellung();