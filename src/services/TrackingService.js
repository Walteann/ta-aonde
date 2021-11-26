import axios from 'axios';

export class TrackingService {

    static getTracking(body) {
        return axios.post('https://correios.contrateumdev.com.br/api/rastreio', body)
    }

}