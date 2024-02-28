
/*
script to generate a clockwise spiral of numbers with 1 at the center.

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
    const centerline=Math.floor(dim/2)
    let row,offSetL,offSetR,counter,currentRoot,prevRoot,diagonal,northAxis,tail
    //sequence is a one-dimensional array with length n representing a square grid with dimensions dim x dim indexed increasing left to right
    const sequence=[]
    const initState=()=>{
        row=0
        northAxis=true
        counter=1
        //currentRoot refers to root of perfect squares, which extend diagonally upward from the center: 3,5,7,... 
        currentRoot=dim
        diagonal=Math.pow(currentRoot,2)
        //values increment or decrement sequentially towards the diagonal until they hit the left and right offsets
        //these are the left and right edges of the current spiral
        offSetL=-1
        offSetR=dim+1
        //tail starts at closest perfect square to n and decrements towards n
        tail=Math.pow(dim,2)
        
    }
    const incrementRow=()=>{
        row++
        counter=1
        northAxis=row<=centerline
        prevRoot=currentRoot
        currentRoot=currentRoot+(2*(northAxis?-1:1))
        diagonal=northAxis?Math.pow(currentRoot,2):prevRoot*currentRoot-currentRoot+3
        offSetL+=(dim+(northAxis?1:-1))
        offSetR+=(dim+(row===centerline+1?0:northAxis?-1:1))
    }
    const getVal=(i)=>{
        if(i<=offSetL || i>=offSetR) {
            const westAxis=i%dim<centerline
            if(sequence.at(-dim))return sequence.at(-dim)+(westAxis?-1:1);
            return tail
        }
        return diagonal+(currentRoot-counter)*(northAxis?-1:1)
    }
    const trimSeq=()=>{
        //remove empty rows
        if(sequence[0]===null)sequence.splice(0,dim)
        if(sequence.at(-1)===null)sequence.splice(-dim,dim)
    }
    const buildSequence=()=>{
        initState()
        for(let i=0;i<Math.pow(dim,2);i++){
            if(i && i%dim===0)incrementRow()
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
        //the intent was to generate a one-dimensional array with null at empty positions for imperfect squares
        //alternatively could have pushed str "#" to avoid .map() below or printed one string per row to avoid array altogether
        let start=0
        while(start<sequence.length)
        console.log(sequence.slice(start,start+=dim).map(n => !n?"#":n).join("\t"))
    }
    const getSequence=()=>[...sequence]
    return{
        dim,
        getSequence,
        print
    }
}

const test=spiral(49)
test.print()