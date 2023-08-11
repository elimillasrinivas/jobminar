"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/about.json
const about_namespaceObject = JSON.parse('{"wp":{"H":"/img/about-one.jpeg","w":"Image One"},"Lx":{"H":"/img/about-two.jpeg","w":"Image One"},"TN":"One Stop Solutions Provider.","Oc":"Welcome to Jobminar","fL":"We offer top-notch staffing solutions, web development, construction, corporate events, digital marketing, and political digital marketing services. Our expert team handles tasks of all complexities, ensuring quality finishes and repairs in every project. Building and growing with excellence is our passion! Explore our comprehensive range of services today.","u2":"Shanmukh Thallam","rH":"Director of Jobminar"}');
;// CONCATENATED MODULE: ./src/components/sections/About.jsx


const AboutSection = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "gap no-top about-style-one",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "about-data-left",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: about_namespaceObject.wp.H,
                                        alt: about_namespaceObject.wp.w
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                    className: "about-image",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: about_namespaceObject.Lx.H,
                                        alt: about_namespaceObject.Lx.w
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "about-data-right",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: about_namespaceObject.Oc
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    children: about_namespaceObject.TN
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "about-info",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: about_namespaceObject.fL
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            children: about_namespaceObject.u2
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            children: about_namespaceObject.rH
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const About = (AboutSection);


/***/ }),

/***/ 828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Features)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/sections/features.json
const features_namespaceObject = JSON.parse('{"Oc":"Core Features","TN":"What Makes Us Differnt","lX":"uemObN8_dcw","BH":{"H":"/img/core-feature.jpeg","w":"image"},"ev":[{"num":"01.","title":"Early Involvement","text":"Our distinguishing factor lies in our unparalleled expertise and early involvement approach. At Jobminar Consultants Pvt Ltd, we believe that engaging with us from the start empowers us to comprehensively define project scopes and optimize systems. This proactive stance mitigates uncertainties, leading to remarkable project success."},{"num":"02.","title":"Project Excellence","text":"Early engagement is the cornerstone of our success at Jobminar Consultants Pvt Ltd. By involving us from the outset, we delve deep into understanding project requirements, ensuring comprehensive scope definition and systems optimization. This strategic approach reduces project uncertainties and sets the stage for optimal outcomes."},{"num":"03.","title":"Early Collaboration","text":"What sets us apart is our willingness to embrace challenges through early collaboration. At Jobminar Consultants Pvt Ltd, we analyze potential hurdles, define precise project scopes, and optimize systems when brought on board early. This hands-on approach reduces risks, leading to efficient project execution."},{"num":"04.","title":"Building Success","text":"Building success starts with early partnership at Jobminar Consultants Pvt Ltd. Our team thrives on delivering excellence through comprehensive scope definition and systems optimization. By partnering with us at the outset, you ensure a strong foundation for your project\'s success."}]}');
// EXTERNAL MODULE: external "react-bootstrap/Accordion"
var Accordion_ = __webpack_require__(2423);
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);
// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__(9485);
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);
// EXTERNAL MODULE: ./node_modules/react-modal-video/css/modal-video.css
var modal_video = __webpack_require__(1352);
;// CONCATENATED MODULE: ./src/components/sections/Features.jsx






const FeaturesSection = ()=>{
    const [isOpen, setOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "core-features",
        style: {
            marginTop: "7rem"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "heading-style-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "container",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "row",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "col-lg-12",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "data",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: features_namespaceObject.Oc
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                                children: features_namespaceObject.TN
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((Accordion_default()), {
                                        defaultActiveKey: "features-acc-0",
                                        children: features_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((Accordion_default()).Item, {
                                                eventKey: `features-acc-${key}`,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)((Accordion_default()).Header, {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "num",
                                                                children: item.num
                                                            }),
                                                            " ",
                                                            item.title
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx((Accordion_default()).Body, {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: item.text
                                                        })
                                                    })
                                                ]
                                            }, `features-item-${key}`))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "shape",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "video",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: features_namespaceObject.BH.H,
                                                alt: features_namespaceObject.BH.w
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            className: "video-play-btn",
                                            onClick: ()=>setOpen(true),
                                            style: {
                                                "cursor": "pointer"
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                width: "35",
                                                height: "56",
                                                viewBox: "0 0 35 56",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("clipPath", {
                                                                id: "clip-video_arrow",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                                        width: "35",
                                                                        height: "56"
                                                                    }),
                                                                    " "
                                                                ]
                                                            }),
                                                            " "
                                                        ]
                                                    }),
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                        id: "video_arrow",
                                                        "data-name": "video arrow",
                                                        clipPath: "url(#clip-video_arrow)",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                id: "Shape_1",
                                                                "data-name": "Shape 1",
                                                                d: "M1362,5000.8,1327,4972V5027Z",
                                                                transform: "translate(-1326.998 -4971.996)",
                                                                fill: "rgba(0,0,0,0)"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                id: "Shape_1_-_Outline",
                                                                "data-name": "Shape 1 - Outline",
                                                                d: "M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z",
                                                                transform: "translate(-1326.998 -4971.996)"
                                                            }),
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((external_react_modal_video_default()), {
                channel: "youtube",
                isOpen: isOpen,
                videoId: features_namespaceObject.lX,
                onClose: ()=>setOpen(false)
            })
        ]
    });
};
/* harmony default export */ const Features = (FeaturesSection);


/***/ }),

/***/ 6258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LatestPosts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/latest-posts.json
const latest_posts_namespaceObject = JSON.parse('{"Oc":"Let us Help Guide","TN":"Recent Articles","LI":{"P":"View All Posts","p":"/blog"},"jX":3}');
// EXTERNAL MODULE: ./src/lib/date.js
var date = __webpack_require__(3265);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/LatestPosts.jsx




const LatestPostsSection = ({ posts  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "gap no-top blog-style-one",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "heading",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("figure", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/img/heading-icon.png",
                            alt: "heading-icon"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: latest_posts_namespaceObject.Oc
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: latest_posts_namespaceObject.TN
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: posts.slice(0, latest_posts_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "blog-post",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "blog-image",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: item.image,
                                                        alt: item.title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: `/blog/${item.id}`,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa-solid fa-angles-right"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "blog-data",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "blog-date",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(date/* default */.Z, {
                                                        dateString: item.date
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: `/blog/${item.id}`,
                                                        children: item.title
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "blog-author d-flex-all justify-content-start",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "author-img",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: item.author.avatar,
                                                                    alt: item.author.name
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "details",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        children: "by"
                                                                    }),
                                                                    " ",
                                                                    item.author.name
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, `latest-post-item-${key}`))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "common-btn",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: latest_posts_namespaceObject.LI.p,
                            className: "theme-btn",
                            children: [
                                latest_posts_namespaceObject.LI.P,
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                    className: "fa-solid fa-angles-right"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const LatestPosts = (LatestPostsSection);


/***/ }),

/***/ 3265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function Date({ dateString  }) {
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateString,
        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "LLLL d, yyyy")
    });
}


/***/ }),

/***/ 8955:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4261);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(745);
/* harmony import */ var _library_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7374);
/* harmony import */ var _components_sections_About__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4424);
/* harmony import */ var _components_sections_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5081);
/* harmony import */ var _components_sections_Counters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2287);
/* harmony import */ var _components_sections_Features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(828);
/* harmony import */ var _components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6258);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__]);
([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const HeroSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Hero"
        ]
    },
    ssr: false
});
const PartnersSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Partners"
        ]
    },
    ssr: false
});
const TestimonialSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Testimonial"
        ]
    },
    ssr: false
});
const ProjectsSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@components/sliders/Projects"
        ]
    },
    ssr: false
});
const Home1 = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        transparent: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroSlider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_About__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Counters__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProjectsSlider, {
                    projects: props.projects
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Features__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PartnersSlider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TestimonialSlider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_LatestPosts__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    posts: props.posts
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home1);
async function getStaticProps() {
    const allPosts = (0,_library_posts__WEBPACK_IMPORTED_MODULE_4__/* .getSortedPostsData */ .ld)();
    const allProjects = (0,_library_projects__WEBPACK_IMPORTED_MODULE_5__/* .getSortedProjectsData */ .ET)();
    return {
        props: {
            posts: allPosts,
            projects: allProjects
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("react-bootstrap/Accordion");

/***/ }),

/***/ 609:
/***/ ((module) => {

module.exports = require("react-countup");

/***/ }),

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 1774:
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,152,806,261,745,374,287,938], () => (__webpack_exec__(8955)));
module.exports = __webpack_exports__;

})();