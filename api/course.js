import request from '@/utils/request'

const apiname = '/eduservice/Front-edu-course'

export default {
    //分页查询课程
    getFrontCoursePageLists(page,limit) {
        return request({
            url: `${apiname}/getFrontCoursePageLists/${page}/${limit}`,
            method: 'get'
          })
    },

    //根据ID查询到详细的课程信息
    getCourseWebDtoByCourseId(courseId) {
        return request({
            url: `${apiname}/getCourseWebDtoByCourseId/${courseId}`,
            method: 'get'
          })
    }

}