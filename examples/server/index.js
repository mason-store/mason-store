const express = require("express");
const path = require("path");
const app = express();
const router = express.Router()
const port = 13812
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  const { params } = req
  next();
});
// const img = require("../static/img/cat.jpg")
const img = `http://127.0.0.1:${port}/img/cat.jpg`
const listRes = {
  code: 0,
  data: {
    list: [
      {
        infoId: 'xinwen24185u',
        createDate: '2021-04-21 15:51:47',
        updateDate: '2021-04-22 14:31:38',
        infoTitle: '13',
        infoSubtitle: null,
        infoSketch: null,
        infoContent: '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>fwqr且无法对</p>\n</body>\n</html>',
        infoImgs: [img],
        infoReleaseTime: '2021-04-06T16:00:00.000Z',
        infoLikesNumber: 5,
        infoDiscussNumber: 3,
        infoRelStatus: '1',
        infoTopRelStatus: '1',
        infoType: 'a',
        infoRemarks: '13',
        _id: '607fd993ac73582ad9ba42b6',
        __v: 0,
        userId: null,
      },
      {
        infoId: '34666828b9989a10ca9f44f226379523d3bc145f',
        createDate: '2021-04-21 17:12:09',
        updateDate: '2021-04-21 17:12:36',
        infoTitle: '测试文章',
        infoSubtitle: '',
        infoSketch: '',
        infoContent: '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>前太过分</p>\n</body>\n</html>',
        infoImgs: [img],
        infoReleaseTime: '2021-04-08T16:00:00.000Z',
        infoLikesNumber: 0,
        infoDiscussNumber: 0,
        infoRelStatus: '0',
        infoTopRelStatus: '0',
        infoType: 'a',
        infoRemarks: '321',
        _id: '607fec69a24c1836dd438da4',
        userId: {
          id: '49384',
          sort: 0,
          phone: '13800138000',
          avater: img,
          gender: 'M',
          username: 'superadmin',
          password: '123123',
          roleList: ['432985', '51bba32186bbc07bb2565c55c1d077375cc7af0b'],
          isDelete: 'n',
          createDate: '2020-12-01 09:09:02',
          updateDate: '2021-04-20 16:09:00',
          _id: '6038b057f93b8f302f6dfba7',
          __v: 0,
        },
        __v: 0,
      },
      {
        infoId: 'e573c38deb9cb6b6a5e575cd26681af02adaf1a3',
        createDate: '2021-04-23 10:04:16',
        updateDate: '2021-04-23 10:04:16',
        infoTitle: '这一拳是内伤',
        infoSubtitle: '',
        infoSketch: '',
        infoContent:
          '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>我是新闻内容</p>\n<p><img class="wscnph" style="display: block; margin-left: auto; margin-right: auto;" src="/fileManage/public/images/upload_134b4ad9498f3101baeddd55d8c462ee.jpg" /></p>\n<p>给你一拳</p>\n<p><img class="wscnph" style="display: block; margin-left: auto; margin-right: auto;" src="/fileManage/public/images/upload_f2faa3a56ba1c63cfaa43962b2357602.jpg" /></p>\n<p>&nbsp;</p>\n</body>\n</html>',
        infoImgs: [img],
        infoReleaseTime: '2021-04-22T16:00:00.000Z',
        infoLikesNumber: 0,
        infoDiscussNumber: 0,
        infoRelStatus: '1',
        infoTopRelStatus: '1',
        infoType: 'b',
        infoRemarks: '我是备注',
        _id: '60822b20278e8b9a0c7a9af5',
        userId: {
          id: '49384',
          sort: 0,
          phone: '13800138000',
          avater: img,
          gender: 'M',
          username: 'superadmin',
          password: '123123',
          roleList: ['432985', '51bba32186bbc07bb2565c55c1d077375cc7af0b'],
          isDelete: 'n',
          createDate: '2020-12-01 09:09:02',
          updateDate: '2021-04-20 16:09:00',
          _id: '6038b057f93b8f302f6dfba7',
          __v: 0,
        },
        __v: 0,
      },
    ],
    total: 3,
    pageNum: 1,
    pageSize: 10,
  },
  msg: '获取成功',
}
const deleteRes = { code: 0, msg: '删除成功' }
const editRes = { code: 0, msg: '编辑成功' }
const addRes = { code: 0, msg: '编辑成功' }
const uploadRes = { code: 0, msg: '上传成功', data: { url: img } }
const oneRes = {
  code: 0,
  data: {
    list: [
      {
        infoId: 'xinwen24185u',
        createDate: '2021-04-21 15:51:47',
        updateDate: '2021-04-22 14:31:38',
        infoTitle: '13',
        infoSubtitle: null,
        infoSketch: null,
        infoContent: '<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n<p>fwqr且无法对</p>\n</body>\n</html>',
        infoImgs: [img],
        infoReleaseTime: '2021-04-06T16:00:00.000Z',
        infoLikesNumber: 5,
        infoDiscussNumber: 3,
        infoRelStatus: '1',
        infoTopRelStatus: '1',
        infoType: 'a',
        infoRemarks: '13',
        _id: '607fd993ac73582ad9ba42b6',
        __v: 0,
        userId: null,
      },
    ],
    total: 1,
    pageNum: 1,
    pageSize: 10,
  },
  msg: '获取成功',
}
router.get('/', (req, res) => { res.json({ code: 0, msg: '连接成功！' }) })
router.get(`/img/cat.jpg`, function (req, res) {
  res.header('Content-Type', 'image/png')
  res.sendFile(path.resolve(__dirname, 'img/cat.jpg'))
})
router.post('/list', (req, res) => { res.json(listRes) })
router.post('/delete', (req, res) => { res.json(deleteRes) })
router.post('/edit', (req, res) => { res.json(editRes) })
router.post('/add', (req, res) => { res.json(addRes) })
router.post('/upload', (req, res) => { res.json(uploadRes) })
router.post('/queryOne', (req, res) => { res.json(oneRes) })

app.use(router)
app.listen(port, () => {
  console.log(`服务地址：http://127.0.0.1:${port}`);
});
