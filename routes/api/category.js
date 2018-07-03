const router = require("express").Router();

// matches with "api/user/:id/category"
router
    .route("/")
    //CREATE: create new category
    .post()
    //READ: get an existing category
    .get()    
    //UPDATE: edit existing category
    .put()
    //DELETE: remove existing category
    .delete()

// matches with "/api/user/:id/category/:categoryId/bookmark"
router
    .route("/:categoryId/bookmark")
    //READ: get all bookmarks from a category
    .get()

// matches with "/api/user/:id/category/:categoryId/subcategory"
router
    .route("/:categoryId/subcategory")
    //READ: get all subcategories of a category
    .get()

module.exports = router;