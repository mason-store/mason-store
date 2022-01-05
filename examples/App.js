export const disposeList = {
  // 获取列表请求参数处理
  requestParams: (request) => {
    let req = {};
    Object.keys(request).forEach((name) => {
      if (name !== "releaseTime") {
        req[name] = request[name];
      }
    });
    if (request.columns) {
      req.engFirstColumn = request.columns[0];
      req.engSecondColumn = request.columns[1];
    }
    return req;
  },
  // 获取列表返回数据处理
  response: (response) => {
    let res = {};
    if (response.code === 0) {
      response.data.list.forEach((e, index) => {
        e.contentTxt = e.content;
        // 设置状态
        e.infoRelStatusL = [];
        if (e.infoRelStatus == "0") {
          e.infoRelStatusL[0] = {
            label: "未发布",
            type: "danger",
          };
        } else if (e.infoRelStatus == "1") {
          e.infoRelStatusL[0] = {
            label: "已发布",
            type: "success",
          };
        } else if (e.infoRelStatus == "2") {
          e.infoRelStatusL[0] = {
            label: "已下线",
            type: "info",
          };
        } else {
          e.infoRelStatusL[0] = {
            label: "未知状态",
            type: "",
          };
        }
        // 文章类型
        e.infoTypeL = [];
        if (e.infoType == "a") {
          e.infoTypeL[0] = {
            label: "公告",
            type: "danger",
          };
        } else if (e.infoType == "b") {
          e.infoTypeL[0] = {
            label: "论坛",
            type: "success",
          };
        } else if (e.infoType == "c") {
          e.infoTypeL[0] = {
            label: "文章",
            type: "",
          };
        } else {
          e.infoTypeL[0] = {
            label: "未知状态",
            type: "info",
          };
        }
        e.infoTopRelStatusL = [];
        if (e.infoTopRelStatus == "0") {
          e.infoTopRelStatusL[0] = {
            label: "否",
            type: "",
          };
        } else if (e.infoTopRelStatus == "1") {
          e.infoTopRelStatusL[0] = {
            label: "是",
            type: "danger",
          };
        } else {
          e.infoTopRelStatusL[0] = {
            label: "未知",
            type: "info",
          };
        }
        e.infoImgsT = [...(e.infoImgs || [])];
      });
      res = {
        code: 0,
        list: response.data.list,
        total: response.data.total,
        msg: response.msg,
      };
    } else {
      res = {
        code: 1,
        msg: response.msg,
      };
    }
    return res;
  }
}

export const disposeAdd = {
  // 新增数据请求参数处理
  requestParams: (request, model) => request,
  // 新增数据返回数据处理
  response: (response) => {
    let res = {};
    if (response.code === 0) {
      res = { code: 0, msg: response.msg };
    } else {
      res = { code: 1, msg: response.msg };
    }
    return res;
    ;
  }
}

export const disposeUpdate = {
  // 更新数据请求参数处理
  requestParams: (request, model) => request,
  // 更新数据返回数据处理
  response: (response) => {
    let res = {};
    if (response.code === 0) {
      res = { code: 0, msg: response.msg };
    } else {
      res = { code: 1, msg: response.msg };
    }
    return res;
  }
}

export const disposeDelete = {
  // 删除数据请求参数处理
  requestParams: (request, model) => ({ infoId: request.infoId }),
  // 删除数据返回数据处理
  response: (response) => {
    let res = response;
    if (res.code === 0) {
      res = {
        code: 0,
        msg: response.msg,
      };
    }
    return res;
  }
}

export const disposeQueryOne = {
  // 查询一条请求参数处理
  requestParams: (request, model) => ({ infoId: request.infoId }),
  // 查询一条返回数据处理
  response: (response) => {
    let res = response;
    if (res.code === 0) {
      res = {
        code: 0,
        data: response.data.list[0],
        msg: response.msg,
      };
    }
    return res;
  }
}

export const disposeUpload = {
  // 查询一条返回数据处理
  response: (response) => {
    let res = {};
    if (response.code === 0) {
      res = {
        code: 0,
        msg: response.msg,
        path: response.data.url,
        data: response.data,
      };
    } else {
      res = { code: 1, msg: response.msg };
    }
    return res;
  }
}
