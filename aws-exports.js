"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    AWS_ACCESS_KEY_ID: '',
    AWS_SECRET_ACCESS_KEY: '',
    HOST: '',
    REGION: 'eu-west-1',
    PATH: '/graphql',
    ENDPOINT: '',
    PROFILE: '',
};
config.ENDPOINT = "https://" + config.HOST + config.PATH;
exports.default = config;