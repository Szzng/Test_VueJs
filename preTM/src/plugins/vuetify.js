import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
        light: {
            primary: '#589290',
            secondary: '#D4525D',
            accent: '#54B1CE',
            error: '#F4512D',
            info: '#5067B7',
            success: '#51C169',
            warning: '#F29930',
        },
        },
    },
});