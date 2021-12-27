//1. შექმენით 5 ელემენტიანი მასივი, რომლის თვითვეული ელემენტი არის რიცხვი,
// console.log გამოიტანეთ ამ მასივის ყველა ელემენტის ჯამი.

const numbers = [2, 5, 6, 5, 8];
let sumIs= 0;
for(let z=0; z<numbers.length; z++){
    sumIs+=numbers[z];
}
 console.log(sumIs);

 // 2. შექმენით 3 ელემენტიანი მასივი, რომლის თვითვეული ელემენტი არის ობიექტი 
 //რომელსაც აქვს შემდეგი ველები (properties): name, age, address.

 const person=[
    {
        name:'Nino',
        age:22,
        address:"Batumi",
    },
    {
        name:'lasha',
        age:18,
        address:"Rustavi",
    },
    {
        name:'salome',
        age:30,
        address:"Tbilisi",
    }
 ];

 // 3. console.log ში გამოიტანეთ 3 სტრინგი "My name is (#2 დავალების 0 ინდექსზე მყოფი ობიექტის ველი name ის მნიშვნელობა)",
 // My age is (#2 დავალების 0 ინდექსზე მყოფი   ობიექტის ველი age ის მნიშვნელობა)", "My address is (#2 დავალების 0 ინდექსზე 
 //მყოფი  ობიექტის ველი address ის მნიშვნელობა)"

 console.log(`"my name is ${person[0].name}"`);
 console.log(`"my age is ${person[0].age}"`);
 console.log(`"my address is ${person[0].address}"`);

 //4. დაწერეთ if / else statement სადაც შეამოწმებთ #2 დავალებაში  0 ინდექსზე მყოფი ობიექტში არსებულ age ველის მნიშვნელობას
 // თუ ნაკლებია 19 ზე console.log ში დაბეჭდეთ "I am a teenager" დანარჩენ შემთხვევაში დაბეჭდეთ "I am an adult"

 if(person[0].age<19){
     console.log("I am a teenager");
 }
 else{
     console.log("I am an adult");
 }