// REF: https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/liu-hui

function getNGonSideLength(sideLength, splitCounter) {
	if (splitCounter <= 0) {
		return sideLength;
	}

	const halfSide = sideLength / 2;
	const perpendicular = Math.sqrt((circleRadius ** 2) - (halfSide ** 2));
	const excessRadius = circleRadius - perpendicular;
	const splitSideLength = Math.sqrt((excessRadius ** 2) + (halfSide ** 2));

	return getNGonSideLength(splitSideLength, splitCounter - 1);
}

function getNGonSideCount(splitCount) {
	const hexagonSideCount = 6;

	return (hexagonSideCount * (splitCount ? 2 ** splitCount : 1));
}

export default function liuHui(splitCount) {

}
