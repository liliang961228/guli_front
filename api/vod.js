import request from '@/utils/request'

const apiname = '/eduVideoUpload/videoUploadController'

export default {
    //根据视频id获取播放凭证
    getVideoPlayAuth(vid) {
        return request({
            url: `${apiname}/getPlayAuto/${vid}`,
            method: 'get'
          })
    },
    
}