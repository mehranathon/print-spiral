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
        let offSetL=0
        let counter=0
        let currentSquare=dim+2
        const centerline=Math.floor(dim/2)
        const arr=[]
        for(let i=0;i<n;i++){
            if(i%dim===0){
                row++
                counter=0
                currentSquare=currentSquare+(2*(row>centerline?1:-1))
                terminus=row<=centerline?Math.pow(currentSquare,2)+1:arr.at(-(dim-row))+1
                
                offSetL=i+(row<=centerline?row-1:dim-row-2)
                console.log("current square:",currentSquare,"terminus: ",terminus,"offset: ",offSetL)
            }
            let currentVal
            if(row<=centerline){
                if(i>offSetL&&(terminus-currentSquare+counter)<=terminus) {
                    console.log(currentSquare+counter,terminus,terminus-currentSquare+counter)
                    currentVal=terminus-currentSquare+counter
                    if(currentVal>n) currentVal=null
                }
                else {
                    currentVal=arr.at(-dim)+((terminus-currentSquare+counter)<terminus?-1:1)
                    console.log("exceeded terminus",i)
                }
                if(i>offSetL)counter++
            }
            else{
                // console.log(i,currentSquare-1-counter)
                if(i>offSetL && terminus+currentSquare-1-counter>=terminus){
                    currentVal=terminus+currentSquare-1-counter
                    counter++
                }
                else{
                    console.log("other side of offset",i)
                    currentVal=arr.at(-dim)+(terminus+currentSquare-1-counter<terminus?1:-1)
                }
                // if(i>offSetL&&currentSquare+counter<=terminus)
                // if(i>offSetL)counter--

            }

            // const currentVal=(i>offSetL&&currentSquare+counter<=terminus)?terminus-currentSquare+counter:arr.at(-dim)+(currentSquare+counter<terminus?-1:1)
            arr.push(currentVal)
            // if(i>offSetL)counter++
            // console.log(currentVal)
            // console.log("remainder",i,i%5)

        }
        const arrs=[]
        while(arr.length)arrs.push(arr.splice(0,dim))
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