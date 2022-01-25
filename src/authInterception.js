export const authInterceptor = config => {
    config.headers.auth = `Bearer ${localStorage.getItem('token')}`
    return config;
}