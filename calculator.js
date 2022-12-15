let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let islem = document.getElementById("islem");
let reset = document.getElementById("button-reset");
let del = document.getElementById("button-delete");
let negative = document.getElementById("button-negative");
let divide = document.getElementById("button-divide");
let multiple = document.getElementById("button-multiple");
let seven = document.getElementById("button-7");
let eight = document.getElementById("button-8");
let nine = document.getElementById("button-9");
let minus = document.getElementById("button-minus");
let four = document.getElementById("button-4");
let five = document.getElementById("button-5");
let six = document.getElementById("button-6");
let add = document.getElementById("button-add");
let one = document.getElementById("button-1");
let two = document.getElementById("button-2");
let three = document.getElementById("button-3");
let equal = document.getElementById("button-equal");
let zero = document.getElementById("button-0");
let zeroDouble = document.getElementById("button-00");
        
reset.onclick = function() {resetFunc()};
function resetFunc () {
    result1.innerText = "";
    result2.innerText = "";
    islem.innerText = "";
};

del.onclick = function() {deleteFunc()};
function deleteFunc () {
    result2.innerText = result2.innerText.slice(0,-1);
};

negative.onclick = function(){negativeFunc()};
function negativeFunc() {
    result2.innerText = (result2.innerText) * -1;
};
divide.onclick = function(){divideFunc()};
function divideFunc() {
    if (result1.innerText === "") {
        result1.innerText = result2.innerText;
        islem.innerText = "/";
        result2.innerText = "";
    }
    else if(result1.innerText !== "") {
        switch (islem.innerText) {
            case "/":
                result1.innerText = result1.innerText / result2.innerText;
                islem.innerText = "/";
                result2.innerText = "";
                break;
            case "X":
                result1.innerText = result1.innerText * result2.innerText;
                islem.innerText = "/";
                result2.innerText = "";
                break;
            case "-":
                result1.innerText = result1.innerText - result2.innerText;
                islem.innerText = "/";
                result2.innerText = "";
                break;
            case "+":
                result1.innerText = Number(result1.innerText) + Number(result2.innerText);
                islem.innerText = "/";
                result2.innerText = "";
                break;
            default:
                islem.innerText = "/";    
        }
    };
    
};
multiple.onclick = function(){multipleFunc()};
function multipleFunc() {
    if (result1.innerText === "") {
        result1.innerText = result2.innerText;
        islem.innerText = "X";
        result2.innerText = "";
    }
    else if(result1.innerText !== "") {
        switch (islem.innerText) {
            case "/":
                result1.innerText = result1.innerText / result2.innerText;
                islem.innerText = "X";
                result2.innerText = "";
                break;
            case "X":
                result1.innerText = result1.innerText * result2.innerText;
                islem.innerText = "X";
                result2.innerText = "";
                break;
            case "-":
                result1.innerText = result1.innerText - result2.innerText;
                islem.innerText = "X";
                result2.innerText = "";
                break;
            case "+":
                result1.innerText = Number(result1.innerText) + Number(result2.innerText);
                islem.innerText = "X";
                result2.innerText = "";
                break;
            default:
                islem.innerText = "X";
        }
    };
    
};
seven.onclick = function(){sevenFunc()};
function sevenFunc() {
    result2.innerText = result2.innerText + "7";
};
eight.onclick = function(){eightFunc()};
function eightFunc() {
    result2.innerText = result2.innerText + "8";
};
nine.onclick = function(){nineFunc()};
function nineFunc() {
    result2.innerText = result2.innerText + "9";
};
minus.onclick = function(){minusFunc()};
function minusFunc() {
    if (result1.innerText === "") {
        result1.innerText = result2.innerText;
        islem.innerText = "-";
        result2.innerText = "";
    }
    else if(result1.innerText !== "") {
        switch (islem.innerText) {
            case "/":
                result1.innerText = result1.innerText / result2.innerText;
                islem.innerText = "-";
                result2.innerText = "";
                break;
            case "X":
                result1.innerText = result1.innerText * result2.innerText;
                islem.innerText = "-";
                result2.innerText = "";
                break;
            case "-":
                result1.innerText = result1.innerText - result2.innerText;
                islem.innerText = "-";
                result2.innerText = "";
                break;
            case "+":
                result1.innerText = Number(result1.innerText) + Number(result2.innerText);
                islem.innerText = "-";
                result2.innerText = "";
                break;
            default:
                islem.innerText = "-";    
        }
    };
    
};
four.onclick = function(){fourFunc()};
function fourFunc() {
    result2.innerText = result2.innerText + "4";
};
five.onclick = function(){fiveFunc()};
function fiveFunc() {
    result2.innerText = result2.innerText + "5";
};
six.onclick = function(){sixFunc()};
function sixFunc() {
    result2.innerText = result2.innerText + "6";
};
add.onclick = function(){addFunc()};
function addFunc() {
    if (result1.innerText === "") {
        result1.innerText = result2.innerText;
        islem.innerText = "+";
        result2.innerText = "";
    }
    else if(result1.innerText !== "") {
        switch (islem.innerText) {
            case "/":
                result1.innerText = result1.innerText / result2.innerText;
                islem.innerText = "+";
                result2.innerText = "";
                break;
            case "X":
                result1.innerText = result1.innerText * result2.innerText;
                islem.innerText = "+";
                result2.innerText = "";
                break;
            case "-":
                result1.innerText = result1.innerText - result2.innerText;
                islem.innerText = "+";
                result2.innerText = "";
                break;
            case "+":
                result1.innerText = Number(result1.innerText) + Number(result2.innerText);
                islem.innerText = "+";
                result2.innerText = "";
                break;
            default:
            islem.innerText = "+";
        }
    };
    
};
equal.onclick = function(){equalFunc()};
function equalFunc () {
    if (result2.innerText === "") {
        result2.innerText = result1.innerText;
        islem.innerText = "";
        result1.innerText = "";
    }
    else if(result2.innerText !== "") {
        switch (islem.innerText) {
            case "/":
                result2.innerText = result1.innerText / result2.innerText;
                islem.innerText = "";
                result1.innerText = "";
                break;
            case "X":
                result2.innerText = result1.innerText * result2.innerText;
                islem.innerText = "";
                result1.innerText = "";
                break;
            case "-":
                result2.innerText = result1.innerText - result2.innerText;
                islem.innerText = "";
                result1.innerText = "";
                break;
            case "+":
                result2.innerText = Number(result1.innerText) + Number(result2.innerText);
                islem.innerText = "";
                result1.innerText = "";
                break;
            default:
            islem.innerText = "";
        }
    };

}
one.onclick = function(){oneFunc()};
function oneFunc() {
    result2.innerText = result2.innerText + "1";
};
two.onclick = function(){twoFunc()};
function twoFunc() {
    result2.innerText = result2.innerText + "2";
};
three.onclick = function(){threeFunc()};
function threeFunc() {
    result2.innerText = result2.innerText + "3";
};
zero.onclick = function(){zeroFunc()};
function zeroFunc() {
    result2.innerText = result2.innerText + "0";
};
zeroDouble.onclick = function(){zeroDoubleFunc()};
function zeroDoubleFunc() {
    result2.innerText = result2.innerText + "00";
};