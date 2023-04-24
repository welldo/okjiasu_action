<h1 align="center" >
<font color=orange>🏵️ okjiasu_action</font>
</h1>

<p align="center">
<font color=Peru>基于github工作流的okjiasu.com签到脚本。可白嫖流量！</font>

</p>

<div align="center">

![008hT4DMly1gwphdd018zg306y068axz.gif](https://p3-passport.byteimg.com/img/user-avatar/82ba4927bd1b67655c30daf0a25d4c16~180x180.awebp)

</div>

## 服务支持

- [x] github actions
- [x] 本地运行

## 注册

- 邀请注册 [h7ml](https://zhuri.cc/auth/register?code=AyLB)
- 直接注册 [无邀请码](https://zhuri.cc/auth/register)

## 功能说明

**每日定时签到,白嫖机场流量**

## 使用 github workflows 进行托管

[h7ml/okjiasu_action](https://github.com/h7ml/okjiasu_action.git)
**大约在每天的北京时间 8：00 左右执行**

1. Fork 仓库

2. 在仓库 `Settings->Secrets->Actions`中添加如下几个变量：

   | NAME        | VALUE              |
   | ----------- | ------------------ |
   | EMAIL_USER  | 发送邮件的邮箱账号 |
   | EMAIL_PASS  | 发送邮件的授权码   |
   | USER_EMAIL  | 接收通知的邮箱账号 |
   | OK_USER     | okjiasu - 账号     |
   | OK_PASSWORD | okjiasu - 密码     |

3. 在 `Settings->Actions`确保 actions 是开启状态

4. 关于发送邮件通知，本项目通知使用的是 qq 邮箱，如果你想使用其他邮件服务商进行推送，记得在`config.js`的`email.provider`选项中进行配置修改

- [QQ 邮箱-POP3/SMTP/IMAP](hhttps://service.mail.qq.com/cgi-bin/help?id=28&no=167&subtype=1)
- [nodemailer 参考手册](https://www.npmjs.com/package/nodemailer)

## 本地运行

1. clone 本仓库
   ```bash
   git clone https://github.com/h7ml/okjiasu_action.git
   ```
2. 进入项目

   ```bash
   cd okjiasu_action
   ```

3. 安装依赖

   ```bash
   yarn install
   ```

4. 在项目根目录新建 `.env` 文件，内容如下：

   ```
   # 发送邮件的邮箱账号
   EMAIL_USER=""

   # 发送邮件的授权码
   EMAIL_PASS=""

   # 接收通知的邮箱账号
   USER_EMAIL=""

   # okjiasu - 账号
   OK_USER=""

   # okjiasu - 密码
   OK_PASSWORD=""
   ```

5. `yarn install` 安装完依赖后，执行 `yarn run serve` 即可

6. 在`index.js` 中 配置 `headless:false` 可显示浏览器界面(部署时记得改为 true) ![screenshot](./package/okjiasu/screenshot.gif)
</div>

## 今日免费节点
### 采集时间: 2023-04-24 12:20:02 
| 节点名称 | 节点链接 | 节点二维码 |
| :---: | :---: | :---: |
| 【A】⚜️🇸🇬新加坡3 | <details><summary><a href="vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJzZzMuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi44CQQeOAkeKanO+4j/Cfh7jwn4es5paw5Yqg5Z2hIDMiLCJyZW1hcmsiOiLjgJBB44CR4pqc77iP8J+HuPCfh6zmlrDliqDlnaEgMyIsImlkIjoiMmU3MGZkNzctMGU0Ny0zMWZlLWJmZjgtY2IzZjljMWE4MTQ1IiwiY2xhc3MiOjB9" title="【A】⚜️🇸🇬新加坡3">点击导入</a></summary>vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJzZzMuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi44CQQeOAkeKanO+4j/Cfh7jwn4es5paw5Yqg5Z2hIDMiLCJyZW1hcmsiOiLjgJBB44CR4pqc77iP8J+HuPCfh6zmlrDliqDlnaEgMyIsImlkIjoiMmU3MGZkNzctMGU0Ny0zMWZlLWJmZjgtY2IzZjljMWE4MTQ1IiwiY2xhc3MiOjB9</details> | ![二维码](https://raw.iqiq.io/h7ml/okjiasu_action/main/package/okjiasu/free/2023-04-24/2023-04-24-12-18-53.png) |
| 【A】⚜️🇯🇵日本原生（ChatGPT） | <details><summary><a href="vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJqcDIuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM1NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi44CQQeOAkeKanO+4j/Cfh6/wn4e15pel5pys5Y6f55Sf77yIQ2hhdEdQVO+8iSIsInJlbWFyayI6IuOAkEHjgJHimpzvuI/wn4ev8J+HteaXpeacrOWOn+eUn++8iENoYXRHUFTvvIkiLCJpZCI6IjJlNzBmZDc3LTBlNDctMzFmZS1iZmY4LWNiM2Y5YzFhODE0NSIsImNsYXNzIjowfQ==" title="【A】⚜️🇯🇵日本原生（ChatGPT）">点击导入</a></summary>vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJqcDIuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM1NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi44CQQeOAkeKanO+4j/Cfh6/wn4e15pel5pys5Y6f55Sf77yIQ2hhdEdQVO+8iSIsInJlbWFyayI6IuOAkEHjgJHimpzvuI/wn4ev8J+HteaXpeacrOWOn+eUn++8iENoYXRHUFTvvIkiLCJpZCI6IjJlNzBmZDc3LTBlNDctMzFmZS1iZmY4LWNiM2Y5YzFhODE0NSIsImNsYXNzIjowfQ==</details> | ![二维码](https://raw.iqiq.io/h7ml/okjiasu_action/main/package/okjiasu/free/2023-04-24/2023-04-24-12-18-54.png) |
| 【A】⚜️🇰🇷韩国 | <details><summary><a href="vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJrcjEuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi44CQQeOAkeKanO+4j/Cfh7Dwn4e36Z+p5Zu9IiwicmVtYXJrIjoi44CQQeOAkeKanO+4j/Cfh7Dwn4e36Z+p5Zu9IiwiaWQiOiIyZTcwZmQ3Ny0wZTQ3LTMxZmUtYmZmOC1jYjNmOWMxYTgxNDUiLCJjbGFzcyI6MH0=" title="【A】⚜️🇰🇷韩国">点击导入</a></summary>vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJrcjEuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi44CQQeOAkeKanO+4j/Cfh7Dwn4e36Z+p5Zu9IiwicmVtYXJrIjoi44CQQeOAkeKanO+4j/Cfh7Dwn4e36Z+p5Zu9IiwiaWQiOiIyZTcwZmQ3Ny0wZTQ3LTMxZmUtYmZmOC1jYjNmOWMxYTgxNDUiLCJjbGFzcyI6MH0=</details> | ![二维码](https://raw.iqiq.io/h7ml/okjiasu_action/main/package/okjiasu/free/2023-04-24/2023-04-24-12-18-55.png) |
| 圣保罗1（0.1倍） | <details><summary><a href="vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJicjEuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi5Zyj5L+d572XIDHvvIgwLjHlgI3vvIkiLCJyZW1hcmsiOiLlnKPkv53nvZcgMe+8iDAuMeWAje+8iSIsImlkIjoiMmU3MGZkNzctMGU0Ny0zMWZlLWJmZjgtY2IzZjljMWE4MTQ1IiwiY2xhc3MiOjB9" title="圣保罗1（0.1倍）">点击导入</a></summary>vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJicjEuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi5Zyj5L+d572XIDHvvIgwLjHlgI3vvIkiLCJyZW1hcmsiOiLlnKPkv53nvZcgMe+8iDAuMeWAje+8iSIsImlkIjoiMmU3MGZkNzctMGU0Ny0zMWZlLWJmZjgtY2IzZjljMWE4MTQ1IiwiY2xhc3MiOjB9</details> | ![二维码](https://raw.iqiq.io/h7ml/okjiasu_action/main/package/okjiasu/free/2023-04-24/2023-04-24-12-18-56.png) |
| 圣保罗2（0.1倍） | <details><summary><a href="vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJicjIuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi5Zyj5L+d572XIDLvvIgwLjHlgI3vvIkiLCJyZW1hcmsiOiLlnKPkv53nvZcgMu+8iDAuMeWAje+8iSIsImlkIjoiMmU3MGZkNzctMGU0Ny0zMWZlLWJmZjgtY2IzZjljMWE4MTQ1IiwiY2xhc3MiOjB9" title="圣保罗2（0.1倍）">点击导入</a></summary>vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJicjIuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi5Zyj5L+d572XIDLvvIgwLjHlgI3vvIkiLCJyZW1hcmsiOiLlnKPkv53nvZcgMu+8iDAuMeWAje+8iSIsImlkIjoiMmU3MGZkNzctMGU0Ny0zMWZlLWJmZjgtY2IzZjljMWE4MTQ1IiwiY2xhc3MiOjB9</details> | ![二维码](https://raw.iqiq.io/h7ml/okjiasu_action/main/package/okjiasu/free/2023-04-24/2023-04-24-12-18-58.png) |
| 英国原生ip倍率2（ChatGPT） | <details><summary><a href="vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJ1ay5hbGl5dW5zai5jbiIsInBvcnQiOjEyMzU1LCJhaWQiOjEsIm5ldCI6InRjcCIsImhlYWRlclR5cGUiOiJub25lIiwic2VydmljZW5hbWUiOiIiLCJlbmFibGVfeHRscyI6IiIsImZsb3ciOiJ4dGxzLXJwcngtZGlyZWN0IiwidnR5cGUiOiJ2bWVzczovLyIsInNuaSI6IiIsInYiOiIyIiwidHlwZSI6InZtZXNzIiwicHMiOiLoi7Hlm73ljp/nlJ9pcCDlgI3njocy77yIQ2hhdEdQVO+8iSIsInJlbWFyayI6IuiLseWbveWOn+eUn2lwIOWAjeeOhzLvvIhDaGF0R1BU77yJIiwiaWQiOiIyZTcwZmQ3Ny0wZTQ3LTMxZmUtYmZmOC1jYjNmOWMxYTgxNDUiLCJjbGFzcyI6MH0=" title="英国原生ip倍率2（ChatGPT）">点击导入</a></summary>vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJ1ay5hbGl5dW5zai5jbiIsInBvcnQiOjEyMzU1LCJhaWQiOjEsIm5ldCI6InRjcCIsImhlYWRlclR5cGUiOiJub25lIiwic2VydmljZW5hbWUiOiIiLCJlbmFibGVfeHRscyI6IiIsImZsb3ciOiJ4dGxzLXJwcngtZGlyZWN0IiwidnR5cGUiOiJ2bWVzczovLyIsInNuaSI6IiIsInYiOiIyIiwidHlwZSI6InZtZXNzIiwicHMiOiLoi7Hlm73ljp/nlJ9pcCDlgI3njocy77yIQ2hhdEdQVO+8iSIsInJlbWFyayI6IuiLseWbveWOn+eUn2lwIOWAjeeOhzLvvIhDaGF0R1BU77yJIiwiaWQiOiIyZTcwZmQ3Ny0wZTQ3LTMxZmUtYmZmOC1jYjNmOWMxYTgxNDUiLCJjbGFzcyI6MH0=</details> | ![二维码](https://raw.iqiq.io/h7ml/okjiasu_action/main/package/okjiasu/free/2023-04-24/2023-04-24-12-18-59.png) |
| 香港HKt（倍率2）（ChatGPT） | <details><summary><a href="undefined" title="香港HKt（倍率2）（ChatGPT）">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| ⚜️🇸🇬新加坡1 | <details><summary><a href="vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJzZzEuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi4pqc77iP8J+HuPCfh6zmlrDliqDlnaEgMSIsInJlbWFyayI6IuKanO+4j/Cfh7jwn4es5paw5Yqg5Z2hIDEiLCJpZCI6IjJlNzBmZDc3LTBlNDctMzFmZS1iZmY4LWNiM2Y5YzFhODE0NSIsImNsYXNzIjowfQ==" title="⚜️🇸🇬新加坡1">点击导入</a></summary>vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJzZzEuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi4pqc77iP8J+HuPCfh6zmlrDliqDlnaEgMSIsInJlbWFyayI6IuKanO+4j/Cfh7jwn4es5paw5Yqg5Z2hIDEiLCJpZCI6IjJlNzBmZDc3LTBlNDctMzFmZS1iZmY4LWNiM2Y5YzFhODE0NSIsImNsYXNzIjowfQ==</details> | ![二维码](https://raw.iqiq.io/h7ml/okjiasu_action/main/package/okjiasu/free/2023-04-24/2023-04-24-12-19-01.png) |
| ⚜️🇸🇬新加坡2 | <details><summary><a href="vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJzZzIuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi4pqc77iP8J+HuPCfh6zmlrDliqDlnaEgMiIsInJlbWFyayI6IuKanO+4j/Cfh7jwn4es5paw5Yqg5Z2hIDIiLCJpZCI6IjJlNzBmZDc3LTBlNDctMzFmZS1iZmY4LWNiM2Y5YzFhODE0NSIsImNsYXNzIjowfQ==" title="⚜️🇸🇬新加坡2">点击导入</a></summary>vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJzZzIuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi4pqc77iP8J+HuPCfh6zmlrDliqDlnaEgMiIsInJlbWFyayI6IuKanO+4j/Cfh7jwn4es5paw5Yqg5Z2hIDIiLCJpZCI6IjJlNzBmZDc3LTBlNDctMzFmZS1iZmY4LWNiM2Y5YzFhODE0NSIsImNsYXNzIjowfQ==</details> | ![二维码](https://raw.iqiq.io/h7ml/okjiasu_action/main/package/okjiasu/free/2023-04-24/2023-04-24-12-19-02.png) |
| ⚜️🇸🇬新加坡4 | <details><summary><a href="vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJzZzQuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi4pqc77iP8J+HuPCfh6zmlrDliqDlnaEgNCIsInJlbWFyayI6IuKanO+4j/Cfh7jwn4es5paw5Yqg5Z2hIDQiLCJpZCI6IjJlNzBmZDc3LTBlNDctMzFmZS1iZmY4LWNiM2Y5YzFhODE0NSIsImNsYXNzIjowfQ==" title="⚜️🇸🇬新加坡4">点击导入</a></summary>vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJzZzQuYWxpeXVuc2ouY24iLCJwb3J0IjoxMjM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi4pqc77iP8J+HuPCfh6zmlrDliqDlnaEgNCIsInJlbWFyayI6IuKanO+4j/Cfh7jwn4es5paw5Yqg5Z2hIDQiLCJpZCI6IjJlNzBmZDc3LTBlNDctMzFmZS1iZmY4LWNiM2Y5YzFhODE0NSIsImNsYXNzIjowfQ==</details> | ![二维码](https://raw.iqiq.io/h7ml/okjiasu_action/main/package/okjiasu/free/2023-04-24/2023-04-24-12-19-04.png) |
| 🟢🇨🇦加拿大（倍率0.1）NF | <details><summary><a href="undefined" title="🟢🇨🇦加拿大（倍率0.1）NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇹🇼台湾NF(倍率0.5）（ChatGPT） | <details><summary><a href="vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJoaW5ldC0xLmNoaXNlbC5pY3UiLCJwb3J0Ijo0NDM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi8J+fovCfh7nwn4e85Y+w5rm+fE5GKOWAjeeOhzAuNe+8ie+8iENoYXRHUFTvvIkiLCJyZW1hcmsiOiLwn5+i8J+HufCfh7zlj7Dmub58TkYo5YCN546HMC4177yJ77yIQ2hhdEdQVO+8iSIsImlkIjoiMmU3MGZkNzctMGU0Ny0zMWZlLWJmZjgtY2IzZjljMWE4MTQ1IiwiY2xhc3MiOjB9" title="🟢🇹🇼台湾NF(倍率0.5）（ChatGPT）">点击导入</a></summary>vmess://eyJob3N0IjoiIiwicGF0aCI6IiIsInRscyI6IiIsInZlcmlmeV9jZXJ0Ijp0cnVlLCJhZGQiOiJoaW5ldC0xLmNoaXNlbC5pY3UiLCJwb3J0Ijo0NDM0NSwiYWlkIjoxLCJuZXQiOiJ0Y3AiLCJoZWFkZXJUeXBlIjoibm9uZSIsInNlcnZpY2VuYW1lIjoiIiwiZW5hYmxlX3h0bHMiOiIiLCJmbG93IjoieHRscy1ycHJ4LWRpcmVjdCIsInZ0eXBlIjoidm1lc3M6Ly8iLCJzbmkiOiIiLCJ2IjoiMiIsInR5cGUiOiJ2bWVzcyIsInBzIjoi8J+fovCfh7nwn4e85Y+w5rm+fE5GKOWAjeeOhzAuNe+8ie+8iENoYXRHUFTvvIkiLCJyZW1hcmsiOiLwn5+i8J+HufCfh7zlj7Dmub58TkYo5YCN546HMC4177yJ77yIQ2hhdEdQVO+8iSIsImlkIjoiMmU3MGZkNzctMGU0Ny0zMWZlLWJmZjgtY2IzZjljMWE4MTQ1IiwiY2xhc3MiOjB9</details> | ![二维码](https://raw.iqiq.io/h7ml/okjiasu_action/main/package/okjiasu/free/2023-04-24/2023-04-24-12-19-06.png) |
| 🟢🇩🇪德国4NF | <details><summary><a href="undefined" title="🟢🇩🇪德国4NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇰🇷春川1NF | <details><summary><a href="undefined" title="🟢🇰🇷春川1NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇰🇷春川2NF | <details><summary><a href="undefined" title="🟢🇰🇷春川2NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇺🇸美国1OracleNF | <details><summary><a href="undefined" title="🟢🇺🇸美国1OracleNF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇦🇪迪拜1NF | <details><summary><a href="undefined" title="🟢🇦🇪迪拜1NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇦🇪迪拜3NF | <details><summary><a href="undefined" title="🟢🇦🇪迪拜3NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 【A】⚜️🇯🇵日本（联通起飞） | <details><summary><a href="undefined" title="【A】⚜️🇯🇵日本（联通起飞）">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇨🇦加拿大NF | <details><summary><a href="undefined" title="🟢🇨🇦加拿大NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇺🇸美国3OracleNF | <details><summary><a href="undefined" title="🟢🇺🇸美国3OracleNF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇦🇪迪拜4NF | <details><summary><a href="undefined" title="🟢🇦🇪迪拜4NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 英国1 | <details><summary><a href="undefined" title="英国1">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| ⚜️🇯🇵日本大阪（倍率2） | <details><summary><a href="undefined" title="⚜️🇯🇵日本大阪（倍率2）">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇩🇪德国1NF | <details><summary><a href="undefined" title="🟢🇩🇪德国1NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇩🇪德国2NF | <details><summary><a href="undefined" title="🟢🇩🇪德国2NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇩🇪德国3NF | <details><summary><a href="undefined" title="🟢🇩🇪德国3NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇯🇵日本 | <details><summary><a href="undefined" title="🟢🇯🇵日本">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇰🇷春川3NF | <details><summary><a href="undefined" title="🟢🇰🇷春川3NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇰🇷春川4NF(倍率2) | <details><summary><a href="undefined" title="🟢🇰🇷春川4NF(倍率2)">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇺🇸美国4OracleNF | <details><summary><a href="undefined" title="🟢🇺🇸美国4OracleNF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |
| 🟢🇦🇪迪拜2NF | <details><summary><a href="undefined" title="🟢🇦🇪迪拜2NF">点击导入</a></summary>undefined</details> | ![二维码](undefined) |