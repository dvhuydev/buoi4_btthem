
function yesterday() {

    let daily = Number(document.getElementById("daily").value);
    let monthly = Number(document.getElementById("monthly").value);
    let yearly = Number(document.getElementById("yearly").value);

    let dayToday = function () {
        switch (monthly) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: {
                days = 31;
                break;
            }
            case 4:
            case 6:
            case 9:
            case 11: {
                days = 30;
                break;
            }
            case 2: {
                days = 28;
                break;
            }
            default: {
                alert("Eror");
            }
        }
        return days;
    };


    let dailyYesterday = "";
    let monthlyYesterday = "";
    let yearlyYesterday = "";
    if (daily === 1 && monthly === 1) {
        dailyYesterday = dayToday();
        monthlyYesterday = 12;
        yearlyYesterday = yearly - 1;
    } else if (daily === 1) {
        dailyYesterday = dayToday();
        monthlyYesterday = monthly - 1;
        yearlyYesterday = yearly;
    } else if (daily !== 1) {
        dailyYesterday += daily - 1;
        monthlyYesterday = monthly;
        yearlyYesterday = yearly;
    }

    document.getElementById("showResult").innerHTML = `${dailyYesterday} / ${monthlyYesterday} / ${yearlyYesterday}`
}

function tomorrow() {
    let daily = Number(document.getElementById("daily").value);
    let monthly = Number(document.getElementById("monthly").value);
    let yearly = Number(document.getElementById("yearly").value);

    let dailyYesterday = "";
    let monthlyYesterday = "";
    let yearlyYesterday = "";

    let dayToday = function () {
        switch (monthly) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: {
                days = 31;
                break;
            }
            case 4:
            case 6:
            case 9:
            case 11: {
                days = 30;
                break;
            }
            case 2: {
                days = 28;
                break;
            }
            default: {
                alert("Error");
            }
        }
        return days;
    };

    if (daily === dayToday() && monthly === 12) {
        dailyYesterday = 1;
        monthlyYesterday = 1;
        yearlyYesterday = yearly + 1;
    } else if (daily === dayToday()) {
        dailyYesterday = 1;
        monthlyYesterday = monthly + 1;
        yearlyYesterday = yearly;
    } else if (daily !== dayToday()) {
        dailyYesterday += daily + 1;
        monthlyYesterday = monthly;
        yearlyYesterday = yearly;
    }
    document.getElementById("showResult").innerHTML = `${dailyYesterday} / ${monthlyYesterday} / ${yearlyYesterday}`
}




function countDay() {
    let dayMonth = Number(document.getElementById('dayMonth').value);
    let dayYear = Number(document.getElementById('dayYear').value);
    let leapYear = (dayYear % 4) === 0;

    let days = "";

    let dayCalendar = function () {
        switch (dayMonth) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                {
                    days = 31;
                    break;
                }
            case 4:
            case 6:
            case 9:
            case 11:
                {
                    days = 30;
                    break;
                }
            case 2:
                {
                    days = 28;
                    break;
                }
            default: {
                alert("Error")
            }
        }
        return days;
    }
    if (leapYear && dayMonth === 2) {
        days = 29;
    }
    else {
        days = dayCalendar();
    }
    document.getElementById('showDays').innerHTML = `${days} days`

}




function readNumber() {

    const readNum = Number(document.getElementById("readNum").value)
    let hundreds = 0;
    let dozens = 0;
    let units = 0;


    hundreds += Math.floor(readNum / 100);

    dozens += Math.floor(readNum % 100 / 10);

    units += (readNum % 10);


    let readFirst = function (number) {
        switch (number) {
            case 1: {
                read = "một";
                break;
            }
            case 2: {
                read = "hai"
                break;
            }
            case 3: {
                read = "ba"
                break;
            }
            case 4: {
                read4 = "bốn"
                break;
            }
            case 5: {
                read = "năm"
                break;
            }
            case 6: {
                read = "sáu"
                break;
            }
            case 7: {
                read = "bảy"
                break;
            }
            case 8: {
                read = "tám"
                break;
            }
            case 9: {
                read = "chín"
                break;
            }
            case 0: {
                read = ""
                break;
            }
            default: {
                alert("Error Number")
            }
        }
        return read;
    }

    let readSecond = function () {
        switch (units) {
            case 1: {
                read = "mốt";
                break;
            }
            case 2: {
                read = "hai"
                break;
            }
            case 3: {
                read = "ba"
                break;
            }
            case 4: {
                read = "bốn"
                break;
            }
            case 5: {
                read = "lăm"
                break;
            }
            case 6: {
                read = "sáu"
                break;
            }
            case 7: {
                read = "bảy"
                break;
            }
            case 8: {
                read = "tám"
                break;
            }
            case 9: {
                read = "chín"
                break;
            }
            case 0: {
                read = ""
                break;
            }
            default: {
                alert("Error")
            }
        }
        return read;
    }

    if (hundreds === 0 || dozens === 0 || hundreds > 10) {
        alert("Hundreds or Dozens are unidentifiable");
    } else if (dozens === 1 && units === 1) {
        readhundreds = readFirst(hundreds) + " trăm ";
        readdozens = " mười ";
        readunits = " một ";
    }
    else if (dozens === 1) {
        readhundreds = readFirst(hundreds) + " trăm ";
        readdozens = " mười ";
        readunits = readSecond();
    }
    else {
        readhundreds = readFirst(hundreds) + " trăm ";
        readdozens = readFirst(dozens) + " mươi ";
        readunits = readSecond();
    }
    //input
    document.getElementById('readding').innerHTML = `${readhundreds} ${readdozens} ${readunits}`;
}








function Distance() {
    let numberOne = document.getElementById("numberOne").value * 1;
    let numberTwo = document.getElementById("numberTwo").value * 1;
    let numberThree = document.getElementById("numberThree").value * 1;



    let people1 = String(document.getElementById("people1").value);
    let people2 = String(document.getElementById("people2").value);
    let people3 = String(document.getElementById("people3").value);


    if (numberOne > numberTwo && numberTwo > numberThree) {
        show = `${people1} furthest with ${numberOne}`;
    } else if (numberOne > numberThree && numberThree > numberTwo) {
        show = `${people1} furthest with ${numberOne}`;

    } else if (numberTwo > numberThree && numberThree > numberOne) {
        show = `${people2} furthest with ${numberTwo}`;
    } else if (numberTwo > numberOne && numberOne > numberThree) {
        show = `${people2} furthest with ${numberTwo}`;

    } else if (numberThree > numberOne && numberOne > numberTwo) {
        show = `${people3} furthest with ${numberThree}`;
    } else if (numberThree > numberTwo && numberTwo > numberOne) {
        show = `${people3} furthest with ${numberThree}`;
    }
    document.getElementById("result").innerHTML = `${show} Km`;
}
Distance();