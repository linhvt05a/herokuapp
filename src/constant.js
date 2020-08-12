
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

const CUSTOMER_REQUEST_TYPE_COMMISSION = { value: 1, label: 'commission_change_request' }
const CUSTOMER_REQUEST_TYPE_PROMOTION = { value: 2, label: 'promotion_change_request' }

const CUSTOMER_REQUEST_PRIORITY_HIGH = { value: 1, label: 'High' }
const CUSTOMER_REQUEST_PRIORITY_MID = { value: 2, label: 'Average' }
const CUSTOMER_REQUEST_PRIORITY_LOW = { value: 3, label: 'Low' }
const DISTRIBUTION_CHANNEL_AGENT = {value: 1, label:'Kênh đại lý'}
const DISTRIBUTION_CHANNEL_INTERNAL = {value: 2, label:'Kênh nội bộ, cộng tác viên '}

module.exports = {
    request_type, request_status, priority_request,
    CUSTOMER_REQUEST_TYPE_COMMISSION,
    CUSTOMER_REQUEST_TYPE_PROMOTION,
    CUSTOMER_REQUEST_PRIORITY_HIGH,
    CUSTOMER_REQUEST_PRIORITY_MID,
    CUSTOMER_REQUEST_PRIORITY_LOW,
    DISTRIBUTION_CHANNEL_AGENT,
    DISTRIBUTION_CHANNEL_INTERNAL
}
