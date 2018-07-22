module.exports = {
    iterate: (items, callback) => {
        items.forEach((item) => {
            callback(item)
        })
    }
};
