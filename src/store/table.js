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
        },

        async fetchTables({dispatch, commit}) {
            try {
                const uid = await dispatch('getUid')
                const tables = (await firebase.database().ref(`/users/${uid}/tables`).once('value')).val() || {}
            
                return Object.keys(tables).map(key => ({...tables[key], id: key}))
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}