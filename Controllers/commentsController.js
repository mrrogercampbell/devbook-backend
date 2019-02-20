const mongoose = require("../Models/CommentsModel");
const Comments = mongoose.model("commentsModel");

mongoose.connect("mongodb://localhost/devbook-backend");

mongoose.Promise = Promise;

module.exports = {
    index: (req, res) => {
        Comments.find({}).then(allCommentss => {
            res.json(allCommentss);
        });
    },

    //(POST Request) Create new Comments in the database
    create: (req, res) => {
        Comments.create({
            postId: req.body.postId,
            userId: req.body.userId,
            content: req.body.content,
            likes: req.body.likes,
        }).then(newComments => {
            console.log(`Hey Check Out the New Comments ${newComments}`);
            // res.redirect('/success')
            res.redirect(`/Comments/${newComments.id}`);
        });
    },

    //(DELETE Request) Delete a Comments Profile
    destroyComment: (req, res) => {
        Comments.findOneAndRemove({ _id: req.params.id }).then(Comments => {
            res.redirect(`/Comments`);
        });
    },

    // (GET Request) Render form to update a single Comments
    editComment: (req, res) => {
        Comments.findOne({ _id: req.params.id }).then(Comments => {
            res.json(Comments)
        });
    },

    //(GET Request) Render new Comments form
    new: (req, res) => {
        res.render("");
    },

    // (GET Request) Render a View to Show one Comments Profile
    comment: (req, res) => {
        Comments.findOne({ _id: req.params.id }).then(singleComments => {
            res.json(singleComments);
        });
    },

    //  (GE T Request) List query results
    //   searchResults: (req, res) => {
    //     Comments.find({}).then(Commentss => {
    //       res.render("CommentsViews/CommentssIndex", { Commentss });
    //     });
    //   },

    //(GET Request) Render a view tells Commentss their profile has been created
    success: (req, res) => {
        // res.send(<h1>Yup You did it!</h1>);
        res.send("Yup You did it!");
    },

    // (PUT Request) Updates Comments profile in the database
    updateComment: (req, res) => {
        Comments.findOneAndUpdate(
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
        ).then(Comments => {
            res.redirect(`/Comments/${Comments.id}`);
        });
    }
};
