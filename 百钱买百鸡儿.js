/**
 * @time  2018/12/30 14:52
 * @author  Bill Wang <vuejs@vip.qq.com>
 * @desc
 *   百钱买百鸡的问题算是一套非常经典的不定方程的问题，
 *   题目很简单：公鸡5文钱一只，母鸡3文钱一只，小鸡3只一文钱，
 *   用100文钱买一百只鸡,其中公鸡，母鸡，小鸡都必须要有，
 *   问公鸡，母鸡，小鸡要买多少只刚好凑足100文钱。
 */

class Buy {
    constructor(){
        //公鸡
        this.cock = 0;
        //母鸡
        this.hen = 0;
        //小鸡
        this.chicken = 0;
    }

    calculate(){
        for (this.cock = 1;this.cock<20;this.cock++ ) {
            for(this.hen = 1;this.hen< 33;this.hen++) {
                this.chicken = 100 -this.cock-this.hen;
                if((this.chicken%3 === 0)&&(this.cock * 5 +this.hen * 3 + this.chicken/3 ===100)) {
                    console.log(this.cock+'--'+ this.hen+'--'+this.chicken );
                }
            }
        }
    }
}

new Buy().calculate();