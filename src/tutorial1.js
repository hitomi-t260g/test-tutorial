/**
 * 底辺と高さを引数として受け取り、三角形の面積を戻り値として返す関数を書く
 * 小数点とか整数とかの指定はしない
 * 三角形としてありえない負値ははじく
 * 大きすぎて処理が丸められてしまうBigNumberははじく
 * @param  {Number} bottom, height
 * @return {Number} area:三角形の面積
 */
const triangleArea = (bottom, height) => {
  if (bottom < 0 || height < 0) {
    return "負値は適用外です";
  } else if (bottom > 9_007_199_254_740_990 || height > 9_007_199_254_740_990) {
    return "値が大きすぎます";
  } else {
    const area = (bottom * height) / 2;
    return area;
  }
};

module.exports = { triangleArea };
