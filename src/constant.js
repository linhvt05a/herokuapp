
const CUSTOMER_REQUEST_TYPE = [
    { value: 3, label: 'Commission' },
    { value: 2, label: 'Promotion' },
    { value: 1, label: 'Other' }
]

const CUSTOMER_REQUEST_STATUS = [
    { value: 1, label: 'New' },
    { value: 2, label: 'Agree' },
    { value: 3, label: 'Deny' }
]

const CUSTOMER_REQUEST_PRIORITY = [
    { value: 1, label: 'High (1-3 ngày)' },
    { value: 2, label: 'Average (1-5 ngày)' },
    { value: 3, label: 'Low (1-7 ngày)' },
]

const CUSTOMER_REQUEST_TYPE_COMMISSION = { value: 1, label: 'commission_change_request' }
const CUSTOMER_REQUEST_TYPE_PROMOTION = { value: 2, label: 'promotion_change_request' }

const CUSTOMER_REQUEST_PRIORITY_HIGH = { value: 1, label: 'high' }
const CUSTOMER_REQUEST_PRIORITY_MID = { value: 2, label: 'average' }
const CUSTOMER_REQUEST_PRIORITY_LOW = { value: 3, label: 'low' }
const DISTRIBUTION_CHANNEL_AGENT = {value: 1, label:'Kênh đại lý'}
const DISTRIBUTION_CHANNEL_INTERNAL = {value: 2, label:'Kênh nội bộ, cộng tác viên '}

module.exports = {
    CUSTOMER_REQUEST_TYPE_COMMISSION,
    CUSTOMER_REQUEST_TYPE_PROMOTION,
    CUSTOMER_REQUEST_PRIORITY_HIGH,
    CUSTOMER_REQUEST_PRIORITY_MID,
    CUSTOMER_REQUEST_PRIORITY_LOW,
    CUSTOMER_REQUEST_TYPE,
    CUSTOMER_REQUEST_STATUS,
    CUSTOMER_REQUEST_PRIORITY,
    DISTRIBUTION_CHANNEL_AGENT,
    DISTRIBUTION_CHANNEL_INTERNAL
}
