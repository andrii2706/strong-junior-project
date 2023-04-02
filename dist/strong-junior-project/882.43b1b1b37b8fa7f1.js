"use strict";
(self.webpackChunkstrong_junior_project =
  self.webpackChunkstrong_junior_project || []).push([
  [882],
  {
    2882: (j, _, i) => {
      i.r(_), i.d(_, { ProfileModule: () => l });
      var p = i(6895),
        u = i(6582),
        P = i(2722),
        x = i(7794),
        C = i(2074),
        t = i(4650),
        v = i(9653),
        T = i(629),
        Z = i(7392),
        h = i(4859),
        c = i(7274);
      class m extends x.F {
        constructor(e, n, a) {
          super(), (this.dialogRef = e), (this.data = n), (this.store = a);
        }
        confirmDeleting() {
          this.store.dispatch((0, C.Iv)({ game: this.data }));
        }
      }
      (m.ɵfac = function (e) {
        return new (e || m)(t.Y36(c.so), t.Y36(c.WI), t.Y36(v.yh));
      }),
        (m.ɵcmp = t.Xpm({
          type: m,
          selectors: [["app-confirmation-modal"]],
          features: [t.qOj],
          decls: 11,
          vars: 2,
          consts: [
            ["mat-dialog-title", ""],
            ["mat-dialog-content", ""],
            ["mat-dialog-actions", "", 1, "buttons"],
            [
              "mat-raised-button",
              "",
              "color",
              "primary",
              3,
              "mat-dialog-close",
            ],
            [
              "mat-raised-button",
              "",
              "color",
              "primary",
              3,
              "mat-dialog-close",
              "click",
            ],
          ],
          template: function (e, n) {
            1 & e &&
              (t.TgZ(0, "section")(1, "h1", 0),
              t._uU(2, "Confirmation Modal"),
              t.qZA(),
              t.TgZ(3, "div", 1)(4, "h2"),
              t._uU(5, "Are you sure you want to delete the game?"),
              t.qZA()(),
              t.TgZ(6, "div", 2)(7, "button", 3),
              t._uU(8, "Cansel"),
              t.qZA(),
              t.TgZ(9, "button", 4),
              t.NdJ("click", function () {
                return n.confirmDeleting();
              }),
              t._uU(10, "Delete"),
              t.qZA()()()),
              2 & e &&
                (t.xp6(7),
                t.Q6J("mat-dialog-close", !0),
                t.xp6(2),
                t.Q6J("mat-dialog-close", !0));
          },
          dependencies: [h.lW, c.ZT, c.uh, c.xY, c.H8],
          styles: [
            ".buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}",
          ],
        }));
      class g {
        transform(e, n = "No Info ") {
          return typeof e > "u" || null === e ? n : e;
        }
      }
      function y(o, e) {
        if (1 & o) {
          const n = t.EpF();
          t.TgZ(0, "div", 1)(1, "div"),
            t._UZ(2, "img", 2),
            t.qZA(),
            t.TgZ(3, "div")(4, "h2"),
            t._uU(5),
            t.ALo(6, "replaceNull"),
            t.qZA(),
            t.TgZ(7, "p"),
            t._uU(8),
            t.ALo(9, "replaceNull"),
            t.qZA(),
            t.TgZ(10, "p"),
            t._uU(11),
            t.ALo(12, "replaceNull"),
            t.qZA(),
            t.TgZ(13, "p"),
            t._uU(14),
            t.ALo(15, "replaceNull"),
            t.qZA(),
            t.TgZ(16, "p"),
            t._uU(17),
            t.ALo(18, "date"),
            t.qZA(),
            t.TgZ(19, "p"),
            t._uU(20),
            t.ALo(21, "replaceNull"),
            t.qZA(),
            t.TgZ(22, "div", 3)(23, "button", 4),
            t.NdJ("click", function () {
              t.CHM(n);
              const s = t.oxw();
              return t.KtG(s.goToGame(s.gameInfo.id));
            }),
            t._uU(24, "See game details"),
            t.qZA(),
            t.TgZ(25, "button", 4),
            t.NdJ("click", function () {
              t.CHM(n);
              const s = t.oxw();
              return t.KtG(s.removeGames(s.gameInfo));
            }),
            t._uU(26, "Delete Game from list"),
            t.qZA()()()();
        }
        if (2 & o) {
          const n = t.oxw();
          t.xp6(2),
            t.s9C("src", n.gameInfo.background_image, t.LSH),
            t.xp6(3),
            t.Oqu(t.lcZ(6, 9, n.gameInfo.name)),
            t.xp6(3),
            t.hij(
              "Original Name: ",
              t.lcZ(9, 11, n.gameInfo.name_original),
              ""
            ),
            t.xp6(3),
            t.hij("Metacritic: ", t.lcZ(12, 13, n.gameInfo.metacritic), ""),
            t.xp6(3),
            t.hij("Rating: ", t.lcZ(15, 15, n.gameInfo.rating), ""),
            t.xp6(3),
            t.hij("Release data: ", t.lcZ(18, 17, n.gameInfo.released), ""),
            t.xp6(3),
            t.hij("Description: ", t.lcZ(21, 19, n.gameInfo.description), ""),
            t.xp6(3),
            t.Q6J("color", "primary"),
            t.xp6(2),
            t.Q6J("color", "primary");
        }
      }
      (g.ɵfac = function (e) {
        return new (e || g)();
      }),
        (g.ɵpipe = t.Yjl({ name: "replaceNull", type: g, pure: !0 }));
      class d extends x.F {
        constructor(e, n, a) {
          super(),
            (this.router = e),
            (this.dialog = n),
            (this.activatedRoute = a);
        }
        goToGame(e) {
          this.router.navigate([`/games/${e}`], {
            relativeTo: this.activatedRoute,
          });
        }
        removeGames(e) {
          this.dialog.open(m, { width: "500px", data: e });
        }
      }
      function M(o, e) {
        if ((1 & o && t._UZ(0, "img", 7), 2 & o)) {
          const n = t.oxw(2);
          t.Q6J("src", n.userInfo.avatar, t.LSH);
        }
      }
      function O(o, e) {
        1 & o && (t.TgZ(0, "mat-icon"), t._uU(1, "account_circle"), t.qZA());
      }
      function I(o, e) {
        if (
          (1 & o &&
            (t.TgZ(0, "div"), t._UZ(1, "app-game-wishlist", 9), t.qZA()),
          2 & o)
        ) {
          const n = e.$implicit;
          t.xp6(1), t.Q6J("gameInfo", n);
        }
      }
      function A(o, e) {
        if (
          (1 & o &&
            (t.TgZ(0, "div")(1, "h2"),
            t._uU(2, "User List of Games"),
            t.qZA(),
            t.YNc(3, I, 2, 1, "div", 8),
            t.qZA()),
          2 & o)
        ) {
          const n = t.oxw(2);
          t.xp6(3), t.Q6J("ngForOf", n.userInfo.games);
        }
      }
      function w(o, e) {
        if (1 & o) {
          const n = t.EpF();
          t.TgZ(0, "div")(1, "h2"),
            t._uU(2, "Chose your game "),
            t.qZA(),
            t.TgZ(3, "button", 2),
            t.NdJ("click", function () {
              t.CHM(n);
              const s = t.oxw(2);
              return t.KtG(s.redirectToGames());
            }),
            t._uU(4, "Games"),
            t.qZA()();
        }
        2 & o && (t.xp6(3), t.Q6J("color", "primary"));
      }
      function U(o, e) {
        if (1 & o) {
          const n = t.EpF();
          t.TgZ(0, "section")(1, "div")(2, "div", 1)(3, "button", 2),
            t.NdJ("click", function () {
              t.CHM(n);
              const s = t.oxw();
              return t.KtG(s.logOut());
            }),
            t._uU(4, "Log Out"),
            t.qZA()(),
            t.TgZ(5, "div", 3)(6, "div")(7, "h2"),
            t._uU(8),
            t.qZA(),
            t.TgZ(9, "p"),
            t._uU(10),
            t.qZA(),
            t.TgZ(11, "p"),
            t._uU(12),
            t.qZA()(),
            t.TgZ(13, "div", 4),
            t.YNc(14, M, 1, 1, "img", 5),
            t.YNc(15, O, 2, 0, "mat-icon", 0),
            t.qZA()(),
            t.TgZ(16, "div", 6),
            t.YNc(17, A, 4, 1, "div", 0),
            t.YNc(18, w, 5, 1, "div", 0),
            t.qZA()()();
        }
        if (2 & o) {
          const n = t.oxw();
          t.xp6(3),
            t.Q6J("color", "primary"),
            t.xp6(5),
            t.AsE("", n.userInfo.firstName, " ", n.userInfo.lastName, ""),
            t.xp6(2),
            t.Oqu(n.userInfo.email),
            t.xp6(2),
            t.Oqu(n.userInfo.phoneNumber),
            t.xp6(2),
            t.Q6J("ngIf", n.userInfo.avatar),
            t.xp6(1),
            t.Q6J("ngIf", !n.userInfo.avatar),
            t.xp6(2),
            t.Q6J("ngIf", n.userInfo.games.length > 0),
            t.xp6(1),
            t.Q6J("ngIf", 0 === n.userInfo.games.length);
        }
      }
      (d.ɵfac = function (e) {
        return new (e || d)(t.Y36(u.F0), t.Y36(c.uw), t.Y36(u.gz));
      }),
        (d.ɵcmp = t.Xpm({
          type: d,
          selectors: [["app-game-wishlist"]],
          inputs: { gameInfo: "gameInfo" },
          features: [t.qOj],
          decls: 2,
          vars: 1,
          consts: [
            ["class", "game-wishListCard", 4, "ngIf"],
            [1, "game-wishListCard"],
            ["alt", "", 1, "img-card", 3, "src"],
            [1, "buttons"],
            ["mat-raised-button", "", 3, "color", "click"],
          ],
          template: function (e, n) {
            1 & e &&
              (t.TgZ(0, "section"), t.YNc(1, y, 27, 21, "div", 0), t.qZA()),
              2 & e && (t.xp6(1), t.Q6J("ngIf", n.gameInfo));
          },
          dependencies: [p.O5, h.lW, p.uU, g],
          styles: [
            ".game-wishListCard[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.game-wishListCard[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]{width:400px;height:250px;border-radius:10px}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-of-type(2){margin-left:10px}",
          ],
        }));
      class f extends x.F {
        constructor(e, n, a) {
          super(), (this.store = e), (this.authService = n), (this.router = a);
        }
        ngOnInit() {
          this.store.pipe((0, P.R)(this.destroy$)).subscribe((e) => {
            (this.userInfo = e.auth.user), (this.isLoading = !1);
          });
        }
        redirectToGames() {
          this.router.navigateByUrl("games");
        }
        logOut() {
          this.authService.setLoginStatus(!1),
            this.store.dispatch((0, C.kS)({ user: null })),
            this.router.navigateByUrl("");
        }
      }
      (f.ɵfac = function (e) {
        return new (e || f)(t.Y36(v.yh), t.Y36(T.e), t.Y36(u.F0));
      }),
        (f.ɵcmp = t.Xpm({
          type: f,
          selectors: [["app-profile"]],
          features: [t.qOj],
          decls: 1,
          vars: 1,
          consts: [
            [4, "ngIf"],
            [1, "profile-navigation"],
            ["mat-raised-button", "", 3, "color", "click"],
            [1, "user-info"],
            [1, "avatar"],
            ["alt", "avatar", 3, "src", 4, "ngIf"],
            [1, "wishList"],
            ["alt", "avatar", 3, "src"],
            [4, "ngFor", "ngForOf"],
            [3, "gameInfo"],
          ],
          template: function (e, n) {
            1 & e && t.YNc(0, U, 19, 9, "section", 0),
              2 & e && t.Q6J("ngIf", !!n.userInfo);
          },
          dependencies: [p.sg, p.O5, Z.Hw, h.lW, d],
          styles: [
            "section[_ngcontent-%COMP%]{min-height:80vh}.user-info[_ngcontent-%COMP%]{width:100%;display:flex;background:#C4C4C4;color:#1d1d1e;margin-top:20px;padding:20px;justify-content:space-between;align-items:center;border-radius:10px;box-shadow:4px 3px 7px 7px #0d0d16a1}.user-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{font-size:15px}.user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-end;flex-direction:column}.user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:40rem;height:550px;border-radius:10px}.user-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] > mat-icon[_ngcontent-%COMP%]{width:60px;height:60px}.default-avatar[_ngcontent-%COMP%]{width:200px!important;height:200px!important}.wishList[_ngcontent-%COMP%]{width:100%;margin-top:20px;display:flex;justify-content:center;align-items:center;background:#C4C4C4;padding:20px;border-radius:10px;box-shadow:4px 3px 7px 7px #0d0d16a1}.wishList[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}.wishList[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#8a2be2}.profile-navigation[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.profile-navigation[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-right:10px}",
          ],
        }));
      const b = [{ path: "", component: f }];
      class r {}
      (r.ɵfac = function (e) {
        return new (e || r)();
      }),
        (r.ɵmod = t.oAB({ type: r })),
        (r.ɵinj = t.cJS({ imports: [u.Bz.forChild(b), u.Bz] }));
      var N = i(4466);
      class l {}
      (l.ɵfac = function (e) {
        return new (e || l)();
      }),
        (l.ɵmod = t.oAB({ type: l })),
        (l.ɵinj = t.cJS({ imports: [p.ez, r, Z.Ps, h.ot, N.m] }));
    },
  },
]);
