import request from '@/utils/request'

const apiname = '/educenter/center-member'

export default {
    
    getUserInfoToken(token) {
        return request({
            url: `${apiname}/userInfo/${token}`,
            method: 'get'
          })
    },
    
}