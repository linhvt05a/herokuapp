
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

const DISTRIBUTION_CHANNEL_TYPE = [
    {value: 1, label:'Kênh đại lý'}, 
    {value: 2, label:'Kênh nội bộ, cộng tác viên'}
]
    


module.exports = {
    request_type, request_status, priority_request, DISTRIBUTION_CHANNEL_TYPE
}
