//Task1
function Task1() {
    const numInput = prompt('Please enter a number between 2 and 10')
    
    if (numInput >= 2 && numInput <=10) {
    const output = document.getElementById("output");
    output.innerHTML = 'Your input number is ' + numInput;
    
    //Task 2
    function Task2() {
        let divide = numInput;
        let count = 0;
        while (divide >= .000001) {
            divide = divide/2;
            count = count + 1;
            document.getElementById("task").innerHTML = "The number of times to divide the number " +numInput + " by 2 to get a value less than one millionth is " + count;
        }
    }

    //Task 3
    function Task3(){
        let text = "";
        let i;
        for (i = numInput; i > 0; i--) {
            for (j=1; j<=i;j++) {
            text += "*";
            }
            text += "<br>";
        }
        document.getElementById("task2").innerHTML = text;
        }

    Task2();
    Task3();
    } 	else {
            const output = document.getElementById("task3");
            output.innerHTML = 'Your input number is ' + numInput + ". The valid input number is between 2 and 10. Please reload this page and try again."
            document.getElementById("task2").style.display = "none";
        }
    }
Task1();