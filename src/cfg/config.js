module.exports = {
    
    sections: [{
        name: 'gApi',
        roles: ['sa']
    }],

    scripts: [{
        name: 'admin-app',
        items: [
            '/admin/js/gApi/app/main.js',
            '/admin/js/gApi/app/controllers/GApiController.js'
        ]
    }]

};