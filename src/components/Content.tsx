import React, { useCallback, useState } from 'react'
import { createStyles, makeStyles } from '@mui/styles'
import format from 'date-fns/format'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Select from 'react-select'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'
import NumberInput from './NumberInput'
import { formatCash } from '../utils/formatCash'
import { TITLE } from '../App'
import BenefitField, { BENEFITS } from './BenefitField'
import BenefitWatched from './BenefitWatched'

const useStyles = makeStyles(() => createStyles({
  label: {
    zIndex: 0
  }
}))

export interface Form {
  company: string
  level?: { value: string, label: string }
  fee?: number
  deadline: Date
  adDeadline: Date
  extra?: Array<{ value: string, label: string }>
  otherExtra?: Array<{ value: string, label: string }>
}

const Content: React.FC = () => {
  const classes = useStyles()
  const { control, handleSubmit } = useForm<Form>({
    defaultValues: {
      company: '',
      deadline: new Date(),
      adDeadline: new Date()
    }
  })
  const [text, setText] = useState<string>('')
  const onSubmit: SubmitHandler<Form> = useCallback((data) => {
    console.log(data.extra)
    setText(
`非常感謝${data.company}支持 ${TITLE}！
成為${data.level?.value}贊助商，
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
  5. 繳交時限：${format(data.deadline, 'yyyy-MM-dd')}
4. ${TITLE} 活動官網製作中，待收到贊助款項，會將贊助商 logo 依照入款時間置放於官網首頁處。
5. ${data.level?.value ?? ''}贊助福利
${BENEFITS(data)}
${data.extra ? `加購：
${data.extra.map((item) => item.value).join('\n')}` : ''}
${data.otherExtra ? `額外加購：
${data.otherExtra.map((item) => item.value).join('\n')}` : ''}
贊助組代表大會再次感謝${data.company}一起支持${TITLE}！
若有任何問題，歡迎隨時與我們聯繫。
`)
  }, [])
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={2}>
          <Grid item container direction="row" alignItems="center" spacing={2}>
            <Grid item>非常感謝</Grid>
            <Grid item>
              <Controller
                name="company"
                control={control}
                render={(({ field }) => (
                  <TextField label="公司名" size="small" InputLabelProps={{ classes: { root: classes.label } }} {...field} />
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
                      { value: '鈦金級', label: '鈦金級' },
                      { value: '鑽石級', label: '鑽石級' },
                      { value: '黃金級', label: '黃金級' },
                      { value: '白銀級', label: '白銀級' },
                      { value: '青銅級', label: '青銅級' },
                      { value: '好朋友級', label: '好朋友級' },
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
              <p>3. 需要繳交的文件、日期</p>
              <ol>
                <li>置放於活動官網的公司 LOGO：請提供向量檔</li>
                <li>置放於大會手冊的公司 LOGO：請提供向量檔</li>
                <li>公司介紹： 中文和英文</li>
                <li>官方網頁網址</li>
                <li>
                  <Box display="flex" alignItems="center">
                    繳交時限：
                    <Controller
                      name="deadline"
                      control={control}
                      render={(({ field }) => (
                        <DesktopDatePicker
                          label="死限"
                          inputFormat="yyyy-MM-dd"
                          mask="____-__-__"
                          renderInput={(params) => <TextField size="small" {...params} />}
                          {...field}
                        />
                      ))}
                    />
                  </Box>
                </li>
              </ol>
              <p>4. {TITLE} 活動官網製作中，待收到贊助款項，會將贊助商 logo 依照入款時間置放於官網首頁處。</p>
              <BenefitWatched control={control} />
              <BenefitField control={control} />
            </Grid>
          </Grid>
          <Grid item>
            加購：
          </Grid>
          <Grid item>
            <Controller
              name="extra"
              control={control}
              render={(({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={[
                    { value: '鈦金級攤位一個', label: '鈦金級攤位一個' },
                    { value: '鑽石級攤位一個', label: '鑽石級攤位一個' },
                    { value: '黃金級攤位一個', label: '黃金級攤位一個' },
                    { value: 'Keynote 演講一場', label: 'Keynote 演講一場' },
                    { value: '技術演講一場', label: '技術演講一場' },
                  ] as any}
                />
              ))}
            />
          </Grid>
          <Grid item>
            額外加購：
          </Grid>
          <Grid item>
            <Controller
              name="otherExtra"
              control={control}
              render={(({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={[
                    { value: '網站議程頁面廣告', label: '網站議程頁面廣告' },
                    { value: '迎賓袋置入廣宣物', label: '迎賓袋置入廣宣物' },
                    { value: 'Keynote 演講廳垂吊布條', label: 'Keynote 演講廳垂吊布條' },
                    { value: '大會點心區', label: '大會點心區' },
                    { value: '講者背板 Logo 露出', label: '講者背板 Logo 露出' },
                    { value: '前夜派對活動獨家贊助', label: '前夜派對活動獨家贊助' },
                  ] as any}
                />
              ))}
            />
          </Grid>
          <Grid item container direction="row" alignItems="center" spacing={2}>
            <Grid item>贊助組代表大會再次感謝</Grid>
            <Grid item>
              <Controller
                name="company"
                control={control}
                render={(({ field }) => (
                  <TextField label="公司名" size="small" InputLabelProps={{ classes: { root: classes.label } }} {...field} />
                ))}
              />
            </Grid>
            <Grid item>一起支持{TITLE}！</Grid>
          </Grid>
          <Grid item>
            若有任何問題，歡迎隨時與我們聯繫。
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">產生文案</Button>
          </Grid>
        </Grid>
      </form>
      <Box paddingTop={2}>
        <TextField
          multiline
          fullWidth
          value={text}
          onChange={useCallback((event) => setText(event.target.value), [])}
        />
      </Box>
    </LocalizationProvider>
  )
}

export default Content