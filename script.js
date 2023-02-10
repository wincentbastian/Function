function myFunction() {
  let person = prompt("Pilih 1 (Horror) atau 2 (Drama)");
  if (person == 1 ) {
    let listHorror = ["The Medium", "Smile", "Umma"]
    let random = Math.floor(Math.random() * listHorror.length)
    document.write(`I recommend you to watch ${listHorror[random]}`)
  } else {
    let listDrama = ["Dunkirk", "Karate Kid", "Joker"]
    let random = Math.floor(Math.random() * listDrama.length)
    document.write(`I recommend you to watch ${listDrama[random]}`)
  }
}