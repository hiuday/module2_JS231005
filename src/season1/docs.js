// // bài tập 1: sử dụng hàm foreach để lấY FULL name last name
// const users = [
//   {
//     id: 1,
//     first_name: "trần",
//     last_name: "hiệu",
//     email: "hieu@gmail.com",
//     age: 18,
//     gender: "male",
//   },
//   {
//     id: 2,
//     first_name: "lâm",
//     last_name: "tiến",
//     email: "tien@gmail.com",
//     age: 26,
//     gender: "male",
//   },
//   {
//     id: 3,
//     first_name: "trần",
//     last_name: "phúc",
//     email: "phuc@gmail.com",
//     age: 30,
//     gender: "male",
//   },
//   {
//     id: 4,
//     first_name: "nguyễn",
//     last_name: "bình",
//     email: "binh@gmail.com",
//     age: 24,
//     gender: "male",
//   },
//   {
//     id: 5,
//     first_name: "võ",
//     last_name: "hiếu",
//     email: "vohieu@gmail.com",
//     age: 24,
//     gender: "male",
//   },
//   {
//     id: 6,
//     first_name: "trương",
//     last_name: "tuấn",
//     email: "tuan@gmail.com",
//     age: 30,
//     gender: "male",
//   },
//   {
//     id: 7,
//     first_name: "Obed",
//     last_name: "Beaven",
//     email: "obeaven6@msn.com",
//     gender: "male",
//     age: 91,
//   },
//   {
//     id: 8,
//     first_name: "Elayne",
//     last_name: "Smeuin",
//     email: "esmeuin7@wsj.com",
//     gender: "female",
//     age: 96,
//   },
//   {
//     id: 9,
//     first_name: "Robin",
//     last_name: "Picford",
//     email: "rpicford8@typepad.com",
//     gender: "female",
//     age: 55,
//   },
//   {
//     id: 10,
//     first_name: "Patsy",
//     last_name: "Ochterlonie",
//     email: "pochterlonie9@latimes.com",
//     gender: "female",
//     age: 93,
//   },
// ];
// // let user = [];
// //bài 1
// // users.forEach((user) => {
// //   let { firstName, lastName } = user;
// //   user.push(firstName,lastName);
// // });
// // console.log(user);
// // bài 2: lọc tuổi và giới tính
// // let year = (element) => element.age < 22 ;

// // user = users.filter(year);
// // console.log(user);
// // bài 3
// // let names = [];
// // users.forEach((names) => {
// //   const { firstName, lastName } = names;
// //   names.push(`${firstName} ${lastName}`);
// // });
// // console.log(names);
// // bài 4:Viết một hàm trả về một mảng mới vẫn chứa toàn bộ user trong mảng users nhưng key của các phần tử trong mảng phải được viết dưới dạng camelCase
// function lab04() {
//   const resultcaseCamel = [];
//   users.forEach((user) => {
//     Object.keys(user).forEach((key) => {
//       let newKey = key.split("_");
//       if (newKey.length > 1) {
//         for (let i = 1; i < newKey.length; i++) {
//           newKey[i] =
//             newKey[i].charAt(0).toUpperCase() +
//             newKey[i].slice(1).toLowerCase();
//         }
//       }
//       newKey = newKey.join("");
//       user[newKey] = user[key];
//       delete user[key];
//     });
//     resultcaseCamel.push(user);
//   });
//   return resultcaseCamel;
// }
// console.log(lab04());

// // bài 5:Viết một hàm trả về trung bình tuổi của các user có trong mảng users

// function lab05() {
//   const result = [];
//   users.forEach((user) => {
//     const { age } = user;
//     result.push(age);
//   });
//   const sum = result.reduce((a, b) => a + b, 0); //reduce giống như 1 vòng lặp, 0 là giá trị khởi tạo ban đầu
//   const everage = sum / result.length;
//   return everage;
// }

// function lab061() {
//   const result = users.reduce((first, last) => {
//     const { first_name, last_name } = last;
//     first.push(`${first_name}${last_name}`);
//     return result;
//   }, []);
// }
// function lab062() {
//   return users.reduce((acc, user) => {
//     if (user.gender === "male" && user.age < 40) {
//       acc.push(user);
//     }
//     return acc;
//   }, []);
// }

// function lab063() {
//   let newArray = [];
//   users.reduce((acc, cur) => {
//     Object.keys(cur).forEach((key) => {
//       let newKey = key.split("_");
//       if (newKey.length > 1) {
//         for (let i = 1; i < newKey.length; i++) {
//           newKey[i] = newKey[i].charAt(0).toUpperCase() + newKey[i].slice(1);
//         }
//       }
//       newKey = newKey.join("");
//       cur[newKey] = cur[key];
//       delete cur[key];
//     });

//     newArray.push(cur);
//   }, 0);

//   return newArray;
// }
// function lab07() {
//   // return the sorted array of user (sort by field first_name in ascending order)
//   const result = users.sort((a, b) => {
//     if (a.first_name > b.first_name) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }
// function faMap(array, fn) {
//   // implement faMap that works like Array.prototype.map

//   const result = [];
//   array.forEach((item, index) => {
//     result.push(fn(item, index));
//   });

//   return result;
// }
// console.log(faMap([1, 2, 3], (item, index) => (item += 2)));


// function lab1102(array, callbackFn) {
//   return array.reduce(
//     (acc, curr) => (curr && callbackFn(curr) ? [...acc, curr] : acc),
//     []
//   );
// }

// //bài 1201
// function faSum(array) {
//   return array.reduce((acc, curr) => acc + curr);
// }
// const array = [1, 2, 3, 4, 5];
// const sum = faSum(array);
// console.log(sum);

// //bài 1202 tích
// function faTich(array) {
//   return array.reduce((acc, curr) => acc * curr);
// }
// //bài 1203
// function faReverseArray(array) {
//   return array.reduce((acc, curr) => [curr, ...acc].reverse(), []);
// }

// // bài tạap 

// function faFilter(array, callbackFn) {
//   const result = [];
//   array.forEach((item, index) => {
//     if (callbackFn(item, index)) {
//       result.push(item);
//     }
//   });

//   return result;
// }

// function faReduce(array, reducer, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < array.length; i++) {
//     accumulator = reducer(accumulator, array[i]);
//   }

//   return accumulator;
// }
