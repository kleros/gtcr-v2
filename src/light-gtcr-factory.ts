import { NewGTCR as NewGTCREvent } from "../generated/LightGTCRFactory/LightGTCRFactory"
import { NewGTCR } from "../generated/schema"

export function handleNewGTCR(event: NewGTCREvent): void {
  let entity = new NewGTCR(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._address = event.params._address

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
