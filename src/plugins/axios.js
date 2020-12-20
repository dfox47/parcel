import axios from 'axios'

export const HTTP = axios.create({

    baseURL: 'https://api.wwprcl.ru/api/',

    // `headers` are custom headers to be sent
    headers:  {},

    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 2000, // default is `0` (no timeout)

    // `withCredentials` indicates whether or not cross-site Access-Control requests
    // should be made using credentials
    withCredentials: true, // default

    responseType: 'json', // default

    // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
    // Note: Ignored for `responseType` of 'stream' or client-side requests
    responseEncoding: 'utf8', // default


    // `maxRedirects` defines the maximum number of redirects to follow in node.js.
    // If set to 0, no redirects will be followed.
    maxRedirects: 5, // default

    // `socketPath` defines a UNIX Socket to be used in node.js.
    // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
    // Only either `socketPath` or `proxy` can be specified.
    // If both are specified, `socketPath` is used.
    socketPath: null, // default

    /*proxy: {
        protocol: 'https',
        host: '94.158.190.37',
        port: 1050,
        auth: {
            username: '1TITii',
            password: 'iYLboYoBtQ'
        }
    }*/
})
