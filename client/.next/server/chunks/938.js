exports.id = 938;
exports.ids = [938];
exports.modules = {

/***/ 5081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/data/sections/services.json
const services_namespaceObject = JSON.parse('{"e":[{"icon":{"light":"/images/staffing-light.svg","dark":"/images/staffing-dark.svg","alt":"icon"},"title":"Staffing Solutions","text":"Explore premier staffing solutions. Find perfect talent for your needs.","link":"/services/service-1"},{"icon":{"light":"/images/digital-marketing.svg","dark":"/images/digital-marketing-dark.svg","alt":"icon"},"title":"Digital Marketing","text":"Effective digital strategies. Drive growth with us. Get started today!","link":"/services/service-2"},{"icon":{"light":"/images/web-development.svg","dark":"/images/web-development-dark.svg","alt":"icon"},"title":"Web Development","text":"Expert web solutions. Enhance your online presence. Connect with us!","link":"/services/service-3"},{"icon":{"light":"/images/events.svg","dark":"/images/events-dark.svg","alt":"icon"},"title":"Corporate Events","text":"Unforgettable events. Elevate your brand. Book now for success!","link":"/services/service-4"},{"icon":{"light":"/images/construction.svg","dark":"/images/construction-dark.svg","alt":"icon"},"title":"Construction","text":"Premier construction services. Build with confidence. Contact us","link":"/services/service-5"},{"icon":{"light":"/images/political.svg","dark":"/images/political-dark.svg","alt":"icon"},"title":"Political Digital Marketing","text":"Winning political campaigns. Connect with voters now. Join us","link":"/services/service-6"}]}');
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/sections/Services.jsx



const ServicesSection = ()=>{
    // console.log(Data.items);
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "gap service-style-one",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: services_namespaceObject.e.map((item, key)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-4 col-md-6 col-sm-12 text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "service-data",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "svg-icon d-flex-all",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "light-icon",
                                            src: item.icon.light,
                                            alt: item.icon.alt
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "dark-icon",
                                            src: item.icon.dark,
                                            alt: item.icon.alt
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.link,
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: item.text
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: item.link,
                                    className: "icon",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "fa-solid fa-angles-right"
                                    })
                                })
                            ]
                        })
                    }, `services-item-${key}`))
            })
        })
    });
};
/* harmony default export */ const Services = (ServicesSection);


/***/ }),

/***/ 1352:
/***/ (() => {



/***/ })

};
;