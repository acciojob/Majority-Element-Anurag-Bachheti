let nums = [1,2,3,4,2,4,1,3,2];

function countMax(nums){
	let maxCount = 0;
	let times = [];
	let maxNum = null;

	for(let num of nums){
		times[num] = (times[num] || 0)+1;

		if(times[num] > maxCount){
			times[num] = maxCount;
			maxNum = num;
		}
	}
	
	console.log(finalCount);
}
countMax(nums);