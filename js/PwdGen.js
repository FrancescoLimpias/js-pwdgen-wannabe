let PwdGen = {

    version: "0.0.4",

    // PUBLIC method for password generation
    generate(name, last, favColor) {

        // library signature key
        const SIGNATURE_KEY = '21';

        return name + last + favColor + SIGNATURE_KEY;
    }

}

console.log(`Password Generator v${PwdGen.version}`);
console.log(PwdGen);