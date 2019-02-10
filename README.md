json-mediainfo
=======

Node wrapper for `mediainfo` to obtaining json information about multimedia files.

Overview
--------

This module provides an interface to the `mediainfo` command and returns the selected properties of a video or movie file in a JSON object.
Uses a custom mediainfo template that you can change to select the properties.

Credits
--------
[node-mediainfo](https://github.com/deoxxa/node-mediainfo)
[mimovie](https://github.com/rodrigopolo/mimovie)
[commit](https://github.com/rodrigopolo/mimovie/pull/3/commits/0d22f2a35c5385efede9498c812b73c346e92b92) by [daviestar](https://github.com/daviestar) 

Install
--------

```
npm install json-mediainfo
```

Usage
-----

The module exposes just one function, which has a signature of:

`json_mediainfo("/path/to/video_file", callback)`

The callback function is called, in familiar node fashion, with two arguments.
The first is an Error object on error, or null on success. The second argument is an object or array of objects with all the video/movie information.

It's really easier to just see the output, so here:

```javascript
{                                                   
    "general": {                                    
        "path": "./stream.mp4",                     
        "size": 383631,                             
        "bitrate": 551194,                          
        "duration": 5568,                           
        "created": "UTC 2019-02-10 11:32:43.328",   
        "modified": "UTC 2019-02-10 15:11:55.546",  
        "encoded": "UTC 2010-03-20 21:29:11",       
        "tagged": "UTC 2010-03-20 21:29:12",        
        "menu": false                               
    },                                              
    "video": [                                      
        {                                           
            "width": 560,                           
            "height": 320,                          
            "codec": "AVC",                         
            "fps": 30,                              
            "bitrate": 465642,                      
            "profile": "Baseline@L3",               
            "settings": "2 Ref Frames",             
            "aspect": "16:9"                        
        }                                           
    ],                                              
    "audio": [                                      
        {                                           
            "ch": 1,                                
            "ch_pos": "Front: C",                   
            "sample_rate": "48000",                 
            "codec": "",                            
            "bitrate": 83051,                       
            "bitrate_mode": "VBR",                  
            "lang": "en"                            
        }                                           
    ]                                               
}                                                   
```

Example
-------

```javascript
var	json_mediainfo = require("./");

json_mediainfo('./stream.mp4', function(err, res) {
	if (err) {
		console.log(err);
	}else{
		console.log(JSON.stringify(res, null, 4));
	}
});
```

Requirements
------------

The `mediainfo` CLI has to be available somewhere in the system `PATH`.

-------

License
-------

(The MIT License)

Copyright (c) by tudo75

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Contact
-------

* GitHub ([tudo75](http://github.com/tudo75/))
* Twitter ([@tudo75](http://twitter.com/tudo75))
