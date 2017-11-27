const Febby = require('febby');

let config = {
    'port': 3000,
    // application environment
    'env': 'development',
    // Base path for models
    'restBasePath': '/api/v1/model',
    // Route Path for user defined Routes
    'routeBasePath': '/api/v1/route',
    // MongoDB configuration
    'db': {
        // mongodb url
        'url': 'mongodb://localhost:27017/test'
    },
    // app will run cluter mode if set true , default value is true
    'clusterMode': false
};
let user = {
    methods: {
        all: true
    },
    schema: {
        username: {
            type: String,
            required: true
        },
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        email: {
            type: String,
            unique: true
        }
    }
};

let models = {
    'user': user
};

const febby = new Febby();

febby.setConfig(config);
febby.setModels(models);
febby.setRoutes({});

febby.createApp();