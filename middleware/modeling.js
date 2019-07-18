// import axios from 'axios';
export default function({ redirect, route, store, $axios, app }) {
    return $axios
        .$get('http://127.0.0.1:9090/api/v1/order/verify/' + route.params.id)
        .then(res => {
            console.log('result = ', res);
            store.dispatch('order/setOrderModelingCorrect');
            // store.commit('order/SET_VALIDATION', {
            //     snackbar: true,
            //     snackbarError: false
            // });
            console.log(
                'Done = ',
                'store result = ',
                store.getters['order/mSnackbar'],
                ' | ',
                'store error = ',
                store.getters['order/mSnackbarError']
            );
            // redirect(app.localePath('index'));
        })
        .catch(err => {
            console.log('error = ', err);
            store.dispatch('order/setOrderModelingNotCorrect');
            // store.commit('order/SET_VALIDATION', {
            //     snackbar: false,
            //     snackbarError: true
            // });
            // console.log('language = ', app.i18n.locale);
            console.log(
                'Mistake = ',
                'store result = ',
                store.getters['order/mSnackbar'],
                ' | ',
                'store error = ',
                store.getters['order/mSnackbarError']
            );
            // redirect(app.localePath('index'));
        });
}
