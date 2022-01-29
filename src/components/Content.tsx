import React, { useCallback, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Select from 'react-select'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import NumberInput from './NumberInput'
import { formatCash } from '../utils/formatCash'

const TITLE = 'COSCUP 2022'

interface Form {
  company: string
  level: string
  fee: number
}

const Content: React.FC = () => {
  const { control, handleSubmit } = useForm<Form>({
    defaultValues: {
      company: ''
    }
  })
  const [text, setText] = useState<string>('')
  const onSubmit: SubmitHandler<Form> = useCallback((data) => {
    setText(
`非常感謝${data.company}支持 ${TITLE}！
成為${data.level}贊助商，
費用為：TWD ${formatCash(data.fee)}。
以下為其他資訊：
1. 匯款資訊  
  * 銀行：玉山銀行 (808) 中路特區分行 (0842)
  * 銀行地址：330060 桃園市桃園區正光路 423 號
  * 戶名：財團法人開放文化基金會
  * 帳戶：0842 940 010302
OCF 提供捐款收據作為收款憑證，如需電子發票請回信告知。
2. 贊助款支付後懇請回覆下列資料：
  * 組織抬頭：
  * 統一編號：
  * 捐款金額： TWD ${formatCash(data.fee)}
  * 捐款收據收件人：
  * 捐款收據寄送地址：
  * 捐款徵信顯示的名稱：
    * 顯示名稱請參考捐款徵信顯示列表：https://blog.ocf.tw/search/label/%E6%8D%90%E6%AC%BE%E5%BE%B5%E4%BF%A1
  * 指定用途：${TITLE}
3. 需要繳交的文件、日期
  1. 置放於活動官網的公司 LOGO：請提供向量檔
  2. 置放於大會手冊的公司 LOGO：請提供向量檔
  3. 公司介紹： 中文和英文
  4. 官方網頁網址
4. ${TITLE} 活動官網製作中，待收到贊助款項，會將贊助商 logo 依照入款時間置放於官網首頁處。
`
    )
  }, [])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item container direction="row" alignItems="center" spacing={2}>
          <Grid item>非常感謝</Grid>
          <Grid item>
            <Controller
              name="company"
              control={control}
              render={(({ field }) => (
                <TextField label="公司名" size="small" {...field} />
              ))}
            />
          </Grid>
          <Grid item>支持 {TITLE}！</Grid>
        </Grid>
        <Grid item container direction="row" alignItems="center" spacing={2}>
          <Grid item>成為</Grid>
          <Grid item>
            <Controller
              name="level"
              control={control}
              render={(({ field }) => (
                <Select
                  {...field}
                  options={[
                    { value: '鈦金', label: '鈦金' },
                    { value: '鑽石', label: '鑽石' },
                    { value: '黃金', label: '黃金' },
                    { value: '白銀', label: '白銀' },
                    { value: '青銅', label: '青銅' },
                    { value: '好朋友', label: '好朋友' },
                  ] as any}
                />
              ))}
            />
          </Grid>
          <Grid item>贊助商，</Grid>
        </Grid>
        <Grid item container direction="row" alignItems="center" spacing={2}>
          <Grid item>費用為：TWD</Grid>
          <Grid item>
            <Controller
              name="fee"
              control={control}
              render={(({ field }) => (
                <NumberInput
                  label="費用"
                  size="small"
                  inputProps={{
                    thousandSeparator: true
                  }}
                  {...field}
                />
              ))}
            />
          </Grid>
          <Grid item>。</Grid>
        </Grid>
        <Grid item container direction="row" alignItems="center" spacing={2}>
          <Grid item>
            <p>以下為其他資訊：</p>
            <p>1. 匯款資訊</p>
            <ul>
              <li>銀行：玉山銀行 (808) 中路特區分行 (0842)</li>
              <li>銀行地址：330060 桃園市桃園區正光路 423 號</li>
              <li>戶名：財團法人開放文化基金會</li>
              <li>帳戶：0842 940 010302</li>
            </ul>
            <p>2. 贊助款支付後懇請回覆下列資料：</p>
            <ul>
              <li>組織抬頭：</li>
              <li>統一編號：</li>
              <li>
                <Box display="flex" alignItems="center">
                  捐款金額：
                  <Controller
                    name="fee"
                    control={control}
                    render={(({ field }) => (
                      <NumberInput
                        label="費用"
                        size="small"
                        inputProps={{
                          thousandSeparator: true
                        }}
                        {...field}
                      />
                    ))}
                  />
                </Box>
              </li>
              <li>捐款收據收件人：</li>
              <li>捐款收據寄送地址：</li>
              <li>捐款徵信顯示的名稱：
                <ul>
                  <li>
                    顯示名稱請參考捐款徵信顯示列表：
                    <a href="https://blog.ocf.tw/search/label/%E6%8D%90%E6%AC%BE%E5%BE%B5%E4%BF%A1">https://blog.ocf.tw/search/label/%E6%8D%90%E6%AC%BE%E5%BE%B5%E4%BF%A1</a>
                  </li>
                </ul>
              </li>
              <li>指定用途：{TITLE}</li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default Content