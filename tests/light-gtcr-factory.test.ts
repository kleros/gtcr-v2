import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { NewGTCR } from "../generated/schema"
import { NewGTCR as NewGTCREvent } from "../generated/LightGTCRFactory/LightGTCRFactory"
import { handleNewGTCR } from "../src/light-gtcr-factory"
import { createNewGTCREvent } from "./light-gtcr-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _address = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newNewGTCREvent = createNewGTCREvent(_address)
    handleNewGTCR(newNewGTCREvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewGTCR created and stored", () => {
    assert.entityCount("NewGTCR", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewGTCR",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_address",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
