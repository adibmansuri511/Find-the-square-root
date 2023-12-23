const squareRoot = () => {

    // Get base value from input
    const getValue = Number(document.getElementById("getValue").value);

    let squareRoot = Math.sqrt(getValue);

    squareRoot = `The square root of ${getValue} is : ${squareRoot}`;

    console.log(squareRoot);

    document.querySelector("#h4").innerHTML = squareRoot;

    return;
}

