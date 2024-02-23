// console.log("hello world")

// console.log(encodeURIComponent("#"))
// console.log(encodeURIComponent("@"))
// console.log(encodeURIComponent("!@#$%^&(){}[]`~"))
// console.log(encodeURI("!@#$%^&(){}[]`~"))




// const arr=["!","@","#","$","%","^","&","(",")","{","}","[","]","`","~"]

// arr.forEach(char=>{
//     console.log(encodeURI(char))

//     // console.log(`specialChars.put("${encodeURIComponent(char)}","${char}");`)
// })

// const obj={str:""}
// console.log(obj.str?"yes":"no") 


// async function func(){
//     await setTimeout(()=>{},500)
    
// }


// const arr1=[1,2,3,4]
// const arr2=[4,5,6]

// console.log(arr1,arr2)

// console.log([1,2,3,4].some(elem=>arr2.includes(elem)))


// const arr=[...Array(100).keys()].map(ind=>Math.log(ind+1))

// console.log(arr)
// console.log(arr.findIndex(item=>item>4.5))

// let n=25

const spiral=(n)=>{
    const nums=Array.from(Array(n).keys()).map(i=>i+1)
    const dim = Math.ceil(Math.sqrt(n))
    const center=Math.floor(n/2)
    const onePos = Math.floor(n/2)
    const offSet = n%2?0:1
    const buildSequence=()=>{
        //it proceeds diagonally in odd perfect squares
        let terminus
        let row=-1
        let prevVal=nums.at(-dim-1)
        let offSetL=0
        let counter=0
        let currentSquare
        console.log("currentInd",prevVal)
        const arr=[]
        for(let i=0;i<n;i++){
            if(i%dim===0){
                row++
                counter=0
                currentSquare=dim-(2*row)
                terminus=Math.pow(currentSquare,2)+1
                console.log("current square:",currentSquare,"terminus: ",terminus)
                offSetL=i+i/dim-1
            }
            console.log("offSet",i,offSetL)
            const currentVal=(i>offSetL&&currentSquare+counter<=terminus)?terminus-currentSquare+counter:arr.at(-dim)+(currentSquare+counter<terminus?-1:1)
            arr.push(currentVal)
            prevVal=currentVal
            if(i>offSetL)counter++
            // console.log(currentVal)
            // console.log("remainder",i,i%5)

        }
        const arrs=[]
        while(arr.length)arrs.push(arr.splice(0,5))
        console.log(arrs)
    }
    buildSequence()
    const print=()=>console.log(n)
    return{
        nums,
        dim,
        center,
        onePos,
        print,
        buildSequence
    }

}

const test=spiral(25)
test.print()
// test.buildSequence()
// console.log(test.buildSequence)
console.log(test.nums[test.center])
// console.log(newSpiral.printSpiral())

// const closure=(x)=>enclosed=(y)=>(y+x)

// console.log(closure(1)(2))