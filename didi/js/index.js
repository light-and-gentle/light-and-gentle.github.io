/**
 * Created by six on 2016/9/24.
 */
$(function () {
    index.load();
});
var index = new
    function () {
        this.nowTime,
        this.lastTime,
        this.offsetTime,
        this.indexAnimationTime = 7,
        this.success = 0,
        this.tt
    };
    index.load = function () {
        main.init(),
        main.lines(),
        main.initIndexData(),
        main.skyBox(),
        main.cameraInit(),
        main.cameraAllow = !1,
        this.loadImages(),
        this.start(),
        this._time = [];
    },

    index.init = function () {
        $("#total").show()
        setTimeout(function () {
            closeInterVal();
            setTimeout(function () {
                $("#loadingText").css("display","none");
                index.indexAnimation();
            },500);
        }, 6e3),
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
            function (a) {
                setTimeout(a, 1e3 / 60)
            },
            requestAnimationFrame(loop = function () {
                index.setPX(),
                main.animationDomWork(),
                main.animationWork(),
                main.cameraUpdate(),
                requestAnimationFrame(loop)
            })
    },
    index.indexAnimation = function () {
        setTimeout(function () {
            index.t($("#index_9"), 500, "move_to_left");
            index.t($("#index_4"), 400, "move_to_left");
            index.t($("#index_8"), 300, "move_to_left");
            index.t($("#index_3"), 300, "move_to_right");
            index.t($("#index_10"), 400, "move_to_right");
            index.t($("#index_5"), 500, "move_to_right");
            index.t($("#index_1"), 300, "move_to_down2");
            index.t($("#index_6"), 400, "move_to_down2");
            index.t($("#index_11"), 500, "move_to_down2");
                setTimeout(function () {
                    index.animation();
                }, 600);

        }, 100)
    },
    index.animation = function () {
        index.t($("#index_2"), 0, "index_min");
        var isplay=true;
        var bgSound=document.getElementById("bgSound");
        var music = document.createElement("img");
        music.setAttribute("id", "musicBtn");
        music.setAttribute("src", "images/music.png");
        music.style.position = "absolute";
        music.style.top = "10px";
        music.style.left = "85%";
        music.style.width = "95px";
        music.style.height = "80px";
        document.body.appendChild(music);
        music.addEventListener("touchstart", function () {
            if(isplay){
                bgSound.pause();
                music.setAttribute("src", "images/music_pause.png");
            }
            else{
                bgSound.play();
                music.setAttribute("src", "images/music.png");
            }
            isplay=!isplay;
        })
        //   3d  游戏场景   跳出------------------------------------------------------------------------
        //index.t($(".index_2"), 0, "index_min"),
        main.addAnimation(main.box, 0, 40, {
            x: 0,
            y: 0,
            z: 0
        }, {
            x: 1,
            y: 1,
            z: 1
        }, 10, "scale", "linear"),
            main.addAnimation(main.box, 0, 120, {
                x: 0,
                y: -550,
                z: -2e3
            }, {
                x: 0,
                y: 0,
                z: 0
            }, 40, "position", "easeOut"),
            main.addAnimation(main.box, 0, 150, {
                x: 0,
                y: -480,
                z: 0
            }, {
                x: 0,
                y: main.alpha,
                z: 0
            }, 10, "rotation", "easeOut", 0, function () {
                for(var j=1;j<=4;j++){
                    var c=main.getPiece("btn"+j);
                    main.addAnimation(c, 0, 50, {
                        x: c.x,
                        y: c.y,
                        z: c.z
                    }, {
                        x: c.x,
                        y: c.y - 20,
                        z: c.z
                    }, 0, "position", "easeOut", 9999);
                }
                main.cameraAllow = !0;
                $("#index").hide(),
                    $("#ts").show().addClass("obj_fadeIn_speed").bind("touchstart", function () {
                        $("#ts").unbind("touchstart").css("opacity", 1).removeClass("obj_fadeIn_speed").addClass("obj_fadeOut"),
                            setTimeout(function () {
                                $("#ts").hide();
                                main.setIndexAnimation("one");
                            }, 500)
                    })

            })
    },
    index.loadImages = function () {
        var i, b;
        for (this.textures = 65, this.images = ["images/empty.png",'images/loadingBg1.jpg','images/qianting.png','images/upcloud.png',
            'images/upcloud.png', 'images/bg.jpg', 'images/btn1.png', 'images/btn2.png', 'images/btn3.png'
            , 'images/btn4.png', 'images/tip1.png', 'images/tip2.png', 'images/tip3.png'
            , 'images/tip4.png' , 'images/music.png' , 'images/music_pause.png', "images/index_1.png", "images/index_2.png", "images/index_3.png", "images/index_4.png", "images/index_5.png", "images/index_6.png", "images/index_8.png", "images/index_9.png", "images/index_10.png", "images/index_11.png", "images/btn1.png"
            , "images/btn2.png", "images/btn3.png", "images/btn4.png", "images/icon1.png", "images/icon2.png"
            , "images/icon3.png", "images/icon4.png", "images/hb1.png", "images/hb2.png"],
                 this.now = 0, this.total = this.textures + this.images.length - 1,
                 i = 1; i <= this.textures; i++)
            b = new Image,
                b.src = "images/" + i + ".png",
                b.onload = function () {
                    index.loadWork();
                };

        for (i = 0; i < this.images.length; i++) b = new Image,
            b.src = this.images[i],
            b.onload = function () {
                index.loadWork();
            }
    },
    index.loadWork = function () {
        ++this.now == this.total && (clearTimeout(this.tt), setTimeout(function () {
            index.init();
        }, 3000))
    },
    index.start = function () {
        var a, b;
        b = [
            {
                alpha: 53,
                beta: 89,
                url: 21,
                type: 1
            },
            {
                alpha: 53,
                beta: 89,
                url: 22,
                type: 2
            },
            {
                alpha: 90,
                beta: 25,
                url: 27,
                type: 1
            },
            {
                alpha: 90,
                beta: 25,
                url: 28,
                type: 2
            },
            {
                alpha: 118,
                beta: 25,
                url: 35,
                type: 1
            },
            {
                alpha: 118,
                beta: 25,
                url: 36,
                type: 2
            },
            {
                alpha: 187,
                beta: 14,
                url: 45,
                type: 1
            }, {
                alpha: 187,
                beta: 14,
                url: 46,
                type: 2
            },
            {
                alpha: 187,
                beta: 14,
                url: 47,
                type: 2
            }, {
                alpha: 187,
                beta: 14,
                url: 48,
                type: 2
            },
            {
                alpha: 187,
                beta: 14,
                url: 49,
                type: 2
            },
            {
                alpha: 150,
                beta: 0,
                url: 43
            },
            {
                alpha: 201,
                beta: -30,
                url: 44
            }, {
                alpha: 208,
                beta: -25,
                url: 59,
                type: 1
            }, {
                alpha: 208,
                beta: -25,
                url: 60,
                type: 2
            }, {
                alpha: 227,
                beta: 0,
                url: 37,
                type: 1
            }, {
                alpha: 227,
                beta: 0,
                url: 38,
                type: 2
            },
            {
                alpha: 286,
                beta: 25,
                url: 50,
                type: 1
            }, {
                alpha: 286,
                beta: 25,
                url: 51,
                type: 2
            }
            , {
                alpha: 286,
                beta: 25,
                url: 52,
                type: 2
            }, {
                alpha: 286,
                beta: 25,
                url: 53,
                type: 2
            }
            , {
                alpha: 320,
                beta: 77,
                url: 39,
                type: 1
            }, {
                alpha: 320,
                beta: 77,
                url: 40,
                type: 2
            }
            , {
                alpha: 360,
                beta: -53,
                url: 41,
                type: 1
            }, {
                alpha: 360,
                beta: -53,
                url: 42,
                type: 2
            }
            , {
                alpha: 382,
                beta: -16,
                url: 55,
                type: 1
            }, {
                alpha: 382,
                beta: -16,
                url: 56,
                type: 2
            }, {
                alpha: 382,
                beta: -16,
                url: 57,
                type: 2
            }, {
                alpha: 382,
                beta: -16,
                url: 58,
                type: 2
            },
            {
                alpha: 286,
                beta: -50,
                url: 29,
                type: 1
            },
            {
                alpha: 286,
                beta: -50,
                url: 30,
                type: 2
            },
            {
                alpha: 286,
                beta: -50,
                url: 31,
                type: 2
            }, {
                alpha: 286,
                beta: -50,
                url: 32,
                type: 2
            },{
                alpha: 286,
                beta: -50,
                url: 33,
                type: 2
            },{
                alpha: 286,
                beta: -50,
                url: 34,
                type: 2
            },
            {
                alpha: 187,
                beta: 30,
                url: 61,
                type: 1
            }, {
                alpha: 187,
                beta: 30,
                url: 62,
                type: 2
            },
            {
                alpha: 370,
                beta: 0,
                url: 63,
                type: 1
            }, {
                alpha: 370,
                beta: 0,
                url: 64,
                type: 2
            }, {
                alpha: 370,
                beta: 0,
                url: 65,
                type: 2
            }
            ];

        for(i = 0; i < b.length; i++){
            b[i].type ? 1 == b[i].type ? main.addObject(["images/" + b[i].url + ".png"], b[i].alpha, b[i].beta, !1, !1, !1, !1, !1, "star" + b[i].url, !0, !1) : main.addObject(["images/" + b[i].url + ".png"], b[i].alpha, b[i].beta, !1, !1, !1, !1, !1, "star" + b[i].url, !0, !0) : "number" == typeof b[i].url ? main.addObject(["images/" + b[i].url + ".png"], b[i].alpha, b[i].beta, !1, !1, !1, !1, !1, b[i].url) : b[i].text ? main.addObject(["images/" + b[i].url + ".png"], b[i].alpha, b[i].beta, !1, !1, !1, !0, !1, b[i].url, !1, !1, !0) : main.addObject(["images/" + b[i].url + ".png"], b[i].alpha, b[i].beta, !1, !1, !1, !0, !1, b[i].url);
        }


        var isCLick=[true,true,true,true];
        //var iconArr=["icon1","star64","star65","star66"];

        main.addObject(["images/tip1.png"], 75, 57, !1, !1, !1, !1, !1, "tip1");
        main.addObject(["images/icon1.png"], 110, 35, !1, !1, !1, !1, !1,"icon1",!1,!0,!0);
        main.addObject(["images/btn1.png"], 102, 5, !1, !1, !0, !1, !1,"btn1");
        main.addObject(["images/empty.png"], 96, 3, !1, !1, !0, !1, function () {
            console.log("送她赴约");
            main.addObject(["images/hb1.png"], 122, 48, !1, !1, !1, !1, !1, "hb1",!0,!0,!1);
            main.addObject(["images/empty.png"], 122, 48, !1, !1, !0, !1);
            this.clickAllow = !1,
            tiaozhan(0,27);

        });
        main.addObject(["images/tip2.png"], 210, 37.5, !1, !1, !1, !1, !1, "tip2");
        main.addObject(["images/icon2.png"], 237, 8, !1, !1, !1, !1, !1,"icon2",!1,!0,!0);
        main.addObject(["images/btn2.png"], 177, -4, !1, !1, !0, !1, !1,"btn2");
        main.addObject(["images/empty.png"], 177, -4, !1, !1, !0, !1, function () {
            console.log("带她避雨");
            main.addObject(["images/hb1.png"], 220, 15, !1, !1, !1, !1, function () {
                //$(this.el).addClass("obj_fadeOut");
            }, "hb2",!0,!0,!1);
            main.addObject(["images/empty.png"], 232, 15, !1, !1, !0, !1);
            this.clickAllow = !1,
            tiaozhan(1,45);
        });


        main.addObject(["images/icon3.png"], 326, 52, !1, !1, !1, !1, !1,"icon3",!1,!0,!0);
        main.addObject(["images/tip3.png"], 275, 50, !1, !1, !1, !1, !1, "tip3");
        main.addObject(["images/btn3.png"], 296, 10, !1, !1, !0, !1,!1,"btn3");

        main.addObject(["images/empty.png"], 296, 10, !1, !1, !0, !1, function () {
            console.log("给她遮风");
            main.addObject(["images/hb1.png"], 340, 68, !1, !1, !1, !1, function () {
                //$(this.el).addClass("obj_fadeOut");
            }, "hb3",!0,!0,!1);
            main.addObject(["images/empty.png"], 340, 48, !1, !1, !0, !1);
            this.clickAllow = !1,
            tiaozhan(2,50);
        });

        main.addObject(["images/icon4.png"], 375, -40, !1, !1, !1, !1, !1,"icon4",!1,!0,!0);
        main.addObject(["images/tip4.png"], 359, 1, !1, !1, !1, !1, !1, "tip4");
        main.addObject(["images/btn4.png"], 399, -35, !1, !1, !0, !1, !1,"btn4");
        main.addObject(["images/empty.png"], 399, -26, !1, !1, !0, !1, function () {
            console.log("为她挡雪");
            main.addObject(["images/hb1.png"], 394, -35, !1, !1, !1, !1, function () {
                //$(this.el).addClass("obj_fadeOut");
            }, "hb4",!0,!0,!1);
            main.addObject(["images/empty.png"], 394, -35, !1, !1, !0, !1);
            this.clickAllow = !1,
            tiaozhan(3,55);
        });
        var  nextpositon=[{x:0,y:-30,z:130},{x:-250,y:60,z:0},{x:80,y:-180,z:-220},{x:-100,y:200,z:0}]
        function tiaozhan(index,fistP){
            if(isCLick[index]==true){
                var girl=getinitPiece(fistP);
                main.addAnimation(girl, 0, 100, {
                    x: 1,
                    y: 1,
                    z: 1
                }, {
                    x: 0,
                    y: 0,
                    z: 0
                }, 40, "scale", "linear"),
                    main.addAnimation(girl, 0, 100, {
                        x: girl.x,
                        y: girl.y,
                        z:girl.z

                    }, {
                        x:girl.x+nextpositon[index].x,
                        y:girl.y+nextpositon[index].y,
                        z:girl.z+nextpositon[index].z

                    }, 40, "position", "linear");

                isCLick[index]=false;


                setTimeout(function () {
                    var c=main.getPiece("hb"+(index+1));
                    main.addAnimation(c, 0, 50, {
                        x: c.x,
                        y: c.y,
                        z: c.z
                    }, {
                        x: c.x,
                        y: c.y - 20,
                        z: c.z
                    }, 0, "position", "easeOut", 9999);

                    var b=main.getPiece("icon"+(index+1));
                    main.addAnimation(b, 0, 50, {
                        x: b.rotationX,
                        y: b.rotationY,
                        z: b.rotationZ
                    }, {
                        x: b.rotationX+5,
                        y: b.rotationY,
                        z: b.rotationZ
                    }, 0, "rotation", "easeOut", 9999);

                },3000);


            }
            setTimeout(function () {
                var hb=main.getPiece("hb"+(index+1));
                hb.alpha=1;
                hb.updateV();
                var icon=main.getPiece("icon"+(index+1));
                icon.alpha=1;
                icon.updateV();
                var tip=main.getPiece("tip"+(index+1));
                tip.alpha=0;
                tip.updateV();
                var btn=main.getPiece("btn"+(index+1));
                btn.alpha=0;
                btn.updateV();
            },2300);

        }
        function getinitPiece(value){
            for(var i=0;i<main.animationDomTask.length;i++){
                if(main.animationDomTask[i]["starObjs"][0]=="star"+value){
                    console.log("存在");
                    var firstObj;
                    for(var j=0;j<main.animationDomTask[i]["starObjs"].length;j++){
                        var obj=main.getPiece(main.animationDomTask[i]["starObjs"][j]);
                        if(j==0){
                            obj.alpha=1;
                            firstObj=obj;
                        }else{
                            obj.alpha=0;
                        }
                        obj.updateV();
                    }
                    main.animationDomTask.splice(i,1);
                    return firstObj;
                }
            }
        }
    },
    index.setPX = function () {
        this.now ? (main.animationPX = 1, this.nowTime = main.now(), this.offsetTime = this.nowTime - this.lastTime, this.offsetTime > 40 && this.offsetTime < 100 ? (main.animationPX = 5, main.cameraSpeed = .4, main.cameraBack = 4) : this.offsetTime >= 100 && this.offsetTime < 200 ? (main.animationPX = 8, main.cameraSpeed = .5, main.cameraBack = 8) : this.offsetTime >= 200 && (main.animationPX = 8, main.cameraSpeed = .5, main.cameraBack = 8, this.indexAnimationTime = 10), this.lastTime = this.nowTime) : this.lastTime = main.now()
    },
    index.music = function (a) {
        var b, c;
        for (b = 1; 6 > b; b++) c = document.getElementById("music" + b),
            c.currentTime = 0,
            b == a ? c.play() : c.pause()
    },
    index.tsHide = function (a) {
        var b = main.getPiece(a);
        b.noAnimation = !0,
            $(b.el).addClass("obj_fadeOut")
    },
    index.browser = function () {
        var a = {
            versions: function () {
                var a = navigator.userAgent;
                return navigator.appVersion,
                {
                    ios: !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    android: a.indexOf("Android") > -1 || a.indexOf("Linux") > -1,
                    iPhone: a.indexOf("iPhone") > -1,
                    iPad: a.indexOf("iPad") > -1
                }
            }()
        };
        return a.versions.iPhone || a.versions.iPad || a.versions.ios ? 1 : a.versions.android ? 0 : void 0
    },
    index.t = function (a, b, c) {
        setTimeout(function () {
            a.addClass(c)
        }, b)
    },
    index.g = function (a) {
        return document.getElementById(a)
    },
    index.qq = function () {
        if (2 == ++this.success) {
            var a = main.getPiece("38");
            a.alpha = 1,
            a.updateV();
        }
    };