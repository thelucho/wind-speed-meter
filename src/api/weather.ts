class WeatherService {
  private static bfInternal: WeatherService;

  static get Instance(): WeatherService {
    if (WeatherService.bfInternal === undefined) {
      WeatherService.bfInternal = new WeatherService();
    }
    return WeatherService.bfInternal;
  }

  public async getOpenWeatherData(): Promise<any> {
    return this._get(`${process.env.VUE_APP_BASE_URL_OPEN_WEATHER}weather?q=Rio Cuarto&units=metric&appid=${process.env.VUE_APP_API_KEY_OPEN_WEATHER}`);
  }

  public async getWeatherAPIData(): Promise<any> {
    return this._get(`${process.env.VUE_APP_BASE_URL_WEATHER_API}?key=${process.env.VUE_APP_API_KEY_WEATHER_API}&q=Rio Cuarto&aqi=no`);
  }

  public async getStormglassData(lat: any, lng: any): Promise<any> {
    const params = 'windSpeed';
    const today = Math.floor((new Date()).getTime() / 1000);
    return this._getAuth(`${process.env.VUE_APP_BASE_URL_STORMGLASS}?lat=${lat}&lng=${lng}&params=${params}&end=${today}`, process.env.VUE_APP_API_KEY_STORMGLASS);
  }

  public async getAccuWeatherData(lat: any, lng: any): Promise<any> {
    return this._get(`${process.env.VUE_APP_BASE_URL_ACCUWEATHER}locations/v1/cities/geoposition/search?apikey=${process.env.VUE_APP_API_KEY_ACCUWEATHER}&q=${lat},${lng}`);
  }

  public async getAccuWeatherDataLocation(locationId: any): Promise<any> {
    return this._get(`${process.env.VUE_APP_BASE_URL_ACCUWEATHER}currentconditions/v1/${locationId}?apikey=${process.env.VUE_APP_API_KEY_ACCUWEATHER}&details=true`);
  }

  private async _get(uri: string): Promise<any> {
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.json();
  }

  private async _getAuth(uri: string, auth: any): Promise<any> {
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.json();
  }
}

export default WeatherService.Instance;
