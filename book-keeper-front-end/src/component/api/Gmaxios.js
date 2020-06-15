import axios from 'axios';

class Gmaxios {
    // create new axios instance and add the incterceptor
    constructor() {
        this.axiosClient = axios.create();
        this.axiosClient.defaults.headers.common['Content-type'] = 'application/json';

        this.axiosClient.interceptors.request.use(
            function(config) {
                // Append the local storage token to the headers
                config.headers.authorization =
                    localStorage.getItem('gm-token') || sessionStorage.getItem('gm-token');
                return config;
            },
            function(error){
                return Promise.reject(error);
            },
        );
    }

    get = async (url, config = {...this.axiosClient.defaults }) => {
        let res = await this.axiosClient
            .get(this.formatURL(url), config)
            .catch((err) => {
                console.log(err);
            });
        return res;
    }

    post = async (url, config = {...this.axiosClient.defaults }) => {
        let res = await this.axiosClient
            .post(this.formatURL(url), config)
            .catch((err) => {
                console.log(err);
            });
        return res;
    }

    formatURL(url) {
        if(url.indexOf('http://') === 0 || url.indexOf('https://') === 0){
            return url;
        }

        return "http://localhost:5000" + url;
    }

}

export default Gmaxios