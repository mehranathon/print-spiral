
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
    const centerline=Math.floor(dim/2)
    //sequence is a one-dimensional array with length n representing a square grid with dimensions dim x dim indexed increasing left to right
    const sequence=[]
    const buildSequence=()=>{
        let row=0
        let offSetL=-1
        let offSetR=dim+1
        let counter=0
        //currentSquare refers to root of perfect squares, which extend diagonally upward from the center: 3,5,7,... 
        let currentSquare=dim
        let terminus=Math.pow(currentSquare,2)+1
        let currentVal
        let northAxis=true
        for(let i=0;i<n;i++){
            currentVal=null
            if(i && i%dim===0){
                row++
                counter=0
                northAxis=row<=centerline
                currentSquare=currentSquare+(2*(northAxis?-1:1))
                terminus=northAxis?Math.pow(currentSquare,2)+1:sequence.at(-(dim-row))+1
                offSetL+=(dim+(northAxis?1:-1))
                offSetR+=(dim+(row===centerline+1?0:northAxis?-1:1))
            }
            if(i<=offSetL || i>=offSetR){
                currentVal=sequence.at(-dim)+(i%dim<centerline?-1:1)
                sequence.push(currentVal)
                continue
            }
            
            if(northAxis) currentVal=terminus-currentSquare+counter
            else currentVal=terminus+currentSquare-1-counter
            sequence.push(currentVal)
            counter++
        }
    }
    buildSequence()
    const print=()=>{
        let start=0
        while(start<sequence.length)
        console.log(sequence.slice(start,start+=dim))
    }
    return{
        print,
        sequence
    }
}

const test=spiral(25)
test.print()