const mongoose = require("../Models/PostModel");
const Post = mongoose.model("PostModel");

module.exports = {
    index: (req, res) => {
        Post.find({}).then(allPosts => {
            res.json(allPosts);
        });
    },

    //(POST Request) Create new Post in the database
    create: (req, res) => {
        Post.create({
            content: String,
        })
            .then(newPost => {
                console.log(`Hey Check Out the New Job ${newPost}`);
                res.json(newPost)
            });
    },
    //(DELETE Request) Delete a Post Profile
    destroyProfile: (req, res) => {
        Post.findOneAndRemove({ _id: req.params.id }).then(Post => {
            res.redirect(`/Post`);
        });
    },

    // (GET Request) Render form to update a single Post
    editProfile: (req, res) => {
        Post.findOne({ _id: req.params.id }).then(Post => {
            res.render("PostViews/updatePostForm.hbs", { Post });
        });
    },

    //(GET Request) Render new Post form
    new: (req, res) => {
        res.render("");
    },

    // (GET Request) Render a View to Show one Post Profile
    profile: (req, res) => {
        Post.findOne({ _id: req.params.id }).then(singlePost => {
            res.json(singlePost);
        });
    },

    //  (GE T Request) List query results
    //   searchResults: (req, res) => {
    //     Post.find({}).then(Posts => {
    //       res.render("PostViews/PostsIndex", { Posts });
    //     });
    //   },

    //(GET Request) Render a view tells Posts their profile has been created
    success: (req, res) => {
        // res.send(<h1>Yup You did it!</h1>);
        res.send("Yup You did it!");
    },

    // (PUT Request) Updates Post profile in the database
    updateProfile: (req, res) => {
        Post.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    content: String,
                    createdAt: {
                        Type: Date,
                        Default: Date.now()
                    }
                }
            }
        ).then(Post => {
            res.redirect(`/Post/${Post.id}`);
        });
    }
};
