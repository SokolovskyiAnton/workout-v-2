import firebase from 'firebase/app'

export default {
    actions: {
        async createTable({dispatch, commit}, obj) {
            try {
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/tables`).push(obj)
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}