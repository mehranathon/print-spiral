
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
    const sqrt=Math.ceil(Math.sqrt(n))
    const dim = sqrt%2===0?sqrt+1:sqrt
    console.log(dim)
    const centerline=Math.floor(dim/2)
    let row,offSetL,offSetR,counter,currentRoot,terminus,northAxis,tail
    //sequence is a one-dimensional array with length n representing a square grid with dimensions dim x dim indexed increasing left to right
    const sequence=[]
    const initState=()=>{
        row=0
        offSetL=-1
        offSetR=dim+1
        counter=0
        //currentRoot refers to root of perfect squares, which extend diagonally upward from the center: 3,5,7,... 
        currentRoot=dim
        terminus=Math.pow(currentRoot,2)+1
        northAxis=true
        tail=Math.pow(dim,2)
    }
    const iterateRow=()=>{
        row++
        counter=0
        northAxis=row<=centerline
        currentRoot=currentRoot+(2*(northAxis?-1:1))
        const oneUp=sequence.at(-(dim-row))
        terminus=northAxis?Math.pow(currentRoot,2)+1:oneUp?oneUp+1:null
        offSetL+=(dim+(northAxis?1:-1))
        offSetR+=(dim+(row===centerline+1?0:northAxis?-1:1))
    }
    const getVal=(i)=>{
        if(i<=offSetL || i>=offSetR) {
            const westAxis=i%dim<centerline
            if(sequence.at(-dim))return sequence.at(-dim)+(westAxis?-1:1);
            return tail
        }
        if(!terminus)return null
        if(!isNaN(tail) && tail===0) return n
        if(northAxis) return terminus-currentRoot+counter
        return terminus+currentRoot-1-counter
    }
    const trimSeq=()=>{
        if(sequence[0]===null)sequence.splice(0,dim)
    }
    const buildSequence=()=>{
        initState()
        for(let i=0;i<Math.pow(dim,2);i++){
            if(i && i%dim===0)iterateRow()
            const val=getVal(i)
            if(i>offSetL && i<offSetR)counter++
            if(val<=n){
                sequence.push(val)
            }
            else{
                sequence.push(null)
                tail--
            }
        }
        trimSeq()
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

const test=spiral(18)
test.print()