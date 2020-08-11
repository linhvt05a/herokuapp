
const request_type = [
    { value: 1, label: 'Commission' },
    { value: 2, label: 'Promotion' },
    { value: 3, label: 'Other' }
]

const request_status = [
    { value: 1, label: 'New' },
    { value: 2, label: 'Agree' },
    { value: 3, label: 'Deny' }
]

const priority_request = [
    { value: 1, label: 'High' },
    { value: 2, label: 'Average' },
    { value: 3, label: 'Low' },
]

const CUSTOMER_REQUEST_TYPE_COMMISSION = { value: 1, label: 'Commission' }
const CUSTOMER_REQUEST_TYPE_PROMOTION = { value: 2, label: 'Promotion' }

const CUSTOMER_REQUEST_PRIORITY_HIGH = { value: 1, label: 'High' }
const CUSTOMER_REQUEST_PRIORITY_MID = { value: 2, label: 'Average' }
const CUSTOMER_REQUEST_PRIORITY_LOW = { value: 3, label: 'Low' }



module.exports = {
    request_type, request_status, priority_request,
    CUSTOMER_REQUEST_TYPE_COMMISSION,
    CUSTOMER_REQUEST_TYPE_PROMOTION,
    CUSTOMER_REQUEST_PRIORITY_HIGH,
    CUSTOMER_REQUEST_PRIORITY_MID,
    CUSTOMER_REQUEST_PRIORITY_LOW
}
