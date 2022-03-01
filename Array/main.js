const companies = [
  { name: "Company One", category: "Finance", start: "1981", end: "2003" },
  { name: "Company Two", category: "Retail", start: "1992", end: "2008" },
  { name: "Company Three", category: "Auto", start: "1999", end: "2007" },
  { name: "Company Four", category: "Retail", start: "1989", end: "2010" },
  { name: "Company Five", category: "Technology", start: "2009", end: "2014" },
  { name: "Company Six", category: "Finance", start: "1987", end: "2010" },
  { name: "Company Seven", category: "Auto", start: "1986", end: "1996" },
  { name: "Company Eight", category: "Technology", start: "2011", end: "2016" },
  { name: "Company Nine", category: "Retail", start: "1981", end: "1989" },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//FOR LOOP
for (let i = 0; i < companies.length; i++) {
  // console.log(companies[i]);
}

//FOR EACH (SYNCHRONOUS)
companies.forEach((company) => {
  //    console.log(company);
});

//FILTER
//Get ages above 21
//For Loop
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
// console.log(canDrink);

//FILTER
const canBet = ages.filter((age) => {
  if (age >= 21) {
    return true;
  }
});

//OR
const canSing = ages.filter((age) => age >= 21);
// console.log(canSing);

//Filter Retail companies
const retails = companies.filter((comapny) => comapny.category === "Retail");
// console.log(retails);

//Get companies in the 80s
const eightiesCompanies = companies.filter(company=> (company.start >=1980 && company.start < 1990))
// console.log(eightiesCompanies);

//Get companies that lasted ten years or more
const lastedTenYears = companies.filter(company=>(company.end - company.start >= 10))
// console.log(lastedTenYears);

//MAP
//Creates new arrays from a current array

//Get company names and put them in an array
const companyNames = companies.map(company => {
    return company.name
})
// console.log(companyNames);

//Get the sqaure root of all the ages in the age array and put the value in a new array
const agesSqrt = ages.map(age => Math.sqrt(age))
// console.log(agesSqrt);

//Combine two map functions
// Get the square root and multiply by 2
const combined = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2)

    // console.log(combined);

//SORT

// Sort companies according to their start dates
//Compare companies
// where c1 - first company and c2- last company
//ES6 syntax
const sortedcompanies = companies.sort((c1, c2)=> c1.start>c2.start?1:-1)
// console.log(sortedcompanies);
//ES 5 syntax
const sortedCompanies = companies.sort(function(a, b){
    if (a.start > b.start) {
        return 1
    } else {
        return -1
    }
})
// console.log(sortedCompanies);

//Sort Ages
// const sortAges = ages.sort((a, b)=>a-b) 
//Ascending order
// const sortAges = ages.sort((a, b)=>b-a) 
//Descending order
// console.log(sortAges);

//REDUCE
//Add all the ages together

//FOR LOOP
// let ageSum = 0
// for (let i = 0; i < ages.length; i++) {
//     ageSum += ages[i]
// }
// console.log(ageSum);

//REDUCE

const ageSum = ages.reduce((total, age)=> total + age, 0)
// console.log(ageSum);

//Get total years of allcompany
const totalYears = companies.reduce((total, company)=>total + (company.end - company.start), 0)
console.log(totalYears);