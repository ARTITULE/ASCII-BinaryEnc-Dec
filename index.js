const input = document.getElementById("input");
const buttonToBinary = document.getElementById("toBinary");
const buttonToText = document.getElementById("toText");
const output = document.getElementById("output");



buttonToBinary.addEventListener("click", function () {
    const text = input.value;
    let result = "";

    if (text.length === 0){
        output.value = "Please enter text";
    }
    else {
        for (let i = 0; i < text.length; i++) {

            const ascii = text.charCodeAt(i);

            const binary = ascii.toString(2).padStart(8, "0");

            result += binary + " ";

            console.log(text[i], ascii, binary);
        }

        output.value = result.trim();
    }
});

buttonToText.addEventListener("click", function () {
    const numberFilter = /^[01]+$/;
    const binary = input.value;
    let isValid = true;
    let result = "";

    const checkBinary = binary.trim();
    if (checkBinary.length === 0) {
        output.value = "Please enter binary";
    }
    else {
        const splitBinary = binary.trim().split(/\s+/);
        for (let i = 0; i < splitBinary.length; i ++) {

            if (splitBinary[i].length === 8 && numberFilter.test(splitBinary[i])) {
                const ascii = parseInt(splitBinary[i], 2);

                const character = String.fromCharCode(ascii);

                result += character;

                console.log(splitBinary[i], ascii, character);  
            }
            else {
                isValid = false;
                console.log(splitBinary[i], "Invalid binary");
                break;
            }

        }
        if (isValid) {
            output.value = result;
        }
        else {
            output.value = "Invalid binary input";
        }
    }


    
});