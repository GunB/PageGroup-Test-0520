import ENDPOINTS from '../config/endpoints'
import axios from 'axios'

export async function getSample() {
    return axios({
        method: 'get',
        url: `${ENDPOINTS.SAMPLE.GET}`,
        credentials: 'same-origin',
    }).then(response => {
        const { data } = response
        if (response.status) {
            return data
        }
        //ERROR
        return Promise.reject(response)
    })
}