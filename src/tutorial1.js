/**
 * 底辺と高さを引数として受け取り、三角形の面積を戻り値として返す関数を書く
 * 小数点とか整数とかの指定はしない
 * 三角形としてありえない負値ははじく
 * 同じく三角形としてありえない0値ははじく
 * 大きすぎて処理が丸められてしまうBigNumberははじく
 * @param  {Number} bottom, height
 * @return {Number} area:三角形の面積
 */
const triangleArea = (bottom, height) => {
  try {
    // 適用外のものはthrow new Errorにて、エラーメッセージを投げる
    if (bottom < 0 || height < 0) {
      throw new Error("負値は適用外です");
    }
    if (bottom > 9_007_199_254_740_990 || height > 9_007_199_254_740_990) {
      throw new Error("値が大きすぎます");
    }
    if (bottom === 0 || height === 0) {
      throw new Error("三角形の底辺と高さは0を超える値を入力してください");
    }

    const area = (bottom * height) / 2;
    return area;
  } catch (error) {
    return error.message;
  }
};

module.exports = { triangleArea };
