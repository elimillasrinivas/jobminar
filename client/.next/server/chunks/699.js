"use strict";
exports.id = 699;
exports.ids = [699];
exports.modules = {

/***/ 9925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _library_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3265);



const PaginationPage = ({ items  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "blog-post",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "blog-image",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: item.image,
                                        alt: item.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/blog/${item.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa-solid fa-angles-right"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "blog-data",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "blog-date",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_library_date__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        dateString: item.date
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: `/blog/${item.id}`,
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "blog-author d-flex-all justify-content-start",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "author-img",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: item.author.avatar,
                                                    alt: item.author.name
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "details",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
            }, `post-${index}`))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationPage);


/***/ }),

/***/ 520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Pagination),
  "D": () => (/* binding */ dotts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/lib/usePagination.js

const getPages = (length, inc = 1)=>Array.from({
        length
    }, (_, i)=>i + inc);
function usePagination(totalItems, currentPage, itemsPerPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    // -> 1 2 3 4 5
    if (totalPages <= 5) {
        return getPages(totalPages);
    }
    // -> 1 2 3 4 ... 10
    if (currentPage <= 3) {
        return [
            1,
            2,
            3,
            4,
            dotts,
            totalPages
        ];
    }
    // -> 1 ... 4 5 6 ... 10
    if (currentPage < totalPages - 2) {
        return [
            1,
            dotts,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            dotts,
            totalPages
        ];
    }
    // -> 1 ... 7 8 9 10
    return [
        1,
        dotts,
        ...getPages(4, totalPages - 3)
    ];
}

;// CONCATENATED MODULE: ./src/components/Pagination.jsx



const dotts = "...";
const Pagination = ({ currentPage , totalItems , perPage , renderPageLink  })=>{
    const pages = usePagination(totalItems, currentPage, perPage);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "builty-pagination",
        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
            "aria-label": "Page navigation example",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                className: "pagination",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: currentPage > 1 ? renderPageLink(currentPage - 1) : renderPageLink(currentPage),
                            className: "page-link",
                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "fa-solid fa-arrow-left-long"
                            })
                        })
                    }, "pagination-item-prev"),
                    pages.map((pageNumber, i)=>pageNumber === dotts ? /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "page-item space",
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                className: "page-link",
                                children: pageNumber
                            }, i)
                        }, `pagination-item-${i}`) : /*#__PURE__*/ jsx_runtime.jsx("li", {
                            className: "page-item",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: renderPageLink(pageNumber),
                                className: `${pageNumber === currentPage ? "active" : ""} page-link`,
                                children: pageNumber
                            })
                        }, `pagination-item-${i}`)),
                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                        className: "page-item",
                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: currentPage < pages.length ? renderPageLink(currentPage + 1) : renderPageLink(currentPage),
                            className: "page-link",
                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                className: "fa-solid fa-arrow-right-long"
                            })
                        })
                    }, "pagination-item-next")
                ]
            })
        })
    });
};
/* harmony default export */ const components_Pagination = (Pagination);


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

/***/ 6699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PER_PAGE": () => (/* binding */ PER_PAGE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_PaginatedBlog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9925);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(520);
/* harmony import */ var _components_PageBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(163);
/* harmony import */ var _layouts_Layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4261);
/* harmony import */ var _library_posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(745);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_library_posts__WEBPACK_IMPORTED_MODULE_5__]);
_library_posts__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const PER_PAGE = 9;
const Blog = ({ posts , currentPage , totalPosts  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Layouts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PageBanner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                pageTitle: "Our Blog",
                pageDesc: "our values and vaulted us to the top of our industry."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "gap blog-style-one our-blog-one",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginatedBlog__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                items: posts
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                currentPage: currentPage,
                                totalItems: totalPosts,
                                perPage: PER_PAGE,
                                renderPageLink: (page)=>`/blog/page/${page}`
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);
async function getStaticPaths() {
    return {
        paths: Array.from({
            length: 5
        }).map((_, i)=>`/blog/page/${i + 2}`),
        fallback: "blocking"
    };
}
async function getStaticProps({ params  }) {
    const page = Number(params?.page) || 1;
    const { posts , total  } = (0,_library_posts__WEBPACK_IMPORTED_MODULE_5__/* .getPaginatedPostsData */ .hM)(PER_PAGE, page);
    if (!posts.length) {
        return {
            notFound: true
        };
    }
    if (page === 1) {
        return {
            redirect: {
                destination: "/blog",
                permanent: false
            }
        };
    }
    return {
        props: {
            posts,
            totalPosts: total,
            currentPage: page
        },
        revalidate: 60 * 60 * 24
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;