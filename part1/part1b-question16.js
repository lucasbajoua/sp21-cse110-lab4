let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    blackCars: 40,
    raceCars: 5,
    rareCars: 2
};


function properties(stats) {
    for (const key in stats) {
        if (key[0] == 'r' || statistics[key]%2 != 0) console.log(statistics[key]);
    }
}

properties(statistics);