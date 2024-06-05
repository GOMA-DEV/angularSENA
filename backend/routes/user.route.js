const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUser, updateUser, deleteUser } = require("./../handlers/userHandle");
