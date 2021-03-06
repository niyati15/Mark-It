const db = require("../models");


module.exports= {
    create: function(req, res) {
        db.subcategories
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Subcategories
        .findAll({
            where: {
                UserUuid: req.params.id
            }
        })
        .then((dbModel) => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req,res) {
        // db.subcategories
        res.send("something")

    },
    remove: function(req,res) {
        db.subcategories
        .destroy({ 
            where: {
                name: req.body.name,
                UserUuid: req.body.UserUuid
            }
         })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    getBookmarks: function(req, res) {
        db.Bookmarks
        .findAll({
            where: {
                UserUuid: req.params.id,
                SubcategoryId: req.params.subcategoryId
            }
        })
        .then((dbModel) => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    }
}