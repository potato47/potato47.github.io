require=function i(t,e,r){function s(o,h){if(!e[o]){if(!t[o]){var l="function"==typeof require&&require;if(!h&&l)return l(o,!0);if(n)return n(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=e[o]={exports:{}};t[o][0].call(u.exports,function(i){var e=t[o][1][i];return s(e||i)},u,u.exports,i,t,e,r)}return e[o].exports}for(var n="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({GameScene:[function(i,t,e){"use strict";cc._RF.push(t,"86fb56ImsBEj5A5a9hjU9Bb","GameScene"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){}}),cc._RF.pop()},{}],Map:[function(i,t,e){"use strict";cc._RF.push(t,"8263ccDnLNIYqY5miQeY0Ci","Map"),cc.Class({extends:cc.Component,properties:{tilePrefab:cc.Prefab,tileLayer:cc.Node},onLoad:function(){var i=this;cc.map=this,this.mapWidth=this.node.width,this.tileWidth=this.mapWidth/4,this.g=this.getComponent(cc.Graphics),this.touchStartPosition=cc.v2(),this.touchEndPosition=cc.v2(),this.node.on(cc.Node.EventType.TOUCH_START,function(t){i.touchStartPosition=t.getLocation()}),this.node.on(cc.Node.EventType.TOUCH_END,function(t){i.touchEndPosition=t.getLocation();var e=i.touchEndPosition.x-i.touchStartPosition.x,r=i.touchEndPosition.y-i.touchStartPosition.y;Math.abs(e)>Math.abs(r)?e>30?i.onRightSlide():e<-30&&i.onLeftSlide():r>30?i.onUpSlide():r<-30&&i.onDownSlide()}),this.drawBg(),this.initTiles()},onLeftSlide:function(){for(var i=!1,t=0;t<4;t++)for(var e=0;e<4;e++)if(0!=this.tiles[e][t].number)for(var r=e+1;r<4;r++)if(0!=this.tiles[r][t].number){if(this.tiles[e][t].number+this.tiles[r][t].number===0){this.tiles[e][t].number*=2,this.tiles[r][t].number=0,i=!0;break}break}for(var s=0;s<4;s++)for(var n=0;n<4;n++)if(0===this.tiles[n][s].number)for(var o=n+1;o<4;o++)if(0!==this.tiles[o][s].number){this.tiles[n][s].number=this.tiles[o][s].number,this.tiles[o][s].number=0,i=!0;break}i&&(this.newTile(),this.judgeOver())},onRightSlide:function(){for(var i=!1,t=0;t<4;t++)for(var e=3;e>=0;e--)if(0!==this.tiles[e][t].number)for(var r=e-1;r>=0;r--)if(0!==this.tiles[r][t].number){if(this.tiles[e][t].number+this.tiles[r][t].number===0){this.tiles[e][t].number*=2,this.tiles[r][t].number=0,i=!0;break}break}for(var s=0;s<4;s++)for(var n=3;n>=0;n--)if(0==this.tiles[n][s].number)for(var o=n-1;o>=0;o--)if(0!=this.tiles[o][s].number){this.tiles[n][s].number=this.tiles[o][s].number,this.tiles[o][s].number=0,i=!0;break}i&&(this.newTile(),this.judgeOver())},onDownSlide:function(){for(var i=!1,t=0;t<4;t++)for(var e=0;e<4;e++)if(0!=this.tiles[t][e].number)for(var r=e+1;r<4;r++)if(0!=this.tiles[t][r].number){if(this.tiles[t][e].number+this.tiles[t][r].number===0){this.tiles[t][e].number*=2,this.tiles[t][r].number=0,i=!0;break}break}for(var s=0;s<4;s++)for(var n=0;n<4;n++)if(0==this.tiles[s][n].number)for(var o=n+1;o<4;o++)if(0!==this.tiles[s][o].number){this.tiles[s][n].number=this.tiles[s][o].number,this.tiles[s][o].number=0,i=!0;break}i&&(this.newTile(),this.judgeOver())},onUpSlide:function(){for(var i=!1,t=0;t<4;t++)for(var e=3;e>=0;e--)if(0!==this.tiles[t][e].number)for(var r=e-1;r>=0;r--)if(0!=this.tiles[t][r].number){if(this.tiles[t][e].number+this.tiles[t][r].number===0){this.tiles[t][e].number*=2,this.tiles[t][r].number=0,i=!0;break}break}for(var s=0;s<4;s++)for(var n=3;n>=0;n--)if(0==this.tiles[s][n].number)for(var o=n-1;o>=0;o--)if(0!=this.tiles[s][o].number){this.tiles[s][n].number=this.tiles[s][o].number,this.tiles[s][o].number=0,i=!0;break}i&&(this.newTile(),this.judgeOver())},drawBg:function(){this.g.rect(0,0,this.node.width,this.node.height),this.g.fillColor=cc.hexToColor("#ffffff"),this.g.stroke(),this.g.fill(),this.g.strokeColor=cc.Color.BLACK,this.g.lineWidth=10;for(var i=0;i<5;i++)this.g.moveTo(i*this.tileWidth,0),this.g.lineTo(i*this.tileWidth,this.mapWidth);for(var t=0;t<5;t++)this.g.moveTo(0,t*this.tileWidth),this.g.lineTo(this.mapWidth,t*this.tileWidth);this.g.stroke()},judgeOver:function(){for(var i=0;i<4;i++)for(var t=0;t<4;t++)1024===this.tiles[i][t].number&&cc.director.loadScene("success")},initTiles:function(i){this.tileLayer.removeAllChildren(),this.tiles=[],this.zeroTiles=[],this.zeroTiles=[];for(var t=0;t<4;t++){this.tiles[t]=[];for(var e=0;e<4;e++){var r=cc.instantiate(this.tilePrefab);this.tileLayer.addChild(r),r.x=t*this.tileWidth+this.tileWidth/2,r.y=e*this.tileWidth+this.tileWidth/2;var s=r.getComponent("Tile");s.init(t,e,0),this.tiles[t][e]=s,this.zeroTiles.push(s)}}for(var n=0;n<2;n++)this.newTile()},newTile:function(){this.zeroTiles=[];for(var i=0;i<4;i++)for(var t=0;t<4;t++)0===this.tiles[i][t].number&&this.zeroTiles.push(this.tiles[i][t]);var e=Math.floor(Math.random()*this.zeroTiles.length);this.zeroTiles[e].randomNumber(),this.zeroTiles.splice(e,1)},onBtnRetry:function(){cc.director.loadScene("game")},onBtnSleep:function(){cc.director.loadScene("sleep")}}),cc._RF.pop()},{}],Tile:[function(i,t,e){"use strict";cc._RF.push(t,"45f4fd0nChEc4qnbOh+ides","Tile"),cc.Class({extends:cc.Component,properties:{x:0,y:0,_number:0,number:{set:function(i){i!==this._number&&(this._number=i,0===i?this.numberLabel.string="":(this.numberLabel.string=i+"",this.number>0?this.node.color=cc.Color.RED:this.node.color=cc.Color.BLUE))},get:function(){return this._number}},numberLabel:cc.Label},onLoad:function(){},init:function(i,t,e){this.x=i,this.y=t,this.number=e},randomNumber:function(){var i=Math.ceil(2*Math.random());this.number=1===i?64:-64}}),cc._RF.pop()},{}]},{},["Map","Tile","GameScene"]);