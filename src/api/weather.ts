const OPEN_WEATHER = `${process.env.VUE_APP_BASE_URL_OPEN_WEATHER}weather?q=Paris&units=metric&appid=${process.env.VUE_APP_API_KEY_OPEN_WEATHER}`;

class WeatherService {

    private static bfInternal: WeatherService;

    // private constructor() {}

    static get Instance(): WeatherService {
        if (WeatherService.bfInternal === undefined) {
            WeatherService.bfInternal = new WeatherService();
        }
        return WeatherService.bfInternal;
    }
  
    /*
    public getCredentials(): any {
        const credentials = localStorage.getItem('j6session');

        if (credentials) {
        return JSON.parse(credentials);
        }

        return null;
    }

    public clearCredentials() {
        localStorage.removeItem('j6session');
    }

    public setCredentials(credentials: any) {
        localStorage.setItem('j6session', JSON.stringify(credentials));
    }
    */

    
    /** DATA READ APIS */
    public async getOpenWeatherData(): Promise<any> {
        return this._get(OPEN_WEATHER);
    }

    /*
    public async getRunningEntries(): Promise<any> {
        const credentials = this.getCredentials();

        const response = await fetch(RUNNING_ENTRIES, {
        method: 'GET',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + credentials.auth,
            'Accept': 'application/json',
        },
        });

        if (!response.ok) {
        throw Error(response.statusText);
        }

        return response.json();
    }
    */

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