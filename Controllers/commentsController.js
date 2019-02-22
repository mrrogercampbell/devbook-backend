const mongoose = require("../Models/CommentsModel");
const Comments = mongoose.model("commentsModel");

module.exports = {
    index: (req, res) => {
        Comments.find({}).then(allCommentss => {
            res.json(allCommentss);
        });
    },

    //(POST Request) Create new Comments in the database
    create: (req, res) => {
        Comments.create({
            devPostId: req.body.devPostId,
            userId: req.body.userId,
            content: req.body.content,
            likes: req.body.likes,
        })
            .then(newJob => {
                console.log(`Hey Check Out the New Job ${newJob}`);
                res.json(newJob)
            });
    },

    //(DELETE Request) Delete a Comments Profile
    destroy: (req, res) => {
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

    // (GET Request) Render a View to Show All Matching Comments Profile
    comment: (req, res) => {
        Comments.find({ devPostId: req.params.devPostId }).then(showComments => {
            res.json(showComments);
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
    update: (req, res) => {
        Comments.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    devPostId: req.body.postId,
                    userId: req.body.userId,
                    content: req.body.content,
                    likes: req.body.likes,
                }
            }
        ).then(Comments => {
            res.json(Comments);
        });
    }
};
