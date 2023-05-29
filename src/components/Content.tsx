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
  year: string
  receiver: string
  company: string
  level?: { value: string, label: string }
  fee?: number
  deadline: Date
  textDeadline: Date
  hackUrl: string
  extra?: Array<{ value: string, label: string }>
}

const Content: React.FC = () => {
  const classes = useStyles()
  const { control, handleSubmit } = useForm<Form>({
    defaultValues: {
      company: '',
      hackUrl: '',
      deadline: new Date(),
      textDeadline: new Date()
    }
  })
  const [text, setText] = useState<string>('')
  const onSubmit: SubmitHandler<Form> = useCallback((data) => {
    console.log(data.extra)
    setText(
`Dear ${data.receiver}
非常感謝${data.company}支持 COSCUP ${data.year}！
成為${data.level?.value}贊助商，
費用為：TWD ${formatCash(data.fee)}。
以下為其他資訊：

1. 匯款資訊  
  ● 銀行：玉山銀行 (808) 中路特區分行 (0842)
  ● 銀行地址：330060 桃園市桃園區正光路 423 號
  ● 戶名：財團法人開放文化基金會
  ● 帳戶：0842 940 010302
OCF 提供電子捐款收據作為收款憑證，如需電子發票（稅金外加 5%）請回信告知。

2. 贊助款支付後懇請回覆下列資料：
  ● 組織抬頭：
  ● 統一編號：
  ● 捐款金額： TWD ${formatCash(data.fee)}
  ● 捐款徵信顯示的名稱：
      ● 顯示名稱請參考捐款徵信顯示列表：https://blog.ocf.tw/search/label/%E6%8D%90%E6%AC%BE%E5%BE%B5%E4%BF%A1
  ● 指定用途：COSCUP ${data.year}
  ● 收件人（日後如 OCF 捐款滿額寄送禮所用）：
  ● 寄送地址（日後如 OCF 捐款滿額寄送禮所用）：

3. 需要繳交的文件、日期
  (1) 置放於 COSCUP 官網的公司 LOGO：請提供向量檔
  (2) 公司介紹： 中文和英文
  (3) 公司官方網址
  (4) 繳交時限：${format(data.deadline, 'yyyy-MM-dd')}

4. COSCUP ${data.year} 活動官網製作中，待收到贊助款項，會將贊助商 Logo 依照入款時間置放於官網首頁處。

5. ${data.level?.value ?? ''}贊助福利
${BENEFITS(data)}

${data.extra ? `加購：
${data.extra.map((item) => item.value).join('\n')}` : ''}

贊助組代表大會再次感謝${data.company}支持 COSCUP ${data.year}！
若有任何問題，歡迎隨時與我們聯繫。
`)
  }, [])
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={2}>
          <Grid item container direction="row" alignItems="center" spacing={2}>
            <Grid item>Dear</Grid>
            <Grid item>
              <Controller
                name="receiver"
                control={control}
                render={(({ field }) => (
                  <TextField label="窗口名稱" size="small" InputLabelProps={{ classes: { root: classes.label } }} {...field} />
                ))}
              />
            </Grid>
          </Grid>
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
            <Grid item>支持 COSCUP </Grid>
            <Grid item>
              <Controller
                name="year"
                control={control}
                render={(({ field }) => (
                  <TextField label="年份" size="small" InputLabelProps={{ classes: { root: classes.label } }} {...field} />
                ))}
              />
            </Grid>
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
              <p>OCF 提供電子捐款收據作為收款憑證，如需電子發票（稅金外加 5%）請回信告知。</p>
              <p>2. 贊助款支付後懇請回覆下列資料：</p>
              <ul>
                <li>組織抬頭：</li>
                <li>統一編號：</li>
                <li>
                  <Box display="flex" alignItems="center">
                    捐款金額： TWD
                    <Box paddingLeft={2}>
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
                  </Box>
                </li>
                <li>捐款徵信顯示的名稱：
                  <ul>
                    <li>
                      顯示名稱請參考捐款徵信顯示列表：
                      <a href="https://blog.ocf.tw/search/label/%E6%8D%90%E6%AC%BE%E5%BE%B5%E4%BF%A1">https://blog.ocf.tw/search/label/%E6%8D%90%E6%AC%BE%E5%BE%B5%E4%BF%A1</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Box display="flex" alignItems="center">
                    指定用途：COSCUP
                    <Box paddingLeft={2}>
                      <Controller
                        name="year"
                        control={control}
                        render={(({ field }) => (
                          <TextField size="small" InputLabelProps={{ classes: { root: classes.label } }} {...field} />
                        ))}
                      />
                    </Box>
                  </Box>
                </li>
                <li>收件人（日後如 OCF 捐款滿額寄送禮所用）：</li>
                <li>寄送地址（日後如 OCF 捐款滿額寄送禮所用）：</li>
              </ul>
              <p>3. 需要繳交的文件、日期</p>
              <ol>
                <li>置放於 COSCUP 官網的公司 LOGO：請提供向量檔</li>
                <li>公司介紹： 中文和英文</li>
                <li>公司官方網址</li>
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
              <p>4.
                <Box display="flex" alignItems="center">
                  COSCUP
                  <Box paddingLeft={2} paddingRight={2}>
                    <Controller
                      name="year"
                      control={control}
                      render={(({ field }) => (
                        <TextField size="small" InputLabelProps={{ classes: { root: classes.label } }} {...field} />
                      ))}
                    />
                  </Box>
                  活動官網製作中，待收到贊助款項，會將贊助商 logo 依照入款時間置放於官網首頁處。
                </Box>
              </p>
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
                    { value: '鈦金級 Keynote 演講一場', label: '鈦金級 Keynote 演講一場' },
                    { value: '鑽石級 Keynote 演講一場', label: '鑽石級 Keynote 演講一場' },
                    { value: '技術演講一場｜鈦鑽黃', label: '技術演講一場｜鈦鑽黃' },
                    { value: '鑽石級 Keynote 演講廳垂吊布條', label: '鑽石級 Keynote 演講廳垂吊布條' },
                    { value: '頸帶獨家贊助｜鈦鑽黃', label: '頸帶獨家贊助｜鈦鑽黃' },
                    { value: '會前派對贊助與 COSCUP 聯名｜鑽黃', label: '會前派對贊助與 COSCUP 聯名｜鑽黃' },
                    { value: '大會點心區桌旗（兩天）', label: '大會點心區桌旗（兩天）' },
                    { value: '網站議程頁面廣告', label: '網站議程頁面廣告' },
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
            <Grid item>支持 COSCUP </Grid>
            <Grid item>
              <Controller
                name="year"
                control={control}
                render={(({ field }) => (
                  <TextField size="small" InputLabelProps={{ classes: { root: classes.label } }} {...field} />
                ))}
              />
            </Grid>
            <Grid item>！</Grid>
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