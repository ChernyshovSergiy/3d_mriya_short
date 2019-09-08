// import axios from 'axios';
export default function({ route, store, $axios }) {
    return $axios
        .$get(
            'http://127.0.0.1:9090/api/v1/order/printing/verify/' +
                route.params.id
        )
        .then(res => {
            store.dispatch('order/setOrderModelingCorrect');
            // redirect(app.localePath('index'));
        })
        .catch(err => {
            console.log('error = ', err);
            store.dispatch('order/setOrderModelingNotCorrect');
            console.log(
                'Mistake = ',
                'store result = ',
                store.getters['order/mSnackbar'],
                ' | ',
                'store error = ',
                store.getters['order/mSnackbarError']
            );
        });
}
