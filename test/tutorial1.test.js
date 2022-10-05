const expect = require("chai").expect;
const triangleArea = require("../src/tutorial1").triangleArea;

describe("三角形の面積が計算されているかを確認する", function () {
  it("境界値を入力した場合:1,1", function () {
    expect(triangleArea(1, 1)).to.equal(0.5, "面積は0.5");
  });

  it("代表的な値を入力した場合:3,4", function () {
    expect(triangleArea(3, 4)).to.equal(6, "面積は6");
  });

  it("大きな値MAX_SAFE_INTEGERを入力した場合(処理不可のため適用外）", function () {
    expect(triangleArea(9_007_199_254_740_991, 9_007_199_254_740_991)).to.equal(
      "値が大きすぎます",
      "BigNumberはうまく処理できないため面積は4503599627370495とならない"
    );
  });

  it("小数点第一位を入力した場合:0.4,0.3", function () {
    expect(triangleArea(0.4, 0.3)).to.equal(0.06, "面積は0.06");
  });

  it("負値を入力した場合:-1,1(適用外)", function () {
    expect(triangleArea(-1, 1)).to.equal(
      "負値は適用外です",
      "負値が三角にはないため適用外"
    );
  });
});
