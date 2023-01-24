## Query Light Registry

```graphql
query lightRegistryQuery($lowerCaseTCRAddress: String!) {
    lregistry(id: $lowerCaseTCRAddress) {
      numberOfAbsent
      numberOfRegistered
      numberOfRegistrationRequested
      numberOfClearingRequested
      numberOfChallengedRegistrations
      numberOfChallengedClearing
    }
  }
```
* lowerCaseTCRAddress = `your_contract_address`

