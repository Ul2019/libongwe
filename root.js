class person{
    constructor(name,surname,age,gender){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
}
myperson = new person("mihlali", "dzingwa", "21", "female");
}
document.getElementById("details").innerHTML = (myperson.name+" " +myperson.surname+" " +myperson.age+ " "+myperson.gender+" ");
console.log(myperson);



//temperature

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }