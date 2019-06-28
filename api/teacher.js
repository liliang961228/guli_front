import request from '@/utils/request'

const apiname = '/eduservice/Front-edu-teacher'

export default {
    //讲师列表的方法
    getFrontTeacherPageLists(page,limit) {
        return request({
            url: `${apiname}/getFrontTeacherPageLists/${page}/${limit}`,
            method: 'get'
          })
    },

    //通过讲师的id查询到具体的讲师信息
    getFrontTeacherById(id) {
        return request({
            url: `${apiname}/getFrontTeacherById/${id}`,
            method: 'get'
          })
    }
}