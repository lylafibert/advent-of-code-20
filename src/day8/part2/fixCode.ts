import {Instruction} from '../Instruction'

export default (bootCode:Instruction[]):number => {
  const changesToTry:number[] = bootCode.reduce((acc, instruction, index) => {
    return instruction.operation !== 'acc'? [...acc, index] : acc
  }, [])

  let isFixed = false
  let acc = 0

  for(let i = 0; !isFixed; i++) {
    const newBootCode = [...bootCode]
    const index = changesToTry[i]
    const currentOp = bootCode[index].operation
    if(currentOp === 'nop') {
      newBootCode.splice(index, 1, {operation: 'jmp', argument:bootCode[index].argument})
    } else {
      newBootCode.splice(index, 1, {operation: 'nop', argument:bootCode[index].argument})
    }
    const codeResult = getCodeResult(newBootCode)
    isFixed = codeResult.isFixed
    acc = codeResult.accumulator
  }



  return acc
}

interface CodeResult {
  isFixed:boolean,
  accumulator: number
}

const getCodeResult = (bootCode:Instruction[]):CodeResult => {
  const executedInstructions:number[] = []
  let i = 0
  let acc = 0
  while(!executedInstructions.includes(i) && i !== bootCode.length) {
    executedInstructions.push(i)
    const {operation, argument} = bootCode[i]
    switch(operation){
      case 'acc':
        acc += argument
        i++
        break;
      case 'jmp':
        i += argument
        break;
      default:
        i++
    }
  }
  const isFixed = i === bootCode.length
  return {isFixed, accumulator:acc}
}