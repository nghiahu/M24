"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.nameS = name;
        this.lengthS = length;
    }
    get getname() {
        return this.nameS;
    }
    set setname(name) {
        this.nameS = name;
    }
    get getlength() {
        return this.lengthS;
    }
    set setlength(length) {
        this.lengthS = length;
    }
}
let song = new Song(1, "Chúng ta của tương lai", 100);
console.log(song.getname);
console.log(song.getlength);
song.setname = "Nâng chén tiêu sầu";
song.setlength = 200;
console.log(song.getname);
console.log(song.getlength);
