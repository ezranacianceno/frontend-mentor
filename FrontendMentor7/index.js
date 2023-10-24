
let birthdayForm = document.getElementById("birthday-form");


birthdayForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // get form values and store them in a variable
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    // create a string of the date input in - YYYY/MM/DD format
    let dateInput = year + "/" + month + "/" + day;

    console.log(day);
    console.log(month);
    console.log(year);
    console.log(dateInput);

    // c
    let dateObject = new Date(dateInput);

    console.log(dateObject);

    let dateisValid;

    if (dateObject.getDate() != day) {
        dateisValid = false;
        console.log('Invalid date');
        return alert('Invalid date - the date you entered does not exist');
    }
    else {
        dateisValid = true; 
        console.log('Valid date');

        computeAge(day, month, year);
    }

    
    let currentDate = new Date();

    currentDay = currentDate.getDate();
    currentMonth = currentDate.getMonth();
    currentYear = currentDate.getFullYear();


    
    displayYear = currentYear - year;

    if (currentMonth >= month)
        let displayMonth = currentMonth - month;
    else {
        yearAge--;
        var monthAge = 12 + monthNow -monthDob;
    }

    if (dateNow >= dateDob)
        var dateAge = dateNow - dateDob;
    else {
        monthAge--;
        var dateAge = 31 + dateNow - dateDob;

        if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
        }
    }




   



  });