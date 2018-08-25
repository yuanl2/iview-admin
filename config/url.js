import env from './env'

const DEV_URL = 'http://localhost:8080/hsservice'
const PRO_URL = 'https://www.knocknock.vip/hsservice'
export default env === 'development' ? DEV_URL : PRO_URL
