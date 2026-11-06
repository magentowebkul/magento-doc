# GraphQL API Guide

Webkul Magento 2 Sales Representative extension provides comprehensive GraphQL endpoints for headless and PWA storefronts, allowing customers to query quote requests, send inquiry messages, and submit new quotes.

---

## Endpoint & Authentication

- **GraphQL Endpoint**: `https://<your-magento-domain>/graphql`
- **Authentication**: Customer-scoped queries and mutations require a Customer Bearer token in the request headers:

```http
Authorization: Bearer <customer_token>
```

To generate a customer token:

```graphql
mutation {
  generateCustomerToken(email: "customer@example.com", password: "password123") {
    token
  }
}
```

---

## Quotation Queries & Mutations

### 1. Fetch Customer Quote Request List

Retrieve all quote requests submitted by the authenticated customer:

```graphql
query {
  getSaleRepQuoteRequestList {
    quoteReqId
    date
    totalProducts
    messages
    status
    viewQuoteUrl
    viewSummaryUrl
  }
}
```

### 2. Fetch Quote Details & Responses

Retrieve full details and counter-offers formulated by the sales representative for a specific quote:

```graphql
query {
  getSaleRepQuoteDetails(quoteId: "3") {
    quoteId
    createdOn
    status
    messages
    quoteResponse {
      id
      products
      timestamp
      actualPrice
      expectedPrice
      quotePrice
      status
      viewUrl
    }
  }
}
```

### 3. Create a New Sales Rep Quote

Submit a multi-item quote request with expected pricing and configurable options:

```graphql
mutation {
  createWkQuoteSalesRep(
    input: [
      {
        productSku: "WJ02"
        qty: 2
        price: "85.00"
        expectedPrice: "70.00"
        productOptions: [
          { attributeId: 144, attributeValueId: 169 },
          { attributeId: 93, attributeValueId: 50 }
        ]
      }
    ]
    description: "Requesting volume discount for corporate order"
  ) {
    success
    message
    quoteId
  }
}
```

---

## Messaging Queries & Mutations

### 4. Fetch Message Threads on a Quote

Retrieve conversation messages exchanged regarding a specific quote request:

```graphql
query {
  getSaleRepQuoteMessages(quoteId: "3") {
    name
    role
    message
    senderType
    createdAt
  }
}
```

### 5. Send Message on a Quote

Post a reply message to the sales representative on an existing quote thread:

```graphql
mutation {
  sendQuoteRequestMessage(quoteId: "3", message: "Can we adjust the unit price further?") {
    success
    message
    messageId
  }
}
```

### 6. Fetch General Sales Rep Messages List

List all direct customer inquiry threads sent to sales representatives:

```graphql
query {
  getSaleRepMessagesList {
    id
    salesRepName
    title
    timestamp
    messageCount
    viewUrl
  }
}
```

### 7. Send New Direct Inquiry to Sales Rep

Submit a new direct message or inquiry to a representative:

```graphql
mutation {
  sendSalesRepRequestMessage(subject: "Inquiry on bulk catalog availability", message: "Do you have 500 units in stock?") {
    success
    message
    messageId
  }
}
```
