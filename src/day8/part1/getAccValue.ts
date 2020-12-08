import { exec } from 'child_process'
import {Instruction} from '../Instruction'

export default (bootCode:Instruction[]):number => {
  const executedInstructions:number[] = []
  let i = 0
  let acc = 0
  while(!executedInstructions.includes(i)) {
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
  return acc
}