function isPrime(num)
{
    var flag = true;
    for(var i=2; i<=Math.ceil(num/2); i++)
    {
        if((num%i)==0)
        {
            flag = false;
            break;
        }
    }
    return flag;    
}

var n=2,m=500;
while(n<=m)
{
if(isPrime(n))
console.log(n);
n+=1;
}