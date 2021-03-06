define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "E__2017_com_api_dj_tbkt_apidoc_main_js",
    "groupTitle": "E__2017_com_api_dj_tbkt_apidoc_main_js",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>手机号或帐号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "login_type",
            "description": "<p>(可选)登录类型 88:Android教辅学生 90:Android教辅教师 89:IOS教辅学生 91:IOS教辅教师</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>(可选)系统版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(可选)设备名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>(可选)手机型号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>(可选)平台名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>(可选)设备序列号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appversion",
            "description": "<p>(可选)app版本 :param request: :return:</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apps/account/login.py",
    "group": "E__2017_com_api_dj_tbkt_apps_account_login_py",
    "groupTitle": "E__2017_com_api_dj_tbkt_apps_account_login_py",
    "name": ""
  },
  {
    "type": "get",
    "url": "/im/bind_device",
    "title": "[IM]绑定设备",
    "group": "IM",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"device_type_id\":设备类型ID, \"client_id\":\"3a74a30f6849fef1f6c86188440e2768\"}\n\n*设备类型ID: 1安卓学生 2安卓教师 3苹果学生 4苹果教师\n*client_id: 个推sdk分配的一个字符串, 用来代表一个唯一的手机",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"start_num\": 1,  # 启动次数\n        \"device_id\": 2   # 设备ID\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}\n\n透传参数:\n{\"type\": 1作业类消息 2奥数类消息}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/im/views.py",
    "groupTitle": "IM",
    "name": "GetImBind_device"
  },
  {
    "type": "get",
    "url": "/im/messages",
    "title": "[IM]消息列表",
    "group": "IM",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"p\":页号, \"psize\":每页条数, \"subject_id\":学科ID(多个用逗号分割), \"type\":类型(多个用逗号分割)}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"total\": 10, # 总条数\n        \"messages\": [{\n            \"id\": 消息ID,\n            \"type\": 消息类型(多个类型用逗号分割),\n            \"subject_id\": 两位数学科ID,\n            \"object_id\": 业务表ID,\n            \"add_user\": 老师ID,\n            \"title\": 标题,\n            \"content\": 内容(240个字以内),\n            \"units\": [{id:班级ID, name:班级名}],  # 接收消息的班级\n            \"add_time\": \"2017-06-07 11:18:00\", # 发布时间\n            \"test_status\": 0未做 1已完成 2继续做题,\n            \"images\":[图片url,图片url] \n        }]\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}\n\n*消息类型:\n空是全部消息 1:sms短信 2:task作业 3:shared资源推送 \n4:think奥数视频 5:jx_video本周视频 6:jx_paper本周试卷  7:数学试卷作业 8 知识点视频作业  9 速算作业\n\n*object_id:\nif type == 2: object_id表示各个学科的作业表ID, 比如sx_task.id, yy_task.id\n    if subject_id == 21: 调小学数学作业信息接口(http://mapisx.m.jxtbkt.cn/s/math/task/info)\n    if subject_id == 22: 调初中数学作业信息接口(http://mapisx2.m.jxtbkt.cn/s/math/task/info)\n    if subject_id == 91: 调小学英语作业接口(http://mapiyy.m.jxtbkt.com/s/task/detail_list)\n    if subject_id == 92: 目前没有初中英语\nif type == 3: object_id表示共享资源推送表(shared_push)的ID\nif type == 4: object_id表示奥数章节ID, 用来调取奥数视频\n    调小学数学奥数视频接口 http://mapisx.m.jxtbkt.com/s/math/resource/think\nif type == 5: object_id表示教学进度详情ID, 用来调取本周视频\n    调小学数学本周视频接口 http://mapisx.m.jxtbkt.com/s/math/resource/video\nif type == 6: object_id表示练习册章节ID, 用来调取试卷题目\n    调小学数学教辅章节试卷接口 http://mapisx.m.jxtbkt.cn/sx/pcatalog_paper",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/im/views.py",
    "groupTitle": "IM",
    "name": "GetImMessages"
  },
  {
    "type": "post",
    "url": "/im/delmessage",
    "title": "[IM]取消定时作业",
    "group": "IM",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"subject_id\":学科ID, \"task_id\":作业ID,\"type\":作业类型}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/im/views.py",
    "groupTitle": "IM",
    "name": "PostImDelmessage"
  },
  {
    "type": "post",
    "url": "/im/outside/task/info",
    "title": "[IM]课外活动-作业信息",
    "group": "IM",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n    \"message_id\": 作业id(tbkt_com.message), \n    \"unit_id\": 班级id\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"status\": 1,   \n        \"finish\": [\n            {\n                \"thumb_up\": 1,\n                \"user_id\": 608898,\n                \"user_name\": \"小小学生\",\n                \"content\": \"测试册数册数侧二次嘎达的萨达撒大声地\",\n                \"portrait\": \"http://file.m.xueceping.cn/upload_media/portrait/2017/12/18/2017121817284732843.png\",\n                \"media_url\": [\n                    \"http://file.m.xueceping.cn/upload_media/portrait/2017/12/18/2017121817284732843.png\"\n                ],\n                \"type\": 1,\n                \"add_time\": \"2018-01-18 17:47:25\"\n            }\n        ],\n        \"user_id\": 3677026,\n        \"title\": \"创意手工\",\n        \"unfinish\": [\n            {\n                \"portrait\": \"http://file.m.xueceping.cn/upload_media/portrait/2017/09/19/20170919103351664562.png\",\n                \"real_name\": \"宝马\"\n            },\n            {\n                \"portrait\": \"http://res-hn-beta.m.jxtbkt.cn/user_media/images/profile/default-student.png\",\n                \"real_name\": \"刘启明\"\n            }\n        ],\n        \"content\": \"创意手工\",\n        \"end_time\": \"2018-01-19 00:00:00\",\n        \"begin_time\": \"7小时前\",\n        \"portrait\": \"http://res-hn-beta.m.jxtbkt.cn/user_media/images/profile/default-teacher.png\",\n        \"user_name\": \"测试10\",\n        \"id\": 100001253\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}\n* type: 1.图片 2.音频 3.视频\n* 学生类型 status = 1 完成 0 未完成",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"缺少参数\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/im/views.py",
    "groupTitle": "IM",
    "name": "PostImOutsideTaskInfo"
  },
  {
    "type": "post",
    "url": "/im/outside/task/send",
    "title": "[IM]课外活动-发送作业",
    "group": "IM",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n    \"content\":活动描述文字, \n    \"end_time\":结束时间,   \n    \"images\":活动描述图片, [\"image url\", \"image url\"]\n    \"unit_id\":班级id,     \"班级id,班级id,班级id\"\n    \"type\":作业类型,       1.创意手工 2.做家务 3.自定义\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"message_id\": 1\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"活动描述不能为空\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/im/views.py",
    "groupTitle": "IM",
    "name": "PostImOutsideTaskSend"
  },
  {
    "type": "post",
    "url": "/im/outside/task/submit",
    "title": "[IM]课外活动-作业提交",
    "group": "IM",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n    \"message_id\": 作业id(tbkt_com.message), \n    \"type\": 1.图片 2.音频 3.视频,    \n    \"content\": 活动描述文字,\n    \"url\": type=1.图片url type=2.音频url type=3.视频url\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"test_id\": 1\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"缺少参数\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/im/views.py",
    "groupTitle": "IM",
    "name": "PostImOutsideTaskSubmit"
  },
  {
    "type": "post",
    "url": "/im/outside/task/thumb_up",
    "title": "[IM]课外活动-点赞",
    "group": "IM",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n    \"message_id\": 作业id(tbkt_com.message), \n    \"user_id\": 作业学生id\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\":\"\",\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/im/views.py",
    "groupTitle": "IM",
    "name": "PostImOutsideTaskThumb_up"
  },
  {
    "type": "post",
    "url": "/im/sendim",
    "title": "[IM]发送IM消息",
    "group": "IM",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"unit_id\":班级ID(多个班用逗号连接), \"user_id\":发送给个人(多个用户ID用逗号连接),\n \"config_id\":配置ID, \"title\": 消息标题, \"content\": 消息内容\n}\n\n*配置ID: 1Demo 2APP学生 3APP教师",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/im/views.py",
    "groupTitle": "IM",
    "name": "PostImSendim"
  },
  {
    "type": "post",
    "url": "/im/sendmessage",
    "title": "[IM]发送普通消息",
    "group": "IM",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"unit_id\":班级ID(多个班用逗号连接), \"student_id\":指定发给某几个学生ID(可选,逗号连接)\n \"type\": 消息类型, \"object_id\":业务表ID, \n \"title\": 消息标题, \"content\": 消息内容, \"end_time\": 作业短信，完成时间, \"begin_time\": 发作业时间,\n \"images\":[\"url\", \"url\"]通知图片(可选)\n}\n\n*type:\n1、sms短信 2、task作业 3、shared资源推送 \n4、think奥数视频 5、jx_video本周视频 6、jx_paper本周试卷, 7.数学试卷作业 8.速算作业 9.知识点作业\n\n如果type = 1 \n可以只传 type, unit_id, student_id, content, images",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"message_id\": 5  # 新消息的ID\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/im/views.py",
    "groupTitle": "IM",
    "name": "PostImSendmessage"
  },
  {
    "type": "post",
    "url": "/im/template",
    "title": "[IM]通知模版",
    "group": "IM",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        \"请同学们回家后看第x页，第x题的难题视频讲解，并完成拓展练习\",\n        \"请同学们完成第x可是的拓展练习，扫描拓展练习的二维码就可以观看了\",\n        \"请同学们看第x课时的错题视频讲解，并订正错题，扫描错题二维码就可以观看了\"\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/im/views.py",
    "groupTitle": "IM",
    "name": "PostImTemplate"
  },
  {
    "type": "post",
    "url": "/im/update_task_status",
    "title": "[IM]更新作业消息完成状态",
    "group": "IM",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"subject_id\":学科ID, \"task_id\":作业ID, \"status\":状态(1完成 2继续做题)}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/im/views.py",
    "groupTitle": "IM",
    "name": "PostImUpdate_task_status"
  },
  {
    "type": "get",
    "url": "/account/accounts",
    "title": "[个人设置]获得当前帐户关联的所有帐号",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"user_id\": 5317130,\n            \"name\": \"9527\",\n            \"subject_id\": 21,  # 老师学科21小学数学 91小学英语\n            \"unit_name\": \"新野县春晖学校710班\",\n            \"grade_id\": 7, # 所在年级\n            \"role\": \"数学老师\",\n            \"portrait\": \"http://file.tbkt.cn/upload_media/yyyy\",\n            \"type\": 3  # 帐号类型 1学生 3老师\n        }\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "GetAccountAccounts"
  },
  {
    "type": "get",
    "url": "/account/addtask_count",
    "title": "[业务]教师本月发作业次数",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"addtask\": 1, # 本月发作业次数\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/business.py",
    "groupTitle": "account",
    "name": "GetAccountAddtask_count"
  },
  {
    "type": "get",
    "url": "/account/book",
    "title": "[个人设置]获取当前教材/教辅",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"subject_id\":学科ID, \"type\":1教材 2教辅}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"press_name\": \"西南师范大学出版社\",  # 出版社\n        \"name\": \"小学数学四年级上册\",  # 默认书名\n        \"subject_id\": 21,  # 学科\n        \"grade_id\": 4,  # 年级\n        \"volume\": 1,  # 1上册 2下册 3全册\n        \"version_name\": \"2015新版\",  # 版本\n        \"id\": 888  # 教材/教辅ID\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"缺少参数: type\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "GetAccountBook"
  },
  {
    "type": "get",
    "url": "/account/border/change",
    "title": "[个人设置]用户更换边框",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n    \"border_id\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {},\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "GetAccountBorderChange"
  },
  {
    "type": "get",
    "url": "/account/border/list",
    "title": "[个人设置]获取用户边框列表",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        list :[\n            id:1\n            border_url:'http://file.tbkt.cn/swf_upload/?upcheck=e36637e0019323357cfad92fb9a64d17&upType=portrait'\n\n        ]\n        user_border_id:1    没有为0\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "GetAccountBorderList"
  },
  {
    "type": "get",
    "url": "/account/border/status",
    "title": "[个人设置]判断更换边框按钮是否显示",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        status:1  1：开启，0：不开\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "GetAccountBorderStatus"
  },
  {
    "type": "get",
    "url": "/account/profile",
    "title": "[个人设置]获取个人数据",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"id\": 897447,\n        \"name\": \"9527\",  # 姓名\n        \"type\": 3,  # 用户类型 1学生 3老师\n        \"dept_type\": 部门类型, # 1小学 2初中\n        \"phone\": \"15981867201\", # 手机号\n        \"portrait\": \"http://file.tbkt.cn/upload_media/portrait/2016/11/01/20161101114745587631.png\",  # 头像\n        \"subject_id\": 21,  # 老师学科ID\n        \"grades\": [3, 4],  # 老师所在年级列表\n        \"grade_id\": 3, # 老师当前年级\n        \"platform_id\": 用户平台ID,\n        \"login_version\": \"IOS 1.3\", # 本次登录版本号\n        \"units\": [\n            {\n                \"id\": 515192,\n                \"city\": \"410100\", # 所在城市\n                \"county\": \"411702\", # 所在县区\n                \"name\": \"301班\", \n                \"class_id\": 1, # 班级\n                \"type\": 1, # 部门类型: 1小学 2初中\n                \"school_name\": \"高新区大谢中学\",  # 学校\n                \"grade_id\": 3, # 年级\n                \"unit_class_id\": 515192, # 班级ID\n                \"school_id\": 21  # 学校ID\n            },\n        ], # 所在班级\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "GetAccountProfile"
  },
  {
    "type": "get",
    "url": "/account/third",
    "title": "[个人设置]获取对应第三方信息",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"third_id\": 第三方用户id,       \n        \"province_id\": 第三方用户城市信息\n        \"name\":xxxx\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "GetAccountThird"
  },
  {
    "type": "get",
    "url": "/account/third/open",
    "title": "[个人设置]获取对应第三方信息",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"third_id\": 第三方,\n \"product_id\": 资费id,\n \"pay_type\": 开通,\n \"success_url\": 成功回调url,\n \"fail_url\": 失败回调url\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        第三方url\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "GetAccountThirdOpen"
  },
  {
    "type": "get",
    "url": "/account/units",
    "title": "[个人设置]获取用户班级",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"units\": [\n            {\n                \"id\": 515192,\n                \"city\": \"410100\", # 所在城市\n                \"name\": \"301班\", \n                \"class_id\": 1, # 班级\n                \"type\": 1, # 部门类型: 1小学 2初中\n                \"school_name\": \"高新区大谢中学\",  # 学校\n                \"grade_id\": 3, # 年级\n                \"unit_class_id\": 515192, # 班级ID\n                \"school_id\": 21,  # 学校ID\n                \"size\": 9  # 班级学生人数\n            },\n        ], # 所在班级\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "GetAccountUnits"
  },
  {
    "type": "get",
    "url": "/account/unopen_count",
    "title": "[业务]班级下未开通人数",
    "group": "account",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"unopen\": 1, # 未开通人数\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/business.py",
    "groupTitle": "account",
    "name": "GetAccountUnopen_count"
  },
  {
    "type": "get",
    "url": "/account/uploadurl",
    "title": "[个人设置]获取上传URL",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"dir\":目录名(头像portrait)}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"url\": \"http://file.tbkt.cn/swf_upload/?upcheck=e36637e0019323357cfad92fb9a64d17&upType=portrait\"\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}\n上传步骤:\n1. 先获得上传url\n2. 把图片传上去, 返回正式图片地址\n3. 把正式图片地址传给[修改头像]接口",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"缺少参数: dir\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "GetAccountUploadurl"
  },
  {
    "type": "post",
    "url": "/account/cancelsms",
    "title": "[短信]取消定时短信",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"id\":短信ID, \"schedule_time\":定时时间}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"success\": true\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/sms.py",
    "groupTitle": "account",
    "name": "PostAccountCancelsms"
  },
  {
    "type": "post",
    "url": "/account/feedback",
    "title": "[登录]意见反馈",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"type\":请求类型(1意见建议 2错误反馈 3其他), \"content\":\"反馈内容\", \"app\":机型(android/ios/pc)}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"error\": \"\",\n    \"data\": \"\",\n    \"response\": \"ok\",\n    \"next\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"验证码错误，请重新获取\",\n    \"error\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"next\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/login.py",
    "groupTitle": "account",
    "name": "PostAccountFeedback"
  },
  {
    "type": "post",
    "url": "/account/findpwd",
    "title": "[登录]找回密码",
    "description": "<p>输入手机号和验证码, 发送帐号和明文密码到手机</p>",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"platform_id\": 平台ID, \"phone_number\":\"15981867201\", \"code\":\"6402\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"error\": \"\",\n    \"data\": \"\",\n    \"response\": \"ok\",\n    \"next\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"验证码错误，请重新获取\",\n    \"error\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"next\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/login.py",
    "groupTitle": "account",
    "name": "PostAccountFindpwd"
  },
  {
    "type": "post",
    "url": "/account/grade",
    "title": "[个人设置]设置教师当前年级",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"grade_id\": 1}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"error\": \"\", \"data\": \"\", \"response\": \"ok\", \"next\": \"\"}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\"message\": \"年级错误\", \"error\": \"\", \"data\": \"\", \"response\": \"fail\", \"next\": \"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "PostAccountGrade"
  },
  {
    "type": "post",
    "url": "/account/login/?",
    "title": "[登录]登录",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "/account/login/s 学生登录\n/account/login/t 老师登录\n\n{\n    \"username\":\"15038035398\", \n    \"password\":\"111111\",\n    \"pass_flag\": 1      # 0 以前的老接口，不加密，  1 现在的新程序，加密\n    \"login_type\": 90,   # 登录类型 1是网站 其他是手机APP\n    \"version\": \"6.0.1\", \n    \"name\": \"865f8521b18fe9b\",\n    \"model\": \"MI 4LTE\",\n    \"platform\": \"Android\",\n    \"uuid\": \"A100005064E391\",\n    \"appversion\": \"1.0.0\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>手机号或帐号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "login_type",
            "description": "<p>(可选)登录类型 88:Android教辅学生 90:Android教辅教师 89:IOS教辅学生 91:IOS教辅教师</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>(可选)系统版本号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(可选)设备名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>(可选)手机型号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>(可选)平台名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>(可选)设备序列号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appversion",
            "description": "<p>(可选)app版本</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"next\": \"\",\n    \"error\": \"\",\n    \"message\": \"\",\n    \"tbkt_token\": \"eHl3dHR3PHF0eHh5dXlzcnY8cXR4eHF4dHVwdQ\",\n    \"app_version\": {\n        \"h5\": 0,\n        \"api\": 1,\n        \"must\": 0\n    },\n    \"data\": \"\",\n    \"response\": \"ok\"\n}\n\n登录成功后, 服务器会在响应头中添加 Tbkt-Token: xxxx 头域, 分配给客户端一个token.\n客户端应记录这个 tbkt_token 并在之后的请求中带上 Tbkt-Token: xxxx\n到时如果服务器没有收到 tbkt_token 或者 tbkt_token 过期(7天), 则返回:\n{\n    \"message\": \"请您先登录\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"no_user\"\n}\n\n其他请求也要看下响应头里有没有给新token, 有就更新token.\n\n检测新版本机制:\n客户端每个请求头加一个 App-Type: 9安卓学生 10安卓教师 11苹果学生 12苹果教师 13 H5学生 14 H5教师\n服务器返回头会加一个 App-Version: {\"h5\": H5版本号, \"api\": 客户端版本号, \"must\": 0不强制升级客户端 1强制升级客户端}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\"message\": \"帐号或密码错误\", \"error\": \"\", \"data\": \"\", \"response\": \"fail\", \"next\": \"\"}\n\n如果error=switch就进入切换身份页面让他选角色",
          "type": "json"
        },
        {
          "title": "Python示例",
          "content": "import requests\n\nr = requests.post('http://127.0.0.1:4000/account/login/t', \n                params={'username':'15981867201', 'password':'111111'})\ncookies = r.cookies\nr = requests.post('http://127.0.0.1:4000/class/getpwd', \n                params={'bind_id':'4210824'}, cookies=cookies)\nprint r.json()",
          "type": "json"
        },
        {
          "title": "Java示例",
          "content": "public static final MediaType JSON = MediaType.parse(\"application/json; charset=utf-8\");\nOkHttpClient client = new OkHttpClient();\nString post(String url, String json) throws IOException {\n    RequestBody body = RequestBody.create(JSON, json);\n    Request request = new Request.Builder()\n            .addHeader(\"Cookie\",\"tbkt_token=\"+tbkt_token)\n            .url(url)\n            .post(body)\n            .build();\n    Response response = client.newCall(request).execute();\n    if (response.isSuccessful()) {\n        return response.body().string();\n    } else {\n        throw new IOException(\"Unexpected code \" + response);\n    }\n}\n\n// webview\nCookieManage cookiemanager = CookieManager.getInstance();\ncookiemanager.setAcceptCookie(true);\ncookiemanager.setCookie(url,\"sessionid=\"+sessionid);",
          "type": "json"
        },
        {
          "title": "C#示例",
          "content": "HttpClient client = CreateClientASMtoken(\"\");\nHttpResponseMessage response = client.GetAsync(\"http://localhost\").Result;\n\nIEnumerable<string> rawCookies = response.Headers.GetValues(\"Set-Cookie\");",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/login.py",
    "groupTitle": "account",
    "name": "PostAccountLogin"
  },
  {
    "type": "post",
    "url": "/account/login/web",
    "title": "[登录]WEB登录",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n    \"username\":\"15038035398\",\n    \"password\":\"111111\",\n    \"pass_flag\": 1      # 0 以前的老接口，不加密，  1 现在的新程序，加密\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>手机号或帐号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"next\": \"\",\n    \"error\": \"\",\n    \"message\": \"\",\n    \"data\": [\n        {\n            \"real_name\": \"张三\",\n            \"school_name\": \"创恒中学\",\n            \"unit_name\": \"100班\",\n            \"type\":1,\n            \"portrait\": \"头像\",\n            \"tbkt_token\": \"有效期7天的token\"\n        },\n    ],\n    \"response\": \"ok\"\n}\n* type = 1 学生\n* type = 3 教师",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/login.py",
    "groupTitle": "account",
    "name": "PostAccountLoginWeb"
  },
  {
    "type": "post",
    "url": "/account/name",
    "title": "[个人设置]修改名字",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"name\":\"新名字\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"error\": \"\", \"data\": \"\", \"response\": \"ok\", \"next\": \"\"}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\"message\": \"修改失败，请重试\", \"error\": \"\", \"data\": \"\", \"response\": \"fail\", \"next\": \"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "PostAccountName"
  },
  {
    "type": "post",
    "url": "/account/other/subject/qg/tiyan/day",
    "title": "全国(北京)体验剩余时间",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n    \"subject_id\" : 2,5,9\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"sid\": 2\n            \"status\":  1     # 0 未体验， 1 正在体验    2 体验过或开通过\n            \"tiyan_day\": 25, # 体验剩余时间，  0代表没在体验时间内\n        },\n        {\n            \"sid\": 5\n            \"status\":  0     # 0 未体验， 1 正在体验    2 体验过或开通过\n            \"tiyan_day\": 0, # 体验剩余时间，  0代表没在体验时间内\n        },\n    ]\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/other_open.py",
    "groupTitle": "account",
    "name": "PostAccountOtherSubjectQgTiyanDay"
  },
  {
    "type": "post",
    "url": "/account/password",
    "title": "[个人设置]修改密码",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"old_pwd\":\"111111\",\"new_pwd\":\"2222222\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"error\": \"\", \"data\": \"\", \"response\": \"ok\", \"next\": \"\"}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\"message\": \"两次输入密码不一致\", \"error\": \"\", \"data\": \"\", \"response\": \"fail\", \"next\": \"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "PostAccountPassword"
  },
  {
    "type": "post",
    "url": "/account/portrait",
    "title": "[个人设置]修改头像",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"img_url\":\"portrait/2009/08/24/small_super.png\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"error\": \"\", \"data\": \"头像url\", \"response\": \"ok\", \"next\": \"\"}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\"message\": \"修改失败，请重试\", \"error\": \"\", \"data\": \"\", \"response\": \"fail\", \"next\": \"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "PostAccountPortrait"
  },
  {
    "type": "post",
    "url": "/account/register",
    "title": "[登录]注册帐号",
    "description": "<p>学生老师都可以注册, 支持较多注册信息</p>",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n    \"platform_id\": 平台ID,\n    \"user_type\": 用户类型(1学生 3老师), \n    \"phone_number\": \"15981867201\", \n    \"name\": 姓名, \n    \"subject_id\": 老师注册需要提供学科ID,\n    \"dept_type\": 学段(1小学 2初中 学生必传,老师不用传)\n    \"code\": 注册短信验证码\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"username\": \"15981867223xs\",  # 新账号\n        \"password\": \"286049\",  # 新密码\n        \"user_id\": 10831971    # 用户ID\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"请填写移动手机号\",\n    \"error\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"next\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/login.py",
    "groupTitle": "account",
    "name": "PostAccountRegister"
  },
  {
    "type": "post",
    "url": "/account/register/student",
    "title": "[登录]快速注册学生帐号",
    "description": "<p>输入手机号和开通验证码注册</p>",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"platform_id\":平台ID, \"phone_number\":\"15981867201\", \"dept_type\":学段(1小学,2初中), \n \"code\":二次开通短信验证码}\n\n*platform_id: 参考平台列表接口",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"username\": \"15981867223xs\",  # 新账号\n        \"password\": \"286049\",  # 新密码\n        \"user_id\": 10831971    # 用户ID\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"请填写移动手机号\",\n    \"error\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"next\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/login.py",
    "groupTitle": "account",
    "name": "PostAccountRegisterStudent"
  },
  {
    "type": "post",
    "url": "/account/sendmany",
    "title": "[短信]发多条短信",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"phone\":\"15981867201,15981867202\", \"content\":\"您的验证码是111\", \"schedule_time\":\"140415112622\"}\n\n*schedule_time: 可选, 定时发送时间, 如: 140415112622 代表14年04月15日11点26分22秒",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"id\": 2787448,  # 短信ID\n        \"success\": true\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"请填写短信内容\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/sms.py",
    "groupTitle": "account",
    "name": "PostAccountSendmany"
  },
  {
    "type": "post",
    "url": "/account/sex",
    "title": "[个人设置]修改性别",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"sex\":1男 2女}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"error\": \"\", \"data\": \"\", \"response\": \"ok\", \"next\": \"\"}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\"message\": \"修改失败，请重试\", \"error\": \"\", \"data\": \"\", \"response\": \"fail\", \"next\": \"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "PostAccountSex"
  },
  {
    "type": "post",
    "url": "/account/switch",
    "title": "[个人设置]切换帐号",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"user_id\":用户ID, \"grade_id\":年级}\n\n*新增grade_id参数: 表示切换到某个帐号的某个年级",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"user_id\": 897447\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}\n\n这里会重新设置token",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"缺少参数: user_id\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "PostAccountSwitch"
  },
  {
    "type": "post",
    "url": "/account/third/qg_tiyan",
    "title": "[个人设置]北京免费体验",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"third_id\": 第三方,\n \"groupId\": 子组合ID,\n \"province_id\": 第三方省份id,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/profile.py",
    "groupTitle": "account",
    "name": "PostAccountThirdQg_tiyan"
  },
  {
    "type": "post",
    "url": "/account/vcode",
    "title": "[登录]发验证码",
    "description": "<p>输入手机号, 发送验证码到手机</p>",
    "group": "account",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"platform_id\": 平台ID, \"phone_number\":\"15981867201\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"密码将发送到你的手机上,请注意查收\",\n    \"error\": \"\",\n    \"data\": \"\",\n    \"response\": \"ok\",\n    \"next\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"请填写移动手机号\",\n    \"error\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"next\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/account/login.py",
    "groupTitle": "account",
    "name": "PostAccountVcode"
  },
  {
    "type": "get",
    "url": "/book/select",
    "title": "[教材]选教材/教辅接口",
    "group": "book",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"subject_id\":21, \"grade_id\":1, \"type\":1教材 2练习册}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"books\": [\n            {\n                \"press_name\": \"人教版\", # 出版社\n                \"press_id\": 1, # 出版社ID\n                \"name\": \"数学一年级上册\",  # 默认书名\n                \"subject_id\": 21,  # 学科\n                \"grade_id\": 1,  # 年级\n                \"volume\": 1,  # 1上册 2下册 3全册\n                \"version_name\": \"新版\",  # 版本\n                \"id\": 276 # 教材/教辅ID\n            },\n        ]\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/book/views.py",
    "groupTitle": "book",
    "name": "GetBookSelect"
  },
  {
    "type": "get",
    "url": "/book/sources",
    "title": "[教材]教材相关练习册",
    "group": "book",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"book_id\":教材ID}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"books\": [\n            {\n                \"press_name\": \"人教版\", # 出版社\n                \"name\": \"数学一年级上册\",  # 默认书名\n                \"subject_id\": 21,  # 学科\n                \"grade_id\": 1,  # 年级\n                \"volume\": 1,  # 1上册 2下册 3全册\n                \"version_name\": \"新版\",  # 版本\n                \"id\": 276 # 教材/教辅ID\n            },\n        ]  # 相关练习册列表\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/book/views.py",
    "groupTitle": "book",
    "name": "GetBookSources"
  },
  {
    "type": "post",
    "url": "/book/set",
    "title": "[教材]设置用户教材/教辅",
    "group": "book",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"book_id\":教材/教辅ID}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/book/views.py",
    "groupTitle": "book",
    "name": "PostBookSet"
  },
  {
    "type": "get",
    "url": "/class/byphone",
    "title": "[班级]按老师手机号查班级",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"phone_number\":\"15981867201\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"id\": 515192,\n            \"name\": \"301班\"\n        },\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"未找到该教师\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "GetClassByphone"
  },
  {
    "type": "get",
    "url": "/class/cities",
    "title": "[班级]所有地市列表",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{'child':1返回地市+县区数据 0只返回地市数据,province_id:410000  省份id}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"id\": \"410200\",\n            \"name\": \"开封市\",\n            \"child\": [\n                {\n                    \"id\": \"410202\",\n                    \"name\": \"龙亭区\"\n                }\n            ]\n        },\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "GetClassCities"
  },
  {
    "type": "get",
    "url": "/class/counties",
    "title": "[班级]县区列表",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"city\":\"地市行政编码\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"id\": \"410381\",\n            \"name\": \"偃师市\"\n        },\n        {\n            \"id\": \"410301\",\n            \"name\": \"市辖区\"\n        }\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "GetClassCounties"
  },
  {
    "type": "get",
    "url": "/class/departments",
    "title": "[班级]部门列表",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"school_id\": 学校ID}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"id\": 部门ID,\n            \"name\": \"小学部\",\n            \"type\": 部门类型 1小学 2初中,\n            \"learn_length\": 3,  # 学制 3年制 6年制\n            \"max_class\": 30, # 最大可选班级编号\n        },\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "GetClassDepartments"
  },
  {
    "type": "get",
    "url": "/class/getpwd",
    "title": "[班级]返回学生帐号和伪密码",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"user_id\":学生ID}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"username\": \"15981867201xs\",\n        \"password\": \"11***1\"\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "GetClassGetpwd"
  },
  {
    "type": "get",
    "url": "/class/province",
    "title": "[班级]所有省份列表",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{'}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"id\": \"110000\",\n            \"name\": \"北京市\",\n        }\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "GetClassProvince"
  },
  {
    "type": "get",
    "url": "/class/schools",
    "title": "[班级]学校列表",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"county\":\"县区行政编码\", \"keyword\":搜索关键词(学校名或学校ID)}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"learn_length\": 3,\n            \"ecid\": \"\",\n            \"type\": 2,\n            \"id\": 744,\n            \"name\": \"洛阳市第七中学\"\n        },\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "GetClassSchools"
  },
  {
    "type": "get",
    "url": "/class/students",
    "title": "[班级]老师班级学生列表",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"unit_id\":班级ID}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"students\": [\n            {\n                \"phone_number\": \"15981867201\",\n                \"abb\": \"lq\",\n                \"user_id\": 630445,\n                \"portrait\": \"http://student.tbkt.cn/site_media/images/profile/default-student.png\", # 头像\n                \"billing\": 2, # 1体验状态 2计费状态\n                \"ECID\": \"65489089010800\",\n                \"send_open\": 0, # 0表示未下发开通请求 1表示已经下发了开通请求\n                \"is_status\": 1, # 0表示非暂存 1表示暂存\n                \"sex\": 1,   # 性别 1男 2女\n                \"state\": \"open\", # 总状态: trial试用 open已开通 unopen未开通\n                \"status\": 2, # 学科开通状态 2已开通 9永久试用 4以退订 2和9都算开通\n                \"billing_date\": \"2016-08-05 10:57:02\", # 计费时间\n                \"open_date\": \"2016-07-05 10:57:02\",    # 开通时间\n                \"user_name\": \"洛奇\"\n            }\n        ],\n        \"open_num\": 1,  # 班级开通人数\n        \"unopen_num\": 0,  # 班级未开通人数\n        \"trial_count\": 0,   # 班级试用人数\n        \"student_num\": 1    # 班级总人数\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "GetClassStudents"
  },
  {
    "type": "get",
    "url": "/class/studentsNum",
    "title": "[班级]老师班级学生数",
    "group": "class",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        123:{name:201班，stu_num:10}\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "GetClassStudentsnum"
  },
  {
    "type": "get",
    "url": "/class/teachers",
    "title": "[班级]获取班级老师列表",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"unit_id\":班级ID}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"teachers\": [\n            {\n                \"id\": 4210824, # 老师ID\n                \"name\": \"洛奇\", # 老师姓名\n                \"sid\": 2, # 老师学科ID\n            }\n        ],\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "GetClassTeachers"
  },
  {
    "type": "post",
    "url": "/class/join",
    "title": "[班级]加入班级接口",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"dept_id\": 部门ID, \"grade_id\":年级, \"class_id\":班级}\n或者\n{\"unit_id\": 班级ID}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"unit_id\": 580564   # 新班级ID\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"您已经在当前班级\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "PostClassJoin"
  },
  {
    "type": "post",
    "url": "/class/quit",
    "title": "[班级]退出班级接口",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"unit_class_id\": 班级ID(多个用逗号分割)}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "PostClassQuit"
  },
  {
    "type": "post",
    "url": "/class/sendpwd",
    "title": "[班级]发送学生帐号和密码",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"user_id\":学生ID(多个用逗号分割)}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"next\": \"\", \"data\": \"\", \"response\": \"ok\", \"error\": \"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "PostClassSendpwd"
  },
  {
    "type": "post",
    "url": "/class/sendsms",
    "title": "[班级]发送班级短信",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"unit_id\": 班级ID, \"content\":短信内容}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"您没有该班级的发送权限\",\n    \"next\": \"\",\n    \"data\": null,\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"next\": \"\", \"data\": \"\", \"response\": \"ok\", \"error\": \"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "PostClassSendsms"
  },
  {
    "type": "post",
    "url": "/class/student/add",
    "title": "[班级]添加学生接口",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"unit_id\":班级ID, name:姓名, sex:性别(1男2女), phone_number:手机号, \n \"status\":开通操作(1短信开通 2验证码开通 3暂不开通), \"code\":验证码(可选),\n \"sendpwd\":是否下发账号密码(0不下发 1 下发)}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"next\": \"\", \"data\": \"\", \"response\": \"ok\", \"error\": \"\"}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"添加失败!同一手机号最多可生成1个账号\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "PostClassStudentAdd"
  },
  {
    "type": "post",
    "url": "/class/student/remove",
    "title": "[班级]移除班级学生",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"user_id\":学生ID(多个用逗号分割)}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"next\": \"\", \"data\": \"\", \"response\": \"ok\", \"error\": \"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "PostClassStudentRemove"
  },
  {
    "type": "post",
    "url": "/class/student/update",
    "title": "[班级]更新学生信息",
    "group": "class",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"user_id\":学生ID, \"name\":姓名, \"sex\":1男2女}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"next\": \"\", \"data\": \"\", \"response\": \"ok\", \"error\": \"\"}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"名字必须是2-5个汉字\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/class/views.py",
    "groupTitle": "class",
    "name": "PostClassStudentUpdate"
  },
  {
    "type": "get",
    "url": "/gift/assort",
    "title": "[金豆商城]分类筛选",
    "group": "gift",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"id\": 15,\n            \"total_number\": 10,\n            \"name\": \"体育用品\"\n        },\n        {\n            \"id\": 16,\n            \"total_number\": 20,\n            \"name\": \"电器\"\n        }\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/gift/views.py",
    "groupTitle": "gift",
    "name": "GetGiftAssort"
  },
  {
    "type": "get",
    "url": "/gift/detail",
    "title": "[金豆商城]商品详情",
    "group": "gift",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"id\":礼品ID}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"status\": 1,\n        \"name\": \"小熊（bear）电热饭盒 加热保温饭盒 双层真空DFHS2116\",\n        \"num\": 9977, # 库存\n        \"score\": 1,  # 价格\n        \"category_id\": 2, # 分类 14是话费\n        \"img_url\": \"http://file.tbkt.cn/upload_media/score/gift/2016/03/03/20160303164135334193.png\",\n        \"gift_detail\": \"5张图片和详解\"\n        \"id\": 173\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/gift/views.py",
    "groupTitle": "gift",
    "name": "GetGiftDetail"
  },
  {
    "type": "get",
    "url": "/gift/list",
    "title": "[金豆商城]商品列表",
    "group": "gift",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"sort\":排序方式(0默认按时间 1按兑换量从高到低 2按兑换量从低到高 3按价格从高到低 4按价格从低到高)\n\"category_id\": 1     # 0全部， 其他是分类搜索\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"norder\": 0, # 兑换量\n            \"score\": 0, # 价格\n            \"img_url\": \"http://file.tbkt.cn/upload_media/score/gift/2016/03/03/20160303170022249985.png\",\n            \"id\": 202,\n            \"name\": \"探险者户外34人全自动液压帐篷 牛津布防雨双人2人双层野外露营帐篷套装 三用套餐一\"\n            \"category_id\": 1                        # 分类\n        },\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/gift/views.py",
    "groupTitle": "gift",
    "name": "GetGiftList"
  },
  {
    "type": "get",
    "url": "/gift/orders",
    "title": "[金豆商城]用户订单详情",
    "group": "gift",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"p\":页号, \"psize\":每页几条}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"orders\": [\n            {\n                \"id\": 4577 # 订单ID\n                \"status\": 0, # 0未发货, 1已发货, 2已取消\n                \"add_time\": \"2017-02-18 16:01\", # 订购时间\n                \"update_time\": \"2016-09-05 15:42\",  # 发货时间\n                \"gift_id\": 367, # 商品ID\n                \"gift_img\": \"http://file.tbkt.cn/upload_media/score/gift/2016/06/08/20160608140932235338.jpg\",\n                \"gift_name\": \"厨房必备切菜神器\",\n                \"num\": 1, # 兑换数量\n                \"score\": 59, # 兑换单价\n                \"order_number\": \"20160801181131001\", # 订单号\n                \"express\": \"\", # 快递单号\n            },\n        ],\n        \"pagecount\": 8 # 总页数\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/gift/views.py",
    "groupTitle": "gift",
    "name": "GetGiftOrders"
  },
  {
    "type": "get",
    "url": "/gift/remind",
    "title": "[金豆商城]新商品是否弹窗",
    "group": "gift",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        is_new:1 ：有新礼品，需要弹窗，0： 无新商品，或已经提示过\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/gift/views.py",
    "groupTitle": "gift",
    "name": "GetGiftRemind"
  },
  {
    "type": "get",
    "url": "/gift/scores",
    "title": "[金豆商城]用户积分详情",
    "group": "gift",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"way\":明细分类(1收入 2支出 0全部), \"p\":页号, \"psize\":每页几条}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"balance\": 1162, # 余额\n        \"details\": [\n            {\n                \"item_no\": \"tea_voucher\",\n                \"title\": \"支出100金豆\",\n                \"remark\": \"积分商城兑换礼品,订单号20170218160135002\",\n                \"add_date\": \"2016-12-07 08:44:07\",\n                \"score\": 100,\n                \"way\": 1, # 明细分类(1收入 2支出)\n                \"id\": 6110933 # 明细ID\n            },\n        ],\n        \"pageno\": 1, # 当前页号\n        \"pagecount\": 20 # 总页数\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/gift/views.py",
    "groupTitle": "gift",
    "name": "GetGiftScores"
  },
  {
    "type": "get",
    "url": "/gift/wish/list",
    "title": "[金豆商城] 愿望墙列表",
    "group": "gift",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"p\":页号}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\":\n        wish_list:[\n            id:123 愿望id\n            wish:'****',\n            votes:125,\n\n        ],\n        count:10\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/gift/views.py",
    "groupTitle": "gift",
    "name": "GetGiftWishList"
  },
  {
    "type": "get",
    "url": "/gift/wish/submit",
    "title": "[金豆商城] 愿望墙愿望提交",
    "group": "gift",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"wish\":\"呵呵\"  愿望内容}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": []\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/gift/views.py",
    "groupTitle": "gift",
    "name": "GetGiftWishSubmit"
  },
  {
    "type": "get",
    "url": "/gift/wish/vote",
    "title": "[金豆商城] 愿望墙愿望投票",
    "group": "gift",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n    \"type\":1  :投票，-1：撤销投票\n    \"wish_id:  124   愿望id\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {}\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/gift/views.py",
    "groupTitle": "gift",
    "name": "GetGiftWishVote"
  },
  {
    "type": "post",
    "url": "/gift/buy",
    "title": "[金豆商城]订购接口",
    "group": "gift",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"id\":礼品ID, \"n\":数量, \"link_user\":联系人, \"link_phone\":联系电话, \"link_address\":联系地址, \"link_count\":行政编码}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"orderno\": \"20161207084407001\" # 订单号\n        \"cost\": 100,  # 本次扣除金豆\n        \"score\": 662   # 剩余金豆 \n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"积分不足\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"no_score\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/gift/views.py",
    "groupTitle": "gift",
    "name": "PostGiftBuy"
  },
  {
    "type": "get",
    "url": "/system/bump_version",
    "title": "[系统]升级版本号",
    "group": "system",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"type\":客户端类型}\n\ntype客户端类型:\n9安卓学生 10安卓教师 11苹果学生 12苹果教师 13 H5学生 14 H5教师 15 H5活动 16 H5学测评学生 17 H5学测评教师",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"id\": 1,  # system_version表主键ID\n        \"api\": 99  # 升级后的内部版本号\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"找不到该类型的版本信息\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/system/views.py",
    "groupTitle": "system",
    "name": "GetSystemBump_version"
  },
  {
    "type": "get",
    "url": "/system/download/<type>",
    "title": "[系统]APK下载地址",
    "group": "system",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "type: 客户端类型 9安卓学生 10安卓教师",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "成功直接开始下载文件",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "失败返回404",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/system/views.py",
    "groupTitle": "system",
    "name": "GetSystemDownloadType"
  },
  {
    "type": "get",
    "url": "/system/info",
    "title": "[系统]系统信息",
    "group": "system",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"cs_phone\": \"12556185\",  # 客服电话\n        \"file_size\": 1024*1024,  # 语文上传大小\n        \"upload_url\": \"http://file.tbkt.cn/swf_upload/?upcheck=e36637e0019323357cfad92fb9a64d17&upType=\",  # 上传服务器URL\n        \"hosts\": {\n            \"api\": \"http://mapi.m.jxtbkt.com\", # 公共接口\n            \"apisx\": \"http://mapisx.m.jxtbkt.com\",  # 数学接口\n            \"apisx2\": \"http://mapisx2.m.jxtbkt.com\",  # 数学接口\n            \"apiyy\": \"http://mapiyy.m.jxtbkt.com\"   # 英语接口\n            \"apiyw\": \"http://mapiyw.m.jxtbkt.com\"   # 语文接口\n            \"vuestu\": \"http://stu.m.jxtbkt.com\"   # 英语接口\n            \"vuestusx\": \"http://stusx.m.jxtbkt.com\"   # 英语接口\n            \"vuestusx2\": \"http://stusx2.m.jxtbkt.com\"   # 英语接口\n            \"vuestuyy\": \"http://stuyy.m.jxtbkt.com\"   # 英语接口\n            \"vuestuyw\": \"http://stuyw.m.jxtbkt.com\"   # 英语接口\n            \"vuetea\": \"http://tea.m.jxtbkt.com\"   # 英语接口\n            \"joinclass_style\": 1, # 1只能输入老师手机号加班级 2是允许手工选地市学校加班级\n        },  # 接口地址\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}\n\n* upload_url最后的upType=xxx需要调用者补充完整. \n  比如头像是http://file.tbkt.cn/swf_upload/?upcheck=e36637e0019323357cfad92fb9a64d17&upType=portrait, \n  学测评是http://file.tbkt.cn/swf_upload/?upcheck=e36637e0019323357cfad92fb9a64d17&upType=xcp",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/system/views.py",
    "groupTitle": "system",
    "name": "GetSystemInfo"
  },
  {
    "type": "get",
    "url": "/system/ping",
    "title": "[系统]检查网站是否可用",
    "group": "system",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {},\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/system/views.py",
    "groupTitle": "system",
    "name": "GetSystemPing"
  },
  {
    "type": "get",
    "url": "/system/platforms",
    "title": "[系统]平台配置列表",
    "group": "system",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"id\":平台ID}\n\n*如果不指定平台ID则返回所有平台配置",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"province\": \"410000\",  # 省行政编码\n            \"is_sms\": 1,    # 是否能发短信\n            \"is_open\": 1,   # 是否要开通学科\n            \"id\": 1,        # 平台ID\n            \"name\": \"河南\"  # 平台名称\n            \"is_setprofile\":1       # 是否可以设置个人信息或班级\n        },\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/system/views.py",
    "groupTitle": "system",
    "name": "GetSystemPlatforms"
  },
  {
    "type": "get",
    "url": "/system/version",
    "title": "[系统]检查版本",
    "group": "system",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"type\":客户端类型, \"api\":客户端当前内部版本号}\n\ntype客户端类型:\n9安卓学生 10安卓教师 11苹果学生 12苹果教师 13 H5学生 14 H5教师 15 H5活动 16 H5学测评学生 17 H5学测评教师",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"title\": \"同步课堂手机客户端\",\n        \"last_version\": \"2.3.12\",\n        \"release_date\": \"2016-06-27 10:55:04\",\n        \"update\": 2,  # 0:不更新  1:选择性更新  2:强制更新\n        \"content\": \"2.2.3巫妖王\",\n        \"download\": \"http://file.tbkt.cn/upload_media/apk/tbkt_stu_android/tbkt_stu_android-release-16.apk\"\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\n    \"message\": \"找不到该类型的版本信息\",\n    \"next\": \"\",\n    \"data\": \"\",\n    \"response\": \"fail\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/system/views.py",
    "groupTitle": "system",
    "name": "GetSystemVersion"
  },
  {
    "type": "post",
    "url": "/system/active_info",
    "title": "[系统]是否开启活动权限",
    "group": "system",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": [\n        {\n            \"extend\": {},\n            \"banner_url\": \"\",           # banner 地址\n            \"banner_end\": \"2017-05-21 23:59:59\",    # banner图上的结束时间\n            \"name\": \"商丘市拓城县我爱记单词\",          # 活动时间\n            \"banner_begin\": \"2017-05-09 00:00:00\",      # banner图上的开始时间\n            \"is_open\": 2,                               # is_open = 0, banner不显示， 否则显示\n            \"begin_url\": \"/huodong/sq_word/index\",      # 活动的入口地址\n            \"active_id\": 26                             # 活动id\n        }\n    ],\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/system/views.py",
    "groupTitle": "system",
    "name": "PostSystemActive_info"
  },
  {
    "type": "post",
    "url": "/system/blocks",
    "title": "[系统]模块展示接口",
    "group": "system",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\"type\":\"类型名\"}\n\n*type: APP数学appsx, APP语文appyw, APP英语appyy, APP其他appqt",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\n    \"message\": \"\",\n    \"next\": \"\",\n    \"data\": {\n        \"opensubject_alert\": \"您还未开通数学\",\n        \"blocks\": [\n            {\n                \"alias\": \"think\",\n                \"charge\": 1\n            }\n        ]\n    },\n    \"response\": \"ok\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/system/views.py",
    "groupTitle": "system",
    "name": "PostSystemBlocks"
  },
  {
    "type": "post",
    "url": "/task/checkNum",
    "title": "[作业]待检查作业条数",
    "group": "task",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"error\": \"\",\n   \"data\": {\n        \"num\": 1, 待检查作业条数\n    },\n  \"response\": \"ok\", \"next\": \"\"}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\"message\": \"\", \"error\": \"\", \"data\": \"\", \"response\": \"fail\", \"next\": \"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/task/views.py",
    "groupTitle": "task",
    "name": "PostTaskChecknum"
  },
  {
    "type": "post",
    "url": "/video/error_feedback",
    "title": "[视频]报错处理",
    "group": "video",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n\"type\": 42\n\"id\": 6101\n\"mark\":    视频无法放\n\"reason\":  201\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"error\": \"\",\n   \"data\": {},\n  \"response\": \"ok\", \"next\": \"\"}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\"message\": \"\", \"error\": \"\", \"data\": \"\", \"response\": \"fail\", \"next\": \"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/video/views.py",
    "groupTitle": "video",
    "name": "PostVideoError_feedback"
  },
  {
    "type": "post",
    "url": "/video/tags",
    "title": "[视频]视频踩顶",
    "group": "video",
    "parameter": {
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n\"object_id\": 6723             # 视频ID或知识点ID\n\"type\": 1                     # 1: 视频ID 2: 知识点ID\n\"status\":                     # 1: 顶 0: 踩\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "{\"message\": \"\", \"error\": \"\",\n   \"data\": {\n        \"agree_num\": 1,\n        \"status\": 0,\n        \"dis_agree_num\": 1\n    },\n  \"response\": \"ok\", \"next\": \"\"}",
          "type": "json"
        },
        {
          "title": "失败返回",
          "content": "{\"message\": \"\", \"error\": \"\", \"data\": \"\", \"response\": \"fail\", \"next\": \"\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apps/video/views.py",
    "groupTitle": "video",
    "name": "PostVideoTags"
  }
] });
