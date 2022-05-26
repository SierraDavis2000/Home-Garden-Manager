// set up required packages
const express = require("express");
const router = require('express').Router();
const path = require('path');

//route to waterlog.html

router.get("/logs", (req, res) => {
    res.sendFile(path.join(__dirname, "../waterlog/waterlog.html"));
});

//route to index.html TODO - match to current project 
router.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, ));
});


module.exports = router;