const user = require('../app/models/user/user');
const route = '/users';

module.exports = (app) => {
    app.get(route, user.all);
    app.get(`${route}/:id`, user.single);
    app.post(`${route}/create`, user.add);
    app.patch(`${route}/:id/update`, user.update);
}