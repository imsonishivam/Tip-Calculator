/*
var tip_cal = {
    bill: [124,48,268,180,42],
    tip_calculate : function(amount)
    {
        if(amount<50)
        {
            return amount*0.2;
        }
        else if(amount>=50 && amount<200)
        {
            return amount*0.15;
        }
        else{
            return amount*0.1;
        }
    }
};  
var tip = [];
for(var i=0;i<5;i++)
{
    tip[i] = tip_cal.tip_calculate(tip_cal.bill[i]);
}
for(var i=0;i<5;i++)
{
    console.log(tip[i]+" ");
}
var totalBill = [];
for(var i=0;i<5;i++)
{
    totalBill[i] = tip_cal.bill[i] + tip[i];
}
for(var i=0;i<5;i++)
{
    console.log(totalBill[i]+" ");
}
*/


/*
var tipMember = {
    fullName : "John Smith",
    bill : [124,48,268,180,42],
    tipCalculator : function(amount)
    {
        if(amount<50)
        {
            return amount*0.2;
        }
        else if(amount>=50 && amount<200)
        {
            return amount*0.15;
        }
        else{
            return amount*0.1;
        }
    },
    tips:[],
    totalAmount:[]
}

for(var i=0;i<5;i++)
{
    tipMember.tips[i] = tipMember.tipCalculator(tipMember.bill[i]);
}
for(var i=0;i<5;i++)
{
    console.log(tipMember.tips[i]);
}
for(var i=0;i<5;i++)
{
    tipMember.totalAmount[i] = tipMember.bill[i] + tipMember.tips[i];
}
for(var i=0;i<5;i++)
{
    console.log(tipMember.totalAmount[i]);
}
*/
                            //final code
var john = {
    fullName : "John Smith",
    bill : [124,48,268,180,42],
    tipCalculator : function()
    {
        this.totalAmount = [];
        this.tips = [];
        for(var i=0;i<this.bill.length;i++)
        {
            var percentage;
            if(this.bill[i]<50)
            {
                percentage = 0.2;
            }
            else if(this.bill[i]>=50 && this.bill[i]<200)
            {
                percentage = 0.15;
            }
            else{
                percentage = 0.1;
            }
            this.tips[i] = this.bill[i]*percentage;
            this.totalAmount[i] = this.bill[i] +this.tips[i];
        }
        var add=0;
        for(var i=0;i<this.bill.length;i++)
        {
            add = add + this.tips[i];
        }
        var avg = add/this.bill.length;
    }
};

var mark = {
    fullName : "Mark Smith",
    bills : [77,375,110,45],
    tipCalculator : function()
    {
        this.tips = [];
        this.totalAmount =[];
        var percentage;
        for(var i=0;i<this.bills.length;i++)
        {
            if(this.bills[i]<100)
            {
                percentage = 0.2;
            }
            else if(this.bills[i]>=100 && this.bills[i]<300)
            {
                percentage = 0.1;
            }
            else{
                percentage = 0.25;
            }
            this.tips[i] = this.bills[i]*percentage;
            this.totalAmount[i] = this.bills[i] + this.tips[i];
        }
    }
}
function calAvr(tips)
{
    var sum=0;
    for(var i=0;i<tips.length;i++)
    {
        sum += tips[i];
    }
    return sum/tips.length;
}

john.tipCalculator();
mark.tipCalculator();
john.avgrage = calAvr(john.tips);
mark.avgrage = calAvr(mark.tips);
console.log(john);
console.log(mark);
if(john.avgrage > mark.avgrage)
{
    console.log(john.fullName+" family paid the highest tips of average and avg. tips is "+john.avgrage);
}
else if(john.avgrage < mark.avgrage)
{
    console.log(mark.fullName+" family paid the highest tips of average and avg. tips is "+mark.avgrage);
}
else 
{
    console.log("Both are paid same tip");
}
