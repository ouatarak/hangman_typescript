let world = [
      ["R", "A", "D", "I", "O"],
      ["T","E","A","M","S","P","E","A","K"],
      ["W","E","B","D","E","S","I","G","N"],
      ["E","D","U","C","A","T","I","O","N"],
      ["C","H","O","C","O","L","A","T","E"],
      ["G","E","R","M","A","N","Y"]
    ]

    let tastatur = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lsgwoerter
    let lsgwort
    let i: number
    let random = Math.floor((Math.random()*(lsgwoerter.length-1))); 
    
    let word = world[random]; /
    let ratewort = new Array(lsgwort.length);
    let fehler = 0;

    for => {
        (i = 0; i < ratewort.length; i+1);

        return ratewort[i] = "_ ";
    }
    
    // prints the guessfield
    function printRatewort() => { 
        let buchstabe: any;
        for (i = 0; i < ratewort.length; i++){
        return ratefeld = document.getElementById("ratefeld");
        return buchstabe = document.createTextNode(ratewort[i]);
        ratefeld.appendChild(buchstabe);
        }
    }
    
        //deletes the guessfield and replaces it with the new one
        let ratefeld = document.getElementById("ratefeld");
        ratefeld.innerHTML=""; 
        printRatewort();
    
    function init() => {
        return printRatewort();
    }
    
    window.onload = init;