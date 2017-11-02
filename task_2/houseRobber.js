function houseRobber(nums) {

        var max = nums[0];

        var index=0


        for (i = 1; i < nums.length; ++i) {
          if (nums[i] > max) max = nums[i], index=i;

        }

        var max2 = nums[0];
            for (i = 1; i < nums.length; ++i) {

          if (nums[i] > max2 && max2 <= max) {

              if (i == index || i == index-1 || i == index+1) {

                  } else {

                      max2 = nums[i]

                      }

              }

        }

        return max+max2


}
