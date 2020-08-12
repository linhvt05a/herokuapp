
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

const DISTRIBUTION_CHANNEL_AGENT = {value: 1, label:'Kênh đại lý'}
const DISTRIBUTION_CHANNEL_INTERNAL = {value: 2, label:'Kênh nội bộ, cộng tác viên '}

module.exports = {
CUSTOMER_REQUEST_TYPE,
CUSTOMER_REQUEST_STATUS,
CUSTOMER_REQUEST_PRIORITY,
DISTRIBUTION_CHANNEL_AGENT,
DISTRIBUTION_CHANNEL_INTERNAL
}
