const express = require("express");
const mLogIn = require("../models/mLogin");

//save log in detailes
exports.saveLogIn = async function (oReq,callback) {
    try{
        async function onCheckDup (){
            mLogIn.find({mail:oReq.mail},{mail:1},{lean:true},(err,docs) =>{
                if(err){
                    callback({status:"500",err});
                }if(docs && docs.length){
                    callback({status:"200",code: "MAIL_EXIST"});
                }
            })
        }
        await onCheckDup ();
        async function onSaveLogIn (){
            const newLogin = new mLogIn({
                name: oReq.name,
                mail: oReq.mail,
                password: oReq.password,
            });
            newLogin.save().then(() => {
                callback({status:"200",code: "SAVE_LOGIN_SUCCESS"})
            }).catch((err) => {
                callback({status:"500",err});
            });
        }
    } catch (error) {
        callback({status:"500",err});
    }
};
