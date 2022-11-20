class loggging {

    constructor(client) {
        this.client = client;
    }
}

module.exports = {
    name: 'logs',
    construct(client) {
        return new loggging(client);
    }
};
