class person{
    constructor(name,surname,age,gender){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
}
myperson = new person("mihlali", "dzingwa", "21", "female");
}
document.getElementById("laptop").innerHTML = myperson.name+"mihlali" +myperson.surname+" " +myperson.age+ " "+myperson.gender+" ";
console.log(myperson);