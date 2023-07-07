const countriesContainer=document.querySelector(`.countries-container`)
const filterByRegion = document.querySelector(`.filter-by-region`)


fetch(`https://restcountries.com/v3.1/all`)
.then((res)=>res.json())
.then(renderCountries)


filterByRegion.addEventListener(`change`, (e)=>{
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
  .then((res)=>res.json())
  .then(renderCountries)
    
})

function renderCountries(data) {
  countriesContainer.innerHTML=``
    data.forEach((country)=> {
      // console.log(country);
     
   
    

       const countryCard = document.createElement(`a`)
       countryCard.classList.add(`country-card`)
       countryCard.href=`/country.html?name=${country.name.common}`


countryCard.innerHTML=` 
    <img src="${country.flags.svg}" alt="${country.name.common}">
    <div class="card-text">
    <h3 class="card-title">${country.name.common}</h3>
    <p><b>Population:</b>${country.population.toLocaleString(`en-IN`)}</p>
    <p><b>Region: </b>${country.region}</p>
    <p><b>Capital: </b>${country.capital?.[0]}</p>
 </div>   
`

countriesContainer.append(countryCard)


  })
}























// // const cardImg=document.createElement('img')
// // cardImg.src = `https://flagcdn.com/is.svg`
// // countryCard.append(cardImg)


// console.log(countryCard)