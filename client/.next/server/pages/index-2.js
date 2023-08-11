"use strict";
(() => {
var exports = {};
exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 6641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KP": () => (/* binding */ estimatedFormSteps),
/* harmony export */   "Q": () => (/* binding */ projectsListHover),
/* harmony export */   "pU": () => (/* binding */ contactUsNavigation)
/* harmony export */ });
// What we build
const projectsListHover = ()=>{
    const allProjectsItems = document.querySelectorAll(".wwb-ul li");
    allProjectsItems.forEach((item)=>{
        item.addEventListener("mouseover", ()=>{
            allProjectsItems.forEach((element)=>{
                element.classList.remove("active");
            });
            item.classList.add("active");
        });
    });
};
// Estimated Form
const estimatedFormSteps = ()=>{
    const buttonContinue = document.querySelector("#estFormContinue");
    const buttonBack = document.querySelector("#estFormBack");
    const buttonSubmit = document.querySelector("#estFormSubmit");
    const formStep1 = document.querySelector(".est-form-step-1");
    const formStep2 = document.querySelector(".est-form-step-2");
    buttonContinue.addEventListener("click", (e)=>{
        e.preventDefault();
        formStep1.style.display = "none";
        formStep2.style.display = "block";
        buttonContinue.style.display = "none";
        buttonBack.style.display = "block";
        buttonSubmit.style.display = "block";
    });
    buttonBack.addEventListener("click", (e)=>{
        e.preventDefault();
        formStep2.style.display = "none";
        formStep1.style.display = "block";
        buttonContinue.style.display = "block";
        buttonBack.style.display = "none";
        buttonSubmit.style.display = "none";
    });
};
// Contact Us Navigation
const contactUsNavigation = ()=>{
    const allContactItems = document.querySelectorAll(".contact-us .c-data ul li");
    const allContactCards = document.querySelectorAll(".c-cards .card");
    allContactItems.forEach((item)=>{
        item.addEventListener("click", (e)=>{
            e.preventDefault();
            allContactItems.forEach((element)=>{
                element.getElementsByTagName("a")[0].classList.remove("active");
            });
            item.getElementsByTagName("a")[0].classList.add("active");
            const index = Array.from(item.parentNode.children).indexOf(item);
            if (index == 0) {
                allContactCards.forEach((element)=>{
                    element.classList.remove("active");
                });
                allContactCards[0].classList.add("active");
            }
            ;
            if (index == 1) {
                allContactCards.forEach((element)=>{
                    element.classList.remove("active");
                });
                allContactCards[1].classList.add("active");
            }
            ;
            if (index == 2) {
                allContactCards.forEach((element)=>{
                    element.classList.remove("active");
                });
                allContactCards[2].classList.add("active");
            }
            ;
            if (index == 3) {
                allContactCards.forEach((element)=>{
                    element.classList.remove("active");
                });
                allContactCards[3].classList.add("active");
            }
            ;
            if (index == 4) {
                allContactCards.forEach((element)=>{
                    element.classList.remove("active");
                });
                allContactCards[4].classList.add("active");
            }
            ;
        });
    });
};


/***/ }),

/***/ 9863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ About2)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/about-2.json
const about_2_namespaceObject = JSON.parse('{"Oc":"Focused and Future Ready","TN":"Right People to Deliver Unique Construction Solutions","BH":{"H":"/img/core.jpeg","w":"Our Goal"},"QG":{"H":"/img/our-goal-mov-text.png","w":"Our Goal Mov Text"},"ev":[{"title":"Our Goal is to Be Better","text":"<p>We successfully cope with tasks of varying complexity, provide long-term guarantees and regularly master new technologies. Our portfolio includes dozens of successfully completed projects of houses of different storeys, with high–quality finishes and good repairs. Building houses is our vocation!</p>"},{"title":"Business Bottom Line","text":"<ul><li>Geographical diversity, project complexity</li><li>Whether building on land or over water</li><li>Construction companies respond to the unique needs</li></ul>"}]}');
;// CONCATENATED MODULE: ./src/components/sections/About2.jsx


const About2Section = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "gap our-goal",
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
                        children: about_2_namespaceObject.Oc
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: about_2_namespaceObject.TN
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: about_2_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: key != 0 ? "data p2" : "data",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            dangerouslySetInnerHTML: {
                                                __html: item.text
                                            }
                                        })
                                    ]
                                }, `about2-item-${key}`))
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "data",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                        className: "goal-img",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: about_2_namespaceObject.BH.H,
                                            alt: about_2_namespaceObject.BH.w
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                        className: "goal-mov",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: about_2_namespaceObject.QG.H,
                                            alt: about_2_namespaceObject.QG.w
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                        width: "70",
                                        height: "57",
                                        viewBox: "0 0 70 57",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("defs", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("clipPath", {
                                                    id: "clip-Builty_Logo_Icon",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("rect", {
                                                        width: "70",
                                                        height: "57"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                                                id: "Builty_Logo_Icon",
                                                "data-name": "Builty Logo Icon",
                                                clipPath: "url(#clip-Builty_Logo_Icon)",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        id: "Path_9",
                                                        "data-name": "Path 9",
                                                        d: "M26.5,53A26.528,26.528,0,0,1,2.083,36.815c-.064-.151-.121-.289-.175-.424l22.607-22.3,12.53,12.7,3.9-4.474L24.515,6.093l-13,13.471.109-4.856-3.887-2.03L4.725,16.043l2.842-.986-.016,2.7-.035,5.962L.4,31.1A26.5,26.5,0,1,1,51.9,34.071l-9.387-9.388-20.2,20.407h8.2L42.515,32.678l6.7,7.484A26.482,26.482,0,0,1,26.5,53ZM43,42v2h2V42Zm-3,0v2h2V42Zm3-3v2h2V39Zm-3,0v2h2V39ZM24.551,15.725,4.063,36.437l.172.235L24.368,18.551l9.808,7.917.279-.329-9.9-10.414ZM25,28v3h3V28Zm-4,0v3h3V28Zm4-5v3h3V23Zm-4,0v3h3V23Z",
                                                        transform: "translate(15 2)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        id: "Path_4sffdfs",
                                                        "data-name": "Path 4",
                                                        d: "M900.563,546.922l-.586-4.5-14.4,18.8Z",
                                                        transform: "translate(-885 -514)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        id: "Path_7sdsdffsd",
                                                        "data-name": "Path 7",
                                                        d: "M22.516,25.5l0,5.47-.705-5.3Z"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                        id: "Path_8t4gdfg",
                                                        "data-name": "Path 8",
                                                        d: "M898.221,545.8l-.536-3.8-12.1,15.507Z",
                                                        transform: "matrix(1, 0.017, -0.017, 1, -866.028, -530.46)"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const About2 = (About2Section);


/***/ }),

/***/ 6825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContactUs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/contact-us.json
const contact_us_namespaceObject = JSON.parse('{"Oc":"Contact Us","TN":"Get in Touch With Us. We are Happy Help.","ev":[{"image":"/img/c-m-1.jpg","name":"Guterrez Cruz","role":"Sales Manager","email":"name@domain.com","tel":"+1 23 145 789","address":"901 N Pitt Str, Suite 170, VA 22314, USA"},{"image":"/img/c-m-2.jpg","name":"John Smith","role":"Sales Manager","email":"name@domain.com","tel":"+1 23 145 789","address":"901 N Pitt Str, Suite 170, VA 22314, USA"},{"image":"/img/c-m-3.jpg","name":"Willimes Markor","role":"Sales Manager","email":"name@domain.com","tel":"+1 23 145 789","address":"901 N Pitt Str, Suite 170, VA 22314, USA"},{"image":"/img/c-m-4.jpg","name":"Jessica Loren","role":"Sales Manager","email":"name@domain.com","tel":"+1 23 145 789","address":"901 N Pitt Str, Suite 170, VA 22314, USA"},{"image":"/img/c-m-5.jpg","name":"Clark Thomas","role":"Sales Manager","email":"name@domain.com","tel":"+1 23 145 789","address":"901 N Pitt Str, Suite 170, VA 22314, USA"}]}');
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/components/sections/ContactUs.jsx




const ContactUsSection = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* contactUsNavigation */.pU)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "gap no-top contact-us",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "heading",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: contact_us_namespaceObject.Oc
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: contact_us_namespaceObject.TN
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-7 col-md-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "c-data",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "w-100",
                                            src: "/images/map.png",
                                            alt: "map"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        children: contact_us_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "#.",
                                                    className: key == 0 ? "active" : "",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: item.image,
                                                                alt: item.name
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fa-solid fa-check"
                                                        })
                                                    ]
                                                })
                                            }, `contactus-item-${key}`))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-5 col-md-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "c-cards",
                                children: contact_us_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: key == 0 ? "card active" : "card",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "details",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                        children: item.name
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: item.role
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "contacts-info",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: "Email:"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "email",
                                                                    children: item.email
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: "Phone:"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: item.tel
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "address",
                                                children: item.address
                                            })
                                        ]
                                    }, `contactus-item-${key}`))
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const ContactUs = (ContactUsSection);


/***/ }),

/***/ 1737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EstimatedPrice)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/estimated-price.json
const estimated_price_namespaceObject = JSON.parse('{"Oc":"House Construction Cost Calculator","TN":"Estimatied Price","WL":"To get the cost estimation of your house please select from the following:","BH":{"H":"/img/est-img.png","w":"image"}}');
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
;// CONCATENATED MODULE: ./src/components/sections/EstimatedPrice.jsx






const EstimatedPriceSection = ()=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* estimatedFormSteps */.KP)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "gap estimated-price",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "heading-style-2",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "data",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: estimated_price_namespaceObject.Oc
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            children: estimated_price_namespaceObject.TN
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row bg-wh",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-7",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "est-form",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        children: estimated_price_namespaceObject.WL
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Formik, {
                                        initialValues: {
                                            email: "",
                                            name: "",
                                            message: "",
                                            materials: "1",
                                            area: "",
                                            room: "",
                                            bathroom: ""
                                        },
                                        validate: (values)=>{
                                            const errors = {};
                                            if (!values.email) {
                                                errors.email = "Required";
                                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                                errors.email = "Invalid email address";
                                            }
                                            return errors;
                                        },
                                        onSubmit: (values, { setSubmitting  })=>{
                                            const form = document.getElementById("contactForm");
                                            const status = document.getElementById("contactFormStatus");
                                            const data = new FormData();
                                            data.append("name", values.name);
                                            data.append("email", values.email);
                                            data.append("message", values.message);
                                            data.append("area", values.area);
                                            data.append("room", values.room);
                                            data.append("bathroom", values.bathroom);
                                            data.append("materials", values.materials);
                                            fetch(form.action, {
                                                method: "POST",
                                                body: data,
                                                headers: {
                                                    "Accept": "application/json"
                                                }
                                            }).then((response)=>{
                                                if (response.ok) {
                                                    status.innerHTML = "Thanks for your submission!";
                                                    form.reset();
                                                } else {
                                                    response.json().then((data)=>{
                                                        if (Object.hasOwn(data, "errors")) {
                                                            status.innerHTML = data["errors"].map((error)=>error["message"]).join(", ");
                                                        } else {
                                                            status.innerHTML = "Oops! There was a problem submitting your form";
                                                        }
                                                    });
                                                }
                                            }).catch((error)=>{
                                                status.innerHTML = "Oops! There was a problem submitting your form";
                                            });
                                            setSubmitting(false);
                                        },
                                        children: ({ values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                                onSubmit: handleSubmit,
                                                id: "contactForm",
                                                action: app/* settings.formspreeURL */.Xd.Tb,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "est-form-step-1",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "row",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "form-group col-md-12",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                            htmlFor: "inputState-1",
                                                                            children: "House Area"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                            className: "select-wrapper",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                                id: "inputState-1",
                                                                                name: "area",
                                                                                className: "form-control",
                                                                                onChange: handleChange,
                                                                                onBlur: handleBlur,
                                                                                value: values.area,
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                        children: "Choose Area"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                        value: "to 50 sq.m",
                                                                                        children: "to 50 sq.m"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                        value: "from 100 - 150 sq.m",
                                                                                        children: "from 100 - 150 sq.m"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                        value: "from 150 - 250 sq.m",
                                                                                        children: "from 150 - 250 sq.m"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                        value: "250 sq.m and more",
                                                                                        children: "250 sq.m and more"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "row",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "form-group col-md-6 space",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                htmlFor: "inputState-2",
                                                                                children: "Room"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                className: "select-wrapper",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                                    id: "inputState-2",
                                                                                    name: "room",
                                                                                    className: "form-control",
                                                                                    onChange: handleChange,
                                                                                    onBlur: handleBlur,
                                                                                    value: values.room,
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                            children: "Select Room"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                            value: "1",
                                                                                            children: "1"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                            value: "2",
                                                                                            children: "2"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                            value: "3",
                                                                                            children: "3"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                            value: "4",
                                                                                            children: "4"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                            value: "5",
                                                                                            children: "5"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                            value: "6 and more",
                                                                                            children: "6 and more"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                htmlFor: "inputState-3",
                                                                                children: "Bathroom"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                                className: "select-wrapper gg",
                                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("select", {
                                                                                    id: "inputState-3",
                                                                                    name: "bathroom",
                                                                                    className: "form-control",
                                                                                    onChange: handleChange,
                                                                                    onBlur: handleBlur,
                                                                                    value: values.bathroom,
                                                                                    children: [
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                            children: "Select Bathroom"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                            value: "1",
                                                                                            children: "1"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                            value: "2",
                                                                                            children: "2"
                                                                                        }),
                                                                                        /*#__PURE__*/ jsx_runtime.jsx("option", {
                                                                                            value: "3 and more",
                                                                                            children: "3 and more"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "row checkk g-0",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                        children: "Building Materials"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "form-group col-md-6",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "custom-control custom-radio",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Field, {
                                                                                    type: "radio",
                                                                                    id: "customRadio1",
                                                                                    name: "materials",
                                                                                    className: "custom-control-input",
                                                                                    value: "1"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                    className: "custom-control-label",
                                                                                    htmlFor: "customRadio1",
                                                                                    children: "A+ Grey Structure"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "form-group col-md-6",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            className: "custom-control custom-radio",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime.jsx(external_formik_.Field, {
                                                                                    type: "radio",
                                                                                    id: "customRadio2",
                                                                                    name: "materials",
                                                                                    className: "custom-control-input",
                                                                                    value: "2"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                    className: "custom-control-label",
                                                                                    htmlFor: "customRadio2",
                                                                                    children: "Premium Finishing"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "est-form-step-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "row",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "form-group col-md-6 space",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                htmlFor: "inputState-4",
                                                                                children: "Name"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                type: "text",
                                                                                id: "inputState-4",
                                                                                className: "form-control",
                                                                                placeholder: "John Doe",
                                                                                name: "name",
                                                                                required: "required",
                                                                                onChange: handleChange,
                                                                                onBlur: handleBlur,
                                                                                value: values.name
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                        className: "form-group col-md-6",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                                htmlFor: "inputState-5",
                                                                                children: "Email"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                                                type: "email",
                                                                                id: "inputState-5",
                                                                                className: "form-control",
                                                                                placeholder: "johndoe@gmail.com",
                                                                                name: "email",
                                                                                required: "required",
                                                                                onChange: handleChange,
                                                                                onBlur: handleBlur,
                                                                                value: values.email
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                className: "row",
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "form-group col-md-12",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime.jsx("label", {
                                                                            htmlFor: "inputState-6",
                                                                            children: "Message"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                                            id: "inputState-6",
                                                                            className: "form-control",
                                                                            placeholder: "Additional Details",
                                                                            name: "message",
                                                                            onChange: handleChange,
                                                                            onBlur: handleBlur,
                                                                            value: values.message
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "est-main",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: "Submit Form and get full estimate details"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "est-price",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                        href: "#.",
                                                                        id: "estFormContinue",
                                                                        className: "theme-btn",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                children: "Get an estimate"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                                        type: "submit",
                                                                        id: "estFormSubmit",
                                                                        className: "theme-btn theme-btn-2",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                                children: "Submit Form"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                                                className: "fas fa-angle-double-right"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                                        className: "form-status",
                                                                        id: "contactFormStatus"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                        href: "#.",
                                                                        id: "estFormBack",
                                                                        className: "back",
                                                                        children: "Back"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                className: "est-img",
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: estimated_price_namespaceObject.BH.H,
                                    alt: estimated_price_namespaceObject.BH.w
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const EstimatedPrice = (EstimatedPriceSection);


/***/ }),

/***/ 1413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Pricing)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/pricing.json
const pricing_namespaceObject = JSON.parse('{"Oc":"Select a plan that suits","TN":"Flexible Pricing Plans","ev":[{"title":"Plan.it","description":"Manage your own project documents and collaborate.","price":"$20","price_after_1":"Per user / Month","price_after_2":"Billed Annually","list":["Dolorum sed doloribus","Consectetur adipisicing elit","Maxime libero"],"button":{"label":"Select Now","link":"/contact"},"image":"/img/pricing1.jpeg"},{"title":"Build.it","description":"Manage your own project documents and collaborate.","price":"$60","price_after_1":"Per user / Month","price_after_2":"Billed Annually","list":["Dolorum sed doloribus","Consectetur adipisicing elit","Maxime libero"],"button":{"label":"Select Now","link":"/contact"},"image":"/img/pricing2.jpeg"},{"title":"Build.it PRO","description":"Manage your own project documents and collaborate.","price":"$94","price_after_1":"Per user / Month","price_after_2":"Billed Annually","list":["Dolorum sed doloribus","Consectetur adipisicing elit","Maxime libero"],"button":{"label":"Select Now","link":"/contact"},"image":"/img/slide3.jpeg"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Pricing.jsx



const PricingSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "gap no-top pricing-plans",
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
                        children: pricing_namespaceObject.Oc
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: pricing_namespaceObject.TN
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: pricing_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4 col-md-6 col-sm-12",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "main-price",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "price-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "price",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                        children: item.price
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: item.price_after_1
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: item.price_after_2
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                children: item.description
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                href: item.button.link,
                                                className: "theme-btn",
                                                children: [
                                                    item.button.label,
                                                    /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa-solid fa-angles-right"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "features",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                            children: item.list.map((element, element_key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fa-solid fa-circle-check"
                                                        }),
                                                        " ",
                                                        element
                                                    ]
                                                }, `pricinglist${key}-item-${element_key}`))
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "price-img",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: item.image,
                                                alt: item.title
                                            })
                                        })
                                    })
                                ]
                            })
                        }, `pricing-item-${key}`))
                })
            })
        ]
    });
};
/* harmony default export */ const Pricing = (PricingSection);


/***/ }),

/***/ 8233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProjectsList)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/utilits.js
var utilits = __webpack_require__(6641);
;// CONCATENATED MODULE: ./src/data/sections/projects-list.json
const projects_list_namespaceObject = JSON.parse('{"Oc":"Company Projects","TN":"What We Build","jX":5}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/ProjectsList.jsx





const ProjectsListSection = ({ projects  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utilits/* projectsListHover */.Q)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "gap what-we-build",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "parallax",
                style: {
                    "backgroundImage": "url(/images/pattren-5.png)"
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "heading-style-2",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "data",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: projects_list_namespaceObject.Oc
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            children: projects_list_namespaceObject.TN
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: "wwb-ul",
                        children: projects.slice(0, projects_list_namespaceObject.jX).map((item, key)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: key == 0 ? "active" : "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: `/projects/${item.id}`,
                                            children: item.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "location",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: "LOCATION:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: item.location
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("figure", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: item.image,
                                            alt: item.title
                                        })
                                    })
                                ]
                            }, `projectslist-item-${key}`))
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const ProjectsList = (ProjectsListSection);


/***/ }),

/***/ 7963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services2)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services-2.json
const services_2_namespaceObject = JSON.parse('{"Oc":"What We Provide","TN":"Our Services","LI":{"P":"View All Services","p":"/services"},"ev":[{"icon":"/img/serv-i-1.svg","title":"Staffing Solutions","text":"Explore premier staffing solutions. Find perfect talent for your needs.","link":"/services/service-1"},{"icon":"/img/serv-i-2.svg","title":"Digital Marketing","text":"Designing and Building The Most Beautiful Custom Homes.","link":"/services/service-2"},{"icon":"/img/serv-i-3.svg","title":"Interior Design","text":"Designing and Building The Most Beautiful Custom Homes.","link":"/services/service-3"},{"icon":"/img/serv-i-4.svg","title":"Welding & Laser","text":"Designing and Building The Most Beautiful Custom Homes.","link":"/services/service-3"},{"icon":"/img/serv-i-5.svg","title":"Architecture","text":"Designing and Building The Most Beautiful Custom Homes.","link":"/services/service-3"},{"icon":"/img/serv-i-5.svg","title":"Architecture","text":"Designing and Building The Most Beautiful Custom Homes.","link":"/services/service-3"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Services2.jsx



const Services2Section = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "gap service-style-two",
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
                        children: services_2_namespaceObject.Oc
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: services_2_namespaceObject.TN
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row g-0",
                    children: [
                        services_2_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "service-two-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: item.link,
                                                children: item.title
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: item.text
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "service-two-icon d-flex-all justify-content-start",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: item.icon,
                                                    alt: item.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: item.link,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                        className: "fa-solid fa-arrow-up-long"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, `services2-item-${key}`)),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4 col-md-6 col-sm-12",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "service-two-box last d-flex-all",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    href: services_2_namespaceObject.LI.p,
                                    children: [
                                        services_2_namespaceObject.LI.P,
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "d-flex-all d-inline-flex",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "fa-solid fa-angles-right"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Services2 = (Services2Section);


/***/ }),

/***/ 7953:
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
/* harmony import */ var _components_sections_About2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9863);
/* harmony import */ var _components_sections_Pricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1413);
/* harmony import */ var _components_sections_ProjectsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8233);
/* harmony import */ var _components_sections_Services2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7963);
/* harmony import */ var _components_sections_EstimatedPrice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1737);
/* harmony import */ var _components_sections_ContactUs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__]);
([_library_posts__WEBPACK_IMPORTED_MODULE_4__, _library_projects__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Hero2Slider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index-2.jsx -> " + "@components/sliders/Hero2"
        ]
    },
    ssr: false
});
const CertificatesSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index-2.jsx -> " + "@components/sliders/Certificates"
        ]
    },
    ssr: false
});
const LatestPostsSlider = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "index-2.jsx -> " + "@components/sliders/LatestPosts"
        ]
    },
    ssr: false
});
const Home2 = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        transparent: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Hero2Slider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_About2__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Pricing__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_ProjectsList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    projects: props.projects
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_Services2__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CertificatesSlider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_EstimatedPrice__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LatestPostsSlider, {
                    posts: props.posts
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_ContactUs__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home2);
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

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,152,806,261,745,374], () => (__webpack_exec__(7953)));
module.exports = __webpack_exports__;

})();