const express = require("express");

const app = express();

app.use(req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
};

app.use("/api/posts", (req, res, next) => {
    const posts = [{
            id: "fasfda",
            title: "First server-side post",
            content: "this is coming from server",
        },
        {
            id: "fasfdfffda",
            title: "Second server-side post",
            content: "this is also coming from server",
        },
    ];
    res.status(200).json({
        message: "Posts fetched successfully",
        posts: posts,
    });
});

module.exports = app;