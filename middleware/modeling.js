import axios from 'axios'
export default function({ redirect, route }) {
    return axios
        .get('http://127.0.0.1:9090/api/v1/order/verify/' + route.params.id)
        .then(res => {
            redirect('/')
        })
}
