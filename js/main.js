/* MAIN
 * 
 */

// Fields pointers
const
    inputName = document.getElementById("in_name"),
    inputLast = document.getElementById("in_last"),
    inputColor = document.getElementById("in_color"),
    spanPwd = document.getElementById("out_pwd");


// Autofocusing function
document.addEventListener("keypress", function (event) {

    if (event.code != "Enter") {
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

// Generate button listener
document.getElementById("in_submit").addEventListener("click", function () {
    processData();
});

// Clear button listener
document.getElementById("in_clear").addEventListener("click", function(){
    spanPwd.innerHTML = "";
    inputName.value = "";
    inputLast.value = "";
    inputColor.value = "";
})

// Data processing function (fetch -> generate pass -> print)
function processData() {

    // Fetch data
    let name = inputName.value;
    let last = inputLast.value;
    let color = inputColor.value;

    // Data validation
    if(
        name.trim().length == 0
        || last.trim().length == 0
        || color.trim().length == 0
    ) {return;}

    // Generate Password
    let password = PwdGen.generate(name, last, color);

    // Print password
    spanPwd.innerHTML = password;

}


