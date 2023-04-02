"use strict";
(self.webpackChunkstrong_junior_project =
  self.webpackChunkstrong_junior_project || []).push([
  [757],
  {
    4757: (P, g, o) => {
      o.r(g), o.d(g, { RegistrationModule: () => s });
      var p = o(6895),
        u = o(6582),
        a = o(4006),
        c = o(2074),
        d = o(6311),
        t = o(4650),
        h = o(9653),
        Z = o(7009),
        v = o(4859),
        A = o(4144),
        l = o(9549),
        N = o(455),
        T = o(1076);
      function C(e, r) {
        1 & e &&
          (t.TgZ(0, "mat-error"), t._uU(1, " Please fill the form "), t.qZA());
      }
      function F(e, r) {
        1 & e &&
          (t.TgZ(0, "mat-error"), t._uU(1, " Please fill the form "), t.qZA());
      }
      function U(e, r) {
        1 & e &&
          (t.TgZ(0, "mat-error"), t._uU(1, " Please fill the form "), t.qZA());
      }
      function I(e, r) {
        1 & e &&
          (t.TgZ(0, "mat-error"),
          t._uU(1, " Please enter a valid email "),
          t.qZA());
      }
      function R(e, r) {
        1 & e &&
          (t.TgZ(0, "mat-error"), t._uU(1, " Please enter a avatar "), t.qZA());
      }
      function x(e, r) {
        if (
          (1 & e &&
            (t.TgZ(0, "mat-form-field")(1, "mat-label"),
            t._uU(2, "Avatar"),
            t.qZA(),
            t._UZ(3, "input", 12),
            t.YNc(4, R, 2, 0, "mat-error", 3),
            t.qZA()),
          2 & e)
        ) {
          const n = t.oxw();
          t.xp6(4), t.Q6J("ngIf", !n.registrationForm.hasError("required"));
        }
      }
      function y(e, r) {
        1 & e &&
          (t.TgZ(0, "mat-error"),
          t._uU(1, " Please enter a valid password "),
          t.qZA());
      }
      class m {
        constructor(r, n, f) {
          (this.store = r),
            (this.snackBar = n),
            (this.router = f),
            (this.customAvatar = !1);
        }
        ngOnInit() {
          this.registrationFormBuild();
        }
        changeDefaultAvatar() {
          this.customAvatar = !this.customAvatar;
        }
        registrationFormBuild() {
          this.registrationForm = new a.cw({
            firstName: new a.NI(""),
            lastName: new a.NI(""),
            avatar: new a.NI({ value: "", disabled: this.customAvatar }),
            password: new a.NI("", a.kI.minLength(8)),
            email: new a.NI("", a.kI.email),
            phoneNumber: new a.NI(""),
          });
        }
        registerUser() {
          if (
            "" !== this.registrationForm.value.firstName &&
            "" !== this.registrationForm.value.lastName &&
            "" !== this.registrationForm.value.password &&
            "" !== this.registrationForm.value.email &&
            "" !== this.registrationForm.value.phoneNumber
          ) {
            const r = Object.assign(
              { games: [], isLogged: !1 },
              this.registrationForm.value
            );
            this.store.dispatch((0, c.z2)({ user: r }));
          } else
            this.snackBar.openFromComponent(d.h, {
              duration: 3e3,
              data: { text: "Fill your form please", status: "error" },
            });
        }
      }
      (m.ɵfac = function (r) {
        return new (r || m)(t.Y36(h.yh), t.Y36(Z.ux), t.Y36(u.F0));
      }),
        (m.ɵcmp = t.Xpm({
          type: m,
          selectors: [["app-registration"]],
          decls: 39,
          vars: 10,
          consts: [
            [1, "page-container"],
            [3, "formGroup"],
            [
              "formControlName",
              "firstName",
              "type",
              "text",
              "matInput",
              "",
              "autocomplete",
              "false",
              "placeholder",
              "Dominik",
            ],
            [4, "ngIf"],
            [
              "formControlName",
              "lastName",
              "type",
              "text",
              "matInput",
              "",
              "autocomplete",
              "false",
              "placeholder",
              "Torreto",
            ],
            ["matPrefix", ""],
            [
              "formControlName",
              "phoneNumber",
              "type",
              "tel",
              "matInput",
              "",
              "autocomplete",
              "false",
              "placeholder",
              "+3809876578",
            ],
            [
              "formControlName",
              "email",
              "type",
              "email",
              "matInput",
              "",
              "autocomplete",
              "false",
              "placeholder",
              "Ex. pat@example.com",
            ],
            [
              "formControlName",
              "password",
              "type",
              "password",
              "matInput",
              "",
              "autocomplete",
              "false",
            ],
            [1, "submit-btn"],
            [3, "color", "change"],
            ["mat-raised-button", "", 3, "color", "disabled", "click"],
            [
              "formControlName",
              "avatar",
              "type",
              "text",
              "matInput",
              "",
              "autocomplete",
              "false",
              "placeholder",
              "Your Avatar",
            ],
          ],
          template: function (r, n) {
            1 & r &&
              (t.TgZ(0, "section")(1, "div", 0)(2, "h2"),
              t._uU(3, "Registration form"),
              t.qZA(),
              t.TgZ(4, "form", 1)(5, "mat-form-field")(6, "mat-label"),
              t._uU(7, "Firstname"),
              t.qZA(),
              t._UZ(8, "input", 2),
              t.YNc(9, C, 2, 0, "mat-error", 3),
              t.qZA(),
              t.TgZ(10, "mat-form-field")(11, "mat-label"),
              t._uU(12, "Lastname"),
              t.qZA(),
              t._UZ(13, "input", 4),
              t.YNc(14, F, 2, 0, "mat-error", 3),
              t.qZA(),
              t.TgZ(15, "mat-form-field")(16, "mat-label"),
              t._uU(17, "PhoneNumber"),
              t.qZA(),
              t.TgZ(18, "span", 5),
              t._uU(19, "+380 \xa0"),
              t.qZA(),
              t._UZ(20, "input", 6),
              t.YNc(21, U, 2, 0, "mat-error", 3),
              t.qZA(),
              t.TgZ(22, "mat-form-field")(23, "mat-label"),
              t._uU(24, "Email"),
              t.qZA(),
              t._UZ(25, "input", 7),
              t.YNc(26, I, 2, 0, "mat-error", 3),
              t.qZA(),
              t.YNc(27, x, 5, 1, "mat-form-field", 3),
              t.TgZ(28, "app-show-and-hide-password")(29, "mat-form-field")(
                30,
                "mat-label"
              ),
              t._uU(31, "Password"),
              t.qZA(),
              t._UZ(32, "input", 8),
              t.YNc(33, y, 2, 0, "mat-error", 3),
              t.qZA()()(),
              t.TgZ(34, "div", 9)(35, "mat-slide-toggle", 10),
              t.NdJ("change", function () {
                return n.changeDefaultAvatar();
              }),
              t._uU(36, " Custom Avatar"),
              t.qZA(),
              t.TgZ(37, "button", 11),
              t.NdJ("click", function () {
                return n.registerUser();
              }),
              t._uU(38, " Register "),
              t.qZA()()()()),
              2 & r &&
                (t.xp6(4),
                t.Q6J("formGroup", n.registrationForm),
                t.xp6(5),
                t.Q6J("ngIf", !n.registrationForm.hasError("required")),
                t.xp6(5),
                t.Q6J("ngIf", !n.registrationForm.hasError("required")),
                t.xp6(7),
                t.Q6J("ngIf", !n.registrationForm.hasError("required")),
                t.xp6(5),
                t.Q6J("ngIf", !n.registrationForm.hasError("required")),
                t.xp6(1),
                t.Q6J("ngIf", n.customAvatar),
                t.xp6(6),
                t.Q6J("ngIf", !n.registrationForm.hasError("required")),
                t.xp6(2),
                t.Q6J("color", "primary"),
                t.xp6(2),
                t.Q6J("color", "primary")(
                  "disabled",
                  n.registrationForm.invalid
                ));
          },
          dependencies: [
            p.O5,
            v.lW,
            A.Nt,
            l.KE,
            l.hX,
            l.TO,
            l.qo,
            N.Rr,
            a._Y,
            a.Fj,
            a.JJ,
            a.JL,
            a.sg,
            a.u,
            T.P,
          ],
          styles: [
            "form[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}form[_ngcontent-%COMP%]     mat-form-field{width:70%}.submit-btn[_ngcontent-%COMP%]{width:75%;display:flex;justify-content:space-around;align-items:center}",
          ],
        }));
      const J = [{ path: "", component: m }];
      class i {}
      (i.ɵfac = function (r) {
        return new (r || i)();
      }),
        (i.ɵmod = t.oAB({ type: i })),
        (i.ɵinj = t.cJS({ imports: [u.Bz.forChild(J), u.Bz] }));
      var _ = o(7430),
        q = o(7162);
      class s {}
      (s.ɵfac = function (r) {
        return new (r || s)();
      }),
        (s.ɵmod = t.oAB({ type: s })),
        (s.ɵinj = t.cJS({ imports: [p.ez, _.M, i, a.UX, q.LoginModule] }));
    },
  },
]);
