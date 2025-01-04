function isPalindrome(str) {
    if (str === undefined || str === null) {
      return false;
    }
    if (typeof str !== 'string') {
     throw console.error("Input must be a string");
    }
    str = str.toLowerCase();

    let reversed = str.split().reverse().join();
  return str === reversed;
}
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("abcd"));

////////////////////////////////////////////
function calculateDiscount(price, discount) {
    if (price === undefined || discount === undefined) {
      return false;
    }
    if (typeof price !== 'number' || typeof discount !== 'number') {
      throw new Error("Input must be a number");
    }
    if (price < 0 || discount < 0) {
      throw new Error("Input must be a positive number");
    }
    if (discount > 100) {
        throw new Error("Discount must be less than 100");
    }
    let discountAmount = (price * discount) / 100;
    let discountedPrice = price - discountAmount;
    return discountedPrice;
}

console.log(calculateDiscount(100, 20));
////////////////////////////////////////////
var movies = ["toy story", "finding nemo", "coco", "up", "inside out", "moana", "frozen", "zootopia", "tangled", "brave"];
var moviesCopy = movies.slice();
moviesCopy[2] = "cars";
var lastMovie = moviesCopy.pop();
console.log(lastMovie);
lastMovie = moviesCopy[moviesCopy.length - 1];
console.log(lastMovie);
lastMovie = moviesCopy.at(moviesCopy.length - 1);
console.log(lastMovie);
moviesCopy.unshift("cars 2");
console.log(moviesCopy);
////////////////////////////////////////////
var sentence = "Web development tutorial";

function longestWord(sentence) {
    if (sentence === undefined || sentence === null) {
      return false;
    }
    if (typeof sentence !== 'string') {
      throw new Error("Input must be a string");
    }
    let words = sentence.split(' ');
    let longest = '';
    for (var i = 0;i < words.length;i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    return longest;
}

console.log(longestWord(sentence));
////////////////////////////////////////////
var username = prompt("Enter your name: ");
var grades = prompt("Enter your grades separated by commas: ");
console.log("Welcome " + username + "!");
grades = grades.split(',');
for (var i = 0; i < grades.length; i++) {
    if(isNaN(grades[i])) {
        throw new Error("Grades must be a number");
    }
}
console.log("Here are your grades: ");
console.table(grades);
var sum = 0;
for (var i = 0; i < grades.length; i++) {
  sum += Number(grades[i]);
}
var average = sum / grades.length;
console.log("Your average grade is: " + average);
////////////////////////////////////////////
var orders = [
    {
      orderId: 'ORD001',
      customer: 'John Doe',
      items: 'item1:2,item2:1,item3:5',
      orderDate: '2023-12-01',
      deliveryDate: '2023-12-05',
      deliveryAddress: '123, Main Street, Springfield, USA',
    },
    {
      orderId: 'ORD002',
      customer: 'Jane Smith',
      items: 'itemA:3,itemB:4',
      orderDate: '2023-11-15',
      deliveryDate: '2023-11-20',
      deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
    },
    {
      orderId: 'ORD003',
      customer: 'Alice Johnson',
      items: 'itemX:1',
      orderDate: '2023-10-10',
      deliveryDate: '2023-10-15',
      deliveryAddress: '456, Pine Lane, Denver, USA',
    }
];
var formattedOrders = orders.slice();
console.log(formattedOrders);
for (var i = 0; i < formattedOrders.length; i++){
    const entries = Object.entries(formattedOrders[i]);



    let totalNumberOfItems = 0;
    let items = formattedOrders[i].items.split(',');
    for (let i = 0; i < items.length; i++) {
        let index = items[i].indexOf(':');
        totalNumberOfItems += Number(items[i].at(index + 1));
        items[i].trim(index + 1);
    }


    let orderDate = new Date(formattedOrders[i].orderDate);
    let deliveryDate = new Date(formattedOrders[i].deliveryDate);
    const diffInMilliseconds = deliveryDate - orderDate;
    const days = diffInMilliseconds / (1000 * 60 * 60 * 24);


    
    
    entries.splice(2, 0, ["totalItems", totalNumberOfItems]);
    entries.splice(6, 0, ["deliveryDuration", days]);
    formattedOrders[i] = Object.fromEntries(entries);
    let addressArr = formattedOrders[i].deliveryAddress.split(', ');
    formattedOrders[i].deliveryCountry = addressArr[3];
    formattedOrders[i].deliveryCity = addressArr[2];
    formattedOrders[i].deliveryStreet = addressArr[1];
    if (isNaN(addressArr[0]))
        formattedOrders[i].buildingNumber = addressArr[0];
    else
        formattedOrders[i].buildingNumber = Number(addressArr[0]);


    delete formattedOrders[i].items;
    delete formattedOrders[i].deliveryAddress;

}
console.log(formattedOrders);