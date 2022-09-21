/**
 * 底辺と高さを引数として受け取り、三角形の面積を戻り値として返す関数を書く
 * 小数点とか整数とかの指定はしない
 * @param  {Number} bottom, height
 * @return {Number} area:三角形の面積
 */
const trianglArea = (bottom, height) => {
  const area = (bottom * height) / 2;
  return area;
};

module.exports = { trianglArea };
