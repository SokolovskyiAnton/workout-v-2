
export default { // плагины для вывода сообщений, глобальный
    install(Vue, options) {
        Vue.prototype.$message = function(html) {
            this.$bvToast.toast(html, {
                title: '[Внимание]'
            })
        }
        Vue.prototype.$error = function(html) {
            this.$bvToast.toast(html, {
                title: '[Ошибка]'
            })
        }
    }
}