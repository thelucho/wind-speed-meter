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
}

export default WeatherService.Instance;
