class Song {
    public readonly id: number;
    private nameS: string;
    private lengthS: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this.nameS = name;
        this.lengthS = length;
    }

    get getname(): string {
        return this.nameS;
    }
    set setname(name: string) {
        this.nameS = name;
    }
    get getlength(): number {
        return this.lengthS;
    }
    set setlength(length: number) {
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
