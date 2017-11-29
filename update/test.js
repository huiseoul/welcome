var assert = require("assert");
var update = require("./");

describe("update", () => {
  describe("has a #$set method that", () => {
    var state;
    var commands;
    var nextState;
    beforeEach(() => {
      state = {
        a: {
          b: 22,
          c: 33
        },
        unChanged: {}
      };
      commands = { a: { c: { $set: 44 } } };
      nextState = update(state, commands);
    });

    it("changes the tree on the directive", () => {
      assert(state.a.c !== nextState.a.c);
    });

    it("reuses state on different branches", () => {
      assert(state.unChanged === nextState.unChanged);
    });

    it("reuses state on same level", () => {
      assert(state.a.b === state.a.b);
    });
  });

  describe("can pass react's test suite", () => {
    it("should support push", () => {
      assert.deepEqual(update([1], { $push: [7] }), [1, 7]);
    });

    it("should support unshift", () => {
      assert.deepEqual(update([1], { $unshift: [7] }), [7, 1]);
    });

    it("should support splice", () => {
      assert.deepEqual(update([1, 4, 3], { $splice: [[1, 1, 2]] }), [1, 2, 3]);
    });

    it("should support merge", () => {
      assert.deepEqual(update({ a: "b" }, { $merge: { c: "d" } }), {
        a: "b",
        c: "d"
      });
    });

    it("should support set", () => {
      assert.deepEqual(update({ a: "b" }, { $set: { c: "d" } }), { c: "d" });
    });

    it("should support apply", () => {
      assert.equal(
        update(2, {
          $apply: function(x) {
            return x * 2;
          }
        }),
        4
      );
    });

    it("should support deep updates", () => {
      assert.deepEqual(
        update({ a: "b", c: { d: "e" } }, { c: { d: { $set: "f" } } }),
        {
          a: "b",
          c: { d: "f" }
        }
      );
    });

    it("should perform safe hasOwnProperty check", () => {
      assert.deepEqual(update({}, { hasOwnProperty: { $set: "a" } }), {
        hasOwnProperty: "a"
      });
    });
  });
});
