const
    inputName = document.getElementById("in_name"),
    inputLast = document.getElementById("in_last"),
    inputColor = document.getElementById("in_color");

document.addEventListener("keypress", function (event) {

    if(event.code != "Enter"){
        return;
    }

    switch (document.activeElement) {
        case inputName:
            inputLast.focus();
            break;
        case inputLast:
            inputColor.focus();
            break;
        case inputColor:
            processData();
            break;
    }
})

document.getElementById("in_submit").addEventListener("click", function () {
    processData();
});

// Data processing function (fetch -> generate pass -> print)
function processData() {

    // Fetch data
    let name = inputName.value;
    let last = inputLast.value;
    let color = inputColor.value;

    // Generate Password
    let password = PwdGen.generate(name, last, color);

    // Print password
    document.getElementById("out_pwd").innerHTML = password;

}


