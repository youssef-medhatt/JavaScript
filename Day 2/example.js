var users = [
    {
        "id": 1,
        "name": "Ahmed",
        "email": "ahmed@gmail.com",
        "dob": "1990-05-15",
        "skills": ["Java", "React", "NodeJS"]
    },
    {
        "id": 2,
        "name": "mohamed",
        "email": "mohamed@test.com",
        "dob": "1999-10-15",
        "skills": ["HTML", "CSS","Javascript", "React", "NodeJS"]
    },
    {
        "id": 3,
        "name": "rahma",
        "email": "rahma@example.com",
        "dob": "2001-02-05",
        "skills": ["python", "Java","Django", "Data analysis"]
    },
]

var usersWithAge = users.map(function (user) {
    var date = new Date(user.dob);
    var todayDate = new Date()
    var age = (todayDate.getTime() - date.getTime())/(1000 * 60 * 60 * 24 *365.25);
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        dob: user.dob,
        skills: user.skills,
        age: Math.floor(age)
    }
})
console.log(usersWithAge);

// var tasks = [
//     {
//         "id": 101,
//         "description": "develop the api endpoint",
//         "assignedTo": 1,
//         "dueAT": "2025-05-15",
//         "status": "Pending"

//     },
//     {
//         "id": 102,
//         "description": "design the new home page",
//         "assignedTo": 2,
//         "dueAT": "2024-12-11",
//         "status": "Pending"
//     },
//     {
//         "id": 103,
//         "description": "develop the api endpoint",
//         "assignedTo": 2,
//         "dueAT": "2024-12-11",
//         "status": "Pending"
//     },
//     {
//         "id": 104,
//         "description": "complete the project documentation",
//         "assignedTo": 3,
//         "dueAT": "2024-12-10",
//         "status": "Pending"
//     },
// ]


// var userNames = [];
// users.forEach(function(user, i){
//     // console.log(users[i].name)
//     // console.log({user: user, index: index})
//     userNames.push(user['name']);
// })
// // console.log(userNames)


// var userNames2 = users.map(function(user){
//     return user.name;
// })
// // console.log(userNames2)

// var filteredUsers = users.filter(function(user){
//     return user.id !== 2;
// });
// // ==  ===
// // !=  !==

// // console.log(filteredUsers)

// // var userIndex = users.findIndex(function(user){
// //     return user.id === 2
// // })
// // console.log(userIndex)

// // users.splice(userIndex, 1)
// // console.log(users);




// // var userDomains = users.map(function(user){
// //     // return user.email.split('@')[1].split('.')[0]
// //     return user.email.substring(user.email.indexOf("@") + 1,
// //     user.email.lastIndexOf("."));
// // })

// // console.log(userDomains)

// // for (var i = 0; i < users.length; i++) {
    
// // }

// // var userId = users.findIndex(function(user){
// //     return user.name === 'rahma'
// // })

// // console.log(users[userId])

// var user = users.find(function(user){
//     return user.name === 'rahma'
// })
// // console.log(user.id)

// var rahmasTasks = tasks.filter(function(task){
//     return task.assignedTo === user.id;
// })

// // console.log(rahmasTasks)

// var userWithTasks = users.map(function(user){
//     var userId = user.id;
//     var userTasks = tasks.filter(function(task){
//         return task.assignedTo === userId;
//     })
//     return {
//         id: userId,
//         name: user.name,
//         email: user.email,
//         dob: user.dob,
//         skills: user.skills,
//         userTasks: userTasks,
//     };
// });
// // console.log(userWithTasks)
// // console.log(users)

// // var usersSkills = users.map(function(user){
// //     console.log(user.skills.join(','))
// //     return (user.skills.join(',')
// //     .toLowerCase()
// //     .replaceAll('java,','javascript,').split(','))
// // })
// // console.log(usersSkills)


// // var usersSkills = users.map(function(user){
// //     // console.log(user.skills.join(''))
// //     var skills= user.skills.map(function(skill, i){
// //         return skill.toLowerCase() === 'java' ? 'javascript' : skill
// //     })
// //     return {
// //         id: user.id,
// //         name: user.name,
// //         email: user.email,
// //         dob: user.dob,
// //         skills: skills,
// //     }
// // })
// // console.log(usersSkills)

// // var longestUserName = users.reduce(function(longest, user, i, arr){
// //    longest = user.name.length > longest.length ? user.name : longest;
// //    return longest
// // }, "")

// // console.log(longestUserName)



// // return a users array witht the users that passed the tasks deadline
// //  "dueAT": "2025-05-15",

// var filteredTasks = tasks.filter(function(task){
//     return (task.status.toLowerCase() === 'pending'
//     && new Date() > new Date(task.dueAT))
// })
// console.log(filteredTasks)

// var userIdsWithTasks = filteredTasks.map(function (task) {
//     return task.assignedTo
// })
// var usersWithTasks = userIdsWithTasks.map(function (id) {
//     return users.filter(function (user) {
//         return user.id === id && !userWithTasks.includes(user);
//     })
// })
// console.log(usersWithTasks);



var sumOfDigits = function (number) {
    var numberString = number.toString();
    var numberArr = numberString.split('');
    var sum = 0;
    numberArr.forEach(element => {
        sum += Number(element);
    });
    return sum;
}


console.log(sumOfDigits(123));


var getNumberOfVowels = function (string) {
    var vowelMap = {
        a: 0,
        e: 0,
        i: 0,
        o: 0, 
        u: 0
    }
    var vowels = Object.keys(vowelMap)
    string = string.split("")
    string.forEach(function (char) {
        if (vowels.includes(char)) {
            vowelMap[char] += 1;
        }
    })
  
    return vowelMap;
}


console.log(getNumberOfVowels("abcdefghijklmnopqrstuvwxyzienvooo"));



var getNumberOfOcurrences = function (string, char) {
    var numOfOccurences = 0;
    string = string.split("");
    string.forEach(function (charInString) {
        if (charInString === char) numOfOccurences += 1;
    });
    return numOfOccurences;
}

console.log(getNumberOfOcurrences("abcdefghijklmnopqrstuvwxyzienvooo","o"));
