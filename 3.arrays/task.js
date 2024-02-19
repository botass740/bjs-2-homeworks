ffunction compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
}

console.log(compareArrays([1, 2, 3], [1, 2, 3])); // true
console.log(compareArrays([1, 2], [1, 2, 3])); // false
console.log(compareArrays([1, 2, 3], [3, 2, 1])); // false
console.log(compareArrays([0, 1, 2], [0, 1])); // false
console.log(compareArrays([0, 1], [0, 1, 2])); // false
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false


function getUsersNamesInAgeRange(users, gender) {
    const people = [
        {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
        {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
        {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
        {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
        {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
        {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
        {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
        {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
        {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
        {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
        {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
        {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
        {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
        {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
      ]
      
      const filterUsers = users.filter(user => user.gender === gender);

      if(filterUsers.length === 0) {
        return 0;
      }

      const totalAge = filterUsers.reduce((acc, user) => acc + user.age, 0);
      const averrageAge = totalAge / filterUsers.length;
      return averrageAge;
}

console.log(getUsersNamesInAgeRange(people, "мужской")); // 32
console.log(getUsersNamesInAgeRange(people, "женский")); // 27.4
console.log(getUsersNamesInAgeRange([], "женский")); // 0
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); // 0
