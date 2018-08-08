define(function() {
    var box = document.getElementsByClassName(".box")[0];
    var lis = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
    var nums = document.getElementsByTagName("ol")[0].getElementsByTagName("li");
    var left = document.getElementsByClassName("left")[0];
    var right = document.getElementsByClassName("right")[0];
    var id = 0;
    var timer = null;

    // function auto() {
    //     timer = setInterval(function() {
    //         id++;
    //         if (id > lis.length - 1) {
    //             id = 0;
    //         }
    //         for (var i = 0; i < lis.length; i++) {
    //             lis[i].style.display = "none"
    //             nums[i].id = "block";
    //             nums[i].classList.remove('bg');
    //         }
    //         lis[id].style.display = "block"
    //         nums[id].classList.add('bg');
    //     }, 1000)
    // }
    // auto()
    // box.onmouseover = function() {
    //     clearInterval(timer)
    // }
    // box.onmouseout = function() {
    //     auto()
    // }
    for (var j = 0; j < nums.length; j++) {
        nums[j].index = j;
        nums[j].onclick = function() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.display = "none"
                nums[i].id = "block";
                nums[i].classList.remove('bg');

            }
            lis[this.index].style.display = "block"
            this.classList.add('bg')
            id = this.index
        }
    }
    left.onclick = function() {
        id--;
        if (id < 0) {
            id = lis.length - 1;
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.display = "none"
            nums[i].id = "block";
            nums[i].classList.remove('bg');

        }
        lis[id].style.display = "block"
        nums[id].classList.add('bg')
    }
    right.onclick = function() {
        id++;
        if (id > lis.length - 1) {
            id = 0
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.display = "none"
            nums[i].id = "block";
            nums[i].classList.remove('bg');
        }
        lis[id].style.display = "block"
        nums[id].classList.add('bg')
    }
})