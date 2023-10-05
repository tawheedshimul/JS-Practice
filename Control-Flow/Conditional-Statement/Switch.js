var date = new Date()

var today = date.getDay();


switch (today) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log("Today Monday")
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log("Today wed")
        break;
    case 4:
        console.log('Today is thurs');
        break;
    case 5:
        console.log("Today Friday")
        break;
    case 6:
        console.log("Today Sunday")
        break;
}

