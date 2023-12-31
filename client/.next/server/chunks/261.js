"use strict";
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 4261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layouts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/common/scrollAnims.js
const scrollAnimation = ()=>{
    // Sticky Header
    let new_scroll_position = 0;
    let last_scroll_position;
    const header = document.getElementById("stickyHeader");
    const scrollTopButton = document.getElementById("scrollTop");
    const timeline = document.querySelector(".timeline .fill");
    window.addEventListener("scroll", function(e) {
        let last_scroll_position = window.scrollY;
        // Scrolling down
        if (new_scroll_position < last_scroll_position && last_scroll_position > 100) {
            header.classList.remove("slideDown");
            header.classList.add("slideUp");
        } else if (last_scroll_position < 100) {
            header.classList.remove("slideDown");
        } else if (new_scroll_position > last_scroll_position) {
            header.classList.remove("slideUp");
            header.classList.add("slideDown");
        }
        new_scroll_position = last_scroll_position;
        // Scroll Top  +  Timeline
        if (last_scroll_position >= 160) {
            scrollTopButton.classList.add("active");
        } else {
            scrollTopButton.classList.remove("active");
        }
        if (timeline != undefined) {
            let timelineTop = timeline.offsetTop;
            timeline.style.height = last_scroll_position - timelineTop - 200 + "px";
        }
    });
    // Just add #scrollTop to the footer
    if (scrollTopButton != undefined) {
        scrollTopButton.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        });
    }
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/layouts/footers/DefaultFooter.js



const DefaultFooter = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: "footer-style-one",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "footer-p-1",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "footer-first",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "footer-logo",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: app/* footer.logo.image */.Mv.jY.B,
                                            alt: app/* footer.logo.alt */.Mv.jY.w,
                                            width: 65
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "contact-info d-flex-all",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        children: [
                                            "Give us a free call @",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "+91 40 3580 8866"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    href: "/contact",
                                    className: "theme-btn",
                                    children: [
                                        "Get a Consultation ",
                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                            className: "fa-solid fa-angles-right"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "footer-p-2",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "footer-col",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            children: "Information"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: '"Unlock Your Potential with Jobminar Consultants - Your One-Stop Solution for Staffing, Web Development, Digital Marketing, Events, and Construction Services. Trust in Experience, Delivering Excellence\xa0Since\xa02020."'
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "footer-col",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            children: "Contact"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                            width: "79",
                                                            height: "94",
                                                            viewBox: "0 0 79 94",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("clipPath", {
                                                                            id: "clip-location_B",
                                                                            children: [
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                    width: "79",
                                                                                    height: "94"
                                                                                }),
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                    id: "location_B",
                                                                    "data-name": "location B",
                                                                    clipPath: "url(#clip-location_B)",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_121",
                                                                            "data-name": "Path 1",
                                                                            d: "M962.855,575.375a3,3,0,0,1-2.1-.861l-26.263-25.826c-11.03-11.993-13.791-27.653-7.492-42a38.334,38.334,0,0,1,34.959-23.117l1.346.009c15.262,0,27.868,8.452,33.722,22.609,6.152,14.878,3.046,31.554-7.912,42.485-.528.555-24.064,25.75-24.064,25.75a3,3,0,0,1-2.129.951Zm-.9-85.8A31.924,31.924,0,0,0,932.49,509.1c-5.313,12.1-2.954,25.342,6.31,35.419l23.963,23.559c15.027-16.085,20.179-21.585,22.274-23.488l-.164-.165c9.233-9.209,11.825-23.318,6.605-35.944a29.677,29.677,0,0,0-28.177-18.9Z",
                                                                            transform: "translate(-922.725 -482.15)"
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_23",
                                                                            "data-name": "Path 2",
                                                                            d: "M15,6a9,9,0,1,0,9,9,9.01,9.01,0,0,0-9-9m0-6A15,15,0,1,1,0,15,15,15,0,0,1,15,0Z",
                                                                            transform: "translate(25 26)"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: app/* footer.info.address */.Mv.um.Lk
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                            width: "40",
                                                            height: "62",
                                                            viewBox: "0 0 40 62",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("clipPath", {
                                                                            id: "dasdasdasd",
                                                                            children: [
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                    width: "40",
                                                                                    height: "62"
                                                                                }),
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                    id: "Mobsdfsdfsdfsdfile",
                                                                    clipPath: "url(#dasdasdasd)",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_331",
                                                                            "data-name": "Path 1",
                                                                            d: "M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z",
                                                                            transform: "translate(1 1)"
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_2",
                                                                            "data-name": "Path 2",
                                                                            d: "M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z",
                                                                            transform: "translate(14 48)"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: app/* footer.info.tel */.Mv.um.Hd
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                            width: "102",
                                                            height: "93",
                                                            viewBox: "0 0 102 93",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("clipPath", {
                                                                            id: "clip-Email_B",
                                                                            children: [
                                                                                " ",
                                                                                /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                    width: "102",
                                                                                    height: "93"
                                                                                }),
                                                                                " "
                                                                            ]
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                    id: "Email_B",
                                                                    "data-name": "Email B",
                                                                    clipPath: "url(#clip-Email_B)",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_1444",
                                                                            "data-name": "Path 1",
                                                                            d: "M969.85,550.4,927.766,528.2l2.8-5.307,39.229,20.7,37.712-20.677,2.885,5.261Z",
                                                                            transform: "translate(-918 -492)"
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            id: "Path_24",
                                                                            "data-name": "Path 2",
                                                                            d: "M969.562,494.385l48.391,25.361,0,1.818c-.023,17.272-.043,42.814-.012,47.124l.012.024v.709c0,5.426-1.516,9.425-4.508,11.885a10.4,10.4,0,0,1-6.575,2.344l-75.5-.016c-3.557.071-5.965-.931-7.717-2.752-2.4-2.5-3.517-6.391-3.317-11.577l.065-1.194c.116-5.315.029-29.954-.067-46.535l-.011-1.842Zm42.386,28.988-42.411-22.227-43.2,22.238c.189,32.939.239,42.8-.143,46.148l.13.005c-.168,4.351.8,6.309,1.645,7.185a3.342,3.342,0,0,0,2.458.984l76.043-.071a4.65,4.65,0,0,0,3.16-.963c1.517-1.248,2.319-3.754,2.319-7.25h.09C1011.893,566.689,1011.9,557.566,1011.947,523.373Z",
                                                                            transform: "translate(-918 -492)"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                }),
                                                                " "
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: app/* footer.info.email */.Mv.um.Do
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "footer-col",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            children: "Newsletter"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "Signup for our weekly newsletter to get the latest news."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                            action: app/* settings.mailchimp.url */.Xd.Gp.H,
                                            method: "post",
                                            target: "_blank",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "email",
                                                    name: "EMAIL",
                                                    placeholder: "Enter your email.",
                                                    required: true
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    type: "hidden",
                                                    name: app/* settings.mailchimp.key */.Xd.Gp.J
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    type: "submit",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa-solid fa-arrow-up-long"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "footer-p-3 rights",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "footer-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    dangerouslySetInnerHTML: {
                                        __html: app/* footer.copy */.Mv.JG
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "social-medias",
                                    children: app/* social.map */.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: item.link,
                                            target: "_blank",
                                            children: item.title
                                        }, `fsocial-item-${key}`))
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const footers_DefaultFooter = (DefaultFooter);

;// CONCATENATED MODULE: ./src/layouts/footers/Index.js


const Footer = ({ footer  })=>{
    switch(footer){
        case 1:
            return /*#__PURE__*/ jsx_runtime.jsx(footers_DefaultFooter, {});
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(footers_DefaultFooter, {});
    }
};
/* harmony default export */ const Index = (Footer);

;// CONCATENATED MODULE: ./src/common/useLocalStorage.js

function getStorageValue(key, defaultValue) {
    // getting stored value
    if (false) {}
}
const useLocalStorage = (key, defaultValue)=>{
    const [value, setValue] = (0,external_react_.useState)(()=>{
        return getStorageValue(key, defaultValue);
    });
    (0,external_react_.useEffect)(()=>{
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [
        key,
        value
    ]);
    return [
        value,
        setValue
    ];
};

;// CONCATENATED MODULE: ./src/layouts/headers/DefaultHeader.js





const DefaultHeader = ({ contactButton , cartButton  })=>{
    const navItems = [];
    app/* header.menu.forEach */.Fs.G.forEach((item, index)=>{
        let s_class1 = "";
        if (item.children != 0) {
            s_class1 = "menu-item-has-children";
        }
        let newobj = Object.assign({}, item, {
            "classes": s_class1
        });
        navItems.push(newobj);
    });
    const [themeUI, setThemeUIToggle] = useLocalStorage("theme_ui", "");
    const [desktopMenu, desktopMenuToggle] = (0,external_react_.useState)(false);
    const [mobileMenu, mobileMenuToggle] = (0,external_react_.useState)(false);
    const [cartOpen, setCartOpen] = (0,external_react_.useState)(false);
    const clickedCartButton = (e)=>{
        e.preventDefault();
        setCartOpen(!cartOpen);
    };
    const clickedDesktopMenu = (e)=>{
        e.preventDefault();
        desktopMenuToggle(!desktopMenu);
        document.getElementsByClassName("desktop-menu")[0].classList.toggle("open");
    };
    const clickedMobileMenu = (e)=>{
        e.preventDefault();
        mobileMenuToggle(!mobileMenu);
        document.getElementsByClassName("mobile-menu")[0].classList.toggle("open");
    };
    const clickedMobileMenuItemParent = (e)=>{
        e.preventDefault();
        e.target.parentNode.classList.toggle("active");
    };
    const clickedThemeUI = ()=>{
        setThemeUIToggle(!themeUI);
        const lightmodeToggle = document.querySelector("#theme-icon");
        if (themeUI) {
            document.body.classList.remove("light-d");
            lightmodeToggle.src = "/images/sun.png";
        } else {
            document.body.classList.add("light-d");
            lightmodeToggle.src = "/images/moon.png";
        }
    };
    (0,external_react_.useEffect)(()=>{
        const lightmodeToggle = document.querySelector("#theme-icon");
        if (themeUI) {
            document.body.classList.add("light-d");
            lightmodeToggle.src = "/images/moon.png";
        } else {
            document.body.classList.remove("light-d");
            lightmodeToggle.src = "/images/sun.png";
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        className: "header-style-one",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "desktop-nav",
                        id: "stickyHeader",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-lg-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "d-flex-all justify-content-between",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "header-logo",
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: app/* header.logo.image */.Fs.j.B,
                                                            alt: app/* header.logo.alt */.Fs.j.w,
                                                            width: 100
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "nav-bar",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                        children: navItems.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                className: item.classes,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                        href: item.link,
                                                                        children: item.label
                                                                    }),
                                                                    item.children != 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                        className: "sub-menu",
                                                                        children: item.children.map((subitem, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                className: subitem.children != 0 ? "menu-item-has-children" : "",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                        href: subitem.link,
                                                                                        children: subitem.label
                                                                                    }),
                                                                                    subitem.children != 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                                        className: "sub-menu",
                                                                                        children: subitem.children.map((subsubitem, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                                    href: subsubitem.link,
                                                                                                    children: subsubitem.label
                                                                                                })
                                                                                            }, `headernavsub2-item-${key}`))
                                                                                    })
                                                                                ]
                                                                            }, `headernavsub-item-${key}`))
                                                                    })
                                                                ]
                                                            }, `headernav-item-${key}`))
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "extras",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "theme-color",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src:  true ? "/images/moon.png" : 0,
                                                                    alt: "theme color",
                                                                    id: "theme-icon",
                                                                    onClick: ()=>clickedThemeUI()
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#",
                                                                id: "mobile-menu",
                                                                className: mobileMenu ? "menu-start open" : "menu-start",
                                                                onClick: (e)=>clickedMobileMenu(e),
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                                    id: "ham-menu",
                                                                    viewBox: "0 0 100 100",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            className: "line line1",
                                                                            d: "M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            className: "line line2",
                                                                            d: "M 20,50 H 80"
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            className: "line line3",
                                                                            d: "M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#",
                                                                id: "desktop-menu",
                                                                className: desktopMenu ? "menu-start open" : "menu-start",
                                                                onClick: (e)=>clickedDesktopMenu(e),
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                                    id: "ham-menue",
                                                                    viewBox: "0 0 100 100",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            className: "line line1",
                                                                            d: "M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            className: "line line2",
                                                                            d: "M 20,50 H 80"
                                                                        }),
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            className: "line line3",
                                                                            d: "M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            cartButton == 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#",
                                                                        className: "pr-cart",
                                                                        onClick: (e)=>clickedCartButton(e),
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                            id: "Shoping-bags",
                                                                            enableBackground: "new 0 0 512 512",
                                                                            viewBox: "0 0 512 512",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ jsx_runtime.jsx("g", {
                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                    d: "m452 120h-60.946c-7.945-67.478-65.477-120-135.054-120s-127.109 52.522-135.054 120h-60.946c-11.046 0-20 8.954-20 20v352c0 11.046 8.954 20 20 20h392c11.046 0 20-8.954 20-20v-352c0-11.046-8.954-20-20-20zm-196-80c47.484 0 87.019 34.655 94.659 80h-189.318c7.64-45.345 47.175-80 94.659-80zm176 432h-352v-312h40v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h192v60c0 11.046 8.954 20 20 20s20-8.954 20-20v-60h40z"
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: cartOpen ? "cart-popup show-cart" : "cart-popup",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                        className: "d-flex align-items-center position-relative",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "p-img light-bg",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                                    src: "/img/product1.jpeg",
                                                                                                    alt: "Product Image"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "p-data",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                                                        className: "font-semi-bold",
                                                                                                        children: "Pastoral Principles Cards"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                                        className: "theme-clr font-semi-bold",
                                                                                                        children: "1 x $25.00"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                                href: "#",
                                                                                                id: "crosss"
                                                                                            })
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                                                        className: "d-flex align-items-center position-relative",
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                                className: "p-img light-bg",
                                                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                                                    src: "/img/product2.jpeg",
                                                                                                    alt: "Product Image"
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                                className: "p-data",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                                                                        className: "font-semi-bold",
                                                                                                        children: "Pastoral Principles Cards"
                                                                                                    }),
                                                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                                                        className: "theme-clr font-semi-bold",
                                                                                                        children: "1 x $25.00"
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                                                href: "#",
                                                                                                id: "cross"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "cart-total d-flex align-items-center justify-content-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        className: "font-semi-bold",
                                                                                        children: "Total:"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                        className: "font-semi-bold",
                                                                                        children: "$60.00"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                                className: "cart-btns d-flex align-items-center justify-content-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                        className: "font-bold",
                                                                                        href: "/cart",
                                                                                        children: "View Cart"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                                        className: "font-bold theme-bg-clr text-white checkout",
                                                                                        href: "/checkout",
                                                                                        children: "Checkout"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            contactButton != 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "tel:+02101283492",
                                                                className: "theme-btn",
                                                                children: [
                                                                    "+91 40 3580 8866",
                                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                                            width: "40",
                                                                            height: "62",
                                                                            viewBox: "0 0 40 62",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("clipPath", {
                                                                                        id: "saddasdasdasdasda",
                                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                                            width: "40",
                                                                                            height: "62"
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                                                    id: "Mobisdfle",
                                                                                    clipPath: "url(#saddasdasdasdasda)",
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_125",
                                                                                            "data-name": "Path 1",
                                                                                            d: "M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z",
                                                                                            transform: "translate(1 1)"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                                            id: "Path_4342",
                                                                                            "data-name": "Path 2",
                                                                                            d: "M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z",
                                                                                            transform: "translate(14 48)"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            contactButton == 1 && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/contact",
                                                                className: "theme-btn simple",
                                                                children: "Get a Quote"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mobile-nav mobile-menu",
                        id: "mobile-nav",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "res-log",
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: app/* header.logo.image */.Fs.j.B,
                                        alt: app/* header.logo.alt */.Fs.j.w,
                                        width: 100
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                children: navItems.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        className: item.classes,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: item.link,
                                                onClick: item.children != 0 ? (e)=>clickedMobileMenuItemParent(e) : "",
                                                children: item.label
                                            }),
                                            item.children != 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                className: "sub-menu",
                                                children: item.children.map((subitem, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        className: subitem.children != 0 ? "menu-item-has-children" : "",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: subitem.link,
                                                                children: subitem.label
                                                            }),
                                                            subitem.children != 0 && /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                                className: "sub-menu",
                                                                children: subitem.children.map((subsubitem, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                            href: subsubitem.link,
                                                                            children: subsubitem.label
                                                                        })
                                                                    }, `mobilenavsub2-item-${key}`))
                                                            })
                                                        ]
                                                    }, `mobilenavsub-item-${key}`))
                                            })
                                        ]
                                    }, `mobilenav-item-${key}`))
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#",
                                id: "res-cross",
                                onClick: (e)=>clickedMobileMenu(e)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mobile-nav desktop-menu",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                children: "We Build Building and Great Homes."
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "des",
                                children: "We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies."
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/img/project1.jpeg",
                                    alt: "image"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: "Get in touch"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "num",
                                children: "(+380) 50 318 47 07"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "adrs",
                                children: "65 Allerton Street 901 N Pitt Str, Suite 170, VA 22314, USA"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "social-medias",
                                children: app/* social.map */.xs.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: item.link,
                                        target: "_blank",
                                        children: item.title
                                    }, `hsocial-item-${key}`))
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const headers_DefaultHeader = (DefaultHeader);

;// CONCATENATED MODULE: ./src/layouts/headers/Index.js


const Header = ({ header , contactButton , cartButton  })=>{
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime.jsx(headers_DefaultHeader, {
                contactButton: contactButton,
                cartButton: cartButton
            });
        default:
            return /*#__PURE__*/ jsx_runtime.jsx(headers_DefaultHeader, {
                contactButton: contactButton,
                cartButton: cartButton
            });
    }
};
/* harmony default export */ const headers_Index = (Header);

;// CONCATENATED MODULE: ./src/layouts/Preloader.jsx


const Preloader = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "preloader",
        children: /*#__PURE__*/ jsx_runtime.jsx("figure", {
            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: app/* settings.preloader.image */.Xd.xg.B,
                alt: app/* settings.preloader.alt */.Xd.xg.w
            })
        })
    });
};
/* harmony default export */ const layouts_Preloader = (Preloader);

;// CONCATENATED MODULE: ./src/layouts/Layouts.js






const Layouts = ({ children , header , footer , noHeader , noFooter , contactButton , cartButton  })=>{
    (0,external_react_.useEffect)(()=>{
        scrollAnimation();
        // preloader
        if (false) {}
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(layouts_Preloader, {}),
            !noHeader && /*#__PURE__*/ jsx_runtime.jsx(headers_Index, {
                header: header,
                contactButton: contactButton,
                cartButton: cartButton
            }),
            children,
            !noFooter && /*#__PURE__*/ jsx_runtime.jsx(Index, {
                footer: footer
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                id: "scrollTop",
                className: "scrollTopStick",
                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                    className: "fa-solid fa-arrow-up"
                })
            })
        ]
    });
};
/* harmony default export */ const layouts_Layouts = (Layouts);


/***/ })

};
;