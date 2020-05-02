var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Santanu'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

var getUserSync = (id) => {
    var user = {
        id: id,
        name: 'Tapasmita'
    };
    wait(3000);
    return user;
};

var  wait = (ms)  => {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}


module.exports = {
    getUser,
    getUserSync
}
