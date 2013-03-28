/*
 * PHR_NodeJSWebService
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dbconfigure = require('../lib/eshop/dbconfigure');dbconfigure.configure('Production');var category = require('../lib/eshop/service/category.js');assert = require("assert");describe("Testing Category Service", function() {	it("With data in database", function(done){		setTimeout(done, 100);		var categoryJson = {"category":[{"id":1,"name":"Television","image":"categories/tv_1.png","detailsImage":"categories/tv_1.png","productCount":10},{"id":2,"name":"Computers","image":"categories/computers_2.png","detailsImage":"categories/computers_2.png","productCount":10},{"id":3,"name":"Mobile Phones","image":"categories/mobile_3.png","detailsImage":"categories/mobile_3.png","productCount":10},{"id":4,"name":"Audio Devices","image":"categories/audio_4.png","detailsImage":"categories/audio_4.png","productCount":10},{"id":5,"name":"Cameras","image":"categories/cameras_5.png","detailsImage":"categories/cameras_5.png","productCount":10},{"id":6,"name":"Tablets","image":"categories/tablets_6.png","detailsImage":"categories/tablets_6.png","productCount":10},{"id":7,"name":"Movies and Music","image":"categories/movies_7.png","detailsImage":"categories/movies_7.png","productCount":10},{"id":8,"name":"Video Games","image":"categories/videogames_8.png","detailsImage":"categories/videogames_8.png","productCount":10},{"id":9,"name":"MP3 Players","image":"categories/mp3players_9.png","detailsImage":"categories/mp3players_9.png","productCount":9},{"id":10,"name":"Accessories","image":"categories/accessories_10.png","detailsImage":"categories/accessories_10.png","productCount":10}]};		category.retrieveCategories( function(categorydata) {			assert.deepEqual(JSON.stringify(categoryJson), JSON.stringify(categorydata), "Categories Success");		});		}); });