import env from './env'

const DEV_URL = 'http://localhost:8080/hsservice'
const PRO_URL = 'http://localhost:8080/hsservice'

export default env === 'development' ? DEV_URL : PRO_URL
