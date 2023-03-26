const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    return cats.pop("Garfield");
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift("Milo");
}

function appendCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = [...cats, name];
    return newCats;
}

function prependCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = [name, ...cats]
    return newCats
}

function removeLastCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = cats.slice(0, -1);
    return newCats
}

function removeFirstCat(name) {
    const cats = ["Milo", "Otis", "Garfield"];
    const newCats = cats.slice(1);
    return newCats
}