for (var bottles = 99; bottles >= 1; bottles--) {
    if(bottles > 0){
        beer.innerHTML += "<p>" + bottles + " bottles of beer on the wall, " + bottles + " bottles of beer." + "<p/>"
        beer.innerHTML += "<p>" + "Take one down and pass it around, " + (bottles-1) + " bottles of beer on the wall." + "<p/>"
    }
}