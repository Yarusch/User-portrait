let birthYear = prompt("Enter your birth year:");
let city = prompt("Enter the city you live in:");
let favoriteSport = prompt("Enter your favorite sport:");

if (birthYear === null || city === null || favoriteSport === null) {
    alert("Sorry you didn't want to provide your information.");
} else {
    let currentYear = new Date().getFullYear();
    let age = currentYear - parseInt(birthYear);

    let capitalMessage = "";
    if (city.toLowerCase() === "kyiv" || city.toLowerCase() === "washington" || city.toLowerCase() === "london") {
        let country = "";
        switch (city.toLowerCase()) {
            case "kyiv":
                country = "Ukraine";
                break;
            case "washington":
                country = "USA";
                break;
            case "london":
                country = "the UK";
                break;
            default:
                country = "this country";
                break;
        }
        capitalMessage = `You live in the capital of ${country}!`;
    } else {
        capitalMessage = `You live in the city of ${city}!`;
    }

    let sportMessage = "";
    switch (favoriteSport.toLowerCase()) {
        case "soccer":
            sportMessage = `Awesome! Do you want to become like Lionel Messi?`;
            break;
        case "tennis":
            sportMessage = `Awesome! Do you want to become like Serena Williams?`;
            break;
        case "basketball":
            sportMessage = `Awesome! Do you want to become like Michael Jordan?`;
            break;
        default:
            sportMessage = `Interesting choice!`;
            break;
    }

    alert(`Your age: ${age}\n${capitalMessage}\n${sportMessage}`);
}
