// How many milliseconds for a single request to time out（Reference value，If continuous timeout, it will be adjusted to twice the previous time）
const TIMEOUT_BASE = 7000
// Maximum timeout setting，For example, for a certain request, the first 7s timeout, the second 14s, the third 28s, the fourth 56s, the fifth is not 112s but 60
const TIMEOUT_MAX = 60000

const LOG_DELAY = 5000 //  Log output interval, in milliseconds
const PAGE_SIZE = 1000 // Each network request to read the number of files in the directory, the larger the value, the more likely it will time out, and it should not exceed 1000

const RETRY_LIMIT = 7 // The maximum number of retries allowed, If a request fails
const PARALLEL_LIMIT = 20 // The number of parallel network requests can be adjusted according to the network environment

const DEFAULT_TARGET = '' // Required. Copy the default destination ID. If target is not specified, it will be copied here. It is recommended to fill in the team drive ID

const AUTH = { // If you have the json authorization file of the service account, you can copy it to the sa directory instead of client_id/secret/refrest_token
  client_id: '714410736546-1ao1aunvau1jd76haschnpntjivcgtg1.apps.googleusercontent.com',
  client_secret: 'Tp1CDBNelvImgV2kxFP8yub5',
  refresh_token: '1//09v8BJXRujK3PCgYIARAAGAkSNgF-L9Ir9MwiL2ZG0mWEE35014rFXszvUjupZCOwRApEAMvR8Pz2wyq8BRN9Jhlfb_Ab7HS8bg',
  expires: "2021-03-19T20:30:01.0904672+03:00", // Can be left blank
  access_token: 'ya29.a0AfH6SMCzMJ8VTLWkmJmQhqoZCkEq7_4-ifvVuRGXzbm4dcDNuxQ1mak3fDhaQyyXMb1nwEMQAlhShO1fE4cWNbtwei795KCQe-J4ANWbkjCWKFr6D3JY5_1lPDXeBPOdEZo1GakYIzLD3XnZ7YYbdwUSWAytr3A', // Can be left blank
  tg_token: '1732876956:AAET-imAdejNGh1T03tvRdRPNFXwlR0qZS8', // Your telegram bot token，Go here https://core.telegram.org/bots#6-botfather
  tg_whitelist: ['t.me/kamileecher'] // Your tg username(t.me/username)，The bot will only execute commands sent by users in this list
}

module.exports = { AUTH, PARALLEL_LIMIT, RETRY_LIMIT, TIMEOUT_BASE, TIMEOUT_MAX, LOG_DELAY, PAGE_SIZE, DEFAULT_TARGET }
