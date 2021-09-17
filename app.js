$.get(`https://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=abd1b3685c0cb64f932cf425516f7794`, (data) => {
        let city = data.name
        document.querySelector('.city').innerHTML = `Weather in ${city}`
        let temp = Math.round(data.main.temp)
        document.querySelector('.temp').innerHTML = `${temp}°F`
        let icon = data.weather[0].icon
        document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        let description = data.weather[0].main
        document.querySelector('.description').innerHTML = description
        let humidity = data.main.humidity
        document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}%`
        let wind = Math.round(data.wind.speed)
        document.querySelector('.wind').innerHTML = `Wind Speed: ${wind} mph`
    })

function weatherSearch() {
    var searchInput = $('input').val()
    console.log(searchInput)
    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&appid=abd1b3685c0cb64f932cf425516f7794`, (data) => {
        let city = data.name
        document.querySelector('.city').innerHTML = `Weather in ${city}`
        let temp = Math.round(data.main.temp)
        document.querySelector('.temp').innerHTML = `${temp}°F`
        let icon = data.weather[0].icon
        document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        let description = data.weather[0].main
        document.querySelector('.description').innerHTML = description
        let humidity = data.main.humidity
        document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}%`
        let wind = Math.round(data.wind.speed)
        document.querySelector('.wind').innerHTML = `Wind Speed: ${wind} mph`
    })
}
document.querySelector('input').addEventListener('keypress', (e) => {
    if (e.which === 13) {
        weatherSearch(); 
    }
})