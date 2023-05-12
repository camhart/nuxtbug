import { defineNuxtPlugin } from '#app'
import { Amplify, Auth } from 'aws-amplify'

const aws_exports = {
}

export default defineNuxtPlugin((nuxtApp) => {
    Amplify.configure(aws_exports);
    return {
        provide: {
            auth: Auth,
            awsExports: aws_exports
        },
    };
});