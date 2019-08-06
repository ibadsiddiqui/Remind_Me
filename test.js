const moment = require('moment');
// const _ = require('lodash')
// var array = [
//     {
//         "taskDate": "Today at 01:01 PM",
//         "taskDescription": "ibad siddiqui here",
//         "taskEndTime": "",
//         "taskFlag": "Work",
//         // "taskStartTime": "10:59 A.M",
//     },
//     {
//         "taskDate": "Today at 12:02 PM",
//         "taskDescription": "ibad siddiqui here",
//         "taskEndTime": "",
//         "taskFlag": "Work",
//         // "taskStartTime": "10:59 A.M",
//     },
//     {
//         "taskDate": "Today at 12:10 PM",
//         "taskDescription": "ibad siddiqui here",
//         "taskEndTime": "",
//         "taskFlag": "Work",
//         // "taskStartTime": "10:59 A.M",
//     },
//     {
//         "taskDate": "Today at 12:05 PM",
//         "taskDescription": "ibad siddiqui here",
//         "taskEndTime": "",
//         "taskFlag": "Work",
//         // "taskStartTime": "09:59 A.M",
//     },
//     {
//         "taskDate": "08/29/2019 at 12:00 AM",
//         "taskDescription": "ibad siddiqui here",
//         "taskEndTime": "",
//         "taskFlag": "Work",
//         // "taskStartTime": "08:59 A.M",
//     }
// ]


// const sortedArray = _.orderBy(array, (o) => new moment(o.taskDate).format('YYYYMMDD'), "asc")

// var starttimeHours = "06:30 A.M.".slice(0, 2)
// var starttimeMinutes = parseInt("06:30 A.M.".slice("06:30 A.M.".indexOf(":") + 1, "06:30 A.M.".indexOf(":") + 3))
// var a;
// console.log(starttimeMinutes);

// if ("06:30 P.M.".includes("A.M.")) {
//     a = new Date(new Date(new Date().setHours(parseInt(starttimeHours))).setMinutes(starttimeMinutes));

// } else {
//     a = new Date(new Date(new Date().setHours(parseInt(starttimeHours) + 12)).setMinutes(starttimeMinutes));
// }
// console.log(a);


// console.log("Sat Aug  3 23:54:08 2019" !== moment("Sat Aug  3 23:54:08 2019").calendar().slice(0, moment("Sat Aug  3 23:54:08 2019").calendar().indexOf(" at ")));
// console.log(moment("Sat Aug  3 23:54:08 2019").calendar().slice(0, moment("Sat Aug  3 23:54:08 2019").calendar().indexOf(" at ")));

// var arrayToSort = [
//     {
//         "taskDate": "Sat Aug  3 23:55:26 2019",
//         "taskDescription": "ibad here",
//         "taskEndTime": "", "taskFlag": "Meeting",
//         "taskID": "69996122-cf49-4c35-9612-9d69a495885d",
//         "taskStartTime": "11:55 P.M",
//     },
//     {
//         "taskDate": "Sat Aug  3 23:55:30 2019",
//         "taskDescription": "now",
//         "taskEndTime": "",
//         "taskFlag": "Work",
//         "taskID": "93d7831e-ef9c-4286-a630-0ba9e3c7578a",
//         "taskStartTime": "11:55 P.M",
//     },
//     {
//         "taskDate": "Sun Aug  4 23:51:00 2019",
//         "taskDescription": "ibad here",
//         "taskEndTime": "",
//         "taskFlag": "Work",
//         "taskID": "ac3f5702-f15d-4811-bc0f-b7f8f2a137e0",
//         "taskStartTime": "11:51 P.M",
//     },
//     {
//         "taskDate": "Sat Aug  3 23:57:37 2019",
//         "taskDescription": "ibad here trying to do something good for himself to help other.",
//         "taskEndTime": "",
//         "taskFlag": "Personal",
//         "taskID": "2e485db1-70e8-4126-b802-4c8e5d92fc30",
//         "taskStartTime": "11:57 P.M",
//     },
//     {
//         "taskDate": "Sat Aug  3 23:17:46 2019",
//         "taskDescription": "asdasdasd",
//         "taskEndTime": "",
//         "taskFlag": "Work",
//         "taskID": "60db171f-b2e0-43fb-93f9-5829f425a7d4",
//         "taskStartTime": "11:17 P.M",
//     },
// ]
// // var days =  new Set(["Sat Aug  3 23:17:46 2019", "Sat Aug  3 23:57:37 2019"])
// var sortedArray = arrayToSort.sort((a, b) => new Date(a.taskDate) - new Date(b.taskDate))

// var days = new Set(["08/03/19", "08/08/19", "08/09/19"])
// var newDays = [...Object.create(Array.from(days).map((_item, index) => sortedArray.filter((ite) => new Date(ite.taskDate).toLocaleDateString().toString() == _item)))];
// console.log(newDays);

// console.log(new Date(sortedArray[0].taskDate).toLocaleDateString());




// const merged = [...arrayToSort.concat(["Sat Aug  3 23:17:46 2019","Sat Aug  3 23:57:37 2019"]).reduce((m, o) =>
//     m.set(o.taskDate, (m.get(o.taskDate), o))
//     , new Map()).values()];

// console.log(merged);

// console.log(sortedArray);
// const ObjectId = (id) => id; // mock of ObjectId
// const arr1 = [
//     {
//         "member": ObjectId("57989cbe54cf5d2ce83ff9d8"),
//         "bank": ObjectId("575b052ca6f66a5732749ecc"),
//         "country": ObjectId("575b0523a6f66a5732749ecb")
//     },
//     {
//         "member": ObjectId("57989cbe54cf5d2ce83ff9d6"),
//         "bank": ObjectId("575b052ca6f66a5732749ecc"),
//         "country": ObjectId("575b0523a6f66a5732749ecb")
//     }
// ];
// const arr2 = [
//     {
//         "member": ObjectId("57989cbe54cf5d2ce83ff9d6"),
//         "name": 'xxxxxx',
//         "age": 25
//     },
//     {
//         "member": ObjectId("57989cbe54cf5d2ce83ff9d8"),
//         "name": 'yyyyyyyyyy',
//         "age": 26
//     }
// ];


var array = [
    {
        "date": "08/06/19",
        "tasks": [
            {
                "taskDate": "Tue Aug  6 23:22:41 2019",
                "taskDescription": "kajsdkas",
                "taskEndTime": "",
                "taskFlag": "Work",
                "taskID": "e05c3e58-10df-4461-95a4-d99b2aa64cf2",
                "taskStartTime": "11:22 P.M",
            },
            {
                "taskDate": "Tue Aug  6 12:55:05 2019",
                "taskDescription": "ajkndajksnd",
                "taskEndTime": "",
                "taskFlag": "Meeting",
                "taskID": "22b2330b-2389-4c3b-8107-e03face35e72",
                "taskStartTime": "00:55 P.M",
            },
        ],
    },
]

console.log(typeof array.find((item) => item.date === "08/07/19") === "undefined" ? true : typeof array.find((item) => item.date === "08/06/19"))