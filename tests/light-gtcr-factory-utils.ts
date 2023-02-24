import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { NewGTCR } from "../generated/LightGTCRFactory/LightGTCRFactory"

export function createNewGTCREvent(_address: Address): NewGTCR {
  let newGtcrEvent = changetype<NewGTCR>(newMockEvent())

  newGtcrEvent.parameters = new Array()

  newGtcrEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )

  return newGtcrEvent
}
