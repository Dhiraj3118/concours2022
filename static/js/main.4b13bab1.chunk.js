(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    39: function (e) {
      e.exports = JSON.parse('{"a":2022}');
    },
    45: function (e, a, t) {
      e.exports = t(86);
    },
    81: function (e, a, t) {},
    85: function (e, a, t) {},
    86: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        l = t.n(n),
        r = t(6),
        o = t.n(r),
        c = t(19),
        s = t.n(c),
        i = t(33),
        u = t(34),
        m = t(44),
        b = t(4),
        p = t(7),
        d = t(38),
        f = t.n(d),
        y = t(14),
        g = t(39),
        v = t(43),
        h = Object(n.createContext)(0),
        w = function (e) {
          var a = e.options,
            t = e.field,
            r = e.form,
            o = e.multi,
            c = Object(n.useContext)(h).setTotal;
          return l.a.createElement(v.a, {
            isMulti: o,
            options: a,
            name: t.name,
            value: a
              ? a.find(function (e) {
                  return e.value === t.value;
                })
              : "",
            onChange: function (e) {
              if (e)
                if (o) {
                  r.setFieldValue(t.name, e);
                  var a = e.reduce(function (e, a) {
                    return e + a.cost;
                  }, 0);
                  c(a);
                } else r.setFieldValue(t.name, e.value);
            },
            onBlur: t.onBlur,
            className: "w-full",
          });
        };
      t(80), t(81);
      function E(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          a &&
            (n = n.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function B(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? E(t, !0).forEach(function (a) {
                Object(i.a)(e, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(t).forEach(function (a) {
                Object.defineProperty(
                  e,
                  a,
                  Object.getOwnPropertyDescriptor(t, a)
                );
              });
        }
        return e;
      }
      y.a.configure();
      var N = [
          { label: "Badminton(Boys)", value: "Badminton(Boys)", cost: 1800 },
          { label: "Badminton(Girls)", value: "Badminton(Girls)", cost: 1200 },
          { label: "Basketball(Boys)", value: "Basketball(Boys)", cost: 1600 },
          {
            label: "Basketball(Girls)",
            value: "Basketball(Girls)",
            cost: 1200,
          },
          { label: "Chess", value: "Chess", cost: 1200 },
          { label: "Carrom", value: "Carrom", cost: 1200 },
          { label: "Cricket(Boys)", value: "Cricket(Boys)", cost: 4e3 },
          { label: "Cricket(Girls)", value: "Cricket(Girls)", cost: 1200 },
          { label: "Volleyball(Boys)", value: "Volleyball(Boys)", cost: 1800 },
          {
            label: "Volleyball(Girls)",
            value: "Volleyball(Girls)",
            cost: 1200,
          },
          { label: "Football(Boys)", value: "Football(Boys)", cost: 2800 },
          { label: "Football(Girls)", value: "Football(Girls)", cost: 1400 },
          {
            label: "Table Tennis(Boys)",
            value: "Table Tennis(Boys)",
            cost: 1800,
          },
          {
            label: "Table Tennis(Girls)",
            value: "Table Tennis(Girls)",
            cost: 1200,
          },
          {
            label: "Lawn Tennis(Boys)",
            value: "Lawn Tennis(Boys)",
            cost: 1600,
          },
          {
            label: "Lawn Tennis(Girls)",
            value: "Lawn Tennis(Girls)",
            cost: 1200,
          },
        ],
        x = [
          { label: "Cash", value: "Cash" },
          { label: "Bank Transfer", value: "Bank Transfer" },
        ];
      function O(e) {
        13 === (e.charCode || e.keyCode) && e.preventDefault();
      }
      var C = function () {
        var e = Object(n.useState)(0),
          a = Object(m.a)(e, 2),
          t = a[0],
          r = a[1];
        return l.a.createElement(
          p.Grid,
          { fluid: !0, className: "App" },
          l.a.createElement("br", null),
          l.a.createElement(
            "span",
            { className: "text-5xl font-bold" },
            "Concours Registration ",
            g.a
          ),
          l.a.createElement(
            h.Provider,
            { value: { total: t, setTotal: r } },
            l.a.createElement(b.d, {
              initialValues: {
                name: "",
                collegeName: "",
                contactNo: "",
                email: "",
                accommodation: 0,
                prefPayment: "",
                sports: [],
              },
              onSubmit: (function () {
                var e = Object(u.a)(
                  s.a.mark(function e(a, n) {
                    var l;
                    return s.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (l = B({}, a, { totalCost: t })),
                              (e.next = 3),
                              f()({
                                method: "post",
                                url: "".concat(
                                  "http://134.209.96.118:5000",
                                  "/register"
                                ),
                                data: l,
                              })
                                .then(function (e) {
                                  return y.a.success("Successfully Registered");
                                })
                                .catch(function (e) {
                                  return y.a.error(
                                    "Something went wrong. Please try again."
                                  );
                                })
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (a, t) {
                  return e.apply(this, arguments);
                };
              })(),
              render: function (e) {
                e.errors, e.status, e.touched, e.isSubmitting;
                return l.a.createElement(
                  b.c,
                  { style: { textAlign: "left", fontSize: 20 }, onKeyDown: O },
                  l.a.createElement(
                    p.Row,
                    { className: "m-5" },
                    l.a.createElement(
                      "label",
                      null,
                      "Name (contingent leader/captain of team)"
                    ),
                    l.a.createElement(b.b, {
                      type: "text",
                      name: "name",
                      className:
                        "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                      required: !0,
                    }),
                    l.a.createElement(b.a, { name: "name", component: "div" })
                  ),
                  l.a.createElement(
                    p.Row,
                    { className: "m-5" },
                    l.a.createElement("label", null, "College Name"),
                    l.a.createElement(b.b, {
                      type: "text",
                      name: "collegeName",
                      className:
                        "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                      required: !0,
                    }),
                    l.a.createElement(b.a, {
                      name: "collegeName",
                      component: "div",
                    })
                  ),
                  l.a.createElement(
                    p.Row,
                    { className: "m-5" },
                    l.a.createElement("label", null, "Contact No."),
                    l.a.createElement(b.b, {
                      type: "number",
                      name: "contactNo",
                      className:
                        "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                      required: !0,
                    }),
                    l.a.createElement(b.a, {
                      name: "contactNo",
                      component: "div",
                    })
                  ),
                  l.a.createElement(
                    p.Row,
                    { className: "m-5" },
                    l.a.createElement("label", null, "Email"),
                    l.a.createElement(b.b, {
                      type: "email",
                      name: "email",
                      className:
                        "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                      required: !0,
                    }),
                    l.a.createElement(b.a, { name: "email", component: "div" })
                  ),
                  l.a.createElement(
                    p.Row,
                    { className: "m-5" },
                    l.a.createElement(
                      "label",
                      { htmlFor: "accommodation" },
                      "Accommodation (leave blank if not needed)"
                    ),
                    l.a.createElement(b.b, {
                      type: "number",
                      name: "accommodation",
                      className:
                        "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
                      required: !0,
                    })
                  ),
                  l.a.createElement(
                    p.Row,
                    { className: "m-5" },
                    l.a.createElement("label", { htmlFor: "sports" }, "Sports"),
                    l.a.createElement(b.b, {
                      name: "sports",
                      component: w,
                      options: N,
                      multi: !0,
                      required: !0,
                    })
                  ),
                  l.a.createElement(
                    p.Row,
                    { className: "m-5" },
                    l.a.createElement(
                      "label",
                      { htmlFor: "prefPayment" },
                      "Preferred Payment Method"
                    ),
                    l.a.createElement(
                      b.b,
                      {
                        type: "select",
                        component: w,
                        options: x,
                        name: "prefPayment",
                        multi: !1,
                        required: !0,
                      },
                      l.a.createElement("option", { value: "Cash" }, "Cash"),
                      l.a.createElement(
                        "option",
                        { value: "Bank Transfer" },
                        "Bank Transfer"
                      )
                    )
                  ),
                  l.a.createElement(
                    p.Row,
                    { className: "m-5" },
                    l.a.createElement(
                      "button",
                      {
                        className:
                          "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",
                        type: "submit",
                      },
                      "Submit"
                    ),
                    l.a.createElement(
                      "div",
                      { style: { marginLeft: 50, marginTop: 10 } },
                      "Total Payment for Registration: ",
                      t
                    )
                  )
                );
              },
            })
          ),
          l.a.createElement("br", null)
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      t(84), t(85);
      o.a.render(l.a.createElement(C, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
  },
  [[45, 1, 2]],
]);
//# sourceMappingURL=main.4b13bab1.chunk.js.map
