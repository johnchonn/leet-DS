// SUBSETS

const subsets = (nums) => {
    
  const results = [];
  const subsetCount = Math.pow(2, nums.length);
  
  for (let i = 0; i < subsetCount; i++) {
      const subset = [];
      const binary = i.toString(2).padStart(nums.length, "0");
      
      for (let j = 0; j < binary.length; j++) {
          if (binary[j] === "1") {
              subset.push(nums[j]);
          }
      }
      results.push(subset);
  }
  return results;
};