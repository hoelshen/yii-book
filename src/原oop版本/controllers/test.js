class Test{
    init(){
        // return console.log('🍊🍊🍊🍊🍊🍊🍊')
        return () => {
            console.log('🍊');
        }
    }
}


function Ii(){
    return ()=>{
        console.log('🍊🍊')
    }
}
const test = new Test();
test.init()()

let ii = new Ii()

console.log(ii())