$(document).ready(function () {

    var lat;
    var long;

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position)

            lat = position.coords.latitude;
            long = position.coords.longitude;

            var api1 = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long + '';
            // var api='https://api.covid19india.org/data.json';
            // console.log(corapi);
            console.log(api1)
            //  var api= 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + long +'&appid=9910e195e709ee1220f2a12858f81ae5';
            // const apikey=9910e195e709ee1220f2a12858f81ae5;
           //var api=https://api.openweathermap.org/data/2.5/weather?lat=26.2006043&lon=92.9375739&appid=9910e195e709ee1220f2a12858f81ae5
            // var api='https://api.openweathermap.org/data/2.5/forecast?q=guwahati,18,356&appid=9910e195e709ee1220f2a12858f81ae5';
            console.log(api1)
            $.getJSON(api1, function (res) {
                console.log(res)

                var celsius = res.main.temp;
                celsius=celsius;
                console.log(celsius)
                var farenheit = (celsius * 1.8) + 32;
                console.log(farenheit)

                var location = res.name;
                var min=res.main.temp_min;
                var max=res.main.temp_max;
                var country=res.sys.country;
                console.log(min)

                // min=min*pow(10,-1)
                // max=max*pow(10,-1)
                var type=res.weather[0].main;
                console.log(type)
                type1=type[0].toUpperCase()+type.slice(1)
                

                $('.temp-type').html(type1)
                var humidity=res.main.humidity;
                $('.humidity').html(humidity);
               
                $('.windspeed').html(res.wind.speed + '  KM/Hr');


                
                


                $('.location').html(location+' , '+country);
                var test=Math.floor(celsius) ;
                $('.tempmin_max').html('min ' + Math.floor(min) + '| Max'+  Math.floor(max));
                $('.temp').html(test + ' °C')
                $('.weather-description').html(res.weather[0].description);
                $('.weatherType').attr('id', res.weather[0].main);
                $('.temp').on('click', function () {
                    if ($('.temp').html() == test + ' °C') 
                    {
                        $('.temp').html(Math.floor(farenheit)+ ' °F');
                        $('.temp-type').html('°F');
                        $('.tempmin_max').html('min ' + Math.floor(min) + '| Max'+  Math.floor(max));
                        $('.tempmin_max').html('min'  );

                    } else {
                        $('.temp').html(test + ' °C');
                        $('.temp-type').html('°C');
                        $('.tempmin_max').html('Min ' +  Math.floor(min) + '| Max '+  Math.floor(max) );
                    }
                });


                //SETTING UP THE ICON 
                var icons = new Skycons({
                    "color": "white"
                });

                icons.set("Clear", Skycons.CLEAR_DAY);
                icons.set("Clear-night", Skycons.CLEAR_NIGHT);
                icons.set("Partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
                icons.set("Partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
                icons.set("Clouds", Skycons.CLOUDY);
                icons.set("Rain", Skycons.RAIN);
                icons.set("Sleet", Skycons.SLEET);
                icons.set("Snow", Skycons.SNOW);
                icons.set("Wind", Skycons.WIND);
                icons.set("Fog", Skycons.FOG);
                icons.play();

            });
        });
    }
});