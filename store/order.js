export const state = () => ({
    status: {
        snackbar: false,
        snackbarError: false
    }
});

export const mutations = {
    SET_VALIDATION(state, data) {
        state.status.snackbar = data.snackbar;
        state.status.snackbarError = data.snackbarError;
    }
};

export const actions = {
    setOrderModelingCorrect({ commit }) {
        commit('SET_VALIDATION', {
            snackbar: true,
            snackbarError: false
        });
    },
    setOrderModelingNotCorrect({ commit }) {
        commit('SET_VALIDATION', {
            snackbar: false,
            snackbarError: true
        });
    },
    clearOrderModelingErrors({ commit }) {
        commit('SET_VALIDATION', {
            snackbar: false,
            snackbarError: false
        });
    }
};

export const getters = {
    mSnackbar(state) {
        // console.log('mSnackbar', state.snackbar);
        // console.log('mSnackbarError', state.snackbarError);
        return state.status.snackbar;
    },
    mSnackbarError(state) {
        // console.log('mSnackbar', state.snackbar);
        // console.log('mSnackbarError', state.snackbarError);
        return state.status.snackbarError;
    },
    snackbarStatus(state) {
        return state.status;
    }
};
