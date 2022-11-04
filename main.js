console.log("Password Generator 0.0.1");

let PwdGen = {

    // PUBLIC method for password generation
    generate(name, last, favColor){

        // library signature key
        const SIGNATURE_KEY = '21';

        return name + last + favColor + SIGNATURE_KEY;
    }

}