const mongoose = require("../Models/PostModel");
const Post = mongoose.model("PostModel");

mongoose.connect("mongodb://localhost/devbook");

mongoose.Promise = Promise;

module.exports = {
    index: (req, res) => {
        Post.find({}).then(allPosts => {
            res.json(allPosts);
        });
    },

    //(POST Request) Create new Post in the database
    create: (req, res) => {
        Post.create({
            content: req.body.content,
            position: req.body.position,
            company: req.body.company,
            location: req.body.location,
            companyLogo: req.body.companyLogo,
            createdAt: {
                Type: Date,
                Default: Date.now()
            }
        }).then(newPost => {
            console.log(`Hey Check Out the New Post ${newPost}`);
            // res.redirect('/success')
            res.redirect(`/Post/${newPost.id}`);
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
                    content: req.body.content,
                    position: req.body.position,
                    company: req.body.company,
                    location: req.body.location,
                    companyLogo: req.body.companyLogo,
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
