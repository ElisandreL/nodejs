#!/usr/bin/env n

const countryList = require('country-list');
//const chalk = require('chalk');
const axios = require('axios');
//const inquirer = require('inquirer');
const clear = require('clear');
const fs = require('fs');

// find current year

 const date = new Date;
 const year = date.getFullYear();

// //Takes country argument

    let arg = process.argv[2];
 //let arg = 'belgium';
 let country = countryList.getCode(arg);

// console.log(country);

// axios request

/*axios({
    method: 'get',
    url: `/api/v3/PublicHolidays/${year}/${country}`,
    data: {
        date: '',
        localName: '',
        name: ''
    }
})
   .then(function(response) {
        console.log(response);
        return data;
    })
    .catch (function(error) {
        console.log(error);
    });*/
//axios(`/api/v3/PublicHolidays/${year}/${country}`)
//axios.get(`/api/v3/PublicHolidays/${year}/${country}`)
    
        axios
        .get(` https://date.nager.at/api/v3/PublicHolidays/${year}/${country}`)
        .then(function(response) {
            console.log(response.data);
            
        })
        .catch(function(error) {
            console.log(error);
        })    

