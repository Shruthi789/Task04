//retrieving the data of countries using the REST countries API
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    //Get countries in Asia region
    console.log(`Countries in the Asia region: ${getAsianCountries(data)}`);
    //Get countries with population less than 2 lakhs
    console.log(`Countries with population less than 2 lakhs: ${getCountriesbyPopulation(data)}`);
    //Print countries which use USD as currency
    console.log(`Countries which use USD as currency: ${getCountriesbyCurrency(data)}`);
    //Print the sum of the total population of the countries
    console.log(`Sum of the total population of the REST countries: ${totalPopulation(data)}`);
}
//logic for getting all countries in Asia region
let getAsianCountries=(data)=>{
                         let asianCountries=data.filter((Element)=>Element.region==='Asia').map((value)=>value.name);
                          return asianCountries;
                       };
//logic for getting all countries with population less than 2 lakhs
let getCountriesbyPopulation=(data)=>{
                                let countries=data.filter((Element)=>Element.population<200000).map((value)=>value.name);
                                return countries;
                                };
//logic for getting countries which use USD as currency
let getCountriesbyCurrency=(data)=>{
                                    let countries=data.filter((Element)=>Element.currencies.findIndex((currency)=>currency.code==='USD')!==-1).map((value)=>value.name);
                                    return countries;
                                    };
//logic for calculating the total population of REST countries
let totalPopulation=(data)=>{
                              let population=data.reduce((prv,current)=>prv+current.population,0);
                              return population;
                            };
                            
