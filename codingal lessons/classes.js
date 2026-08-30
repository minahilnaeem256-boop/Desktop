class Planet{
    constructor(name,fact){
        this.name= name;
        this.fact= fact;
    }
describe(){
    return `${this.name}: ${this.fact}`;
}
}

function showPlanets(){
    let p1= new Planet("Earth", "the only planet with life");
    let p2= new Planet("Mars", "known as the red planet");
    let p3= new Planet("Jupiter","largest planet known to mankind");

    document.getElementById("card1").innerHTML = 
    "<div class='card'><div class='planet-name'>" + p1.name + "</div>" +
    "<div class='planet-fact'>" + p1.describe() + "</div></div>";

    document.getElementById("card2").innerHTML=
    "<div class='card'><div class='planet-name'>" + p2.name + "</div>" +
    "<div class='planet-fact'>" + p2.describe() + "</div></div>";

    document.getElementById("card3").innerHTML=
    "<div class='card'><div class='planet-name'>" + p3.name + "</div>" +
    "<div class='planet-fact'>" + p3.describe() + "</div></div>";
}