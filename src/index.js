
module.exports = towelSort = matrix => matrix ? matrix.flatMap((el, i) => i % 2 === 0 ? el : el.reverse()) : [];
