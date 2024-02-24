
/*
script to generate a counter-clockwise spiral of numbers with 1 at the center.

e.g.

21	22	23	24	25
20	7	8	9	10
19	6	1	2	11
18	5	4	3	12
17	16	15	14	13

*/ 


const spiral=(n)=>{
    const dim = Math.ceil(Math.sqrt(n))
    //sequence is a one-dimensional array representing a square grid with dimensions dim x dim indexed increasing left to right
    const sequence=[]
    const buildSequence=()=>{
        let terminus
        let row=-1
        let offSetL=0
        let counter=0
        //currentSquare refers to root of perfect squares, which extend diagonally upward from the center: 3,5,7,... 
        let currentSquare=dim+2
        const centerline=Math.floor(dim/2)

        let currentVal
        for(let i=0;i<n;i++){
            currentVal=null
            if(i%dim===0){
                row++
                counter=0
                currentSquare=currentSquare+(2*(row>centerline?1:-1))
                terminus=row<=centerline?Math.pow(currentSquare,2)+1:sequence.at(-(dim-row))+1
                offSetL=i+centerline-Math.abs(centerline-row)-1
                console.log("current square:",currentSquare,"terminus: ",terminus,"offset: ",offSetL)
            }

            if(row<=centerline){
                if(i>offSetL&&(terminus-currentSquare+counter)<=terminus) {
                    console.log(currentSquare+counter,terminus,terminus-currentSquare+counter)
                    currentVal=terminus-currentSquare+counter
                    counter++
                    if(currentVal>n) currentVal=null
                }
            }
            else{
                if(i>offSetL && terminus+currentSquare-1-counter>=terminus){
                    currentVal=terminus+currentSquare-1-counter
                    counter++
                }
            }
            if(!currentVal)currentVal=sequence[i-dim]+(i%dim<centerline?-1:1)
            sequence.push(currentVal)

        }
        
    }
    buildSequence()
    const print=()=>{
        const arrs=[]
        const seqCopy=[...sequence]
        while(seqCopy.length)arrs.push(seqCopy.splice(0,dim))
        console.log(arrs)
    }
    return{
        print,
        sequence
    }

}

const test=spiral(25)
test.print()