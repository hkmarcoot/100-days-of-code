const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map(upperCase);

function upperCase(str) {
    return str.toUpperCase();
}