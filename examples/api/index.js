import request, { bashUrl } from "./config/request"

/**
 * 新增
 * @param data 接口入参
 */
export function sysmanageAdminAdd(data) {
  return request({
    url: "/add",
    method: "post",
    data
  });
}

/**
 * 删除
 * @param data 接口入参
 */
export function sysmanageAdminDelete(data) {
  return request({
    url: "/delete",
    method: "post",
    data
  });
}

/**
 * 编辑
 * @param data 接口入参
 */
export function sysmanageAdminEdit(data) {
  return request({
    url: "/edit",
    method: "post",
    data
  });
}

/**
 * 查询
 */
export function sysmanageAdminList(data) {
  return request({
    url: "/list",
    method: "post",
    data
  });
}

/**
 * 查询一条
 */
export function sysmanageAdminQueryOne(data) {
  return request({
    url: "/queryOne",
    method: "post",
    data
  });
}

// 上传接口
export const uploadOnePhotoUrl = () => {
  return bashUrl + '/upload'
}

// 请求头
export const uploadHeaders = (data) => {
  return { Authorization: 'token-test-001' }
}