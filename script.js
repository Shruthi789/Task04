//retrieving the data of countries using the REST countries API
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    //Get countries in Asia region
    console.log(getAsianCountries(data));
    //Get countries with population less than 2 lakhs
    console.log(getCountriesbyPopulation(data));
    //Print countries which use USD as currency
    console.log(getCountriesbyCurrency(data));
    //Print the sum of the total population of the countries
    console.log(totalPopulation(data));
}
//logic for getting all countries in Asia region
let getAsianCountries=(data)=>{
                         let asianCountriesData=data.filter((Element)=>Element.region==='Asia');
                         return asianCountriesData;
                       };
//logic for getting all countries with population less than 2 lakhs
let getCountriesbyPopulation=(data)=>{
                                let countriesData=data.filter((Element)=>Element.population<200000);
                                return countriesData;
                                };
//logic for getting countries which use USD as currency
let getCountriesbyCurrency=(data)=>{
                                    let countriesData=data.filter((Element)=>Element.currencies.findIndex((currency)=>currency.code==='USD')!==-1);
                                    return countriesData;
                                    };
//logic for calculating the total population of REST countries
let totalPopulation=(data)=>{
                              let population=data.reduce((prv,current)=>prv+current.population,0);
                              return population;
                            };
                            
